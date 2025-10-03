<script>
  import { onMount } from 'svelte';

  let isMobile = true; // Start as mobile by default for safety

  // Detect if the viewport is mobile
  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth <= 991; // Use same breakpoint as meanmenu (991px)
    };
    
    checkMobile(); // Check immediately
    
    // Also check on resize
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });
</script>


<!-- Hero Area -->
<div class="hero-area">
  <div class="hero-slider hero-silder-active">

    <!-- Hero Area Single Slide : video section -->
    <!-- <video width="100%" height="300px" id="player" controls loop >
      <source src="images/videos/IntroAmen.mp4" type="video/mp4">
   </video> -->
   <!-- <video id="background-video" autoplay loop muted> -->
    <!-- <source src="img/videos/output_video.webm" type="video/webm"> -->
    <!-- <source src="https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/IntroAmen.webm" type="video/mp4"> -->
  <!-- </video> -->

    <!-- Hero Area Single Slide: Video or Image -->
    {#if !isMobile}
      <!-- Show video for non-mobile viewports -->
      <div class="hero-video-container desktop-only">
        <video id="background-video" autoplay loop muted>
          <source src="https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/IntroAmen.webm" type="video/mp4">
        </video>
      </div>
    {:else}
      <!-- Show image for mobile viewports -->
       <div class="hero-single-slide bg-image-0">
      <div class="container">
        <div class="hero-slide-text">
          <h1>Stay With Your <br>Dream & Passion</h1>
          <p>Photography is about capturing <br> souls not smiles </p>
        </div>
      </div>
    </div>
    {/if}
    <!--// Hero Area Single Slide -->
  
    <!--// Hero Area Single Slide -->

    <!-- Hero Area Single Slide -->
    <div class="hero-single-slide bg-image-1">
      <div class="container">
        <div class="hero-slide-text">
          <h1>Stay With Your <br>Dream & Passion</h1>
          <p>Photography is about capturing <br> souls not smiles </p>
        </div>
      </div>
    </div>
    <!--// Hero Area Single Slide -->

    <!-- Hero Area Single Slide -->
    <div class="hero-single-slide bg-image-2">
      <div class="container">
        <div class="hero-slide-text">
          <h1>Stay With Your <br>Dream & Passion</h1>
          <p>Photography is about capturing <br> souls not smiles </p>
        </div>
      </div>
    </div>
    <!--// Hero Area Single Slide -->

    <!-- Hero Area Single Slide -->
    <!-- <div class="hero-single-slide bg-image-3">
      <div class="container">
        <div class="hero-slide-text">
          <h1>Stay With Your <br>Dream & Passion</h1>
          <p>Photography is about capturing <br> souls not smiles </p>
        </div>
      </div>
    </div> -->
    <!--// Hero Area Single Slide -->

  </div>

  <div class="hero-area-outer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="social-icons">
            <ul>
              <li><a href="/" aria-label="Open navigation menu"><i class="fa fa-facebook"></i></a></li>
              <li><a href="/" aria-label="Open navigation menu"><i class="fa fa-twitter"></i></a></li>
              <!-- <li><a href="/" aria-label="Open navigation menu"><i class="fa-brands fa-tiktok"></i></a></li> -->
              <!-- <li><a href="/" aria-label="Open navigation menu"><i class="fa fa-google-plus"></i></a></li> -->
              <!-- <li><a href="/" aria-label="Open navigation menu"><i class="fa fa-linkedin"></i></a></li> -->
              <!-- <li><a href="/" aria-label="Open navigation menu"><i class="fa fa-pinterest-p"></i></a></li> -->
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="hero-pagination"></div>
        </div>
      </div>
    </div>
  </div>

</div>
<!--// Hero Area -->


