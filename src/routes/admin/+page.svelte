<script>
  import { onMount } from "svelte";
  import Sider from "../../lib/Admin/Sider.svelte";

  import DashboardManagement from "../../lib/Admin/DashboardManagement.svelte";
  import DashboardHeader from "../../lib/Dashboard/DashboardHeader.svelte";

  let users = [];
  let appointments = [];
  let testimonials = [];


  async function fetchData() {
    const token = localStorage.getItem("token");

    const userResponse = await fetch("/api/admin/view-users", {
      headers: {
        "x-admin-token": token,
      },
    });
    //clear local storage and redirect to login if token is invalid
    if (userResponse.status === 401) {
    localStorage.clear();
    window.location.href = '/login';
    return;
  }
    users = await userResponse.json();

    const appointmentResponse = await fetch("/api/admin/view-bookings");
    appointments = await appointmentResponse.json();

    const testimonialResponse = await fetch("/api/admin/view-testimonials");
    testimonials = await testimonialResponse.json();
  }


  onMount(fetchData);

  //section change logic

  let activeSection = "dashboard";
  // let activeSider = "1";

  function handleSectionChange(event) {
    const { section } = event.detail;
    activeSection = section;
  }


  function logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
</script>

<div class="admin-dashboard">
  <!-- Dark Header -->
  <DashboardHeader />
  <main class="dashboard-layout">
    <!-- <section> -->
    <Sider
      bind:activeSection
      on:sectionChange={handleSectionChange}
      class="sider"
    />
    <div class="dashboard-content">
      <DashboardManagement bind:activeSection />
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
