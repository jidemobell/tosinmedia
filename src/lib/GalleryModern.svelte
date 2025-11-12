<script>
  import { onMount } from 'svelte';
  
  let selectedImage = null;
  let isLoading = true;
  let allImages = [];
  let displayedImages = [];
  let imagesPerPage = 12;
  let currentPage = 0;
  let hasMore = false;
  let totalPages = 0;
  
  $: hasMore = allImages.length > 0 && currentPage < totalPages;
  $: hasPrevious = currentPage > 1;
  
  onMount(async () => {
    // Fetch images from Firebase
    try {
      const res = await fetch(
        "https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json"
      );
      const data = await res.json();
      allImages = Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }));
      console.log('Total images fetched:', allImages.length);
      // Sort by createdAt (newest first) for consistent ordering
      allImages.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      // Calculate total pages
      totalPages = Math.ceil(allImages.length / imagesPerPage);
      // Load first page
      loadPage(1);
      console.log('Loaded page 1 of', totalPages, '- showing:', displayedImages.length);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      isLoading = false;
    }
  });
  
  function loadPage(page) {
    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    displayedImages = allImages.slice(start, end);
    currentPage = page;
    console.log('Page', page, 'loaded - showing:', displayedImages.length, 'images');
    // Scroll to top of gallery
    if (page > 1) {
      document.getElementById('portfolio-modern')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  function nextPage() {
    if (currentPage < totalPages) {
      loadPage(currentPage + 1);
    }
  }
  
  function previousPage() {
    if (currentPage > 1) {
      loadPage(currentPage - 1);
    }
  }
  
  function openModal(image) {
    selectedImage = image;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    selectedImage = null;
    document.body.style.overflow = 'auto';
  }
  
  function handleKeydown(event) {
    if (event.key === 'Escape') closeModal();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="portfolio-modern" class="portfolio-modern section-padding-xlg">
  <div class="container-fluid">
    <!-- Section Header -->
    <div class="section-header">
      <div class="header-content">
        <span class="section-tag">Portfolio</span>
        <h2 class="section-title">Our Work</h2>
        <p class="section-description">
          A collection of moments captured, stories told, and memories created
        </p>
      </div>
    </div>
    
    <!-- Gallery Grid -->
    {#if isLoading}
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Loading gallery...</p>
      </div>
    {:else}
      <div class="gallery-grid">
        {#each displayedImages as image, index (image.id)}
          <div 
            class="gallery-item"
            style="--delay: {index}s"
            on:click={() => openModal(image)}
            on:keydown={(e) => e.key === 'Enter' && openModal(image)}
            tabindex="0"
            role="button"
          >
            <div class="image-wrapper">
              <img 
                src={image.url}
                alt={image.alt || image.title || 'Gallery image'}
                loading="lazy"
              />
              <div class="image-overlay">
                <div class="overlay-content">
                  <h3>{image.title || image.alt || 'Untitled'}</h3>
                  {#if image.category}
                    <span class="category">{image.category}</span>
                  {/if}
                  <button class="view-btn" aria-label="View image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <!-- Pagination Controls -->
      {#if totalPages > 1}
        <div class="load-more-container">
          <div class="pagination-controls">
            <button 
              class="pagination-btn" 
              on:click={previousPage} 
              disabled={!hasPrevious}
              aria-label="Previous page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Previous
            </button>
            
            <p class="images-count">
              Page {currentPage} of {totalPages} • Showing {displayedImages.length} of {allImages.length} images
            </p>
            
            <button 
              class="pagination-btn" 
              on:click={nextPage} 
              disabled={!hasMore}
              aria-label="Next page"
            >
              Next
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      {/if}
    {/if}
  </div>
</section>

<!-- Modal -->
{#if selectedImage}
  <div 
    class="modal-overlay" 
    on:click={closeModal}
    on:keydown={(e) => e.key === 'Enter' && closeModal()}
    role="button"
    tabindex="0"
  >
    <button class="modal-close" on:click={closeModal} aria-label="Close modal">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <div 
      class="modal-content" 
      on:click|stopPropagation
      on:keydown={(e) => e.key === 'Enter' && e.stopPropagation()}
      role="presentation"
    >
      <img src={selectedImage.url} alt={selectedImage.alt || selectedImage.title || 'Gallery image'} />
      {#if selectedImage.title || selectedImage.alt}
        <div class="modal-info">
          <h3>{selectedImage.title || selectedImage.alt || 'Untitled'}</h3>
          {#if selectedImage.category}
            <span class="modal-category">{selectedImage.category}</span>
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  /* Section Styling */
  .portfolio-modern {
    background: #0a0a0a;
    color: #fff;
    position: relative;
    overflow: visible;
    height: auto;
    padding-bottom: 60px;
    margin-bottom: 0;
    z-index: 1;
  }
  
  .section-padding-xlg {
    padding: 120px 0 40px 0;
  }
  
  .container-fluid {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 40px;
  }
  
  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .section-tag {
    display: inline-block;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #d4af37;
    margin-bottom: 20px;
    font-weight: 500;
  }
  
  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin: 0 0 20px 0;
    letter-spacing: -0.02em;
  }
  
  .section-description {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  /* Loading State */
  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    gap: 20px;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top-color: #d4af37;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  /* Gallery Grid - Masonry Layout */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    width: 100%;
    grid-auto-rows: 250px;
  }
  
  .gallery-item {
    position: relative;
    cursor: pointer;
    opacity: 1;
  }
  
  /* Random heights for masonry effect */
  .gallery-item:nth-child(4n + 1) {
    grid-row: span 2;
  }
  
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
    background: #1a1a1a;
  }
  
  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }
  
  .gallery-item:hover .image-wrapper img {
    transform: scale(1.1);
  }
  
  /* Image Overlay */
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex;
    align-items: flex-end;
    padding: 30px;
  }
  
  .gallery-item:hover .image-overlay,
  .gallery-item:focus .image-overlay {
    opacity: 1;
  }
  
  .overlay-content {
    width: 100%;
  }
  
  .overlay-content h3 {
    font-size: 1.25rem;
    margin: 0 0 10px 0;
    font-weight: 600;
  }
  
  .category {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #d4af37;
    padding: 4px 12px;
    background: rgba(212, 175, 55, 0.2);
    border-radius: 20px;
  }
  
  .view-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #fff;
  }
  
  .view-btn:hover {
    background: #d4af37;
    transform: scale(1.1);
  }
  
  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    animation: scaleIn 0.4s ease;
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .modal-content img {
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 8px;
  }
  
  .modal-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    border-radius: 0 0 8px 8px;
  }
  
  .modal-info h3 {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
  }
  
  .modal-category {
    color: #d4af37;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  .modal-close {
    position: fixed;
    top: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10000;
    color: #fff;
  }
  
  .modal-close:hover {
    background: #d4af37;
    transform: rotate(90deg);
  }
  
  /* Pagination Controls */
  .load-more-container {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
    z-index: 10;
    width: 100%;
    clear: both;
  }
  
  .pagination-controls {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .pagination-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 30px;
    font-size: 0.95rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #fff;
    background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }
  
  .pagination-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }
  
  .pagination-btn:active:not(:disabled) {
    transform: translateY(0);
  }
  
  .pagination-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #555;
    box-shadow: none;
  }
  
  .pagination-btn svg {
    transition: transform 0.3s ease;
  }
  
  .images-count {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }
  
  /* Responsive */
  @media (max-width: 1200px) {
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  
  @media (max-width: 768px) {
    .section-padding-xlg {
      padding: 80px 0;
    }
    
    .container-fluid {
      padding: 0 20px;
    }
    
    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
    }
    
    .gallery-item:nth-child(3n + 1) {
      grid-row: span 1;
    }
    
    .modal-overlay {
      padding: 20px;
    }
    
    .modal-close {
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
    }
    
    .pagination-btn {
      padding: 12px 24px;
      font-size: 0.85rem;
    }
    
    .pagination-controls {
      gap: 15px;
    }
    
    .load-more-container {
      margin-top: 40px;
    }
  }
</style>
