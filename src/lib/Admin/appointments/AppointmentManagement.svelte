<script>
  import { onMount } from 'svelte';

  let appointments = []; // List of appointments fetched from the API

  // Fetch appointments from the API on mount
  onMount(async () => {
    try {
      const response = await fetch('/api/admin/view-appointments'); 
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      appointments = await response.json();
      console.log('Fetched appointments:', appointments);
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

  <table class="appointment-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date Created</th>
        <th>Reason</th>
        <th>Appointment Date</th>
      </tr>
    </thead>
    <tbody>
      {#each appointments as appointment}
        <tr>
          <td>{appointment.name}</td>
          <td>{formatDate(appointment.date_created)}</td>
          <td>{appointment.reason}</td>
          <td>{formatDate(appointment.appointment_date_selected)}</td>
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