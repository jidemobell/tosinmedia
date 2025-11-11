<script>
  import { Button } from "carbon-components-svelte";
  import Calendar from "carbon-icons-svelte/lib/Calendar.svelte"; // Import the booking icon
  // import { onMount } from "svelte";
  // import TextBold from "carbon-icons-svelte/lib/TextBold.svelte";
  // let buttonStyle = "background-color: black; color: white; font-weight: bold; padding: 10px 33px; border-radius: 2px;";

//  let buttonStyle = "background-color: black; color: white; font-weight: bold; padding: 10px 33px; border-radius: 2px;";

  // Adjust styles for smaller screens
  //  onMount(() => {
  //   if (window.innerWidth <= 767) {
  //     console.log("Mobile view detected");
  //     buttonStyle = "background-color: black; color: white; font-weight: bold; padding: 8px 20px; border-radius: 2px; font-size: 14px;";
  //   }
  // });
</script>
  <header class="header sticky-header fixed-header ">
    <div class="container">
      <div class="header-inner d-none d-lg-flex">
        <div class="header-logo">
          <a href="/">
            <img src="img/logo/petermark3.svg" alt="THEPETERMAK logo" style="height: 32px;">
          </a>
        </div>
        <div class="header-navigation">
          <button class="header-navigation-trigger" aria-label="Open navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav class="main-navigation">
            <ul class="section-name">
              <li data-menuanchor="first-section" class="active"><a href="#first-section">Welcome</a></li>
              <li data-menuanchor="second-section"><a href="#second-section">About</a></li>
              <li data-menuanchor="third-section"><a href="#third-section">Portfolios</a></li>
              <li data-menuanchor="fourth-section"><a href="#fourth-section">Gallery</a></li>
              <li data-menuanchor="fifth-section"><a href="#fifth-section">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="header-cta">
          <!-- <a href="https://calendly.com/your-calendly-link" target="_blank" class="btn btn-primary">
            Book Appointment
          </a> -->
          <Button 
          kind="secondary"
          href="https://calendar.app.google/7CTo1GLHHSRkEmxe8"
          target="_blank"
          icon={Calendar}
          iconDescription="Book Appointment"
          style="background-color: black; color: white; font-weight: bold; padding: 10px 33px; border-radius: 2px;"
          >
          <span class="button-text">Book Appointment</span>  
        </Button>
        
        </div>
      </div>
      <div class="mobile-menu-wrapper d-block d-lg-none">
        <div class="mobile-menu clearfix">
          <a href="/" class="mobile-logo">
            <img src="img/logo/petermark3.svg" alt="THEPETERMAK mobile logo">
          </a>
        </div>
      </div>
    </div>
  </header>


  <style>
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-navigation {
    margin-left: auto;
  }

  .header-cta {
    margin-left: 20px;
  }

  .button-text {
    margin-right: 8px; /* Add spacing between text and icon */
  }


</style>