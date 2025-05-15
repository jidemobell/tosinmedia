
async function handleBookings(request) {
    const url = new URL(request.url);

    // Handle preflight OPTIONS requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Route: GET /api/admin/view-bookings
    if (url.pathname === '/api/admin/view-bookings' && request.method === 'GET') {
      // Generate fake bookings
      const bookings = generateFakeBookings(20); // Generate 20 fake bookings
      return new Response(JSON.stringify(bookings), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // Default: 404 Not Found
    return new Response(JSON.stringify({ error: 'Not Found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

// Function to generate fake bookings
function generateFakeBookings(count = 10) {
  const users = ['user1', 'user2', 'user3', 'user4', 'user5'];
  const events = ['Wedding', 'Birthday', 'Corporate Event', 'Anniversary', 'Graduation'];
  const paymentMediums = ['stripe', 'cash', 'transfer'];

  return Array.from({ length: count }, (_, index) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    const randomPayment = paymentMediums[Math.floor(Math.random() * paymentMediums.length)];
    const now = new Date();

    return {
      id: index + 1,
      booking_user: randomUser,
      event_name: randomEvent,
      event_date: new Date(now.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(), // Random future date
      booking_created: new Date(now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(), // Random past date
      completed: Math.random() > 0.5, // Randomly completed or not
      amount: (Math.random() * 1000 + 100).toFixed(2), // Random amount between 100 and 1100
      payment_medium: randomPayment,
      updated: new Date(now.getTime() - Math.random() * 10 * 24 * 60 * 60 * 1000).toISOString(), // Random recent update
    };
  });
}

export  { handleBookings };