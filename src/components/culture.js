export function initCulture(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const businessTypes = [
    {
      id: "ecommerce",
      label: "E-commerce & Retail",
      description: "Scale your online store operations with dedicated support teams that handle customer inquiries, order management, and dispute resolution around the clock.",
      benefits: [
        "Reduce cart abandonment with instant chat and email support",
        "Cut customer service costs by up to 70% compared to in-house teams",
        "Handle peak seasons without hiring overhead"
      ],
      roi: "Clients typically see 35% higher repeat purchase rates and save 50+ hours per week on order processing.",
      image: "/images/agent-01.jpg"
    },
    {
      id: "realestate",
      label: "Real Estate & Property",
      description: "Qualify leads, schedule property viewings, and manage tenant communications so your agents can focus on closing deals.",
      benefits: [
        "24/7 lead response within 60 seconds — never miss a hot buyer",
        "Reduce administrative workload by 60% with dedicated VA support",
        "Lower cost-per-acquisition by replacing in-house admin teams"
      ],
      roi: "Brokerages gain an average of 8 additional closed deals per month and reclaim 40+ hours weekly.",
      image: "/images/agent-02.jpg"
    },
    {
      id: "healthcare",
      label: "Healthcare & Medical",
      description: "Handle appointment scheduling, insurance verification, patient follow-ups, and telehealth coordination with HIPAA-trained staff.",
      benefits: [
        "Slash no-show rates by 45% with proactive confirmation calls",
        "Reduce front-desk staffing costs by 65%",
        "Free up clinical staff to focus on patient care"
      ],
      roi: "Practices recover up to $120K annually in lost revenue from missed appointments and save 60+ hours/week on admin.",
      image: "/images/agent-03.jpg"
    },
    {
      id: "tech",
      label: "IT & SaaS Support",
      description: "Deploy Tier-1 technical support, bug triage, customer onboarding, and NOC monitoring teams that work your night shift.",
      benefits: [
        "Achieve 24/7 support coverage without shift differential pay",
        "Reduce ticket backlog with dedicated triage specialists",
        "Cut technical support operational costs by 55%"
      ],
      roi: "SaaS companies reduce average resolution time by 40% and save $200K+ annually on support staffing.",
      image: "/images/agent-04.jpg"
    },
    {
      id: "finance",
      label: "Financial Services & Insurance",
      description: "Manage claims processing, policy inquiries, data entry, and compliance documentation with trained financial services specialists.",
      benefits: [
        "Process claims 3x faster with dedicated back-office teams",
        "Reduce per-claim handling cost by 60%",
        "Maintain compliance with ISO-certified data handling protocols"
      ],
      roi: "Insurers cut claims processing timelines from 14 to 5 days and save $150K+ in annual operational expenses.",
      image: "/images/agent-05.jpg"
    },
    {
      id: "travel",
      label: "Travel & Hospitality",
      description: "Provide round-the-clock reservation support, concierge services, and customer recovery handling for your guests.",
      benefits: [
        "Convert 30% more inquiries into bookings with fast follow-ups",
        "Reduce guest complaint resolution time by 70%",
        "Scale seasonal staffing instantly without hiring freezes"
      ],
      roi: "Hotels and travel agencies increase direct booking revenue by 25% and save 45+ hours/week on reservation management.",
      image: "/images/agent-06.jpg"
    },
    {
      id: "legal",
      label: "Legal & Professional Services",
      description: "Assign paralegal support, document review, legal research, and client intake management to skilled offshore professionals.",
      benefits: [
        "Reduce billable-hour leakage by offloading admin work",
        "Cut paralegal staffing costs by 60%",
        "Turn around client intake documents in under 2 hours"
      ],
      roi: "Law firms increase billable hours by 15% per attorney and save $80K+ annually on support staff.",
      image: "/images/agent-07.jpg"
    },
    {
      id: "marketing",
      label: "Marketing & Digital Agencies",
      description: "Scale your content production, social media management, SEO research, and campaign reporting with dedicated remote teams.",
      benefits: [
        "Double content output without doubling payroll",
        "Reduce campaign reporting time from days to hours",
        "Lower agency operational overhead by 50%"
      ],
      roi: "Agencies increase client retention by 30% and reclaim 35+ hours weekly for strategic work.",
      image: "/images/agent-08.jpg"
    },
    {
      id: "logistics",
      label: "Logistics & Supply Chain",
      description: "Track shipments, manage supplier communications, update inventory records, and handle customs documentation around the clock.",
      benefits: [
        "Reduce shipment tracking response time to under 5 minutes",
        "Cut logistics admin staffing costs by 55%",
        "Minimize delays with proactive exception monitoring"
      ],
      roi: "3PL providers reduce average query resolution time by 65% and save 50+ hours/week on manual tracking.",
      image: "/images/agent-09.jpg"
    },
    {
      id: "startups",
      label: "SaaS & Tech Startups",
      description: " bootstrap your customer success, community management, data labeling, and lead qualification functions at a fraction of Silicon Valley rates.",
      benefits: [
        "Scale customer support from 0 to 1000+ tickets without VC burn",
        "Reduce fully-loaded team cost by 65% vs US hiring",
        "Launch new support channels in days, not months"
      ],
      roi: "Startups extend runway by 18+ months and achieve enterprise-grade support coverage at bootstrapped budgets.",
      image: "/images/agent-10.jpg"
    }
  ];

  container.innerHTML = `
    <section id="culture" class="culture">
      <div class="glow-orb glow-orb-gold" style="left: -10%; top: 30%;"></div>
      <div class="container">
        <h2>What <span>Your Business</span> Gains</h2>
        <p class="section-subtitle">
          Select your industry to see exactly how LuckyAssist Pro helps you cut costs, save time, and grow faster.
        </p>

        <div class="biz-grid">
          <div class="biz-list" id="biz-list">
            ${businessTypes.map((biz, i) => `
              <button class="biz-btn ${i === 0 ? 'active' : ''}" data-biz="${biz.id}">
                ${biz.label}
              </button>
            `).join('')}
          </div>

          <div class="biz-detail glass-panel" id="biz-detail">
            <div class="biz-detail-inner">
              <div class="biz-detail-image">
                <img src="${businessTypes[0].image}" alt="" id="biz-detail-img" loading="lazy">
              </div>
              <div class="biz-detail-content">
                <h3 id="biz-detail-title">${businessTypes[0].label}</h3>
                <p id="biz-detail-desc">${businessTypes[0].description}</p>
                <ul id="biz-detail-benefits">
                  ${businessTypes[0].benefits.map(b => `<li>${b}</li>`).join('')}
                </ul>
                <div class="biz-roi" id="biz-detail-roi">
                  <strong>ROI Impact:</strong> ${businessTypes[0].roi}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const bizList = document.getElementById('biz-list');
  const detailTitle = document.getElementById('biz-detail-title');
  const detailDesc = document.getElementById('biz-detail-desc');
  const detailBenefits = document.getElementById('biz-detail-benefits');
  const detailRoi = document.getElementById('biz-detail-roi');
  const detailImg = document.getElementById('biz-detail-img');

  bizList.addEventListener('click', (e) => {
    const btn = e.target.closest('.biz-btn');
    if (!btn) return;

    bizList.querySelectorAll('.biz-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const biz = businessTypes.find(b => b.id === btn.dataset.biz);
    if (!biz) return;

    detailTitle.textContent = biz.label;
    detailDesc.textContent = biz.description;
    detailBenefits.innerHTML = biz.benefits.map(b => `<li>${b}</li>`).join('');
    detailRoi.innerHTML = `<strong>ROI Impact:</strong> ${biz.roi}`;
    detailImg.src = biz.image;
  });
}
