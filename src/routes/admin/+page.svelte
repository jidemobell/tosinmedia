<script>
  let users = [];
  let appointments = [];
  let testimonials = [];

  async function fetchData() {
    const userResponse = await fetch('/api/admin/view-users');
    users = await userResponse.json();

    const appointmentResponse = await fetch('/api/admin/view-bookings');
    appointments = await appointmentResponse.json();

    const testimonialResponse = await fetch('/api/admin/view-testimonials');
    testimonials = await testimonialResponse.json();
  }

  onMount(fetchData);
</script>

<div>
  <h1>Admin Dashboard</h1>
  <section>
    <h2>Users</h2>
    <ul>
      {#each users as user}
        <li>{user.username} - {user.email}</li>
      {/each}
    </ul>
  </section>

  <section>
    <h2>Appointments</h2>
    <ul>
      {#each appointments as appointment}
        <li>{appointment.event_name} - {appointment.status}</li>
      {/each}
    </ul>
  </section>

  <section>
    <h2>Testimonials</h2>
    <ul>
      {#each testimonials as testimonial}
        <li>{testimonial.message} - {testimonial.event_name}</li>
      {/each}
    </ul>
  </section>
</div>