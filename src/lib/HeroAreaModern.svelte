<script>
  import { onMount } from 'svelte';
  
  let currentSlide = 0;
  let isLoaded = false;
  
  const slides = [
    {
      image: 'https://ik.imagekit.io/jidemobell2025/tr:w-1920,q-90,f-webp/tosinmakanjuola/hero/eriggal.png',
      title: 'Capturing Souls',
      subtitle: 'Not Just Smiles',
      description: 'Professional Photography & Videography'
    },
    {
      image: 'https://ik.imagekit.io/jidemobell2025/tr:w-1920,q-90,f-webp/tosinmakanjuola/hero/sallygap.jpg',
      title: 'Your Story',
      subtitle: 'Beautifully Told',
      description: 'Every moment deserves to be remembered'
    },
    {
      image: 'https://ik.imagekit.io/jidemobell2025/tr:w-1920,q-90,f-webp/tosinmakanjuola/hero/bg-image-2.jpg',
      title: 'Dream & Passion',
      subtitle: 'In Every Frame',
      description: 'Creating timeless memories together'
    }
  ];
  
  onMount(() => {
    isLoaded = true;
    
    // Auto-advance slides
    const interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
    }, 6000);
    
    return () => clearInterval(interval);
  });
  
  function goToSlide(index) {
    currentSlide = index;
  }
</script>

<div class="hero-modern" class:loaded={isLoaded}>
  <!-- Background Slides -->
  <div class="hero-backgrounds">
    {#each slides as slide, index}
      <div 
        class="hero-bg" 
        class:active={currentSlide === index}
        style="background-image: url({slide.image})"
      />
    {/each}
  </div>
  
  <!-- Dark Overlay -->
  <div class="hero-overlay"></div>
  
  <!-- Content -->
  <div class="hero-content">
    <div class="container">
      {#each slides as slide, index}
        <div class="hero-text" class:active={currentSlide === index}>
          <h1 class="hero-title">
            <span class="title-main">{slide.title}</span>
            <span class="title-sub">{slide.subtitle}</span>
          </h1>
          <p class="hero-description">{slide.description}</p>
          <div class="hero-cta">
            <a href="#third-section" class="btn-modern btn-primary">View Portfolio</a>
            <a href="#fifth-section" class="btn-modern btn-secondary">Get In Touch</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Navigation Dots -->
  <div class="hero-dots">
    {#each slides as _, index}
      <button 
        class="dot" 
        class:active={currentSlide === index}
        on:click={() => goToSlide(index)}
        aria-label="Go to slide {index + 1}"
      />
    {/each}
  </div>
  
  <!-- Scroll Indicator -->
  <a href="#second-section" class="scroll-indicator">
    <span class="scroll-text">Scroll</span>
    <span class="scroll-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </span>
  </a>
</div>

<style>
  .hero-modern {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    opacity: 0;
    transition: opacity 1s ease;
  }
  
  .hero-modern.loaded {
    opacity: 1;
  }
  
  /* Background Slides */
  .hero-backgrounds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 1.5s ease, transform 8s ease;
  }
  
  .hero-bg.active {
    opacity: 1;
    transform: scale(1);
  }
  
  /* Dark Overlay */
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
  }
  
  /* Content */
  .hero-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
  }
  
  .hero-text {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
    position: absolute;
    width: 100%;
    max-width: 1200px;
    padding: 0 30px;
  }
  
  .hero-text.active {
    opacity: 1;
    transform: translateY(0);
    position: relative;
  }
  
  /* Typography */
  .hero-title {
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .title-main {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 700;
    line-height: 1.1;
    color: #ffffff;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    animation: slideUp 0.8s ease forwards;
    opacity: 0;
  }
  
  .hero-text.active .title-main {
    animation: slideUp 0.8s ease 0.2s forwards;
  }
  
  .title-sub {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 300;
    color: #d4af37;
    letter-spacing: 0.05em;
    animation: slideUp 0.8s ease forwards;
    opacity: 0;
  }
  
  .hero-text.active .title-sub {
    animation: slideUp 0.8s ease 0.4s forwards;
  }
  
  .hero-description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 40px;
    letter-spacing: 0.05em;
    font-weight: 300;
    animation: slideUp 0.8s ease forwards;
    opacity: 0;
  }
  
  .hero-text.active .hero-description {
    animation: slideUp 0.8s ease 0.6s forwards;
  }
  
  /* CTA Buttons */
  .hero-cta {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    animation: slideUp 0.8s ease forwards;
    opacity: 0;
  }
  
  .hero-text.active .hero-cta {
    animation: slideUp 0.8s ease 0.8s forwards;
  }
  
  .btn-modern {
    display: inline-block;
    padding: 16px 40px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .btn-primary {
    background: #d4af37;
    color: #000;
    border-color: #d4af37;
  }
  
  .btn-primary:hover {
    background: transparent;
    color: #d4af37;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  }
  
  .btn-secondary {
    background: transparent;
    color: #fff;
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
    transform: translateY(-2px);
  }
  
  /* Navigation Dots */
  .hero-dots {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 15px;
    z-index: 3;
  }
  
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }
  
  .dot:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.2);
  }
  
  .dot.active {
    background: #d4af37;
    width: 40px;
    border-radius: 6px;
  }
  
  /* Scroll Indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    z-index: 3;
    animation: bounce 2s infinite;
  }
  
  .scroll-text {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  
  .scroll-icon {
    display: flex;
  }
  
  /* Animations */
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
    from {
      opacity: 0;
      transform: translateY(30px);
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }
    
    .hero-cta {
      flex-direction: column;
      gap: 15px;
    }
    
    .btn-modern {
      width: 100%;
      text-align: center;
      padding: 14px 30px;
    }
    
    .scroll-indicator {
      right: 20px;
      bottom: 20px;
    }
    
    .hero-dots {
      bottom: 80px;
    }
  }
</style>
