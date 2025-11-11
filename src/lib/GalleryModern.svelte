<script>
  import { onMount } from 'svelte';
  
  let selectedImage = null;
  let isLoading = true;
  let images = [];
  
  onMount(async () => {
    // Fetch images from Firebase
    try {
      const res = await fetch(
        "https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json"
      );
      const data = await res.json();
      images = Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      isLoading = false;
    }
  });
  
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
        {#each images as image, index}
          <div 
            class="gallery-item"
            style="--delay: {index * 0.1}s"
            on:click={() => openModal(image)}
            on:keydown={(e) => e.key === 'Enter' && openModal(image)}
            tabindex="0"
            role="button"
          >
            <div class="image-wrapper">
              <img 
                src={image.url}
                alt={image.title || 'Gallery image'}
                loading="lazy"
              />
              <div class="image-overlay">
                <div class="overlay-content">
                  <h3>{image.title || 'Untitled'}</h3>
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
    <div class="modal-content" on:click|stopPropagation>
      <img src={selectedImage.url} alt={selectedImage.title || 'Gallery image'} />
      {#if selectedImage.title}
        <div class="modal-info">
          <h3>{selectedImage.title}</h3>
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
    overflow: hidden;
  }
  
  .section-padding-xlg {
    padding: 120px 0;
  }
  
  .container-fluid {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 40px;
  }
  
  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 80px;
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    grid-auto-flow: dense;
  }
  
  .gallery-item {
    position: relative;
    cursor: pointer;
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: var(--delay);
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Random heights for masonry effect */
  .gallery-item:nth-child(3n + 1) {
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
  }
</style>
