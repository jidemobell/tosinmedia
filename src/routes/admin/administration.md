You can absolutely use Firebase Realtime Database (or Firestore) to store your users without using Google Auth.
You simply treat your users as data objects in the database, and manage authentication and authorization yourself (e.g., via your API and session/cookie logic).

How to Structure This
1. User Data Structure in Firebase
Store users under a users node, e.g.:

Never store plain text passwords! Always hash them (e.g., bcrypt) before saving.



2. Admin Super User
You can create a special user with role: "admin" and a password.
Allow the admin to change their password via your API (update the hash in Firebase).
3. User Creation
Your API endpoint (e.g., /api/admin/create-user) can:
Accept name, username, password, etc.
Hash the password.
Save the user object to Firebase under /users/{userId}.
4. Authentication
When a user logs in, your API:
Looks up the user by username.
Compares the submitted password (after hashing) to the stored hash.
If valid, issues a session/cookie/JWT for the frontend.
5. Authorization
Protect admin routes in your API and SvelteKit app by checking the user's role (e.g., only allow role: "admin" to access certain endpoints or pages).



Summary Table
Feature	How to Implement
User storage	Store user objects in Firebase under users
Passwords	Always hash before saving (never store plain text)
Admin user	Special user with role: "admin"
Auth	Handle via your API (not Firebase Auth)
User creation	Admin creates users via API, assigns username/password
