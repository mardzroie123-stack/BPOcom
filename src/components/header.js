export function initHeader(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <header class="header" id="main-header">
      <div class="container nav-container">
        <a href="#hero" class="logo-text">Lucky<span>Assist</span> Pro<span class="logo-dot"></span></a>
        
        <button class="nav-toggle" id="nav-hamburger" aria-label="Toggle Navigation" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="3" y1="12" x2="21" y2="12" id="line-mid"></line>
            <line x1="3" y1="6" x2="21" y2="6" id="line-top"></line>
            <line x1="3" y1="18" x2="21" y2="18" id="line-bot"></line>
          </svg>
        </button>

        <ul class="nav-menu" id="nav-links">
          <li><a href="#hero" class="nav-link active">Home</a></li>
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#calculator" class="nav-link">Calculator</a></li>
          <li><a href="#culture" class="nav-link">Culture</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>

        <a href="#contact" class="btn btn-secondary" style="padding: 0.5rem 1.2rem; font-size: 0.9rem; border-radius: var(--border-radius-sm);">
          Get Proposal
        </a>
      </div>
    </header>
  `;

  const header = document.getElementById('main-header');
  const toggle = document.getElementById('nav-hamburger');
  const menu = document.getElementById('nav-links');
  const lines = {
    top: document.getElementById('line-top'),
    mid: document.getElementById('line-mid'),
    bot: document.getElementById('line-bot')
  };

  // Toggle mobile menu
  toggle.addEventListener('click', () => {
    const isExpanded = menu.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isExpanded);
    
    if (isExpanded) {
      lines.mid.style.opacity = '0';
      lines.top.setAttribute('transform', 'rotate(45 3 6) translate(5, -1)');
      lines.bot.setAttribute('transform', 'rotate(-45 3 18) translate(5, 1)');
    } else {
      lines.mid.style.opacity = '1';
      lines.top.removeAttribute('transform');
      lines.bot.removeAttribute('transform');
    }
  });

  // Close mobile menu when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      lines.mid.style.opacity = '1';
      lines.top.removeAttribute('transform');
      lines.bot.removeAttribute('transform');
    });
  });

  // Scroll handler for background color change
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call to catch initial load state
}
