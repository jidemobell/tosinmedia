#!/usr/bin/env node
/**
 * Authenticated Firebase Admin uploader
 * Use this instead of the unauthenticated script when your Realtime DB rules require auth.
 *
 * Setup:
 * 1. Create a Service Account in Firebase Console -> Project Settings -> Service Accounts -> Generate new private key
 *    Save the JSON file as `serviceAccountKey.json` in this folder (or keep it somewhere safe and set env var below).
 *
 * 2a. Either set the GOOGLE_APPLICATION_CREDENTIALS environment variable to the path of the JSON file, e.g.:
 *    export GOOGLE_APPLICATION_CREDENTIALS="/path/to/serviceAccountKey.json"
 *
 * 2b. Or copy the JSON file to this folder and name it serviceAccountKey.json (not recommended for long-term storage in repo).
 *
 * 3. Install firebase-admin in your environment (one-time):
 *    npm install firebase-admin
 *
 * 4. Run:
 *    node add-gallery-images-admin.cjs
 */

const fs = require('fs');
const path = require('path');

// Try to load credentials from env var or local file
let serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!serviceAccountPath) {
  const localPath = path.join(__dirname, 'serviceAccountKey.json');
  if (fs.existsSync(localPath)) serviceAccountPath = localPath;
}

if (!serviceAccountPath) {
  console.error('\n❌ No service account key found.');
  console.error('   Set GOOGLE_APPLICATION_CREDENTIALS to the JSON key path or place serviceAccountKey.json in this folder.\n');
  process.exit(1);
}

const admin = require('firebase-admin');

try {
  admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccountPath)),
    databaseURL: 'https://petermark-9ba50-default-rtdb.firebaseio.com'
  });
} catch (err) {
  console.error('Failed to initialize Firebase Admin:', err.message);
  process.exit(1);
}

const db = admin.database();

// Reuse the same image list as in add-gallery-images.cjs
const imageUrls = [
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/lifestyle-portrait-25.jpg?updatedAt=1762908684723', alt: 'lifestyle portrait 25' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-9.jpg?updatedAt=1762908684333', alt: 'wedding manso fabiola 9' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/lifestyle-portrait-26.jpg?updatedAt=1762908684634', alt: 'lifestyle portrait 26' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/lifestyle-portrait-27.jpg?updatedAt=1762908684613', alt: 'lifestyle portrait 27' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/lifestyle-portrait-23.jpg?updatedAt=1762908684595', alt: 'lifestyle portrait 23' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-3.jpg?updatedAt=1762908684553', alt: 'wedding manso fabiola 3' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/lifestyle-portrait-24.jpg?updatedAt=1762908684406', alt: 'lifestyle portrait 24' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-12.jpg?updatedAt=1762908684328', alt: 'event portrait 12' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-6.jpg?updatedAt=1762908684309', alt: 'wedding manso fabiola 6' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/lifestyle-portrait-22.jpg?updatedAt=1762908684298', alt: 'lifestyle portrait 22' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-4.jpg?updatedAt=1762908684132', alt: 'wedding manso fabiola 4' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-14.jpg?updatedAt=1762908683904', alt: 'event portrait 14' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-7.jpg?updatedAt=1762908683893', alt: 'event portrait 7' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/special-moment-37.jpg?updatedAt=1762908683713', alt: 'special moment 37' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-11.jpg?updatedAt=1762908683708', alt: 'event portrait 11' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-5.jpg?updatedAt=1762908683510', alt: 'wedding manso fabiola 5' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-15.jpg?updatedAt=1762908683458', alt: 'event portrait 15' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/lifestyle-portrait-21.jpg?updatedAt=1762908683299', alt: 'lifestyle portrait 21' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-2.jpg?updatedAt=1762908683164', alt: 'wedding manso fabiola 2' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-20.jpg?updatedAt=1762908683083', alt: 'event portrait 20' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-13.jpg?updatedAt=1762908683072', alt: 'event portrait 13' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-8.jpg?updatedAt=1762908682912', alt: 'event portrait 8' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-13.jpg?updatedAt=1762908682864', alt: 'wedding manso fabiola 13' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-9.jpg?updatedAt=1762908682452', alt: 'event portrait 9' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-17.jpg?updatedAt=1762908682374', alt: 'event portrait 17' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-33.jpg?updatedAt=1762908682049', alt: 'event portrait 33' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-18.jpg?updatedAt=1762908682025', alt: 'event portrait 18' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-16.jpg?updatedAt=1762908681986', alt: 'wedding manso fabiola 16' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-14.jpg?updatedAt=1762908681653', alt: 'wedding manso fabiola 14' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-4.jpg?updatedAt=1762908681574', alt: 'event portrait 4' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-2.jpg?updatedAt=1762908681479', alt: 'event portrait 2' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-19.jpg?updatedAt=1762908681275', alt: 'event portrait 19' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-5.jpg?updatedAt=1762908681230', alt: 'event portrait 5' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-12.jpg?updatedAt=1762908681053', alt: 'wedding manso fabiola 12' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-7.jpg?updatedAt=1762908680003', alt: 'wedding manso fabiola 7' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/wedding-manso-fabiola-15.jpg?updatedAt=1762908679722', alt: 'wedding manso fabiola 15' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-3.jpg?updatedAt=1762908679376', alt: 'event portrait 3' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-30.jpg?updatedAt=1762908678855', alt: 'event portrait 30' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/new_previews/event-portrait-1.jpg?updatedAt=1762908673864', alt: 'event portrait 1' }
];

async function run() {
  console.log(`\n🚀 Adding ${imageUrls.length} images to Firebase (authenticated)...\n`);
  const ref = db.ref('gallery');

  for (const img of imageUrls) {
    try {
      const snapshot = await ref.push({ url: img.url, alt: img.alt, createdAt: Date.now() });
      console.log(`✅ Added: ${img.alt} (key: ${snapshot.key})`);
    } catch (err) {
      console.error(`❌ Failed to add ${img.alt}:`, err.message || err);
    }
  }

  console.log('\n✨ All done. Verify entries in Realtime DB -> /gallery');
  process.exit(0);
}

run().catch(err => {
  console.error('Uploader failed:', err);
  process.exit(1);
});
