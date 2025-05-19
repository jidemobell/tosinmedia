<script>
  import { onMount, createEventDispatcher } from 'svelte';
  // import CreateUser from './CreateUser.svelte';

  const dispatch = createEventDispatcher();


  let users = []; // Users fetched from the API
  let activeFilter = 'all'; // Filter: all, active, disabled
  let currentPage = 1; // Current page number
  const rowsPerPage = 20; // Number of users per page
  let showCreateUser = false;

  async function refreshUsers() {
    try {
    const token = localStorage.getItem('token');
    const response = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/admin/view-users', {
      headers: {
        'x-admin-token': token
      }
    });
    if (!response.ok) throw new Error('Failed to fetch users');
    users = await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
  }


  // Fetch users from the API on mount
  onMount(refreshUsers);

  function openCreateUser() {
    dispatch('sectionChange', { section: 'create-user' });
  }

  // $: console.log("event", event);

  // Filtered users based on the active filter
  $: filteredUsers = users.filter((user) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return user.status === 'active';
    if (activeFilter === 'disabled') return user.status === 'disabled';
  });

  // Paginated users
  $: paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Calculate total pages
  $: totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  function setFilter(filter) {
    activeFilter = filter;
    currentPage = 1; // Reset to first page when filter changes
  }

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }

  // $: console.log("showcreate user:", showCreateUser);
</script>

<div class="user-management">
  <div class="create-user-bar">
    <button class="create-user-btn" on:click={openCreateUser}>+ Create User</button>
  </div>
  <!-- Filters -->
  <div class="filters">
    <button on:click={() => setFilter('all')} class:active={activeFilter === 'all'}>All</button>
    <button on:click={() => setFilter('active')} class:active={activeFilter === 'active'}>Active</button>
    <button on:click={() => setFilter('disabled')} class:active={activeFilter === 'disabled'}>Disabled</button>
  </div>


  <!-- User Table -->
  <table class="user-table">
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Status</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody>
      {#each paginatedUsers as user}
        <tr>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.status}</td>
          <td>{user.updated_date}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <!-- Pagination Controls -->
  <div class="pagination">
    <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
</div>

<!-- <CreateUser show={showCreateUser} on:close={closeCreateUser} on:created={userCreated} /> -->


<style>
  .user-management {
    margin-top: 20px;
  }

  .filters {
    margin-bottom: 20px;
  }

  .filters button {
    margin-right: 10px;
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }

  .filters button.active {
    background-color: #0056b3;
  }

  .filters button:hover {
    background-color: #0056b3;
  }

  .user-table {
    width: 100%;
    border-collapse: collapse;
  }

  .user-table th {
    background-color: #f1f1f1;
    color: #333;
    padding: 10px;
    text-align: left;
  }

  .user-table td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .pagination button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }

  .pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>