<script>
   import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch('sectionChange', { section: 'users' });
  }

  // import { createEventDispatcher } from 'svelte';
  // export let show = false;
  // const dispatch = createEventDispatcher();

  let name = '';
  let username = '';
  let email = '';
  let password = '';
  let role = 'user';
  let error = '';
  let creating = false;

  // function handleClose() {
  //   dispatch('close');
  // }
  // function handleClose() {



  async function handleCreate() {
    error = '';
    creating = true;
    try {
      const res = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/admin/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email, password, role })
      });
      const data = await res.json();
      if (!res.ok) {
        error = data.error || 'Failed to create user';
      } else {
        dispatch('created');
        handleClose();
      }
    } catch (e) {
      error = 'Network error';
    }
    creating = false;
  }
</script>

<!-- {#if show} -->
  <!-- <div class="modal-backdrop"></div> -->
  <div>
    <!-- <h1 >Create User</h1> -->
    <h3>Create User</h3>
    <form on:submit|preventDefault={handleCreate}>
      <label>Name: <input type="text" bind:value={name} required /></label>
      <label>Username: <input type="text" bind:value={username} required /></label>
      <label>Email: <input type="email" bind:value={email} required /></label>
      <label>Password: <input type="password" bind:value={password} required /></label>
      <label>
        Role:
        <select bind:value={role}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      {#if error}
        <div class="error">{error}</div>
      {/if}
      <div class="modal-actions">
        <button type="button" on:click={handleClose}>Cancel</button>
        <button type="submit" disabled={creating}>{creating ? 'Creating...' : 'Create'}</button>
      </div>
    </form>
  </div>
<!-- {/if} -->

<style>
  /* .modal-backdrop {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.3); z-index: 1000;
  } */
  /* .modal {
    position: fixed; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background: #fff; padding: 2rem 2.5rem;
    border-radius: 8px; box-shadow: 0 4px 32px rgba(0,0,0,0.18);
    z-index: 1001; min-width: 320px; max-width: 90vw;
  } */
  /* .modal label { display: block; margin-bottom: 1rem; }
  .modal input, .modal select { width: 100%; padding: 8px 10px; margin-top: 4px; border: 1px solid #ccc; border-radius: 4px; }
  .modal-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 1rem; }
  .error { color: #c00; margin-bottom: 0.5rem; } */
</style>