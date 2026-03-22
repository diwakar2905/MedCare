// ==========================================
// DOCTOR PROFILE PAGE
// ==========================================
import { doctors } from '../data.js';

export function renderDoctorProfile(id) {
    const doc = doctors.find(d => d.id === parseInt(id));
    if (!doc) return '<div class="container" style="padding:140px 0 60px;text-align:center;"><h2>Doctor not found</h2><a href="#/doctors" class="btn btn-primary" style="margin-top:20px;">Back to Doctors</a></div>';

    return `
    <div class="page-banner">
      <div class="container">
        <h1>${doc.name}</h1>
        <p>${doc.speciality} Specialist</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <a href="#/doctors">Doctors</a> <span>/</span> <span>${doc.name}</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="doctor-profile-header">
        <div class="profile-photo">
          <i class="fa-solid fa-user-doctor"></i>
        </div>
        <div class="profile-info">
          <h1>${doc.name}</h1>
          <p class="prof-spec">${doc.speciality}</p>
          <div class="profile-meta-grid">
            <div class="pm-item">
              <i class="fa-solid fa-briefcase"></i>
              <h4>${doc.experience} Years</h4>
              <p>Experience</p>
            </div>
            <div class="pm-item">
              <i class="fa-solid fa-star" style="color:#f59e0b"></i>
              <h4>${doc.rating}/5.0</h4>
              <p>Patient Rating</p>
            </div>
            <div class="pm-item">
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <h4>₹${doc.fee}</h4>
              <p>Consultation Fee</p>
            </div>
          </div>
          <p style="margin-bottom:16px;line-height:1.8;">${doc.bio}</p>
          <p style="margin-bottom:8px;"><strong>Education:</strong> ${doc.education}</p>
          <p style="margin-bottom:8px;"><strong>Hospital:</strong> ${doc.hospital}</p>
          <p style="margin-bottom:24px;"><strong>Languages:</strong> ${doc.languages.join(', ')}</p>
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            <a href="#/appointment?doctor=${doc.id}" class="btn btn-primary btn-lg"><i class="fa-solid fa-calendar-check"></i> Book Appointment</a>
            <a href="tel:+911140001000" class="btn btn-outline btn-lg"><i class="fa-solid fa-phone"></i> Call Now</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
