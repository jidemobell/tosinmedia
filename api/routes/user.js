// POST /api/user/login
// GET /api/user/profile
// POST /api/user/make-payment
// POST /api/user/submit-testimonial
// PUT /api/user/close-profile


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