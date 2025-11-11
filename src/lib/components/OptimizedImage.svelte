<script>
  import { getOptimizedImageUrl, getResponsiveSrcSet, getImageSizes } from '../utils/imageOptimization.js';

  export let src = '';
  export let alt = '';
  export let width = null;
  export let height = null;
  export let quality = 80;
  export let className = '';
  export let type = 'default'; // gallery, hero, thumbnail, about
  export let loading = 'lazy';
  export let sizes = null;
  export let responsive = true;
  export let placeholder = true;
  export let blur = null;

  // Extract image path from full URL
  $: imagePath = src.replace('https://ik.imagekit.io/jidemobell2025/', '');
  
  // Generate optimized URLs
  $: optimizedSrc = getOptimizedImageUrl(imagePath, {
    width,
    height,
    quality,
    blur
  });

  $: srcSet = responsive ? getResponsiveSrcSet(imagePath, { quality, height }) : '';
  $: imageSizes = sizes || getImageSizes(type);

  // Generate low-quality placeholder
  $: placeholderSrc = placeholder ? getOptimizedImageUrl(imagePath, {
    width: 20,
    quality: 20,
    blur: 10
  }) : '';
</script>

<img 
  src={optimizedSrc}
  srcset={responsive ? srcSet : undefined}
  sizes={responsive ? imageSizes : undefined}
  {alt}
  class={className}
  {loading}
  style={placeholder ? `background-image: url(${placeholderSrc}); background-size: cover; background-position: center;` : ''}
  on:load
  on:error
/>

<style>
  img {
    transition: opacity 0.3s ease-in-out;
  }
  
  img[src=""] {
    opacity: 0;
  }
</style>
