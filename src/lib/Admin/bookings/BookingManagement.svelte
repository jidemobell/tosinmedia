<script>
  import { onMount } from 'svelte';

  let bookings = []; // List of bookings fetched from the API

  // Fetch bookings from the API on mount
  onMount(async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/bookings', {
        headers: {
          'x-admin-token': token
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      // Convert bookings object to array for table rendering
      bookings = Object.entries(data).map(([id, value]) => ({ id, ...value }));
      console.log('Fetched bookings:', bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  });

  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }
</script>

<div class="booking-management">
  <h1>Booking Management</h1>

  <table class="booking-table">
    <thead>
      <tr>
        <th>User</th>
        <th>Event</th>
        <th>Event Date</th>
        <th>Booking Created</th>
        <th>Completed</th>
        <th>Amount</th>
        <th>Payment Medium</th>
        <th>Updated</th>
        <th>History</th>
      </tr>
    </thead>
    <tbody>
      {#each bookings as booking}
        <tr>
          <td>
            <a href={`/admin/users/${booking.booking_user}`} class="link">
              {booking.booking_user}
            </a>
          </td>
          <td>
            <a href={`/admin/events/${booking.event_name}`} class="link">
              {booking.event_name}
            </a>
          </td>
          <td>{formatDate(booking.event_date)}</td>
          <td>{formatDate(booking.booking_created)}</td>
          <td>{booking.completed ? 'Yes' : 'No'}</td>
          <td>${booking.amount}</td>
          <td>
            {#if booking.payment_medium === 'stripe'}
              <a href={`/admin/receipts/stripe/${booking.id}`} class="link">
                Stripe
              </a>
            {:else if booking.payment_medium === 'cash'}
              <a href={`/admin/receipts/cash/${booking.id}`} class="link">
                Cash
              </a>
            {:else}
              {booking.payment_medium}
            {/if}
          </td>
          <td>{formatDate(booking.updated)}</td>
          <td>
            <a href={`/admin/bookings/history/${booking.id}`} class="link">
              View History
            </a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .booking-management {
    margin-top: 20px;
  }

  .booking-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .booking-table th {
    background-color: #f1f1f1;
    color: #333;
    padding: 10px;
    text-align: left;
  }

  .booking-table td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  .link {
    color: #007bff;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>