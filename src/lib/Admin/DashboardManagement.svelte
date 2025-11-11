<script>
  import UserManagement from './users/UserManagement.svelte';
  import AppointmentManagement from './appointments/AppointmentManagement.svelte';
  // import TestimonialManagement from './TestimonialManagement.svelte';
  import BookingManagement from './bookings/BookingManagement.svelte';
  import ContactMessages from './ContactMessages.svelte';
  import CreateUser from './users/CreateUser.svelte';

  export let activeSection = 'dashboard'; // Default section

  function handleSectionChange(event) {
    activeSection = event.detail.section;
  }

  // $: console.log('Active Section at dashboard manager:', activeSection);
</script>

<div class="dashboard-management">
  {#if activeSection === 'users'}
    <UserManagement on:sectionChange={handleSectionChange} />
  {/if}

  {#if activeSection === 'create-user'}
    <CreateUser />
  {/if}

  {#if activeSection === 'appointments'}
    <AppointmentManagement />
  {/if}

  <!-- {#if activeSection === 'testimonials'}
    <TestimonialManagement />
  {/if} -->

  {#if activeSection === 'bookings'}
    <BookingManagement />
  {/if}

  {#if activeSection === 'messages'}
    <ContactMessages />
  {/if}

  {#if activeSection === 'dashboard'}
    <h1>Welcome to the Admin Dashboard</h1>
  {/if}
</div>

<style>
  .dashboard-management {
    padding: 20px;
    background-color: #f9f9f9;
    height: 100%;
    overflow-y: auto; /* Scrollable if content overflows */
  }
</style>