<script>
  import About from "../lib/About.svelte";
  import HeroArea from "../lib/HeroArea.svelte";

</script>
<main>
	<!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
	<!-- Add your site or application content here -->
	<!-- Wrapper -->
	<div id="wrapper" class="wrapper">
		<span id="home"></span>
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
			 <HeroArea/>
			</div>
      <About/>
			<div class="section" data-anchor="third-section">
				<section id="portfolio-area" class="cr-section portfolio-gallery-area section-padding-xlg bg-white">
					<div class="container">
						<div class="g-photo-topside">
							<div class="g-photo-topside-single">
								<div class="row align-items-end">
									<div class="col-xl-7 col-lg-6 col-12">
										<div class="g-photo-image">
											<img src="img/portfolio/portfolio-image-1.jpg" alt="portfolio">
										</div>
									</div>
									<div class="col-xl-5 col-lg-6 col-12">
										<div class="g-photo-content textblock">
											<h5><a href="/photo-gallery">PHOTOGRAPHY</a></h5>
											<h2><a href="/photo-details">Dark weather in hulyan forest</a></h2>
											<span class="vertical-bar"></span>
											<a href="/photo-details" class="readmore-button">Image Details</a>
										</div>
									</div>
								</div>
							</div>
							<div class="g-photo-topside-single">
								<div class="row align-items-end">
									<div class="col-xl-7 col-lg-6 col-12">
										<div class="g-photo-image">
											<img src="img/portfolio/portfolio-image-2.jpg" alt="portfolio">
										</div>
									</div>
									<div class="col-xl-5 col-lg-6 col-12">
										<div class="g-photo-content textblock">
											<h5><a href="/photo-gallery">PHOTOGRAPHY</a></h5>
											<h2><a href="/photo-details">Beautiful girl sleeping on home</a></h2>
											<span class="vertical-bar"></span>
											<a href="/photo-details" class="readmore-button">Image Details</a>
										</div>
									</div>
								</div>
							</div>
							<div class="g-photo-topside-single">
								<div class="row align-items-end">
									<div class="col-xl-7 col-lg-6 col-12">
										<div class="g-photo-image">
											<img src="img/portfolio/portfolio-image-3.jpg" alt="portfolio">
										</div>
									</div>
									<div class="col-xl-5 col-lg-6 col-12">
										<div class="g-photo-content textblock">
											<h5><a href="/photo-gallery">PHOTOGRAPHY</a></h5>
											<h2><a href="/photo-details">Awesome hair style with sunglass</a></h2>
											<span class="vertical-bar"></span>
											<a href="/photo-details" class="readmore-button">Image Details</a>
										</div>
									</div>
								</div>
							</div>
							<div class="g-photo-topside-single">
								<div class="row align-items-end">
									<div class="col-xl-7 col-lg-6 col-12">
										<div class="g-photo-image">
											<img src="img/portfolio/portfolio-image-4.jpg" alt="portfolio">
										</div>
									</div>
									<div class="col-xl-5 col-lg-6 col-12">
										<div class="g-photo-content textblock">
											<h5><a href="/photo-gallery">PHOTOGRAPHY</a></h5>
											<h2><a href="/photo-details">Exclusive art with color & creative</a></h2>
											<span class="vertical-bar"></span>
											<a href="/photo-details" class="readmore-button">Image Details</a>
										</div>
									</div>
								</div>
							</div>
							<div class="g-photo-topside-single">
								<div class="row align-items-end">
									<div class="col-xl-7 col-lg-6 col-12">
										<div class="g-photo-image">
											<img src="img/portfolio/portfolio-image-5.jpg" alt="portfolio">
										</div>
									</div>
									<div class="col-xl-5 col-lg-6 col-12">
										<div class="g-photo-content textblock">
											<h5><a href="/photo-gallery">PHOTOGRAPHY</a></h5>
											<h2><a href="/photo-details">Girl on bed with red hat & black dress</a></h2>
											<span class="vertical-bar"></span>
											<a href="/photo-details" class="readmore-button">Image Details</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="g-photo-bottomside">
							<div class="row">
								<div class="col-lg-6 order-2 order-lg-1">
									<div class="g-photo-triggers">
										<a href="/photo-gallery" class="readmore-button">Full Gallery</a>
										<span class="vertical-bar"></span>
										<div class="g-photo-arrows"></div>
										<div class="g-photo-pagination"></div>
									</div>
								</div>
								<div class="col-lg-6 order-1 order-lg-2">
									<div class="row g-photo-thumbs">
										<div class="col-lg-12">
											<img src="img/portfolio/portfolio-image-1.jpg" alt="portfolio thumb">
										</div>
										<div class="col-lg-12">
											<img src="img/portfolio/portfolio-image-2.jpg" alt="portfolio thumb">
										</div>
										<div class="col-lg-12">
											<img src="img/portfolio/portfolio-image-3.jpg" alt="portfolio thumb">
										</div>
										<div class="col-lg-12">
											<img src="img/portfolio/portfolio-image-4.jpg" alt="portfolio thumb">
										</div>
										<div class="col-lg-12">
											<img src="img/portfolio/portfolio-image-5.jpg" alt="portfolio thumb">
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

			</div>

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

							<!-- Single Testimonial -->
							<div class="col-12">
								<div class="testimonial text-center">
									<span class="testimonial-image"><img src="img/author-image/author-image-3.png" alt="author "></span>
									<p>It is a long established fact that a reader will be has a more-or-less normal distribution of letters, as anopposed formally not using.</p>
									<h5>LUISE HANERIKA</h5>
									<h6>Fashion Designer</h6>
									<span class="testimonial-border-topleft"></span>
									<span class="testimonial-border-topright"></span>
									<span class="testimonial-border-bottomleft"></span>
									<span class="testimonial-border-bottomright"></span>
								</div>
							</div>
							<!--// Single Testimonial -->

							<!-- Single Testimonial -->
							<div class="col-12">
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
							</div>
							<!--// Single Testimonial -->

							<!-- Single Testimonial -->
							<div class="col-12">
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
							</div>
							<!--// Single Testimonial -->

						</div>
					</div>
				</section>

			</div>

			<div class="section" data-anchor="fifth-section">

				<!-- Contact Area -->
				<section id="contact-area" class="cr-section contact-area section-padding-xlg bg-white">
					<div class="container">
						<div class="row justify-content-between">
							<div class="col-xl-6 col-lg-6">
								<div class="section-title">
									<h2>Contact Form</h2>
									<p>It is a long established fact that a reader will be distracted by the readable content of a page buildup</p>
								</div>
								<form action="mail.php" method="POST" id="contact-form" class="photoghor-form">
									<div class="photoghor-form-inner">
										<div class="photoghor-form-input photoghor-form-input-half">
											<input type="text" name="name" placeholder="Name*" required>
										</div>
										<div class="photoghor-form-input photoghor-form-input-half">
											<input type="email" name="email" placeholder="Email*" required>
										</div>
										<div class="photoghor-form-input">
											<input type="text" name="subject" placeholder="Subject*" required>
										</div>
										<div class="photoghor-form-input">
											<textarea name="message" cols="30" rows="5" placeholder="Message"></textarea>
										</div>
										<div class="photoghor-form-input">
											<button type="submit" class="button" data-content="Submit">
												<span>Submit</span>
											</button>
										</div>
									</div>
								</form>
								<p class="form-message"></p>
							</div>
							<div class="col-xl-5 col-lg-6">
								<div class="contact-info-wrapper">
									<div class="section-title">
										<h2>Quick Contact</h2>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page buildup</p>
									</div>
									<div class="contact-info">
										<div class="single-info">
											<h5>PHONE NUMBER</h5>
											<p><a href="/">+88012659845</a> / <a href="/">+88012659864</a></p>
										</div>
										<div class="single-info">
											<h5>E-MAIL ADDRESS</h5>
											<p><a href="/">photoghor@gmail.com</a> / <a href="/">servphotogr@gmail.com</a></p>
										</div>
										<div class="single-info">
											<h5>OUR ADDRESS</h5>
											<p>32/3 north south road, Wilont passage Mirshora, New Wrork</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!--// Contact Area -->

				<!-- Footer Area -->
				<!-- <footer id="footer-area" class="footer-area section-padding-xs bg-dark">
					<div class="container">
						<div class="row">
							<div class="col-lg-6">
								<ul class="footer-social-links">
									<li><a href="/">Facebook</a></li>
									<li><a href="/">Twitter</a></li>
									<li><a href="/">Google+ </a></li>
									<li><a href="/">Linkedin </a></li>
									<li><a href="/">Behance </a></li>
								</ul>
							</div>
							<div class="col-lg-6">
								<div class="footer-copyright">
									<p>Copyright &copy; <a href="/">Photoghor</a> 2023. All Right Reserved</p>
								</div>
							</div>
						</div>
					</div>
				</footer> -->
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
