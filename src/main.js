// ==========================================
// MAIN ENTRY POINT
// ==========================================
import './style.css';
import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { navigateTo } from './router.js';

function init() {
    const app = document.getElementById('app');

    // Create layout structure
    app.innerHTML = `
    ${renderNavbar()}
    <main id="content"></main>
    ${renderFooter()}
  `;

    // Init navbar behavior
    initNavbar();

    // Get content container
    const content = document.getElementById('content');

    // Initial route
    navigateTo(content);

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        navigateTo(content);

        // Re-render navbar to update active states
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            const hash = window.location.hash || '#/';
            navMenu.querySelectorAll('a').forEach(a => {
                const href = a.getAttribute('href');
                if (href) {
                    a.classList.toggle('active', href === hash || (hash.startsWith(href) && href !== '#/'));
                }
            });
        }

        // Close mobile nav on navigation
        const mobileNav = document.getElementById('mobileNav');
        if (mobileNav) {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

// Boot
document.addEventListener('DOMContentLoaded', init);
