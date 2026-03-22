// ==========================================
// SPA ROUTER (Hash-based)
// ==========================================
import { renderHome } from './pages/home.js';
import { renderDoctors, initDoctorsPage } from './pages/doctors.js';
import { renderDoctorProfile } from './pages/doctorProfile.js';
import { renderHospitals } from './pages/hospitals.js';
import { renderHospitalDetail } from './pages/hospitalDetail.js';
import { renderSpecialities } from './pages/specialities.js';
import { renderAppointment, initAppointmentForm } from './pages/appointment.js';
import { renderPackages } from './pages/packages.js';
import { renderBlog } from './pages/blog.js';
import { renderContact, initContactForm } from './pages/contact.js';

const routes = {
    '/': { render: renderHome, title: 'MedCare Hospitals – India\'s Most Trusted Healthcare Network' },
    '/doctors': { render: renderDoctors, init: initDoctorsPage, title: 'Our Doctors – MedCare Hospitals' },
    '/hospitals': { render: renderHospitals, title: 'Our Hospitals – MedCare Hospitals' },
    '/specialities': { render: renderSpecialities, title: 'Specialities – MedCare Hospitals' },
    '/appointment': { render: renderAppointment, init: initAppointmentForm, title: 'Book Appointment – MedCare Hospitals' },
    '/packages': { render: renderPackages, title: 'Health Packages – MedCare Hospitals' },
    '/blog': { render: renderBlog, title: 'Health Blog – MedCare Hospitals' },
    '/contact': { render: renderContact, init: initContactForm, title: 'Contact Us – MedCare Hospitals' },
    '/about': { render: renderAbout, title: 'About Us – MedCare Hospitals' },
    '/international': { render: renderInternational, title: 'International Patients – MedCare Hospitals' },
};

export function navigateTo(contentEl) {
    const hash = window.location.hash || '#/';
    const path = hash.slice(1).split('?')[0]; // remove query params

    // Check dynamic routes
    const doctorMatch = path.match(/^\/doctor\/(\d+)$/);
    const hospitalMatch = path.match(/^\/hospital\/(\d+)$/);

    let html = '';
    let initFn = null;

    if (doctorMatch) {
        html = renderDoctorProfile(doctorMatch[1]);
        document.title = 'Doctor Profile – MedCare Hospitals';
    } else if (hospitalMatch) {
        html = renderHospitalDetail(hospitalMatch[1]);
        document.title = 'Hospital Details – MedCare Hospitals';
    } else if (routes[path]) {
        html = routes[path].render();
        initFn = routes[path].init || null;
        document.title = routes[path].title;
    } else {
        html = render404();
        document.title = 'Page Not Found – MedCare Hospitals';
    }

    contentEl.innerHTML = html;

    // Run page-specific init
    if (initFn) setTimeout(initFn, 0);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update active nav
    updateActiveNav(path);
}

function updateActiveNav(path) {
    document.querySelectorAll('.navbar-menu a, .mobile-nav a').forEach(a => {
        const href = a.getAttribute('href');
        if (href) {
            const linkPath = href.slice(1).split('?')[0];
            a.classList.toggle('active', linkPath === path);
        }
    });
}

function render404() {
    return `
    <div style="padding:160px 0 80px;text-align:center;">
      <div style="font-size:6rem;color:var(--primary);margin-bottom:20px;"><i class="fa-solid fa-hospital"></i></div>
      <h1 style="font-size:3rem;font-weight:800;color:var(--text-dark);margin-bottom:12px;">404</h1>
      <p style="font-size:1.1rem;color:var(--text-light);margin-bottom:32px;">The page you're looking for doesn't exist.</p>
      <a href="#/" class="btn btn-primary btn-lg"><i class="fa-solid fa-home"></i> Back to Home</a>
    </div>
  `;
}

