<script>
  import { onMount, tick, afterUpdate } from "svelte";
  export let images = [];

  let sliderContainer;
  let isSliderInitialized = false;

  // Optional: fetch images from Firebase if not passed as prop
  onMount(async () => {
    console.log('GallerySlider mounted');
    
    if (images.length === 0) {
      console.log('Fetching images from Firebase');
      const res = await fetch(
        "https://petermark-9ba50-default-rtdb.firebaseio.com/gallery.json"
      );
      const data = await res.json();
      images = Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }));
      console.log('Fetched images:', images.length);
    }
  });

  // Initialize slider after images are loaded and DOM is updated
  afterUpdate(() => {
    if (images.length > 0 && !isSliderInitialized && typeof window !== 'undefined' && window.$) {
      setTimeout(() => {
        initializeSlider();
      }, 300);
    }
  });

  function initializeSlider() {
    if (isSliderInitialized) return;
    
    const $slider = window.$(sliderContainer);
    console.log('Initializing slider, found elements:', $slider.length, 'images:', images.length);
    
    if ($slider.length === 0) {
      console.log('Slider container not found');
      return;
    }
    
    try {
      // Destroy any existing slider
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
      
      $slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        prevArrow: '<button class="testimonial-arrow-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="testimonial-arrow-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
      isSliderInitialized = true;
      console.log('Slider initialized successfully');
      
    } catch (error) {
      console.error('Error initializing slider:', error);
    }
  }

  // Reactive statement to reinitialize when images change
  $: if (images.length > 0 && typeof window !== 'undefined') {
    isSliderInitialized = false;
    setTimeout(() => {
      initializeSlider();
    }, 200);
  }

  // Force initialization function (can be called manually)
  function forceInitialize() {
    isSliderInitialized = false;
    initializeSlider();
  }

  // Add to window for debugging
  if (typeof window !== 'undefined') {
    window.forceGallerySlider = forceInitialize;
  }

  let selectedImage = null;
</script>

<section
  id="testimonial-area"
  class="cr-section testimonial-area section-padding-xlg"
  data-white-overlay="9.5"
>
  <div class="container">
    <div class="row">
      <div class="col-xl-5 col-lg-6 col-md-8 col-12">
        <div class="section-title">
          <h2>Photo Gallery</h2>
          <p>Click an image to view it larger.</p>
        </div>
      </div>
    </div>
    <!-- Gallery Slider Container -->
    <div class="gallery-slider-wrapper">
      <div class="row gallery-slider" bind:this={sliderContainer}>
        {#each images as img}
          <div class="col-12">
        <div class="testimonial text-center">
          <button class="testimonial-image" on:click={() => selectedImage = img.url}>
            <img
              src={img.url}
              alt={img.alt || "Gallery Image"}
            />
          </button>
          <span class="testimonial-border-topleft"></span>
          <span class="testimonial-border-topright"></span>
          <span class="testimonial-border-bottomleft"></span>
          <span class="testimonial-border-bottomright"></span>
        </div>
      </div>
        {/each}
      </div>
    </div>
  </div>

  {#if selectedImage}
    <div 
      class="modal" 
      on:click={() => (selectedImage = null)}
      on:keydown={(e) => e.key === 'Escape' && (selectedImage = null)}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <div class="modal-content">
        <button 
          class="modal-close" 
          on:click={() => (selectedImage = null)}
          aria-label="Close modal"
        >
          <i class="fa fa-times"></i>
        </button>
        <img src={selectedImage} class="zoomed-image" alt="Enlarged view" />
      </div>
    </div>
  {/if}
</section>

<!-- <script>
  let selectedImage = null;
</script> -->

<style>
.gallery-slider {
  /* Remove flex properties when Slick is active */
  display: block !important;
  margin-top: 35px;
  width: 100%;
  overflow: visible !important;
  position: relative !important;
}

.gallery-slider > div {
  padding: 0 15px;
  box-sizing: border-box;
}

/* Ensure slider container has proper dimensions */
:global(.gallery-slider.slick-initialized) {
  display: block !important;
  width: 100%;
  position: relative !important;
}

.testimonial {
  min-width: 0;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.062);
  margin: 3px;
  position: relative;
  text-align: center;
  padding: 38px 35px 30px 30px;
  min-height: 420px;
}

#testimonial-area {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#testimonial-area::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/img/bg/newbg/fabrizio-conti.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
  z-index: 1;
}

