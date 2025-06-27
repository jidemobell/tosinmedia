export async function handleGallery(request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };
  const firebaseUrl = 'https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json';

  try {
    if (request.method === 'POST') {
      const data = await request.json();
      if (!data.url) {
        return new Response(JSON.stringify({ error: 'Image URL required' }), { status: 400, headers: corsHeaders });
      }
      // Add image to gallery (push)
      const res = await fetch(firebaseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: data.url,
          alt: data.alt || "",
          createdAt: Date.now()
        })
      });
      const result = await res.json();
      return new Response(JSON.stringify({ success: true, id: result.name }), { status: 201, headers: corsHeaders });
    }

    if (request.method === 'GET') {
      // Fetch all gallery images
      const res = await fetch(firebaseUrl);
      const images = await res.json();
      return new Response(JSON.stringify(images), { status: 200, headers: corsHeaders });
    }

    return new Response('Not found', { status: 404, headers: corsHeaders });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}