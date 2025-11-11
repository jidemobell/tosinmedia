<script>
  export let filteredUsers = []; // Users passed from the parent component

  let currentPage = 1; // Current page number
  const rowsPerPage = 20; // Number of users per page

  // Calculate the paginated data
  $: paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Calculate total pages
  $: totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }
</script>

<div class="user-table-container">
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
          <td>
            <a href={`/admin/users/${user.username}`} class="user-link">{user.username}</a>
          </td>
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

<style>
  .user-table-container {
    margin-top: 20px;
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

  .user-link {
    color: #007bff;
    text-decoration: none;
  }

  .user-link:hover {
    text-decoration: underline;
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

  .pagination span {
    font-size: 1rem;
  }
</style>