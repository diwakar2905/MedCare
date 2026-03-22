// ==========================================
// HOME PAGE (Max Healthcare Style)
// ==========================================
import { doctors, hospitals, specialities, packages, testimonials, blogs, quickActions, whyChooseUs, internationalServices } from '../data.js';

export function renderHome() {
  return `
    ${heroSection()}
    ${statsBar()}
    ${quickActionsSection()}
    ${specialitiesSection()}
    ${appointmentBanner()}
    ${doctorsSection()}
    ${hospitalsSection()}
    ${packagesSection()}
    ${internationalSection()}
    ${testimonialsSection()}
    ${whyUsSection()}
    ${blogSection()}
    ${emergencyBanner()}
  `;
}

function heroSection() {
  return `
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Schedule Your Appointment Online</h1>
          <p>Find the right doctor, book instantly, and get world-class treatment at MedCare Hospitals</p>
          <div class="hero-search">
            <input type="text" placeholder="Search for Doctor or Speciality" id="heroSearch" />
            <select>
              <option value="">Select Location</option>
              <option>Delhi</option><option>Mumbai</option><option>Bangalore</option>
              <option>Chennai</option><option>Hyderabad</option><option>Kolkata</option>
            </select>
            <button class="btn btn-navy" onclick="window.location.hash='#/doctors'">Book an Appointment</button>
          </div>
          <div class="hero-quick-links">
            <a href="#/international" class="hero-ql-item">
              <span class="ql-icon"><i class="fa-solid fa-globe"></i></span>
              <h4>International Patients</h4>
            </a>
            <a href="#/packages" class="hero-ql-item">
              <span class="ql-icon"><i class="fa-solid fa-clipboard-list"></i></span>
              <h4>Health Checkup</h4>
            </a>
            <a href="#/packages" class="hero-ql-item">
              <span class="ql-icon"><i class="fa-solid fa-flask"></i></span>
              <h4>MAX Lab</h4>
            </a>
            <a href="#/contact" class="hero-ql-item">
              <span class="ql-icon"><i class="fa-solid fa-house-medical"></i></span>
              <h4>MAX@Home</h4>
            </a>
            <a href="tel:+919268880303" class="hero-ql-item">
              <span class="ql-icon"><i class="fa-solid fa-phone"></i></span>
              <h4>24/7 Helpline</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function statsBar() {
  return `
    <div class="hero-stats-bar">
      <div class="container">
        <div class="hero-stat-item"><h3>500+</h3><p>Expert Doctors</p></div>
        <div class="hero-stat-item"><h3>50+</h3><p>Hospitals</p></div>
        <div class="hero-stat-item"><h3>1M+</h3><p>Patients Treated</p></div>
        <div class="hero-stat-item"><h3>25+</h3><p>Years of Service</p></div>
        <div class="hero-stat-item"><h3>NABH</h3><p>Accredited</p></div>
      </div>
    </div>
  `;
}

function quickActionsSection() {
  return `
    <section class="quick-actions">
      <div class="container">
        <div class="quick-actions-grid">
          ${quickActions.map(qa => `
            <a href="${qa.link}" class="qa-card">
              <div class="qa-icon"><i class="fa-solid ${qa.icon}"></i></div>
              <h3>${qa.title}</h3>
              <p>${qa.desc}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function specialitiesSection() {
  return `
    <section class="section specialities" id="specialities">
      <div class="container">
        <div class="section-header">
          <h2>Specialities & Procedures</h2>
        </div>
        <div class="spec-tabs">
          <div class="spec-tab active">Specialities</div>
          <div class="spec-tab">Procedures</div>
        </div>
        <div class="spec-list-layout">
          <div class="spec-list">
            ${specialities.map(spec => `
              <a href="#/specialities?id=${spec.id}" class="spec-item">
                <div class="spec-icon-line"><i class="fa-solid ${spec.icon}"></i></div>
                <h3>${spec.name}</h3>
              </a>
            `).join('')}
          </div>
          <div class="spec-cta-card">
            <h3>Looking for an Expert</h3>
            <p>MedCare is home to some of the most eminent doctors in the country.</p>
            <a href="#/doctors" class="btn"><i class="fa-solid fa-arrow-right"></i> Find a Doctor</a>
          </div>
        </div>
        <a href="#/specialities" class="view-all-link">View all <i class="fa-solid fa-chevron-right"></i></a>
      </div>
    </section>
  `;
}

function appointmentBanner() {
  return `
    <div class="appointment-banner">
      <div class="container">
        <h3><i class="fa-solid fa-calendar-check"></i> To Book an Appointment</h3>
        <a href="tel:+919268880303" class="phone-badge">
          <i class="fa-solid fa-phone"></i> Call Us &nbsp; +91 926 888 0303
        </a>
      </div>
    </div>
  `;
}

function doctorsSection() {
  return `
    <section class="section" id="doctors-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Top Specialists</h2>
          <p>Experienced doctors committed to the highest standards of care</p>
        </div>
        <div class="doctors-grid">
          ${doctors.slice(0, 4).map(doc => doctorCard(doc)).join('')}
        </div>
        <div style="margin-top:30px;">
          <a href="#/doctors" class="view-all-link">View All Doctors <i class="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
  `;
}

export function doctorCard(doc) {
  return `
    <div class="card doctor-card">
      <div class="doctor-img">
        <i class="fa-solid fa-user-doctor"></i>
        <span class="availability">${doc.available === 'Today' ? '● Today' : '● Tomorrow'}</span>
      </div>
      <div class="doctor-info">
        <h3>${doc.name}</h3>
        <div class="speciality">${doc.speciality}</div>
        <div class="doctor-meta">
          <span><i class="fa-solid fa-briefcase"></i> ${doc.experience} Years Experience</span>
          <span><i class="fa-solid fa-hospital"></i> ${doc.hospital}</span>
          <span><i class="fa-solid fa-venus-mars"></i> ${doc.gender}</span>
        </div>
        <a href="#/doctor/${doc.id}" class="view-profile">View Profile →</a>
        <div class="doctor-bottom">
          <span class="fee">₹${doc.fee}</span>
          <a href="#/appointment?doctor=${doc.id}" class="btn btn-navy btn-sm">Book Appointment</a>
        </div>
      </div>
    </div>
  `;
}

function hospitalsSection() {
  return `
    <section class="section hospitals-section" id="hospitals-section" style="background:var(--bg-light);">
      <div class="container">
        <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;">
          <div>
            <h2>Our Hospital Network</h2>
            <p>World-class facilities across India</p>
          </div>
          <a href="#/hospitals" class="view-all-link" style="margin-bottom:10px;">Find Hospital Near You <i class="fa-solid fa-chevron-right"></i></a>
        </div>
        <div class="hospitals-scroll-wrapper">
          ${hospitals.map(h => `
            <a href="#/hospital/${h.id}" class="hospital-scroll-card">
              <div class="h-img"><i class="fa-solid fa-hospital"></i></div>
              <div class="h-info">
                <h3>${h.name}</h3>
                <p class="h-loc">${h.city}</p>
                <div class="h-rating">
                  <span class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span>
                  <span>4.5</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function hospitalCard(h) {
  return `
    <div class="card hospital-card">
      <div class="hospital-img">
        <i class="fa-solid fa-hospital"></i>
        ${h.emergency ? '<span class="emergency-badge"><i class="fa-solid fa-truck-medical"></i> 24/7 Emergency</span>' : ''}
      </div>
      <div class="hospital-info">
        <h3>${h.name}</h3>
        <div class="location"><i class="fa-solid fa-location-dot"></i> ${h.address}</div>
        <div class="hospital-features">
          <span class="feature"><i class="fa-solid fa-bed"></i> ${h.beds} Beds</span>
          <span class="feature"><i class="fa-solid fa-procedures"></i> ${h.icu} ICU</span>
          <span class="feature"><i class="fa-solid fa-certificate"></i> ${h.accreditation}</span>
        </div>
        <a href="#/hospital/${h.id}" class="btn btn-outline-navy btn-sm">View Details</a>
      </div>
    </div>
  `;
}

function packagesSection() {
  return `
    <section class="section packages" id="packages-section">
      <div class="container">
        <div class="section-header">
          <h2>Health Checkup Packages</h2>
          <p>Comprehensive preventive screening at affordable prices</p>
        </div>
        <div class="packages-grid">
          ${packages.slice(0, 3).map(pkg => packageCard(pkg)).join('')}
        </div>
        <div style="margin-top:30px;">
          <a href="#/packages" class="view-all-link">View All Packages <i class="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
  `;
}

export function packageCard(pkg) {
  return `
    <div class="card package-card">
      ${pkg.popular ? '<span class="package-badge">Most Popular</span>' : ''}
      <div class="package-header">
        <div class="package-icon">${pkg.icon}</div>
        <h3>${pkg.name}</h3>
      </div>
      <div class="package-body">
        <div class="package-price">
          <span class="price">₹${pkg.price.toLocaleString()}</span>
          <span class="original">₹${pkg.original.toLocaleString()}</span>
        </div>
        <ul class="package-tests">
          ${pkg.tests.map(t => `<li><i class="fa-solid fa-check"></i> ${t}</li>`).join('')}
        </ul>
        <a href="#/appointment" class="btn btn-navy">Book Now</a>
      </div>
    </div>
  `;
}

function internationalSection() {
  return `
    <section class="section international" id="international-section">
      <div class="container">
        <div class="section-header">
          <h2>International Patient Services</h2>
          <p>Seamless healthcare for patients from around the world</p>
        </div>
        <div class="intl-grid">
          ${internationalServices.map(s => `
            <div class="intl-card">
              <div class="intl-icon"><i class="fa-solid ${s.icon}"></i></div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function testimonialsSection() {
  return `
    <section class="section testimonials" id="testimonials-section">
      <div class="container">
        <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;">
          <h2>Real Patients, Real Stories.</h2>
          <a href="#" class="view-all-link" style="margin-bottom:10px;">View all <i class="fa-solid fa-chevron-right"></i></a>
        </div>
        <div class="testimonials-layout">
          <div class="testimonial-featured">
            <div style="position:absolute;inset:0;background:var(--navy);display:flex;align-items:center;justify-content:center;font-size:5rem;color:rgba(255,255,255,0.08);"><i class="fa-solid fa-quote-right"></i></div>
            <div class="tf-overlay"></div>
            <div class="play-icon"><i class="fa-solid fa-play"></i></div>
            <div class="tf-content">
              <h3>${testimonials[0].name}</h3>
              <p>${testimonials[0].review.substring(0, 120)}...</p>
            </div>
          </div>
          <div class="testimonials-list">
            ${testimonials.slice(0, 4).map(t => `
              <div class="testimonial-item">
                <div class="ti-thumb">${t.initials}</div>
                <div class="ti-info">
                  <h4>${t.review.substring(0, 80)}...</h4>
                  <p>Treated by our ${t.treatment} department</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function whyUsSection() {
  return `
    <section class="section why-us" id="why-us-section" style="background:var(--bg-light);">
      <div class="container">
        <div class="section-header center">
          <h2>Why Choose MedCare Hospitals?</h2>
          <p>Numbers that reflect our commitment to excellence</p>
        </div>
        <div class="why-us-grid">
          ${whyChooseUs.map(w => `
            <div class="wu-card">
              <div class="wu-icon"><i class="fa-solid ${w.icon}"></i></div>
              <h3>${w.title}</h3>
              <p>${w.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function blogSection() {
  return `
    <section class="section" id="blog-section">
      <div class="container">
        <div class="section-header">
          <h2>Latest Health Articles</h2>
          <p>Expert health tips and medical insights</p>
        </div>
        <div class="blog-grid">
          ${blogs.slice(0, 3).map(b => blogCard(b)).join('')}
        </div>
        <div style="margin-top:30px;">
          <a href="#/blog" class="view-all-link">View All Articles <i class="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
  `;
}

export function blogCard(b) {
  return `
    <div class="card blog-card">
      <div class="blog-img">${b.icon}</div>
      <div class="blog-info">
        <div class="blog-meta">
          <span><i class="fa-solid fa-tag"></i> ${b.category}</span>
          <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
        </div>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
        <a href="#/blog" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  `;
}

function emergencyBanner() {
  return `
    <section class="emergency-banner">
      <div class="container">
        <h2><i class="fa-solid fa-truck-medical"></i> 24/7 Emergency Care Available</h2>
        <p>Our emergency departments are staffed with experienced physicians and equipped with advanced life-saving technology round the clock.</p>
        <a href="tel:108" class="btn"><i class="fa-solid fa-phone"></i> Call Now – 108</a>
      </div>
    </section>
  `;
}
