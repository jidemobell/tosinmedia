<script>
  // import { onMount } from 'svelte';

export let testimonials = [];

// Reinitialize slider when testimonials are updated
// $: if (testimonials.length > 0) {
//   console.log('Reinitializing slider');
//   if (typeof window !== 'undefined' && window.$ && window.$('.testimonial-slider').slick) {
//     window.$('.testimonial-slider').slick('unslick'); // Destroy existing slider
//     window.$('.testimonial-slider').slick(); // Reinitialize slider
//   }
// }

// onMount(() => {
//   if (typeof window !== 'undefined') {
//     const scripts = [
//       { src: "/js/vendor/jquery-3.6.0.min.js", defer: false },
//       { src: "/js/slick.min.js", defer: true }, // Example: Slick slider script
//     ];

//     const loadScript = (script) => {
//       return new Promise((resolve, reject) => {
//         const el = document.createElement("script");
//         el.src = script.src;
//         el.defer = script.defer || false;
//         el.onload = resolve;
//         el.onerror = reject;
//         document.body.appendChild(el);
//       });
//     };

//     scripts.reduce((promise, script) => {
//       return promise.then(() => loadScript(script));
//     }, Promise.resolve()).then(() => {
//       console.log('All scripts loaded');
//       if (window.$ && window.$('.testimonial-slider').slick) {
//         window.$('.testimonial-slider').slick(); // Initialize slider
//       }
//     });
//   }
// });
</script>


<!-- <div class="section" data-anchor="fourth-section"> -->
 <!-- bg-image-5 -->
  <section id="testimonial-area" class="cr-section testimonial-area section-padding-xlg" data-white-overlay="9.5">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-8 col-12">
          <div class="section-title">
            <h2>What Our Clients Say</h2>
            <p>Hear from our satisfied clients about their experiences working with us.</p>
          </div>
        </div>
      </div>
      <div class="row testimonial-slider">
      <!-- {#if testimonials.length > 0} -->
        {#each testimonials as testimonial}
        <div class="col-12">
          <div class="testimonial text-center">
            <span class="testimonial-image">
              <img src={testimonial.image || '/img/author-image/author-image-3.png'} alt={testimonial.name} />
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
        <!-- {:else}
    <p>Loading testimonials...</p>
  {/if} -->

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
<!-- </div> -->



<style>
  #testimonial-area {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  #testimonial-area::before {
  content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/img/bg/newbg/fabrizio-conti.jpg'); /* Path to your image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2; /* Adjust transparency */
    z-index: 1;
}


#testimonial-area > * {
    position: relative;
    z-index: 2; 
  }

.testimonial-slider {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Add spacing between cards */
}

/* .testimonial {
  flex: 1 1 calc(33.333% - 20px); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.062);
  min-height: 320px; 
  margin: 3px;
} */

.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Vertically center content */
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.062);
  min-height: 320px;
  margin: 3px;
  flex: 1;
}

.testimonial-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px; /* Reduced space below image */
  /* border: red solid 2px; */
}

.testimonial p {
  margin-top: 0;
  margin-bottom: 10px; /* Reduced space below message */
  text-align: center;
}

.testimonial h5 {
  margin-top: 0;
  margin-bottom: 6px; /* Reduced space below name */
  text-align: center;
}

.testimonial h6 {
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
}

</style>