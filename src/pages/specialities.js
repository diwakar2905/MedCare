// ==========================================
// SPECIALITIES PAGE
// ==========================================
import { specialities, doctors } from '../data.js';
import { doctorCard } from './home.js';

export function renderSpecialities() {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const specId = params.get('id');

    if (specId) {
        const spec = specialities.find(s => s.id === parseInt(specId));
        if (!spec) return renderSpecList();
        const specDoctors = doctors.filter(d => d.speciality === spec.name);
        return `
      <div class="page-banner">
        <div class="container">
          <h1>${spec.name}</h1>
          <p>${spec.desc}</p>
          <div class="breadcrumb">
            <a href="#/">Home</a> <span>/</span> <a href="#/specialities">Specialities</a> <span>/</span> <span>${spec.name}</span>
          </div>
        </div>
      </div>
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2>${spec.name} Specialists</h2>
            <p>Book an appointment with our experienced ${spec.name.toLowerCase()} doctors</p>
          </div>
          ${specDoctors.length
                ? `<div class="doctors-grid">${specDoctors.map(d => doctorCard(d)).join('')}</div>`
                : '<p style="text-align:center;color:var(--text-light);padding:40px 0;">No doctors listed in this speciality currently. <a href="#/doctors" style="color:var(--primary);">View all doctors →</a></p>'
            }
        </div>
      </section>
    `;
    }
    return renderSpecList();
}

function renderSpecList() {
    return `
    <div class="page-banner">
      <div class="container">
        <h1>Our Specialities</h1>
        <p>Comprehensive medical care across all major disciplines</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <span>Specialities</span>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="specialities-grid">
          ${specialities.map(spec => `
            <a href="#/specialities?id=${spec.id}" class="spec-card" style="padding:32px 20px;">
              <div class="spec-icon" style="width:70px;height:70px;font-size:1.6rem;"><i class="fa-solid ${spec.icon}"></i></div>
              <h3 style="margin-bottom:8px;">${spec.name}</h3>
              <p style="font-size:0.8rem;color:var(--text-light);">${spec.desc}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
