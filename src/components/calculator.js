export function initCalculator(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const rolesData = [
    { name: "Customer Support Specialist", onshore: 48000, offshore: 14400 },
    { name: "Technical Support Representative", onshore: 58000, offshore: 17400 },
    { name: "Dedicated Web Developer", onshore: 98000, offshore: 29400 },
    { name: "QA Automation Engineer", onshore: 75000, offshore: 22500 },
    { name: "Back-Office Operations Officer", onshore: 45000, offshore: 13500 }
  ];

  const regionsData = {
    US: { multiplier: 1.0, currency: "$", name: "United States" },
    UK: { multiplier: 0.92, currency: "£", name: "United Kingdom" },
    AU: { multiplier: 1.05, currency: "A$", name: "Australia" }
  };

  container.innerHTML = `
    <section id="calculator" class="calculator">
      <div class="glow-orb glow-orb-purple" style="right: 10%; top: 20%; left: auto;"></div>
      <div class="container">
        <h2>Calculate Your <span>Outsourcing ROI</span></h2>
        <p class="section-subtitle">
          Estimate your annual financial savings when scaling your operations with LuckyAssist Pro compared to building teams onshore.
        </p>

        <div class="calculator-container glass-panel">
          <div class="calc-inputs">
            <h3 style="margin-bottom: var(--spacing-md); font-family: var(--font-display); font-size: 1.4rem;">Select Team Parameters</h3>
            
            <div class="calc-group">
              <label for="calc-role">Target Role / Function</label>
              <select id="calc-role" class="calc-select">
                ${rolesData.map((role, idx) => `<option value="${idx}">${role.name}</option>`).join('')}
              </select>
            </div>

            <div class="calc-group">
              <label>Client Location</label>
              <div class="region-toggle-group" id="region-toggles">
                <button class="region-btn active" data-region="US">USA (USD)</button>
                <button class="region-btn" data-region="UK">UK (GBP)</button>
                <button class="region-btn" data-region="AU">AUS (AUD)</button>
              </div>
            </div>

            <div class="calc-group" style="margin-top: var(--spacing-md);">
              <label for="calc-size">Number of Dedicated Staff</label>
              <div class="slider-container">
                <input type="range" id="calc-size" class="calc-slider" min="1" max="50" value="5">
                <span class="slider-val" id="slider-val-label">5</span>
              </div>
            </div>
          </div>

          <div class="calc-outputs">
            <div class="output-header">
              <span class="output-label">Estimated Annual Net Savings</span>
              <span class="output-savings" id="output-savings-val">$0</span>
            </div>

            <div class="comparison-charts">
              <div class="chart-bar-container">
                <div class="chart-label-row">
                  <span style="color: var(--color-text-muted);">Onshore Costs</span>
                  <span id="chart-onshore-val" style="font-weight: 600;">$0</span>
                </div>
                <div class="chart-bg">
                  <div class="chart-fill onshore" id="chart-onshore-bar" style="width: 100%;"></div>
                </div>
              </div>

              <div class="chart-bar-container">
                <div class="chart-label-row">
                  <span>LuckyAssist Pro Cost</span>
                  <span id="chart-offshore-val" style="font-weight: 600;">$0</span>
                </div>
                <div class="chart-bg">
                  <div class="chart-fill offshore" id="chart-offshore-bar" style="width: 30%;"></div>
                </div>
              </div>
            </div>

            <div class="savings-badge" id="savings-percent-badge">
              Save approximately 70% in operational overhead
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Grab elements
  const roleSelect = document.getElementById('calc-role');
  const sizeSlider = document.getElementById('calc-size');
  const sizeLabel = document.getElementById('slider-val-label');
  const regionToggles = document.getElementById('region-toggles');
  const savingsVal = document.getElementById('output-savings-val');
  const onshoreVal = document.getElementById('chart-onshore-val');
  const offshoreVal = document.getElementById('chart-offshore-val');
  const onshoreBar = document.getElementById('chart-onshore-bar');
  const offshoreBar = document.getElementById('chart-offshore-bar');
  const percentBadge = document.getElementById('savings-percent-badge');

  let activeRegion = "US";

  const formatCurrency = (amount, regionKey) => {
    const region = regionsData[regionKey];
    return `${region.currency}${Math.round(amount).toLocaleString()}`;
  };

  // Savings calculation and UI update
  const calculate = () => {
    const selectedIndex = parseInt(roleSelect.value, 10);
    const size = parseInt(sizeSlider.value, 10);
    
    const role = rolesData[selectedIndex];
    const region = regionsData[activeRegion];

    // Core formula
    const onshoreCost = role.onshore * size * region.multiplier;
    const offshoreCost = role.offshore * size;
    const savings = onshoreCost - offshoreCost;
    const savingsPercent = Math.round((savings / onshoreCost) * 100);

    // Update Slider Label
    sizeLabel.textContent = size;

    // Update charts & percentages
    onshoreVal.textContent = formatCurrency(onshoreCost, activeRegion);
    offshoreVal.textContent = formatCurrency(offshoreCost, activeRegion);
    
    // Scale bar based on ratio
    const ratio = (offshoreCost / onshoreCost) * 100;
    onshoreBar.style.width = '100%';
    offshoreBar.style.width = `${ratio}%`;

    // Animate the main savings number
    animateValue(savingsVal, savings, activeRegion);

    percentBadge.innerHTML = `Reduce operations overhead by <strong>${savingsPercent}%</strong> (Save ${formatCurrency(savings / 12, activeRegion)} / month)`;
  };

  // Helper for counting number transitions smoothly
  let animationFrameId = null;
  const animateValue = (element, targetValue, regionKey) => {
    const region = regionsData[regionKey];
    let startTimestamp = null;
    const duration = 500; // ms
    const startValue = parseInt(element.textContent.replace(/[^0-9]/g, ''), 10) || 0;

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (targetValue - startValue) + startValue);
      element.textContent = `${region.currency}${currentValue.toLocaleString()}`;
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        element.textContent = `${region.currency}${targetValue.toLocaleString()}`;
      }
    };

    animationFrameId = requestAnimationFrame(step);
  };

  // Region Toggle Listeners
  regionToggles.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      regionToggles.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeRegion = e.target.getAttribute('data-region');
      calculate();
    });
  });

  // Inputs Change Listeners
  roleSelect.addEventListener('change', calculate);
  sizeSlider.addEventListener('input', calculate);

  // Initial Calculation
  calculate();
}
