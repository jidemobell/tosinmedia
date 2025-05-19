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

async function handleAdmin(request) {
  const url = new URL(request.url);

  // Authenticate admin for all admin routes
  const adminToken = request.headers.get('x-admin-token');
  if (!adminToken || !isValidAdminToken(adminToken)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  // Route: POST /api/admin/create-user
  if (url.pathname === '/api/admin/create-user' && request.method === 'POST') {
    const body = await request.json();
    const { name, username, email, password } = body;

    // Hash password and create user in Firebase
    // ... (reuse your user creation logic here, always assign role: 'user')
    // Example:
    // await set(ref(database, 'users/' + userId), { name, username, email, password: hashedPassword, role: 'user', createdAt: Date.now() });

    return new Response(JSON.stringify({ message: 'User created successfully' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // Route: GET /api/admin/view-users
  if (url.pathname === '/api/admin/view-users' && request.method === 'GET') {
    // Fetch users from your users endpoint
    const res = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/users');
    const users = await res.json();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // Route: GET /api/admin/view-bookings
  if (url.pathname === '/api/admin/view-bookings' && request.method === 'GET') {
    // Fetch bookings from your bookings endpoint
    const res = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/bookings');
    const bookings = await res.json();
    return new Response(JSON.stringify(bookings), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // Route: GET /api/admin/view-testimonials
  if (url.pathname === '/api/admin/view-testimonials' && request.method === 'GET') {
    // Fetch testimonials from your testimonials endpoint
    const res = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/testimonials');
    const testimonials = await res.json();
    return new Response(JSON.stringify(testimonials), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // ...other admin routes...

  // Default: 404 Not Found
  return new Response(JSON.stringify({ error: 'Not Found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}

export { handleAdmin };