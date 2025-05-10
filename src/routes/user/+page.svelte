<script>
  let profile = {};
  let bookings = [];
  let testimonials = [];

  async function fetchProfile() {
    const response = await fetch('/api/user/profile');
    const data = await response.json();
    profile = data.profile;
    bookings = data.bookings;
    testimonials = data.testimonials;
  }

  onMount(fetchProfile);
</script>

<div>
  <h1>Welcome, {profile.username}</h1>
  <section>
    <h2>Your Bookings</h2>
    <ul>
      {#each bookings as booking}
        <li>
          {booking.event_name} - {booking.status}
          {#if booking.status === 'pending'}
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