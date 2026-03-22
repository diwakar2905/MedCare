// ==========================================
// NAVBAR COMPONENT (Max Healthcare Style — Triple Tier)
// ==========================================

const menuItems = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about' },
  { label: 'Specialities', href: '#/specialities' },
  { label: 'Doctors', href: '#/doctors' },
  { label: 'Hospitals', href: '#/hospitals' },
  { label: 'Health Packages', href: '#/packages' },
  { label: 'Blog', href: '#/blog' },
  { label: 'Contact', href: '#/contact' },
];

export function renderNavbar() {
  return `
    <!-- Top Navy Ticker Bar -->
    <div class="nav-ticker">
      <span class="ticker-text">🏥 MedCare Super Speciality Hospital, Saket — Now Open: State-of-the-art Robotic Surgery Centre &nbsp;&nbsp;|&nbsp;&nbsp; MedCare Hospital, Mumbai — Upgraded to 500-Bed Facility with Advanced ICU &nbsp;&nbsp;|&nbsp;&nbsp; 25 Years of Service and Excellence in Healthcare</span>
    </div>

    <!-- Teal Service Bar -->
    <div class="nav-service">
      <div class="container">
        <a href="#/doctors"><i class="fa-solid fa-user-doctor"></i> Find a Doctor</a>
        <a href="#/blog"><i class="fa-solid fa-newspaper"></i> Blogs</a>
        <a href="#/international"><i class="fa-solid fa-globe"></i> International Patients</a>
        <a href="#/contact"><i class="fa-solid fa-envelope"></i> Contact Us</a>
        <a href="tel:+919268880303" class="phone-link"><i class="fa-solid fa-phone"></i> +91 926 888 0303 (24/7)</a>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav class="navbar" id="navbar">
      <div class="navbar-top">
        <a href="#/" class="navbar-logo">
          <img src="/Blue%20Modern%20Abstract%20Healthcare%20Medical%20Logo.png" alt="MedCare Logo" class="logo-img" />
          <h1>Med<span>Care</span></h1>
          <span class="years-badge">✦ 25 YEARS</span>
        </a>
        <div class="navbar-menu" id="navMenu">
          ${menuItems.map(item => `<a href="${item.href}" class="${getActiveClass(item.href)}">${item.label}</a>`).join('')}
        </div>
        <div class="navbar-actions">
          <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
          <a href="#/appointment" class="btn btn-navy btn-sm"><i class="fa-solid fa-calendar-check"></i> Book Appointment</a>
          <a href="#/international" class="btn btn-outline-navy btn-sm">International Patients</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Nav -->
    <div class="mobile-nav" id="mobileNav">
      ${menuItems.map(item => `<a href="${item.href}">${item.label}</a>`).join('')}
      <a href="#/international">International Patients</a>
      <div class="mobile-actions">
        <a href="#/appointment" class="btn btn-navy">Book Appointment</a>
        <a href="#/doctors" class="btn btn-outline-navy">Find a Doctor</a>
        <a href="tel:+919268880303" class="btn btn-red"><i class="fa-solid fa-phone"></i> Emergency: +91 926 888 0303</a>
      </div>
    </div>

    <!-- Emergency Side Tab -->
    <a href="tel:108" class="emergency-tab">EMERGENCY</a>

    <!-- Floating Phone -->
    <a href="tel:+919268880303" class="floating-phone">
      <div class="badge-24">24/7</div>
      <span>+91 926 888 0303</span>
    </a>
  `;
}

function getActiveClass(href) {
  const hash = window.location.hash || '#/';
  return hash === href ? 'active' : '';
}

export function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navbar = document.getElementById('navbar');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
  }

  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}
