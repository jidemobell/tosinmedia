import { isValidAdminToken } from '../utils/auth.js';
export async function handleAppointments(request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "x-admin-token, Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };

  try {
    const url = new URL(request.url);
    const adminToken = request.headers.get('x-admin-token');
    if (!adminToken || !isValidAdminToken(adminToken)) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });
    }

    if (request.method === 'POST') {
      const data = await request.json();
      const firebaseUrl = 'https://petermark-9ba50-default-rtdb.firebaseio.com/appointments.json';
      const res = await fetch(firebaseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      return new Response(JSON.stringify({ success: true, id: result.name }), { status: 201, headers: corsHeaders });
    }

    if (request.method === 'GET') {
      const firebaseUrl = 'https://petermark-9ba50-default-rtdb.firebaseio.com/appointments.json';
      const res = await fetch(firebaseUrl);
      const appointments = await res.json();
      return new Response(JSON.stringify(appointments), { status: 200, headers: corsHeaders });
    }

    return new Response('Not found', { status: 404, headers: corsHeaders });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}