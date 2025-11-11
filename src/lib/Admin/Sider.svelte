<script>
  export let activeSection = 'dashboard';
  export let sections = [
    { name: 'Dashboard', icon: '🏠', id: 'dashboard' },
    { name: 'Users', icon: '👤', id: 'users' },
    { name: 'Appointments', icon: '📅', id: 'appointments' },
    // { name: 'Bookings', icon: '📖', id: 'bookings' },
    { name: 'Contact Messages', icon: '✉️', id: 'messages' }
  ];

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const selectSection = (sectionId) => {
  if (sectionId === 'create-users') {
    dispatch('sectionChange', { section: 'users' });
    return;
  }
  activeSection = sectionId;
  const selectedSection = sections.find((section) => section.id === sectionId);
  dispatch('sectionChange', { section: sectionId });
};

</script>

<div class="sider">
  <div class="sider-header">
    <h2>Admin Panel</h2>
  </div>
   <ul class="sider-menu">
  {#each sections as section}
    <li>
      <button
        type="button"
        class:active={activeSection === section.id}
        on:click={() => selectSection(section.id)}
      >
        <span class="icon">{section.icon}</span>
        <span class="name">{section.name}</span>
      </button>
    </li>
  {/each}
</ul>
</div>

<style>
  .sider {
    width: 250px;
    background-color: #333;
    color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    /* border: 5px red solid; */
  }

  .sider-header {
    padding: 20px;
    text-align: center;
    background-color: #444;
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 1px solid #555;
  }

  .sider-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }

  .sider-menu button {
  all: unset; /* Reset default button styles */
  box-sizing: border-box; /* Include padding and borders in width/height */
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%; /* Ensure the button stays within the sidebar */
  padding: 15px 20px;
  transition: background-color 0.3s;
}

.sider-menu button:hover {
  background-color: #555;
}

.sider-menu button.active {
  background-color: #007bff;
}

.sider-menu button .icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.sider-menu button .name {
  font-size: 1rem;
}
</style>