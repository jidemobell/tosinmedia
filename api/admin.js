// POST /api/admin/create-user
// POST /api/admin/create-appointment
// POST /api/admin/send-reminder
// PUT /api/admin/mark-paid
// GET /api/admin/view-bookings
// GET /api/admin/view-testimonials


export default {
  async fetch(request) {
    if (request.method === 'GET') {
      const testimonials = [
        {
          id: 1,
          name: 'Luise Hanerika',
          role: 'Fashion Designer',
          message: 'TosinPeter Photography captured my special moments beautifully!',
          image: '/img/author-image/author-image-3.png',
        },
        {
          id: 2,
          name: 'John Doe',
          role: 'Event Planner',
          message: 'The professionalism and creativity were outstanding!',
          image: null,
        },
      ];

      return new Response(JSON.stringify(testimonials), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};