// filepath: /api/testimonials.js
export default {
  async fetch(request) {
    if (request.method === 'GET') {
      // Fetch testimonials from your database
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
          image: null, // No image provided
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