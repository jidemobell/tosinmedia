export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Route: /api/testimonials
    if (url.pathname === '/api/testimonials' && request.method === 'GET') {
      return handleTestimonials(request);
    }

    // Route: /api/user
    if (url.pathname === '/api/user' && request.method === 'GET') {
      return handleUser(request);
    }

    // Default: 404 Not Found
    return new Response('Not Found', { status: 404 });
  },
};

// Handler for /api/testimonials
async function handleTestimonials(request) {
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
}

// Handler for /api/user
async function handleUser(request) {
  const user = {
    id: 1,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  };

  return new Response(JSON.stringify(user), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}