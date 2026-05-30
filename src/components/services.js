export function initServices(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const servicesData = [
    {
      id: "bpo",
      title: "Outsourced Business Process Functions (BPO)",
      tagline: "Comprehensive back-office solutions tailored to streamline your operations",
      theme: "theme-purple",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>`,
      subFeatures: [
        "Financial & Bookkeeping Management",
        "Data Curation & Annotation",
        "Document Processing & Audit",
        "Global Payroll Administration",
        "HR Operations & Compliance",
        "SaaS Operations Support"
      ],
      metrics: [
        { value: "99.8%", label: "Accuracy Rate" },
        { value: "24 Hours", label: "Turnaround SLA" }
      ],
      description: "Free your core team to focus on growth. LuckyAssist Pro manages complex back-office administrative pipelines with high-speed precision, ensuring full data confidentiality and security compliance."
    },
    {
      id: "callcenter",
      title: "Inbound & Outbound Call Center",
      tagline: "Professional customer engagement services from the premier Call Center Philippines provider specializing in outsourced customer service",
      theme: "theme-gold",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>`,
      subFeatures: [
        "24/7 Omnichannel Helpdesk",
        "Technical Tier 1 & 2 Support",
        "Customer Retention & Loyalty",
        "Outbound Lead Generation",
        "Appointment Setting & Follow-up",
        "VIP Account Concierge"
      ],
      metrics: [
        { value: "94.2%", label: "First Contact Resolution" },
        { value: "18 Seconds", label: "Avg. Speed of Answer" }
      ],
      description: "Delight your customers at every touchpoint. Operating from the world's call center capital, our agents combine clear communication skills with emotional intelligence and deep technical empathy."
    },
    {
      id: "ai",
      title: "Automation & Artificial Intelligence (AI)",
      theme: "theme-teal",
      tagline: "Cutting-edge technological solutions to enhance efficiency and reduce operational costs",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
      subFeatures: [
        "Robotic Process Automation (RPA)",
        "AI Agent Setup & Training",
        "Document Data Parsing Bots",
        "Dynamic CRM Integrations",
        "Automated Reporting Workflows",
        "Custom Prompt Engineering"
      ],
      metrics: [
        { value: "85%", label: "Manual Effort Reduction" },
        { value: "0%", label: "Input Transcription Error" }
      ],
      description: "We merge human talent with cognitive automation. By designing bespoke software bots and utilizing modern LLMs, we automate repetitive data workflows to compound your savings."
    },
    {
      id: "teams",
      title: "Web Development & Social Media Manager",
      theme: "theme-emerald",
      tagline: "Expert web developers and social media managers who become your growth engine",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
      subFeatures: [
        "Full-Stack Web Development",
        "Custom Website & Portal Builds",
        "Social Media Strategy & Execution",
        "Content Creation & Calendar Management",
        "Community Engagement & Moderation",
        "Analytics, Reporting & Growth Tracking"
      ],
      metrics: [
        { value: "15 Days", label: "Average Time-to-Hire" },
        { value: "96.4%", label: "Yearly Retention Rate" }
      ],
      description: "Scale your digital presence with dedicated web developers and social media managers who integrate into your workflow. From custom web applications to daily community management, our specialists deliver results on your timezone."
    }
  ];

  container.innerHTML = `
    <section id="services" class="services">
      <div class="glow-orb glow-orb-teal"></div>
      <div class="container">
        <h2>Our Four Key <span>Operational Functions</span></h2>
        <p class="section-subtitle">
          Explore our premier suites of services designed to scale your operations, secure customer loyalty, and streamline workflows.
        </p>

        <div class="services-grid" id="grid-container">
          <!-- Cards will be dynamically injected here to maintain modularity -->
        </div>

        <div class="service-detail-drawer" id="shared-drawer">
          <!-- Expanded details injected here -->
        </div>
      </div>
    </section>
  `;

  const gridContainer = document.getElementById('grid-container');
  const drawer = document.getElementById('shared-drawer');

  // Render cards
  servicesData.forEach((service, index) => {
    const card = document.createElement('div');
    card.className = `service-card glass-panel ${service.theme}`;
    card.setAttribute('data-id', service.id);
    card.setAttribute('data-index', index);
    
    card.innerHTML = `
      <div class="service-icon-box">
        ${service.icon}
      </div>
      <h3>${service.title}</h3>
      <p>${service.tagline}</p>
      <div class="service-expand-trigger">
        <span>Learn More</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    `;

    gridContainer.appendChild(card);
  });

  const cards = gridContainer.querySelectorAll('.service-card');

  // Drawer expansion logic
  const toggleDrawer = (card, forceClose = false) => {
    const id = card.getAttribute('data-id');
    const index = parseInt(card.getAttribute('data-index'), 10);
    const service = servicesData[index];

    // If card is already active and we click it, or if forceClose is active
    if (card.classList.contains('active') || forceClose) {
      card.classList.remove('active');
      drawer.classList.remove('open');
      return;
    }

    // Reset other active cards
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // Populate drawer content
    drawer.innerHTML = `
      <div class="service-detail-content">
        <div class="drawer-left">
          <h4>${service.title}</h4>
          <p>${service.description}</p>
          <h5 style="margin-bottom: var(--spacing-xs); font-family: var(--font-display); font-size: 1rem;">Core Capabilities:</h5>
          <ul class="sub-features-list">
            ${service.subFeatures.map(feat => `<li>${feat}</li>`).join('')}
          </ul>
        </div>
        
        <div class="drawer-right">
          <div class="metrics-box">
            ${service.metrics.map(metric => `
              <div class="metric-card">
                <span>${metric.value}</span>
                <label>${metric.label}</label>
              </div>
            `).join('')}
          </div>
          
          <div class="drawer-actions">
            <a href="#contact" class="btn btn-primary" style="flex-grow: 1;">Build Your Team</a>
            <a href="#calculator" class="btn btn-secondary" style="flex-grow: 1;">Estimate ROI</a>
          </div>
        </div>
      </div>
    `;

    // Open drawer
    drawer.classList.add('open');
    
    // Smooth scroll drawer into view if needed
    setTimeout(() => {
      drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  // Add event listeners to cards
  cards.forEach(card => {
    card.addEventListener('click', () => {
      toggleDrawer(card);
    });
  });
}
