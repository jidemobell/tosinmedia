export async function handleAppointments(request) {
  const url = new URL(request.url);

  if (request.method === 'POST') {
    const data = await request.json();
    // Replace with your database URL and (optionally) auth token
    const firebaseUrl = 'https://petermark-9ba50-default-rtdb.firebaseio.com/appointments.json';
    const res = await fetch(firebaseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    return new Response(JSON.stringify({ success: true, id: result.name }), { status: 201 });
  }

  if (request.method === 'GET') {
    const firebaseUrl = 'https://petermark-9ba50-default-rtdb.firebaseio.com/appointments.json';
    const res = await fetch(firebaseUrl);
    const appointments = await res.json();
    return new Response(JSON.stringify(appointments), { status: 200 });
  }

  return new Response('Not found', { status: 404 });
}