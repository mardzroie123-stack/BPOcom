export function initContact(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="contact" class="contact">
      <div class="glow-orb glow-orb-teal" style="right: -5%; bottom: -5%; left: auto; top: auto;"></div>
      <div class="container">
        <h2>Ready to Scale? <span>Get a Proposal</span></h2>
        <p class="section-subtitle">
          Submit your requirements below and our operations managers will schedule a discovery call within 24 hours.
        </p>

        <div class="contact-container">
          <div class="contact-info">
            <div>
              <h3 style="margin-bottom: var(--spacing-sm); font-family: var(--font-display); font-size: 1.4rem;">Office Information</h3>
              <p style="color: var(--color-text-muted); margin-bottom: var(--spacing-md); font-size: 0.95rem;">
                Reach out to us directly or visit our headquarters. We are available for virtual discovery calls across all global timezones.
              </p>
            </div>

            <div class="contact-cards-list">
              <div class="contact-card glass-panel">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div class="contact-details">
                  <h4>Manila Headquarters</h4>
                  <p>Level 28, High Street South Corporate Plaza, Bonifacio Global City, Taguig, Metro Manila, Philippines</p>
                </div>
              </div>

              <div class="contact-card glass-panel">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div class="contact-details">
                  <h4>Email Operations</h4>
                  <p>growth@luckyassistpro.com</p>
                </div>
              </div>

              <div class="contact-card glass-panel">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div class="contact-details">
                  <h4>Global Service Line</h4>
                  <p>+63 (2) 8804-9500 (PH) / +1 (888) 505-8902 (US/Toll-Free)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-panel glass-panel">
            <form id="proposal-form" novalidate>
              <div class="form-grid">
                <div class="form-group">
                  <label for="contact-name">Your Name</label>
                  <input type="text" id="contact-name" class="form-control" placeholder="E.g. John Doe" required>
                  <span class="form-error-msg">Please enter your name.</span>
                </div>

                <div class="form-group">
                  <label for="contact-email">Business Email</label>
                  <input type="email" id="contact-email" class="form-control" placeholder="E.g. john@company.com" required>
                  <span class="form-error-msg">Please enter a valid business email.</span>
                </div>

                <div class="form-group">
                  <label for="contact-company">Company Name</label>
                  <input type="text" id="contact-company" class="form-control" placeholder="E.g. TechCorp LLC" required>
                  <span class="form-error-msg">Please enter your company name.</span>
                </div>

                <div class="form-group">
                  <label for="contact-teamsize">Estimated Team Size</label>
                  <select id="contact-teamsize" class="form-control" style="cursor:pointer;">
                    <option value="1-3">1 - 3 Specialists</option>
                    <option value="4-9">4 - 9 Specialists</option>
                    <option value="10-24">10 - 24 Specialists</option>
                    <option value="25+">25+ Specialists</option>
                  </select>
                </div>

                <div class="form-group full-width">
                  <label for="contact-msg">Outline Your Requirements</label>
                  <textarea id="contact-msg" class="form-control" rows="4" placeholder="Briefly describe what roles, skills, or automation you need..." required minlength="10"></textarea>
                  <span class="form-error-msg">Please provide at least 10 characters outlining your needs.</span>
                </div>

                <div class="form-group full-width" style="margin-top: 10px;">
                  <button type="submit" class="btn btn-accent" style="width: 100%;">
                    Submit Proposal Request
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal Overlay -->
    <div class="modal-overlay" id="success-overlay">
      <div class="success-modal glass-panel">
        <div class="success-icon">
          <svg width="30" height="30" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        </div>
        <h3>Proposal Request Received!</h3>
        <p>
          Thank you for contacting LuckyAssist Pro. A dedicated operations strategist will analyze your requirements and contact you within 24 hours.
        </p>
        <button class="btn btn-primary" id="btn-close-modal" style="width: 100%;">Return to Site</button>
      </div>
    </div>
  `;

  const form = document.getElementById('proposal-form');
  const overlay = document.getElementById('success-overlay');
  const closeModalBtn = document.getElementById('btn-close-modal');

  // Input elements
  const inputs = {
    name: document.getElementById('contact-name'),
    email: document.getElementById('contact-email'),
    company: document.getElementById('contact-company'),
    msg: document.getElementById('contact-msg')
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation functions
  const validateField = (input, validatorFn) => {
    const isValid = validatorFn(input.value);
    if (!isValid) {
      input.classList.add('invalid');
      return false;
    } else {
      input.classList.remove('invalid');
      return true;
    }
  };

  // Add real-time input change validation
  inputs.name.addEventListener('input', () => validateField(inputs.name, val => val.trim().length > 0));
  inputs.email.addEventListener('input', () => validateField(inputs.email, val => emailRegex.test(val.trim())));
  inputs.company.addEventListener('input', () => validateField(inputs.company, val => val.trim().length > 0));
  inputs.msg.addEventListener('input', () => validateField(inputs.msg, val => val.trim().length >= 10));

  // Form submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(inputs.name, val => val.trim().length > 0);
    const isEmailValid = validateField(inputs.email, val => emailRegex.test(val.trim()));
    const isCompanyValid = validateField(inputs.company, val => val.trim().length > 0);
    const isMsgValid = validateField(inputs.msg, val => val.trim().length >= 10);

    if (isNameValid && isEmailValid && isCompanyValid && isMsgValid) {
      // Simulate API submit & show modal
      overlay.classList.add('active');
      form.reset();
    }
  });

  // Modal close handler
  closeModalBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
}
