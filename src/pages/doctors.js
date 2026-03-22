// ==========================================
// DOCTORS PAGE (Max Healthcare Style)
// ==========================================
import { doctors, specialities } from '../data.js';

export function renderDoctors() {
  const specOptions = [...new Set(specialities.map(s => s.name))];
  return `
    <div class="page-banner">
      <div class="container">
        <h1>Our Doctors</h1>
        <p>Find and book appointments with our experienced specialists</p>
        <div class="breadcrumb"><a href="#/">Home</a> <span>→</span> <span>Doctors</span></div>
      </div>
    </div>

    <div class="appointment-banner">
      <div class="container">
        <h3><i class="fa-solid fa-calendar-check"></i> To Book an Appointment</h3>
        <a href="tel:+919268880303" class="phone-badge"><i class="fa-solid fa-phone"></i> Call Us &nbsp; +91 926 888 0303</a>
      </div>
    </div>

    <div class="container">
      <div class="doctors-page-content">
        <!-- Filter Sidebar -->
        <aside class="filter-sidebar">
          <div class="filter-section">
            <h3><i class="fa-solid fa-search"></i> Search</h3>
            <input type="text" placeholder="Search by Doctor" id="doctorSearch" style="width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:0.88rem;" />
          </div>

          <div class="filter-section">
            <h3><i class="fa-solid fa-sort"></i> Sort</h3>
            <label class="filter-option"><input type="checkbox" id="sortExp" /> Experience: High to Low</label>
            <label class="filter-option"><input type="checkbox" id="sortAvail" /> Earliest Availability</label>
          </div>

          <div class="filter-section">
            <h3><i class="fa-solid fa-location-dot"></i> Location</h3>
            ${['All Locations', 'Delhi', 'Mumbai', 'Bangalore', 'Ahmedabad'].map((loc, i) => `
              <label class="filter-option"><input type="radio" name="location" value="${i === 0 ? '' : loc}" ${i === 0 ? 'checked' : ''} /> ${loc}</label>
            `).join('')}
          </div>

          <div class="filter-section">
            <h3><i class="fa-solid fa-stethoscope"></i> Speciality</h3>
            <label class="filter-option"><input type="radio" name="speciality" value="" checked /> All Specialities</label>
            ${specOptions.map(s => `<label class="filter-option"><input type="radio" name="speciality" value="${s}" /> ${s}</label>`).join('')}
          </div>

          <div class="filter-section">
            <h3><i class="fa-solid fa-venus-mars"></i> Gender</h3>
            <label class="filter-option"><input type="radio" name="gender" value="" checked /> All</label>
            <label class="filter-option"><input type="radio" name="gender" value="Male" /> Male</label>
            <label class="filter-option"><input type="radio" name="gender" value="Female" /> Female</label>
          </div>
        </aside>

        <!-- Doctor Cards -->
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <h2 style="font-size:1.2rem;font-weight:700;color:var(--navy);">Doctors Available</h2>
          </div>
          <div class="doctors-grid" id="doctorsGrid">
            ${doctors.map(doc => doctorCardListing(doc)).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function doctorCardListing(doc) {
  return `
    <div class="card doctor-card" data-name="${doc.name.toLowerCase()}" data-spec="${doc.speciality}" data-gender="${doc.gender}" data-exp="${doc.experience}" data-avail="${doc.available}" data-hospital="${doc.hospital}">
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
          <a href="#/appointment?doctor=${doc.id}" class="btn btn-navy btn-sm">Book an Appointment</a>
        </div>
      </div>
    </div>
  `;
}

export function initDoctorsPage() {
  const searchInput = document.getElementById('doctorSearch');
  const grid = document.getElementById('doctorsGrid');
  if (!searchInput || !grid) return;

  const filterDoctors = () => {
    const search = searchInput.value.toLowerCase();
    const spec = document.querySelector('input[name="speciality"]:checked')?.value || '';
    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const location = document.querySelector('input[name="location"]:checked')?.value || '';
    const cards = grid.querySelectorAll('.doctor-card');

    cards.forEach(card => {
      const name = card.dataset.name;
      const cardSpec = card.dataset.spec;
      const cardGender = card.dataset.gender;
      const cardHospital = card.dataset.hospital;

      const matchSearch = !search || name.includes(search);
      const matchSpec = !spec || cardSpec === spec;
      const matchGender = !gender || cardGender === gender;
      const matchLoc = !location || cardHospital.includes(location);

      card.style.display = (matchSearch && matchSpec && matchGender && matchLoc) ? '' : 'none';
    });
  };

  searchInput.addEventListener('input', filterDoctors);
  document.querySelectorAll('.filter-sidebar input[type="radio"]').forEach(r => r.addEventListener('change', filterDoctors));
}
