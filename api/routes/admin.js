// POST /api/admin/create-user
// POST /api/admin/create-appointment
// POST /api/admin/send-reminder
// PUT /api/admin/mark-paid
// GET /api/admin/view-bookings
// GET /api/admin/view-testimonials
// GET /api/admin/view-users

// function generateFakeUsers(count = 100) {
//   return Array.from({ length: count }, (_, index) => ({
//     id: index + 1,
//     username: `user${index + 1}`,
//     email: `user${index + 1}@example.com`,
//     status: index % 2 === 0 ? 'active' : 'disabled', // Alternate between active and disabled
//     created_date: new Date(Date.now() - index * 86400000).toISOString(), // Created dates spread over the last 100 days
//     updated_date: new Date(Date.now() - index * 43200000).toISOString(), // Updated dates spread over the last 50 days
//   }));
// }



import { isValidAdminToken } from "../utils/auth.js";
import { getDatabase, ref, get, set } from "firebase/database";

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function handleAdmin(request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "x-admin-token, Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };

  try {
    const url = new URL(request.url);

    // Authenticate admin for all admin routes
    const adminToken = request.headers.get('x-admin-token');
    if (!adminToken || !isValidAdminToken(adminToken)) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });
    }

    // Route: POST /api/admin/create-user
    if (url.pathname === '/api/admin/create-user' && request.method === 'POST') {
      const body = await request.json();
      const { name, username, email, password } = body;
      const hash = await hashPassword(password);
      const userId = Date.now().toString();
      const database = getDatabase();
      await set(ref(database, 'users/' + userId), { name, username, email, password: hash, role: 'user', createdAt: Date.now() });
      return new Response(JSON.stringify({ message: 'User created successfully' }), {
        status: 201,
        headers: corsHeaders
      });
    }

    // Route: GET /api/admin/view-users
    if (url.pathname === '/api/admin/view-users' && request.method === 'GET') {
      const database = getDatabase();
      const usersRef = ref(database, 'users');
      const snapshot = await get(usersRef);
      const users = snapshot.exists() ? snapshot.val() : {};
      return new Response(JSON.stringify(users), {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Route: GET /api/admin/view-bookings
    if (url.pathname === '/api/admin/view-bookings' && request.method === 'GET') {
      const res = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/bookings');
      const bookings = await res.json();
      return new Response(JSON.stringify(bookings), {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Route: GET /api/admin/view-testimonials
    if (url.pathname === '/api/admin/view-testimonials' && request.method === 'GET') {
      const res = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/testimonials');
      const testimonials = await res.json();
      return new Response(JSON.stringify(testimonials), {
        status: 200,
        headers: corsHeaders,
      });
    }

    // ...other admin routes...

    // Default: 404 Not Found
    return new Response(JSON.stringify({ error: 'Not Found' }), {
      status: 404,
      headers: corsHeaders,
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "x-admin-token, Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      }
    });
  }
}

export { handleAdmin };