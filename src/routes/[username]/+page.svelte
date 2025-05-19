<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let profile = {};
  let bookings = [];
  let testimonials = [];

  // Get the username from the route parameter
  $: username = $page.params.username;

  async function fetchProfile() {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/user/profile?username=${username}`, {
        headers: {
          "x-user-token": token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        profile = data.profile;
        bookings = data.bookings;
        testimonials = data.testimonials;
      } else {
        console.error("Failed to fetch profile");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }

  onMount(fetchProfile);

  async function makePayment(bookingId) {
    try {
      const response = await fetch(`/api/user/make-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json", 'x-user-token': token },
        body: JSON.stringify({ bookingId, username }),
      });
      if (response.ok) {
        alert("Payment successful!");
        fetchProfile(); // Refresh the profile data
      } else {
        alert("Payment failed.");
      }
    } catch (error) {
      console.error("Error making payment:", error);
    }
  }
</script>

<div>
  <h1>Welcome, {profile.username}</h1>
  <section>
    <h2>Your Bookings</h2>
    <ul>
      {#each bookings as booking}
        <li>
          {booking.event_name} - {booking.status}
          {#if booking.status === "pending"}
            <button on:click={() => makePayment(booking.id)}>Pay Now</button>
          {/if}
        </li>
      {/each}
    </ul>
  </section>

  <section>
    <h2>Your Testimonials</h2>
    <ul>
      {#each testimonials as testimonial}
        <li>{testimonial.message}</li>
      {/each}
    </ul>
  </section>
</div>
