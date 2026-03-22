// ==========================================
// CONTACT PAGE
// ==========================================

export function renderContact() {
    return `
    <div class="page-banner">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with MedCare Hospitals</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <span>Contact</span>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="contact-info-cards">
          <div class="ci-card">
            <i class="fa-solid fa-phone"></i>
            <h4>Phone</h4>
            <p>+91 11 4000 1000</p>
          </div>
          <div class="ci-card">
            <i class="fa-solid fa-envelope"></i>
            <h4>Email</h4>
            <p>info@medcare.com</p>
          </div>
          <div class="ci-card">
            <i class="fa-solid fa-location-dot"></i>
            <h4>Address</h4>
            <p>Saket, New Delhi – 110017</p>
          </div>
          <div class="ci-card">
            <i class="fa-solid fa-truck-medical"></i>
            <h4>Emergency</h4>
            <p>Call 108</p>
          </div>
        </div>
        <div class="contact-grid">
          <div>
            <div class="card" style="padding:32px;">
              <h2 style="font-size:1.3rem;font-weight:700;color:var(--text-dark);margin-bottom:6px;">Send us a Message</h2>
              <p style="color:var(--text-light);margin-bottom:24px;font-size:0.9rem;">We'll get back to you within 24 hours</p>
              <form id="contactForm">
                <div class="form-group">
                  <label for="contactName">Your Name *</label>
                  <input type="text" id="contactName" placeholder="Enter your name" required />
                </div>
                <div class="form-group">
                  <label for="contactEmail">Email *</label>
                  <input type="email" id="contactEmail" placeholder="your@email.com" required />
                </div>
                <div class="form-group">
                  <label for="contactPhone">Phone</label>
                  <input type="tel" id="contactPhone" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div class="form-group">
                  <label for="contactSubject">Subject</label>
                  <select id="contactSubject">
                    <option>General Inquiry</option>
                    <option>Appointment Related</option>
                    <option>Insurance & Billing</option>
                    <option>Feedback</option>
                    <option>Career Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="contactMessage">Message *</label>
                  <textarea id="contactMessage" placeholder="Write your message..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;"><i class="fa-solid fa-paper-plane"></i> Send Message</button>
              </form>
            </div>
          </div>
          <div>
            <div class="map-placeholder">
              <div style="text-align:center;">
                <i class="fa-solid fa-map-location-dot" style="font-size:3rem;margin-bottom:12px;color:var(--primary);"></i>
                <p>Google Map Embed</p>
                <p style="font-size:0.82rem;">Saket, New Delhi – 110017</p>
              </div>
            </div>
            <div style="margin-top:20px;padding:24px;background:var(--bg-light);border-radius:var(--radius-md);">
              <h3 style="font-size:1rem;font-weight:600;color:var(--text-dark);margin-bottom:14px;">Working Hours</h3>
              <div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.88rem;border-bottom:1px solid var(--border);">
                <span>Monday – Friday</span><span style="font-weight:600;color:var(--text-dark);">8:00 AM – 8:00 PM</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.88rem;border-bottom:1px solid var(--border);">
                <span>Saturday</span><span style="font-weight:600;color:var(--text-dark);">8:00 AM – 5:00 PM</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.88rem;border-bottom:1px solid var(--border);">
                <span>Sunday</span><span style="font-weight:600;color:var(--text-dark);">9:00 AM – 2:00 PM</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.88rem;">
                <span>Emergency</span><span style="font-weight:600;color:var(--accent-red);">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
      <div class="modal-box">
        <div class="modal-icon"><i class="fa-solid fa-check"></i></div>
        <h2>Message Sent!</h2>
        <p>Thank you, <strong>${name}</strong>. We've received your message and will get back to you within 24 hours.</p>
        <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">Done</button>
      </div>
    `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (ev) => { if (ev.target === modal) modal.remove(); });
        form.reset();
    });
}
