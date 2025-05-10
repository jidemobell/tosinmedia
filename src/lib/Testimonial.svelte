<script>
  import { onMount } from 'svelte';

  let testimonials = [];

  onMount(async () => {
    try {
      const response = await fetch('https://tosinpeter-worker.testmobell.workers.dev/api/testimonials');
      console.log('Response:', response);
      if (response.ok) {
        testimonials = await response.json();
        console.log('Testimonials fetched successfully:', testimonials);
      } else {
        console.error('Failed to fetch testimonials');
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  });
</script>


<div class="section" data-anchor="fourth-section">
  <section id="testimonial-area" class="cr-section testimonial-area section-padding-xlg bg-image-5" data-white-overlay="9.5">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-8 col-12">
          <div class="section-title">
            <h2>Testimonial <br> What We Found</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page buildup</p>
          </div>
        </div>
      </div>
      <div class="row testimonial-slider">

        {#each testimonials as testimonial}
        <div class="col-12">
          <div class="testimonial text-center">
            <span class="testimonial-image">
              <img src={testimonial.image || '/img/author-image/placeholder.png'} alt={testimonial.name} />
            </span>
            <p>{testimonial.message}</p>
            <h5>{testimonial.name}</h5>
            <h6>{testimonial.role}</h6>
            <span class="testimonial-border-topleft"></span>
            <span class="testimonial-border-topright"></span>
            <span class="testimonial-border-bottomleft"></span>
            <span class="testimonial-border-bottomright"></span>
          </div>
        </div>
        {/each}

        <!-- Single Testimonial -->
        <!-- <div class="col-12">
          <div class="testimonial text-center">
            <span class="testimonial-image">
              <img src="img/author-image/author-image-3.png" alt="author ">
            </span>
            <p>It is a long established fact that a reader will be has a more-or-less normal distribution of letters, as anopposed formally not using.</p>
            <h5>LUISE HANERIKA</h5>
            <h6>Fashion Designer</h6>
            <span class="testimonial-border-topleft"></span>
            <span class="testimonial-border-topright"></span>
            <span class="testimonial-border-bottomleft"></span>
            <span class="testimonial-border-bottomright"></span>
          </div>
        </div> -->
        <!--// Single Testimonial -->

        <!-- Single Testimonial -->
        <!-- <div class="col-12">
          <div class="testimonial text-center">
            <span class="testimonial-image"><img src="img/author-image/author-image-4.png" alt="author imge"></span>
            <p>It is a long established fact that a reader will be has a more-or-less normal distribution of letters, as anopposed formally not using.</p>
            <h5>LUISE HANERIKA</h5>
            <h6>Fashion Designer</h6>
            <span class="testimonial-border-topleft"></span>
            <span class="testimonial-border-topright"></span>
            <span class="testimonial-border-bottomleft"></span>
            <span class="testimonial-border-bottomright"></span>
          </div>
        </div> -->
        <!--// Single Testimonial -->

        <!-- Single Testimonial -->
        <!-- <div class="col-12">
          <div class="testimonial text-center">
            <span class="testimonial-image"><img src="img/author-image/author-image-5.png" alt="author"></span>
            <p>It is a long established fact that a reader will be has a more-or-less normal distribution of letters, as anopposed formally not using.</p>
            <h5>LUISE HANERIKA</h5>
            <h6>Fashion Designer</h6>
            <span class="testimonial-border-topleft"></span>
            <span class="testimonial-border-topright"></span>
            <span class="testimonial-border-bottomleft"></span>
            <span class="testimonial-border-bottomright"></span>
          </div>
        </div> -->
        <!--// Single Testimonial -->

      </div>
    </div>
  </section>
</div>