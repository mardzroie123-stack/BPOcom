// Import Global Design System Styles
import './style.css';

// Import Modular Components
import { initHeader } from './components/header.js';
import { initHero } from './components/hero.js';
import { initServices } from './components/services.js';
import { initCalculator } from './components/calculator.js';
import { initCulture } from './components/culture.js';
import { initContact } from './components/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize and mount components
  initHeader('header-root');
  initHero('hero-root');
  initServices('services-root');
  initCalculator('calculator-root');
  initCulture('culture-root');
  initContact('contact-root');

  // Setup Global ScrollSpy
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const scrollSpy = () => {
    let currentActiveId = '';
    const scrollPos = window.scrollY + 150; // offset for sticky navigation header

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        currentActiveId = id;
      }
    });

    if (currentActiveId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentActiveId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', scrollSpy);
  // Trigger initial scrollSpy logic in case page loaded scrolled down
  setTimeout(scrollSpy, 200);
});
