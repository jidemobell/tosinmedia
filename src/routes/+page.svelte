<script>
  import AboutModern from "../lib/AboutModern.svelte";
  import HeroAreaModern from "../lib/HeroAreaModern.svelte";
	import GalleryModern from "../lib/GalleryModern.svelte";
  import Testimonial from "../lib/Testimonial.svelte";
  import ContactArea from "../lib/ContactArea.svelte";
	import Footer from "..//lib/Footer.svelte";
	import Header from "..//lib/Header.svelte";
  import GallerySlider from "../lib/GallerySlider.svelte";

	// import type { PageProps } from './$types';

	// let { data, form }: PageProps = $props();

  export let data;
	const {testimonials} = data;
	// console.log('Testimonials:', testimonials);
</script>
<main>
	<!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
	<!-- Add your site or application content here -->
	<!-- Wrapper -->
	<Header />
	<div id="wrapper" class="wrapper">
		<span id="home"></span>
		<!-- <Header /> -->
		<!-- Fullpage Area Name -->
		<ul id="section-name" class="section-name">
			<li data-menuanchor="first-section" class="active"><a href="#first-section">Welcome</a></li>
			<li data-menuanchor="second-section"><a href="#second-section">About</a></li>
			<li data-menuanchor="third-section"><a href="#third-section">Portfolios</a></li>
			<li data-menuanchor="fourth-section"><a href="#fourth-section">Testimonials</a></li>
			<li data-menuanchor="fifth-section"><a href="#fifth-section">Contact</a></li>
		</ul>
		<!--// Fullpage Area Name -->

		<div id="fullpage">
			<div class="section" data-anchor="first-section">
			 <HeroAreaModern/>
			</div>
			
			<div class="section" data-anchor="second-section">
      	<AboutModern/>
			</div>
			
			<div class="section" data-anchor="third-section">
				<GalleryModern/>
			</div>
			
			<div class="section" data-anchor="fourth-section">
				<GallerySlider />
			</div>
      
			<div class="section" data-anchor="fifth-section">
				<!-- Contact Area -->
				<ContactArea/>
				<!--// Contact Area -->
				<!-- Footer Area -->
				<Footer />
				<!--// Footer Area -->
			</div>
		</div>
	</div>
	<!--// Wrapper -->

	<!-- Js Files -->
	<!-- <script src="js/looper.js"></script> -->
	<!-- <script src="js/vendor/modernizr-3.11.2.min.js"></script>
	<script src="js/vendor/jquery-3.6.0.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/plugins.js"></script>
	<script src="js/main.js"></script> -->
</main>

<!-- </html> -->


