<script>
  import { onMount } from 'svelte';

  let appointments = []; // List of appointments fetched from the API

  // Fetch appointments from the API on mount
  onMount(async () => {
    try {
      const token = localStorage.getItem('token');
      // console.log('Token:', token);
      const response = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/appointments', {
        headers: {
          'x-admin-token': token
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      const data = await response.json();
      // console.log('Fetched appointments:', appointments);
      appointments = Object.entries(data).map(([id, value]) => ({ id, ...value }));
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  });

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }
</script>

<div class="appointment-management">
  <h1>Appointment Management</h1>

   <!-- {#each appointments as appointment}
        <h4>{appointment}</h4>
      {/each} -->

  <table class="appointment-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Description</th>
        <th>End</th>
      </tr>
    </thead>
    <tbody>
      {#each appointments as appointment}
        <tr>
          <td>{appointment.title}</td>
          <td>{formatDate(appointment.start)}</td>
          <td>{appointment.description}</td>
          <td>{formatDate(appointment.end)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .appointment-management {
    margin-top: 20px;
  }

  .appointment-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .appointment-table th {
    background-color: #f1f1f1;
    color: #333;
    padding: 10px;
    text-align: left;
  }

  .appointment-table td {
    padding: 10px;
    border: 1px solid #ddd;
  }
</style>