// POST /api/user/login
// GET /api/user/profile
// POST /api/user/make-payment
// POST /api/user/submit-testimonial
// PUT /api/user/close-profile

// {
//   "users": {
//     "userId1": {
//       "username": "janedoe",
//       "name": "Jane Doe",
//       "role": "user",
//       "password": "hashedpassword",
//       "createdAt": 1234567890
//     }
//   }
// }

import bcrypt from 'bcryptjs'; // Use bcryptjs for hashing
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase config (reuse your shared config if possible)
const firebaseConfig = {
  apiKey: "AIzaSyAV9cbQPddGS927a-XJkgkMdiwwZNUbV9I",
  authDomain: "petermark-9ba50.firebaseapp.com",
  databaseURL: "https://petermark-9ba50-default-rtdb.firebaseio.com",
  projectId: "petermark-9ba50",
  storageBucket: "petermark-9ba50.firebasestorage.app",
  messagingSenderId: "892056005886",
  appId: "1:892056005886:web:f9d7858357d71cf9ea89af"
};

// Prevent re-initialization
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handler for /api/user
async function handleUser(request) {
  const url = new URL(request.url);

  // Route: POST /api/user/login
  if (url.pathname === '/api/user/login' && request.method === 'POST') {
    const body = await request.json();
    const { username, password } = body;

    // Simulate login logic
    if (username === 'testuser' && password === 'password123') {
      return new Response(JSON.stringify({ message: 'Login successful' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  // Route: GET /api/user/profile
  if (url.pathname === '/api/user/profile' && request.method === 'GET') {
    const user = {
      id: 1,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      bookings: [
        { id: 1, event: 'Wedding Photography', status: 'completed' },
        { id: 2, event: 'Corporate Event', status: 'pending' },
      ],
    };

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  // Route: POST /api/user/submit-testimonial
  if (url.pathname === '/api/user/submit-testimonial' && request.method === 'POST') {
    const body = await request.json();
    const { event, message } = body;

    // Simulate saving the testimonial
    return new Response(JSON.stringify({ message: 'Testimonial submitted successfully', event }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }


  // Route: POST /api/user/create
  if (url.pathname === '/api/user/create' && request.method === 'POST') {
    try {
      const body = await request.json();
      const { name, username, password, role } = body;

      if (!name || !username || !password) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = crypto.randomUUID();

      // Save user to Firebase
      await set(ref(database, 'users/' + userId), {
        name,
        username,
        password: hashedPassword,
        role: role || 'user',
        createdAt: Date.now()
      });

      return new Response(JSON.stringify({ message: 'User created successfully', userId }), {
        status: 201,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to create user', details: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
  }

  // Handle unsupported methods
  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export { handleUser };