#!/usr/bin/env node
/**
 * Firebase Gallery Image Uploader
 * 
 * This script helps you batch-add images to Firebase Realtime Database.
 * 
 * Usage:
 *   1. Edit the imageUrls array below with your image URLs
 *   2. Run: node add-gallery-images.js
 */

const https = require('https');

// Firebase Configuration
const FIREBASE_URL = 'https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json';

// Add your image URLs here
// You can add OneDrive embed links or ImageKit URLs
const imageUrls = [
  // Example format:
  // { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/new-image-1.jpg', alt: 'Wedding Photo 1' },
  // { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/new-image-2.jpg', alt: 'Portrait Photo 1' },
  
  // Add your images below:
  
];

// Function to add images to Firebase
async function addImagesToFirebase() {
  if (imageUrls.length === 0) {
    console.log('\n⚠️  No images to add!');
    console.log('📝 Please edit the imageUrls array in this script and add your image URLs.\n');
    console.log('Example format:');
    console.log('  { url: "https://your-image-url.jpg", alt: "Description" }\n');
    return;
  }

  console.log(`\n🚀 Adding ${imageUrls.length} images to Firebase...\n`);

  for (let i = 0; i < imageUrls.length; i++) {
    const image = imageUrls[i];
    const data = JSON.stringify({
      url: image.url,
      alt: image.alt,
      createdAt: Date.now()
    });

    try {
      await postToFirebase(data);
      console.log(`✅ Added: ${image.alt}`);
    } catch (error) {
      console.error(`❌ Failed to add ${image.alt}:`, error.message);
    }
  }

  console.log('\n✨ Done! Check your gallery at:');
  console.log('   https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json\n');
}

// Helper function to POST to Firebase
function postToFirebase(data) {
  return new Promise((resolve, reject) => {
    const url = new URL(FIREBASE_URL);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// Run the script
addImagesToFirebase().catch(console.error);
