// POST /api/admin/create-user
// POST /api/admin/create-appointment
// POST /api/admin/send-reminder
// PUT /api/admin/mark-paid
// GET /api/admin/view-bookings
// GET /api/admin/view-testimonials


export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Handle preflight OPTIONS requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow all origins (replace '*' with your frontend domain in production)
          'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS', // Allowed methods
          'Access-Control-Allow-Headers': 'Content-Type', // Allowed headers
        },
      });
    }

    // Route: POST /api/admin/create-user
    if (url.pathname === '/api/admin/create-user' && request.method === 'POST') {
      const body = await request.json();
      const { username, email, role } = body;

      // Simulate user creation logic
      const newUser = { id: Date.now(), username, email, role };
      return new Response(JSON.stringify({ message: 'User created successfully', user: newUser }), {
        status: 201,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Route: POST /api/admin/create-appointment
    if (url.pathname === '/api/admin/create-appointment' && request.method === 'POST') {
      const body = await request.json();
      const { userId, date, time, service } = body;

      // Simulate appointment creation logic
      const newAppointment = { id: Date.now(), userId, date, time, service };
      return new Response(JSON.stringify({ message: 'Appointment created successfully', appointment: newAppointment }), {
        status: 201,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Route: POST /api/admin/send-reminder
    if (url.pathname === '/api/admin/send-reminder' && request.method === 'POST') {
      const body = await request.json();
      const { userId, appointmentId } = body;

      // Simulate sending a reminder
      return new Response(JSON.stringify({ message: `Reminder sent to user ${userId} for appointment ${appointmentId}` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Route: PUT /api/admin/mark-paid
    if (url.pathname === '/api/admin/mark-paid' && request.method === 'PUT') {
      const body = await request.json();
      const { bookingId } = body;

      // Simulate marking a booking as paid
      return new Response(JSON.stringify({ message: `Booking ${bookingId} marked as paid` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Route: GET /api/admin/view-bookings
    if (url.pathname === '/api/admin/view-bookings' && request.method === 'GET') {
      // Simulate fetching bookings
      const bookings = [
        { id: 1, userId: 101, service: 'Photography', date: '2025-05-15', status: 'pending' },
        { id: 2, userId: 102, service: 'Videography', date: '2025-05-20', status: 'paid' },
      ];
      return new Response(JSON.stringify(bookings), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Route: GET /api/admin/view-testimonials
    if (url.pathname === '/api/admin/view-testimonials' && request.method === 'GET') {
      // Simulate fetching testimonials
      const testimonials = [
        { id: 1, name: 'Luise Hanerika', message: 'Amazing service!', role: 'Fashion Designer' },
        { id: 2, name: 'John Doe', message: 'Highly recommended!', role: 'Event Planner' },
      ];
      return new Response(JSON.stringify(testimonials), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Default: 404 Not Found
    return new Response(JSON.stringify({ error: 'Not Found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  },
};