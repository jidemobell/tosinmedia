<script>
  import OptimizedImage from './components/OptimizedImage.svelte';
</script>

<div class="section" data-anchor="second-section">

  <!-- bg-image-4 -->
  <!-- <section id="about-area" class="cr-section about-area section-padding-xlg " data-white-overlay="9.5"> -->
  <section id="about-area" class="cr-section about-area section-padding-xlg " data-white-overlay="9.5">
    <div class="container">
      <div class="row align-items-start align-items-xl-center">
        <div class="col-lg-6 col-12 order-2 order-lg-1">
          <div class="about-content textblock">
            <h5>HELLOW FRIENDS</h5>
            <h2>I am Tosin Peter, Photographer based in Maryland</h2>
            <p>I blend creativity with technical precision to deliver stunning, timeless images.</p> 
            <p>Whether it’s a heartfelt portrait, a joyous celebration, or the quiet beauty of nature, I strive to tell your story with artistry and emotion.</p>
            <p>Let’s create something unforgettable together. [Contact me/Book a session] today!</p>
            <!-- <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed using.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> -->
            <span class="vertical-bar"></span>
            <a href="#about-area" class="readmore-button">KNOW MORE</a>
          </div>
        </div>
        <div class="col-lg-6 col-12 order-1 order-lg-2">
          <div class="about-image">
            <OptimizedImage 
              src="https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/tosinpeter.png" 
              alt="about"
              type="about"
              width={600}
              quality={90}
            />
          </div>
        </div>
      </div>
    </div>
  </section>

</div>