// ==========================================
// HOSPITALS LISTING PAGE
// ==========================================
import { hospitals } from '../data.js';
import { hospitalCard } from './home.js';

export function renderHospitals() {
    return `
    <div class="page-banner">
      <div class="container">
        <h1>Our Hospitals</h1>
        <p>Find world-class MedCare hospitals near you</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <span>Hospitals</span>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="hospitals-grid">
          ${hospitals.map(h => hospitalCard(h)).join('')}
        </div>
      </div>
    </section>
  `;
}
