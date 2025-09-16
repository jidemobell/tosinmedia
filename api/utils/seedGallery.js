const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const firebaseUrl = 'https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json';

const images = [
  {
    url: "https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/portfolio-image-1.jpg",
    alt: "Portfolio Image 1"
  },
  {
    url: "https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/portfolio-image-2.jpg",
    alt: "Portfolio Image 2"
  },
  {
    url: "https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/portfolio-image-3.jpg",
    alt: "Portfolio Image 3"
  },
  {
    url: "https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/portfolio-image-4.jpg",
    alt: "Portfolio Image 4"
  },
  {
    url: "https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/portfolio-image-5.jpg",
    alt: "Portfolio Image 5"
  }
  // Add more as needed
];

async function seedGallery() {
  for (const img of images) {
    const res = await fetch(firebaseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: img.url,
        alt: img.alt,
        createdAt: Date.now()
      })
    });
    const result = await res.json();
    console.log('Response from Firebase:', result);
    console.log(`Added: ${img.url} (id: ${result.name})`);
  }
}

seedGallery();