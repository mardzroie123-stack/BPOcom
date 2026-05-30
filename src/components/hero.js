import { initHeroVisual } from './hero-visual.js';

export function initHero(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="hero" class="hero">
      <div class="glow-orb glow-orb-purple"></div>
      <div class="glow-orb glow-orb-gold"></div>
      
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-tagline">
            LuckyAssist Pro Solutions
          </div>
          <h1>
            World-Class Operations.<br>
            <span class="tech-gradient">Warm, Skilled Service.</span>
          </h1>
          <p class="hero-desc">
            Scale your business, optimize operational workflow, and reduce labor costs up to 70% with elite dedicated remote teams operating from the premier outsourcing hubs of the Philippines.
          </p>
          <div class="hero-ctas">
            <a href="#calculator" class="btn btn-primary">Calculate Your Savings</a>
            <a href="#services" class="btn btn-secondary">Explore Services</a>
          </div>
          
          <div class="hero-stats">
            <div class="stat-item">
              <h3 class="stat-number" data-target="70" data-suffix="%+">0%+</h3>
              <p>Cost Reduction</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number" data-target="98" data-suffix="%">0%</h3>
              <p>CSAT Rating</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number" data-target="15" data-suffix="m">0m</h3>
              <p>Avg. Response Time</p>
            </div>
            <div class="stat-item">
              <h3 class="stat-number" data-target="500" data-suffix="+">0+</h3>
              <p>Specialists Hired</p>
            </div>
          </div>
        </div>

        <div class="hero-visual" id="hero-3d-container"></div>
      </div>
    </section>
  `;

  const visualContainer = document.getElementById('hero-3d-container');
  initHeroVisual(visualContainer);

  const animateStats = () => {
    const stats = container.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const suffix = stat.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      
      const updateCount = () => {
        current += increment;
        if (current >= target) {
          stat.textContent = `${target}${suffix}`;
        } else {
          stat.textContent = `${Math.floor(current)}${suffix}`;
          requestAnimationFrame(updateCount);
        }
      };
      
      updateCount();
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(container);
}
