<script>
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const section = document.querySelector('#about-modern');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  });
  
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '50+', label: 'Awards Won' }
  ];
</script>

<section id="about-modern" class="about-modern section-padding-xlg" class:visible={isVisible}>
  <div class="container">
    <div class="about-grid">
      <!-- Left Column - Image -->
      <div class="about-image">
        <div class="image-frame">
          <img 
            src="https://ik.imagekit.io/jidemobell2025/tr:w-800,q-90,f-webp/tosinmakanjuola/hero/eriggal.png" 
            alt="Peter Tosin - Photographer"
          />
          <div class="image-overlay">
            <div class="experience-badge">
              <span class="badge-number">10+</span>
              <span class="badge-text">Years<br/>Experience</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Column - Content -->
      <div class="about-content">
        <div class="content-wrapper">
          <span class="section-tag">About Me</span>
          <h2 class="section-title">
            Capturing <span class="highlight">Souls</span>,<br/>
            Not Just Smiles
          </h2>
          
          <div class="about-text">
            <p class="lead">
              I'm Peter Tosin, a passionate photographer and videographer based in Baltimore, Maryland. 
              With over a decade of experience, I specialize in turning fleeting moments into timeless memories.
            </p>
            
            <p>
              My approach combines technical expertise with artistic vision, ensuring each frame tells a unique story. 
              Whether it's a wedding, corporate event, or personal portrait session, I bring the same level of dedication 
              and creativity to every project.
            </p>
            
            <p>
              Photography isn't just about capturing what's in front of the lens—it's about revealing the emotion, 
              the connection, and the beauty that exists in every moment. That's what drives my work.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="stats-grid">
            {#each stats as stat, index}
              <div class="stat-item" style="--delay: {index * 0.1}s">
                <div class="stat-number">{stat.number}</div>
                <div class="stat-label">{stat.label}</div>
              </div>
            {/each}
          </div>
          
          <!-- CTA -->
          <div class="about-cta">
            <a href="#fifth-section" class="btn-modern btn-primary">
              Get In Touch
            </a>
            <a href="#third-section" class="btn-modern btn-text">
              View Portfolio
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Background Elements -->
  <div class="bg-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
  </div>
</section>

<style>
  .about-modern {
    position: relative;
    background: #ffffff;
    color: #1a1a1a;
    overflow: hidden;
  }
  
  .section-padding-xlg {
    padding: 120px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }
  
  /* Grid Layout */
  .about-grid {
    display: grid;
    grid-template-columns: 45% 55%;
    gap: 80px;
    align-items: center;
  }
  
  /* Image Section */
  .about-image {
    position: relative;
  }
  
  .image-frame {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    transform: translateX(-50px);
    opacity: 0;
    transition: all 0.8s ease;
  }
  
  .about-modern.visible .image-frame {
    transform: translateX(0);
    opacity: 1;
  }
  
  .image-frame img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.6s ease;
  }
  
  .about-image:hover .image-frame img {
    transform: scale(1.05);
  }
  
  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  }
  
  .experience-badge {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    padding: 20px 30px;
    background: rgba(212, 175, 55, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: #000;
  }
  
  .badge-number {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
  }
  
  .badge-text {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 1.3;
  }
  
  /* Content Section */
  .about-content {
    transform: translateX(50px);
    opacity: 0;
    transition: all 0.8s ease 0.2s;
  }
  
  .about-modern.visible .about-content {
    transform: translateX(0);
    opacity: 1;
  }
  
  .section-tag {
    display: inline-block;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #d4af37;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  .section-title {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 30px 0;
    letter-spacing: -0.02em;
  }
  
  .highlight {
    color: #d4af37;
    position: relative;
    display: inline-block;
  }
  
  .about-text {
    margin: 30px 0 40px 0;
  }
  
  .about-text p {
    margin: 0 0 20px 0;
    line-height: 1.8;
    color: #555;
  }
  
  .lead {
    font-size: 1.125rem;
    font-weight: 500;
    color: #333 !important;
  }
  
  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin: 50px 0;
    padding: 40px 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .stat-item {
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }
  
  .about-modern.visible .stat-item {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(0.5s + var(--delay));
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 10px;
  }
  
  .stat-label {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #666;
  }
  
  /* CTA Buttons */
  .about-cta {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  
  .btn-modern {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 40px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 50px;
  }
  
  .btn-primary {
    background: #d4af37;
    color: #000;
    border-color: #d4af37;
  }
  
  .btn-primary:hover {
    background: #000;
    color: #d4af37;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  }
  
  .btn-text {
    background: transparent;
    color: #1a1a1a;
    border-color: transparent;
    padding-left: 0;
  }
  
  .btn-text:hover {
    color: #d4af37;
    transform: translateX(5px);
  }
  
  /* Background Shapes */
  .bg-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.05;
  }
  
  .shape {
    position: absolute;
    border-radius: 50%;
    background: #d4af37;
  }
  
  .shape-1 {
    width: 400px;
    height: 400px;
    top: -200px;
    right: -100px;
  }
  
  .shape-2 {
    width: 300px;
    height: 300px;
    bottom: -150px;
    left: -100px;
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 60px;
    }
    
    .image-frame,
    .about-content {
      transform: none;
    }
    
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
  
  @media (max-width: 768px) {
    .section-padding-xlg {
      padding: 80px 0;
    }
    
    .container {
      padding: 0 20px;
    }
    
    .stats-grid {
      padding: 30px 0;
    }
    
    .stat-number {
      font-size: 2rem;
    }
    
    .about-cta {
      flex-direction: column;
    }
    
    .btn-modern {
      width: 100%;
      justify-content: center;
    }
  }
</style>
