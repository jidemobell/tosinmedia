# Image Optimization System

This project uses ImageKit for comprehensive image optimization and delivery. All images are automatically optimized for different devices and network conditions.

## Features

### 1. Automatic Format Selection
- WebP for modern browsers
- JPEG/PNG fallback for older browsers
- Automatic format selection based on browser support

### 2. Responsive Images
- Multiple sizes generated automatically
- Srcset and sizes attributes for optimal loading
- Device-specific optimization

### 3. Quality Optimization
- Different quality settings for different image types:
  - Hero images: 85% quality
  - Gallery images: 85% quality
  - Thumbnails: 80% quality
  - About page: 90% quality

### 4. Performance Features
- Lazy loading by default
- Low-quality placeholder images
- Progressive loading
- Bandwidth-aware optimization

## Components

### OptimizedImage Component
```svelte
<OptimizedImage 
  src="https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/portfolio-image-1.jpg"
  alt="portfolio"
  type="gallery"
  width={800}
  quality={85}
  responsive={true}
  placeholder={true}
/>
```

**Props:**
- `src`: ImageKit URL
- `alt`: Alt text for accessibility
- `type`: Image type (gallery, hero, thumbnail, about)
- `width`: Target width in pixels
- `quality`: Image quality (1-100)
- `responsive`: Enable responsive images (default: true)
- `placeholder`: Show low-quality placeholder (default: true)
- `loading`: Loading strategy (lazy/eager)

### Image Types and Sizes

1. **Hero Images**
   - Desktop: 1920px width, 85% quality
   - Mobile: 768px width, 80% quality
   - Format: WebP with JPEG fallback

2. **Gallery Images**
   - Width: 800px
   - Quality: 85%
   - Responsive srcset: 320w, 480w, 768w, 1024w, 1200w, 1920w

3. **Thumbnails**
   - Width: 150px
   - Quality: 80%
   - Optimized for fast loading

4. **About Page Images**
   - Width: 600px
   - Quality: 90% (higher quality for portraits)

## URL Structure

ImageKit URLs follow this pattern:
```
https://ik.imagekit.io/jidemobell2025/tr:w-800,q-85,f-webp/tosinmakanjuola/gallery/portfolio-image-1.jpg
```

**Transformation parameters:**
- `w-800`: Width 800px
- `q-85`: Quality 85%
- `f-webp`: Format WebP
- `c-maintain_ratio`: Maintain aspect ratio
- `fo-auto`: Auto focus detection
- `pr-true`: Progressive loading

## Performance Monitoring

Use the ImagePerformanceMonitor component to track loading performance:

```svelte
<ImagePerformanceMonitor showStats={true} />
```

## Best Practices

1. **Always use the OptimizedImage component** instead of regular `<img>` tags
2. **Set appropriate type** for different image contexts
3. **Use lazy loading** for images below the fold
4. **Provide meaningful alt text** for accessibility
5. **Monitor performance** using the performance monitor component

## Optimization Settings

### Current Settings:
- **Hero backgrounds**: 1920px desktop, 768px mobile, 85%/80% quality
- **Gallery images**: 800px, 85% quality, responsive srcset
- **Thumbnails**: 150px, 80% quality
- **About images**: 600px, 90% quality

### Advanced Features:
- Automatic WebP conversion
- Smart cropping and focus detection
- Bandwidth-aware delivery
- CDN optimization
- Real-time transformations

## Migration from Sirv

All images have been migrated from Sirv to ImageKit:
- ✅ Static HTML files updated
- ✅ Svelte components updated  
- ✅ CSS background images optimized
- ✅ Database seeding script updated
- ✅ Responsive optimization added

## Future Enhancements

1. **AI-powered optimization** - Smart cropping and focus detection
2. **Video optimization** - Similar optimization for video content
3. **Advanced caching** - Service worker integration
4. **A/B testing** - Different optimization strategies
5. **Real user monitoring** - Track actual user experience
