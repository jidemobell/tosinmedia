<script>
  import { onMount } from 'svelte';
  import Sider from '../../lib/Admin/Sider.svelte';

  import { DataTable } from "carbon-components-svelte";
  import UserManagement from '../../lib/Admin/users/UserManagement.svelte';
  import DashboardManagement from '../../lib/Admin/DashboardManagement.svelte';

  let users = [];
  let appointments = [];
  let testimonials = [];
  let selectedUser = null;
  let selectedAppointment = null;

  async function fetchData() {
    const userResponse = await fetch('/api/admin/view-users');
    users = await userResponse.json();

    const appointmentResponse = await fetch('/api/admin/view-bookings');
    appointments = await appointmentResponse.json();

    const testimonialResponse = await fetch('/api/admin/view-testimonials');
    testimonials = await testimonialResponse.json();
  }

  async function markAppointmentAsCompleted(appointmentId) {
    const response = await fetch('/api/admin/mark-paid', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookingId: appointmentId }),
    });

    if (response.ok) {
      alert('Appointment marked as completed!');
      fetchData(); // Refresh data
    } else {
      alert('Failed to mark appointment as completed.');
    }
  }

  onMount(fetchData);


  //section change logic

  let activeSection = 'dashboard';
  let activeSider = '1'


  function handleSectionChange(event) {
    const { section } = event.detail;
    console.log('Selected Section:', section);
    activeSection = section.id;
    // activeSider = section.id;
    console.log('Active Section:', activeSection);
  }
</script>

<div class="admin-dashboard">
  <!-- Dark Header -->
  <header class="dark-header">
    <h1>Admin Dashboard</h1>
  </header>

  <main class="dashboard-layout">
    <!-- <section> -->
      <Sider bind:activeSection on:sectionChange={handleSectionChange} class="sider" />
    <!-- </section> -->

    <div class="dashboard-content">
    <!-- {#if activeSection === 'dashboard'}
      <h1>Welcome to the Admin Dashboard</h1>
    {/if} -->

    <!-- {#if activeSection === 'users'}
      <UserManagement />
    {/if} -->
     <DashboardManagement activeSection={activeSection}/>

    <!-- {#if activeSection === 'appointments'}
      <h1>Manage Appointments</h1>
    {/if}

    {#if activeSection === 'testimonials'}
      <h1>Manage Testimonials</h1>
    {/if} -->
  </div>
  </main>
</div>

<style>
  /* Dark Header */
  .dark-header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  /* Dashboard Layout */
  .admin-dashboard {
    font-family: Arial, sans-serif;
    color: #333;
    height: 100vh; /* Full viewport height */
    display: flex;
    flex-direction: column;
  }

  main.dashboard-layout {
    display: flex;
    flex: 1; /* Take up remaining space below the header */
    overflow: hidden;
  }

  /* Sidebar */
  .sider {
    width: 250px; /* Fixed width for the sidebar */
    background-color: #333;
    color: #fff;
    height: 100%; /* Full height of the main area */
    overflow-y: auto; /* Scrollable if content overflows */
    flex-shrink: 0; /* Prevent the sidebar from shrinking */
  }

  /* Main Content */
  .dashboard-content {
    flex: 1; /* Take up the remaining space */
    margin-left: 250px;
    padding: 20px;
    overflow-y: auto; /* Scrollable if content overflows */
    background-color: #f9f9f9;
  }
</style>