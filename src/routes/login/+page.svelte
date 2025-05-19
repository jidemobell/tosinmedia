<script>
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';
  let error = '';

  async function handleLogin() {
    const res = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok) {
      // Save user info to session/localStorage as needed
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token); // <-- Store the token

      // Redirect based on role
      if (data.user.role === 'admin') {
        goto('/admin');
      } else {
        goto(`/${data.user.username}`);
      }
    } else {
      error = data.error || 'Login failed';
    }
  }
</script>

<form on:submit|preventDefault={handleLogin} class="login-form">
  <label>
    Username:
    <input type="text" bind:value={username} required autocomplete="username" />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} required autocomplete="current-password" />
  </label>
  <button type="submit">Login</button>
</form>
{#if error}
  <p class="error">{error}</p>
{/if}



<style>
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 320px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fafbfc;
  }
  .login-form label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
  }
  .login-form input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  .login-form button {
    padding: 0.7rem;
    border-radius: 4px;
    border: none;
    background: #2d72d9;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  .error {
    color: #c00;
    text-align: center;
    margin-top: 1rem;
  }
</style>