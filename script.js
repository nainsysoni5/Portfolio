// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to top button functionality
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  // Fade-in animation on scroll
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal functionality for project details
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalCloseBtn = modal.querySelector('.modal-close');

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', () => {
    modalTitle.textContent = item.getAttribute('data-title');
    modalDesc.textContent = item.getAttribute('data-description');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  });
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      item.click();
    }
  });
});

modalCloseBtn.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Restore scroll
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});
