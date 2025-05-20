<script>
  import AppButton from '$lib/commons/AppButton.svelte';

  export let title = "Dashboard";

  function logout() {
    // console.log("Logging out...");
    localStorage.clear();
    window.location.href = '/login';
  }
</script>

<header class="dark-header">
  <h1>{title}</h1>
   <AppButton on:click={logout}>Logout</AppButton> 
</header>

<style>
  .dark-header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dark-header h1 {
    flex: 1;
    margin: 0;
    text-align: center;
  }
  .logout-btn {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    color: #333;
    border: none;
    padding: 8px 18px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
  }
  .logout-btn:hover {
    background: #eee;
  }
</style>