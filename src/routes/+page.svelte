<script>
  import AboutModern from "../lib/AboutModern.svelte";
  import HeroAreaModern from "../lib/HeroAreaModern.svelte";
	import GalleryModern from "../lib/GalleryModern.svelte";
  import Testimonial from "../lib/Testimonial.svelte";
  import ContactArea from "../lib/ContactArea.svelte";
	import Footer from "..//lib/Footer.svelte";
	import Header from "..//lib/Header.svelte";

	// import type { PageProps } from './$types';

	// let { data, form }: PageProps = $props();

  export let data;
	const {testimonials} = data;
	// console.log('Testimonials:', testimonials);
</script>

<svelte:head>
	<style>
		html {
			scroll-behavior: smooth;
		}
		#main-content > div {
			min-height: 100vh;
			position: relative;
		}
		#main-content > div:nth-child(3) {
			min-height: auto;
		}
	</style>
</svelte:head>

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
		<!-- Page Navigation -->
		<ul id="section-name" class="section-name">
			<li class="active"><a href="#first-section">Welcome</a></li>
			<li><a href="#second-section">About</a></li>
			<li><a href="#third-section">Portfolio</a></li>
			<li><a href="#fourth-section">Contact</a></li>
		</ul>
		<!--// Page Navigation -->

		<div id="main-content">
			<div id="first-section">
			 <HeroAreaModern/>
			</div>
			
			<div id="second-section">
      	<AboutModern/>
			</div>
			
			<div id="third-section">
				<GalleryModern/>
			</div>
			
			<div id="fourth-section">
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