function renderAbout() {
    return `
    <div class="page-banner">
      <div class="container">
        <h1>About MedCare Hospitals</h1>
        <p>India's most trusted healthcare network since 2005</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <span>About Us</span>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container" style="max-width:900px;">
        <div style="text-align:center;margin-bottom:48px;">
          <div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,var(--primary), var(--secondary));display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:3rem;color:#fff;">
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>

        <h2 style="font-size:1.6rem;font-weight:700;color:var(--text-dark);margin-bottom:16px;">Our Story</h2>
        <p style="line-height:1.9;margin-bottom:24px;">Founded in 2005, MedCare Hospitals has grown from a single super-speciality hospital in New Delhi to a network of 50+ hospitals across India. We are committed to providing world-class, affordable healthcare to every patient, powered by the latest technology and a team of 500+ specialist doctors.</p>

        <h2 style="font-size:1.6rem;font-weight:700;color:var(--text-dark);margin-bottom:16px;">Our Mission</h2>
        <p style="line-height:1.9;margin-bottom:24px;">To deliver compassionate, patient-centered healthcare of the highest quality, making advanced medical treatments accessible and affordable for communities across India and beyond.</p>

        <h2 style="font-size:1.6rem;font-weight:700;color:var(--text-dark);margin-bottom:16px;">Our Vision</h2>
        <p style="line-height:1.9;margin-bottom:40px;">To be the most trusted and preferred healthcare provider in Asia, setting benchmarks in clinical excellence, innovation, patient safety, and medical education.</p>

        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:40px;">
          <div style="text-align:center;padding:24px;background:var(--bg-light);border-radius:var(--radius-md);">
            <h3 style="font-size:2rem;font-weight:700;color:var(--primary);">2005</h3>
            <p style="font-size:0.85rem;color:var(--text-light);">Established</p>
          </div>
          <div style="text-align:center;padding:24px;background:var(--bg-light);border-radius:var(--radius-md);">
            <h3 style="font-size:2rem;font-weight:700;color:var(--primary);">50+</h3>
            <p style="font-size:0.85rem;color:var(--text-light);">Hospitals</p>
          </div>
          <div style="text-align:center;padding:24px;background:var(--bg-light);border-radius:var(--radius-md);">
            <h3 style="font-size:2rem;font-weight:700;color:var(--primary);">500+</h3>
            <p style="font-size:0.85rem;color:var(--text-light);">Doctors</p>
          </div>
          <div style="text-align:center;padding:24px;background:var(--bg-light);border-radius:var(--radius-md);">
            <h3 style="font-size:2rem;font-weight:700;color:var(--primary);">1M+</h3>
            <p style="font-size:0.85rem;color:var(--text-light);">Patients</p>
          </div>
        </div>

        <div style="text-align:center;">
          <a href="#/contact" class="btn btn-primary btn-lg"><i class="fa-solid fa-envelope"></i> Get in Touch</a>
        </div>
      </div>
    </section>
  `;
}

function renderInternational() {
    return `
    <div class="page-banner">
      <div class="container">
        <h1>International Patient Services</h1>
        <p>Seamless healthcare experience for patients from around the world</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <span>International Patients</span>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container" style="max-width:900px;">
        <p style="font-size:1.05rem;line-height:1.9;margin-bottom:40px;text-align:center;">MedCare Hospitals welcomes patients from over 40 countries. We provide end-to-end support for international patients, ensuring a smooth and comfortable healthcare journey from your home country to ours.</p>

        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:40px;">
          ${[
            { icon: 'fa-passport', title: 'Visa Assistance', desc: 'We help with medical visa applications, invitation letters, and documentation to ensure a hassle-free process.' },
            { icon: 'fa-plane-arrival', title: 'Airport Pickup & Drop', desc: 'Complimentary airport transfers in air-conditioned vehicles for all international patients and their attendants.' },
            { icon: 'fa-hotel', title: 'Accommodation', desc: 'We arrange comfortable hotel stays near the hospital, or provide on-campus guest rooms for attendants.' },
            { icon: 'fa-language', title: 'Language Translator', desc: 'Interpreter support available in Arabic, French, Russian, and other major languages during consultations and stay.' },
            { icon: 'fa-headset', title: 'Dedicated Coordinator', desc: 'A personal international patient coordinator handles everything from appointment scheduling to discharge and follow-up.' },
            { icon: 'fa-credit-card', title: 'Insurance & Billing', desc: 'We work with international insurance companies and provide transparent pricing with detailed cost estimates upfront.' },
        ].map(s => `
            <div class="card" style="padding:28px;display:flex;gap:16px;align-items:start;">
              <div style="width:50px;height:50px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fa-solid ${s.icon}" style="color:var(--primary);font-size:1.2rem;"></i>
              </div>
              <div>
                <h3 style="font-size:1rem;font-weight:600;color:var(--text-dark);margin-bottom:6px;">${s.title}</h3>
                <p style="font-size:0.88rem;color:var(--text-body);line-height:1.7;">${s.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center;padding:40px;background:var(--primary-light);border-radius:var(--radius-lg);">
          <h2 style="font-size:1.4rem;font-weight:700;color:var(--text-dark);margin-bottom:12px;">Need Help Planning Your Visit?</h2>
          <p style="color:var(--text-body);margin-bottom:20px;">Contact our International Patient Desk for a free consultation and treatment estimate.</p>
          <a href="#/contact" class="btn btn-primary btn-lg"><i class="fa-solid fa-phone"></i> Contact Us</a>
        </div>
      </div>
    </section>
  `;
}
