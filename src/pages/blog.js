// ==========================================
// BLOG PAGE
// ==========================================
import { blogs } from '../data.js';
import { blogCard } from './home.js';

export function renderBlog() {
    return `
    <div class="page-banner">
      <div class="container">
        <h1>Health Blog</h1>
        <p>Expert health tips, medical insights, and wellness articles</p>
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>/</span> <span>Blog</span>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="blog-grid">
          ${blogs.map(b => blogCard(b)).join('')}
        </div>
      </div>
    </section>
  `;
}
