<script>
  import { onMount } from 'svelte';
  
  let loadingImages = new Set();
  let loadedImages = new Set();
  let failedImages = new Set();
  
  export let showStats = false;
  
  // Performance tracking
  let totalLoadTime = 0;
  let imageCount = 0;
  
  onMount(() => {
    // Listen for image load events
    const handleImageLoad = (event) => {
      if (event.target.tagName === 'IMG') {
        const src = event.target.src;
        loadingImages.delete(src);
        loadedImages.add(src);
        
        // Track performance
        if (event.target.dataset.loadStart) {
          const loadTime = Date.now() - parseInt(event.target.dataset.loadStart);
          totalLoadTime += loadTime;
          imageCount++;
        }
        
        // Trigger reactivity
        loadedImages = loadedImages;
      }
    };
    
    const handleImageError = (event) => {
      if (event.target.tagName === 'IMG') {
        const src = event.target.src;
        loadingImages.delete(src);
        failedImages.add(src);
        
        // Trigger reactivity
        failedImages = failedImages;
      }
    };
    
    const handleImageStart = (event) => {
      if (event.target.tagName === 'IMG') {
        const src = event.target.src;
        loadingImages.add(src);
        event.target.dataset.loadStart = Date.now().toString();
        
        // Trigger reactivity
        loadingImages = loadingImages;
      }
    };
    
    document.addEventListener('load', handleImageLoad, true);
    document.addEventListener('error', handleImageError, true);
    document.addEventListener('loadstart', handleImageStart, true);
    
    return () => {
      document.removeEventListener('load', handleImageLoad, true);
      document.removeEventListener('error', handleImageError, true);
      document.removeEventListener('loadstart', handleImageStart, true);
    };
  });
  
  $: averageLoadTime = imageCount > 0 ? (totalLoadTime / imageCount).toFixed(2) : 0;
</script>

{#if showStats}
  <div class="image-performance-stats">
    <h4>Image Performance Stats</h4>
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-label">Loading:</span>
        <span class="stat-value">{loadingImages.size}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Loaded:</span>
        <span class="stat-value">{loadedImages.size}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Failed:</span>
        <span class="stat-value">{failedImages.size}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Avg Load Time:</span>
        <span class="stat-value">{averageLoadTime}ms</span>
      </div>
    </div>
  </div>
{/if}

<style>
  .image-performance-stats {
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
    z-index: 9999;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    margin-top: 5px;
  }
  
  .stat-item {
    display: flex;
    justify-content: space-between;
  }
  
  .stat-label {
    margin-right: 10px;
  }
  
  .stat-value {
    font-weight: bold;
  }
</style>
