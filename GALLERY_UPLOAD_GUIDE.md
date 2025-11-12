# Gallery Image Upload Script

## Quick Start

### Step 1: Get Your Image URLs

You have two options:

#### Option A: Use OneDrive Direct Links
1. Go to your OneDrive folder
2. Right-click each image → Share → Copy link
3. Convert to direct link format:
   - Original: `https://1drv.ms/i/...`
   - Direct: `https://onedrive.live.com/download?...`

#### Option B: Upload to ImageKit (Recommended)
1. Go to ImageKit dashboard: https://imagekit.io/dashboard
2. Upload your OneDrive images
3. Copy the ImageKit URLs (format: `https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/your-image.jpg`)

### Step 2: Edit the Script

Open `add-gallery-images.cjs` and add your images:

```javascript
const imageUrls = [
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/wedding-1.jpg', alt: 'Beautiful Wedding Moment' },
  { url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/portrait-1.jpg', alt: 'Professional Portrait' },
  // Add more images...
];
```

### Step 3: Run the Script

```bash
node add-gallery-images.cjs
```

## Example

```javascript
const imageUrls = [
  { 
    url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/wedding-ceremony-2024.jpg', 
    alt: 'Wedding Ceremony - John & Sarah 2024' 
  },
  { 
    url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/corporate-event-baltimore.jpg', 
    alt: 'Corporate Event Photography - Baltimore' 
  },
  { 
    url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/family-portrait-outdoors.jpg', 
    alt: 'Family Portrait Session - Outdoor' 
  }
];
```

## Tips

- ✅ Use descriptive alt text for each image
- ✅ Use ImageKit URLs for faster loading and transformations
- ✅ Test with 1-2 images first before adding all
- ✅ Check the gallery after uploading: `https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json`

## Need Help with OneDrive?

If you want to use OneDrive links directly:

1. Share the image in OneDrive
2. Get the embed code
3. Extract the direct download URL
4. Or better yet, download and upload to ImageKit for better performance

## Verify Upload

After running the script, check your gallery at:
- Firebase: https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json
- Live site: https://thepetermaks.com/#third-section
