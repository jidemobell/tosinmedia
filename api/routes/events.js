async function handleEvents(request) {
  const url = new URL(request.url);

  // Route: GET /api/events
  if (url.pathname === '/api/events' && request.method === 'GET') {
    const events = [
      { id: 1, name: 'Wedding Photography', date: '2025-06-01', status: 'completed' },
      { id: 2, name: 'Corporate Event', date: '2025-06-15', status: 'pending' },
    ];

    return new Response(JSON.stringify(events), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  // Route: POST /api/events
  if (url.pathname === '/api/events' && request.method === 'POST') {
    const body = await request.json();
    const { name, date } = body;

    // Simulate saving the event
    return new Response(JSON.stringify({ message: 'Event created successfully', name, date }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
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

export { handleEvents };