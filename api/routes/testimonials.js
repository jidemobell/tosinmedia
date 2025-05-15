async function handleTestimonials(request) {
  const url = new URL(request.url);
  if (url.pathname === '/api/testimonials' && request.method === 'GET') {
    // Handle GET requests
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
        image: '/img/author-image/author-image-3.png',
      },
      {
        id: 3,
        name: 'Jane Smith',
        role: 'Wedding Planner',
        message: 'Highly recommended for any event!',
        image: '/img/author-image/author-image-3.png',
      },
      {
        id: 4,
        name: 'Michael Johnson',
        role: 'Corporate Client',
        message: 'Exceptional service and attention to detail.',
        image: '/img/author-image/author-image-3.png',
      },
      {
        id: 5,
        name: 'Sarah Connor',
        role: 'Fashion Model',
        message: 'The photoshoot was a dream come true!',
        image: '/img/author-image/author-image-3.png',
      },
    ];

    return new Response(JSON.stringify(testimonials), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow all origins (replace '*' with your frontend domain in production)
      },
    });
  }

  // Handle unsupported methods
  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Allow all origins
    },
  });
}

export { handleTestimonials };