#testimonial-area > * {
  position: relative;
  z-index: 2;
}

.testimonial-image {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  height: auto !important;
  margin-bottom: 10px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.testimonial-image img {
  width: 100% !important;
  max-width: 100% !important;
  max-height: 320px !important;
  height: auto !important;
  object-fit: cover !important;
  cursor: pointer;
  transition: box-shadow 0.2s;
  display: block;
  margin: 0 auto;
}

.testimonial-border-topleft,
.testimonial-border-topright,
.testimonial-border-bottomleft,
.testimonial-border-bottomright {
  position: absolute;
  z-index: -1;
  pointer-events: none;
}

/* Gallery slider wrapper */
.gallery-slider-wrapper {
  position: relative;
}

.gallery-slider {
  /* Remove flex properties when Slick is active */
  display: block !important;
  margin-top: 35px;
  width: 100%;
  overflow: visible !important;
  position: relative !important;
}

.gallery-slider > div {
  padding: 0 15px;
  box-sizing: border-box;
}

/* Ensure slider container has proper dimensions */
:global(.gallery-slider.slick-initialized) {
  display: block !important;
  width: 100%;
  position: relative !important;
}

/* Match the exact testimonial slider arrow styles */
:global(.gallery-slider button[class*=testimonial-arrow]) {
  height: 40px !important;
  width: 40px !important;
  color: #333333 !important;
  border: 1px solid #333333 !important;
  background: transparent !important;
  text-align: center !important;
  font-size: 30px !important;
  line-height: 1 !important;
  margin-right: 10px !important;
  position: absolute !important;
  border-radius: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:global(.gallery-slider button[class*=testimonial-arrow].testimonial-arrow-prev) {
  right: 50px !important;
  top: -100px !important;
  left: auto !important;
}

:global(.gallery-slider button[class*=testimonial-arrow].testimonial-arrow-next) {
  right: 0 !important;
  top: -100px !important;
  left: auto !important;
}

:global(.gallery-slider button[class*=testimonial-arrow]:last-child) {
  margin-left: 0 !important;
}

:global(.gallery-slider button[class*=testimonial-arrow] i) {
  line-height: 36px !important;
}

:global(.gallery-slider button[class*=testimonial-arrow]:hover) {
  background: #eab454 !important;
  color: #ffffff !important;
  border-color: #eab454 !important;
}

/* Ensure arrows are visible on the slider container */
:global(.gallery-slider) {
  position: relative !important;
}

:global(.gallery-slider .slick-arrow) {
  display: block !important;
}

/* Modal for zoomed image */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: -10px;
  background: #d4af37;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.modal-close:hover {
  background: #b8941f;
  transform: scale(1.1);
}

.zoomed-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

/* Responsive adjustments - match testimonial slider exactly */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .gallery-slider {
    margin-top: 25px;
  }
}

@media only screen and (max-width: 767px) {
  .testimonial {
    min-height: 220px;
    padding: 20px 15px;
  }
  .testimonial-image img {
    max-height: 180px !important;
  }
  
  .gallery-slider {
    padding-bottom: 50px;
  }
  
  :global(.gallery-slider button[class*=testimonial-arrow]) {
    height: 35px !important;
    width: 35px !important;
    font-size: 26px !important;
    margin: 0 !important;
  }
  
  :global(.gallery-slider button[class*=testimonial-arrow].testimonial-arrow-prev) {
    top: auto !important;
    bottom: 0 !important;
    left: auto !important;
    right: calc(50% + 5px) !important;
  }
  
  :global(.gallery-slider button[class*=testimonial-arrow].testimonial-arrow-next) {
    top: auto !important;
    bottom: 0 !important;
    right: auto !important;
    left: calc(50% + 5px) !important;
  }
  
  :global(.gallery-slider button[class*=testimonial-arrow] i) {
    line-height: 32px !important;
  }
  
  /* Modal adjustments for mobile */
  .modal {
    padding: 10px;
  }
  
  .modal-close {
    top: -30px;
    right: 0;
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
}
</style>
