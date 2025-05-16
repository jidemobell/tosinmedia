<script>
  import { onMount } from 'svelte';
  import { database } from '$lib/firebase';
  import { getDatabase, ref, onValue } from "firebase/database";

  // Firebase config (reuse from your project or import from a config file)
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAV9cbQPddGS927a-XJkgkMdiwwZNUbV9I",
  //   authDomain: "petermark-9ba50.firebaseapp.com",
  //   databaseURL: "https://petermark-9ba50-default-rtdb.firebaseio.com",
  //   projectId: "petermark-9ba50",
  //   storageBucket: "petermark-9ba50.firebasestorage.app",
  //   messagingSenderId: "892056005886",
  //   appId: "1:892056005886:web:f9d7858357d71cf9ea89af"
  // };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const database = getDatabase(app);

  let messages = [];
  let loading = true;

  onMount(() => {
    const messagesRef = ref(database, 'contacts');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      messages = [];
      if (data) {
        // Convert object to array with id
        messages = Object.entries(data).map(([id, msg]) => ({ id, ...msg })).reverse();
      }
      loading = false;
    });
  });
</script>

<div class="contact-messages">
  <h2>Contact Messages</h2>
  {#if loading}
    <p>Loading messages...</p>
  {:else if messages.length === 0}
    <p>No messages found.</p>
  {:else}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Date/ID</th>
        </tr>
      </thead>
      <tbody>
        {#each messages as msg}
          <tr>
            <td>{msg.name}</td>
            <td><a href={"mailto:" + msg.email}>{msg.email}</a></td>
            <td>{msg.subject}</td>
            <td>{msg.message}</td>
            <td style="font-size: 0.8em; color: #888;">{msg.id}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<style>
.contact-messages {
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  max-width: 100%;
  overflow-x: auto;
}
.contact-messages h2 {
  margin-bottom: 1rem;
}
.contact-messages table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}
.contact-messages th, .contact-messages td {
  border: 1px solid #eee;
  padding: 0.5rem 0.75rem;
  text-align: left;
  vertical-align: top;
}
.contact-messages th {
  background: #f8f8f8;
}
.contact-messages tr:nth-child(even) {
  background: #fafafa;
}
</style>