// ==========================================
// HEALTH PACKAGES PAGE
// ==========================================
import { packages } from '../data.js';
import { packageCard } from './home.js';

export function renderPackages() {
    return `
    <div class="page-banner">
      <div class="container">
        <h1>Health Checkup Packages</h1>
        <p>Comprehensive preventive health screening at affordable prices</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <span>Health Packages</span>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="packages-grid">
          ${packages.map(pkg => packageCard(pkg)).join('')}
        </div>
      </div>
    </section>
  `;
}
