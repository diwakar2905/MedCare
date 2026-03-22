// ==========================================
// APPOINTMENT BOOKING PAGE
// ==========================================
import { doctors, hospitals, specialities } from '../data.js';

export function renderAppointment() {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const doctorId = params.get('doctor');
    const selectedDoctor = doctorId ? doctors.find(d => d.id === parseInt(doctorId)) : null;

    return `
    <div class="page-banner">
      <div class="container">
        <h1>Book an Appointment</h1>
        <p>${selectedDoctor ? `Booking with ${selectedDoctor.name}` : 'Schedule your visit with our top specialists'}</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <span>Book Appointment</span>
        </div>
      </div>
    </div>
    <section class="section appointment-page">
      <div class="container">
        <div class="appointment-form-container">
          <div class="card" style="padding:40px;">
            <h2 style="font-size:1.4rem;font-weight:700;color:var(--text-dark);margin-bottom:8px;">Patient Information</h2>
            <p style="color:var(--text-light);margin-bottom:28px;">Please fill in the details below to book your appointment</p>
            <form id="appointmentForm" class="form-grid">
              <div class="form-group">
                <label for="patientName">Patient Name *</label>
                <input type="text" id="patientName" placeholder="Enter full name" required />
              </div>
              <div class="form-group">
                <label for="patientPhone">Phone Number *</label>
                <input type="tel" id="patientPhone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div class="form-group">
                <label for="patientEmail">Email Address</label>
                <input type="email" id="patientEmail" placeholder="your@email.com" />
              </div>
              <div class="form-group">
                <label for="selectHospital">Select Hospital *</label>
                <select id="selectHospital" required>
                  <option value="">Choose Hospital</option>
                  ${hospitals.map(h => `<option value="${h.id}">${h.name} – ${h.city}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label for="selectDepartment">Select Department *</label>
                <select id="selectDepartment" required>
                  <option value="">Choose Department</option>
                  ${specialities.map(s => `<option value="${s.name}" ${selectedDoctor && selectedDoctor.speciality === s.name ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label for="selectDoctor">Select Doctor *</label>
                <select id="selectDoctor" required>
                  <option value="">Choose Doctor</option>
                  ${doctors.map(d => `<option value="${d.id}" ${selectedDoctor && selectedDoctor.id === d.id ? 'selected' : ''}>${d.name} – ${d.speciality}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label for="selectDate">Preferred Date *</label>
                <input type="date" id="selectDate" required />
              </div>
              <div class="form-group">
                <label for="selectTime">Preferred Time *</label>
                <select id="selectTime" required>
                  <option value="">Choose Time Slot</option>
                  <option>09:00 AM</option>
                  <option>09:30 AM</option>
                  <option>10:00 AM</option>
                  <option>10:30 AM</option>
                  <option>11:00 AM</option>
                  <option>11:30 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>02:30 PM</option>
                  <option>03:00 PM</option>
                  <option>03:30 PM</option>
                  <option>04:00 PM</option>
                  <option>04:30 PM</option>
                  <option>05:00 PM</option>
                </select>
              </div>
              <div class="form-group full">
                <label for="message">Additional Message</label>
                <textarea id="message" placeholder="Any specific concerns or medical history details..."></textarea>
              </div>
              <div class="form-group full" style="text-align:center;padding-top:12px;">
                <button type="submit" class="btn btn-primary btn-lg" style="min-width:260px;"><i class="fa-solid fa-calendar-check"></i> Confirm Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    if (!form) return;

    // Set min date to today
    const dateInput = document.getElementById('selectDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.value = today;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('patientName').value;
        const doctor = document.getElementById('selectDoctor');
        const doctorName = doctor.options[doctor.selectedIndex]?.text || 'our specialist';

        // Show confirmation modal
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
      <div class="modal-box">
        <div class="modal-icon"><i class="fa-solid fa-check"></i></div>
        <h2>Appointment Confirmed!</h2>
        <p>Thank you, <strong>${name}</strong>. Your appointment with <strong>${doctorName.split(' – ')[0]}</strong> has been successfully booked. You will receive a confirmation on your phone shortly.</p>
        <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">Done</button>
      </div>
    `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (ev) => { if (ev.target === modal) modal.remove(); });
        form.reset();
    });
}
