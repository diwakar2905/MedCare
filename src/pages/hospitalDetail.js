// ==========================================
// HOSPITAL DETAIL PAGE
// ==========================================
import { hospitals, doctors } from '../data.js';
import { doctorCard } from './home.js';

export function renderHospitalDetail(id) {
    const h = hospitals.find(h => h.id === parseInt(id));
    if (!h) return '<div class="container" style="padding:140px 0 60px;text-align:center;"><h2>Hospital not found</h2><a href="#/hospitals" class="btn btn-primary" style="margin-top:20px;">Back to Hospitals</a></div>';

    const hospitalDoctors = doctors.filter(d => d.hospital.includes(h.city));

    return `
    <div class="hospital-detail-hero">
      <i class="fa-solid fa-hospital"></i>
    </div>
    <div class="container">
      <div class="hd-info">
        <h1>${h.name}</h1>
        <p style="color:var(--text-light);font-size:1.05rem;margin-bottom:8px;"><i class="fa-solid fa-location-dot"></i> ${h.address}</p>
        <p style="color:var(--text-body);margin-bottom:8px;"><i class="fa-solid fa-phone"></i> ${h.contact}</p>
        <p style="color:var(--text-body);margin-bottom:8px;"><i class="fa-solid fa-certificate"></i> ${h.accreditation} Accredited</p>
        <p style="color:var(--text-body);"><i class="fa-solid fa-calendar"></i> Established ${h.established}</p>
        <div class="hd-features">
          <div class="hd-feature">
            <i class="fa-solid fa-bed"></i>
            <h4>${h.beds} Beds</h4>
            <p>Total Capacity</p>
          </div>
          <div class="hd-feature">
            <i class="fa-solid fa-procedures"></i>
            <h4>${h.icu} ICU Beds</h4>
            <p>Intensive Care</p>
          </div>
          <div class="hd-feature">
            <i class="fa-solid fa-door-open"></i>
            <h4>${h.ot} OTs</h4>
            <p>Operation Theatres</p>
          </div>
          <div class="hd-feature">
            <i class="fa-solid fa-truck-medical"></i>
            <h4>24/7</h4>
            <p>Emergency</p>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header" style="text-align:left;">
          <h2>Specialities Available</h2>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          ${h.specialities.map(s => `<span style="background:var(--primary-light);color:var(--primary);padding:8px 18px;border-radius:var(--radius-full);font-size:0.88rem;font-weight:500;">${s}</span>`).join('')}
        </div>
      </div>

      ${hospitalDoctors.length ? `
        <div class="section">
          <div class="section-header" style="text-align:left;">
            <h2>Doctors at This Hospital</h2>
          </div>
          <div class="doctors-grid">
            ${hospitalDoctors.map(doc => doctorCard(doc)).join('')}
          </div>
        </div>
      ` : ''}

      <div style="text-align:center;padding:40px 0;">
        <a href="#/appointment" class="btn btn-primary btn-lg"><i class="fa-solid fa-calendar-check"></i> Book Appointment at ${h.name.split(' ')[0]} ${h.name.split(' ')[1]}</a>
      </div>
    </div>
  `;
}
