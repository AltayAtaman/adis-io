/* ==========================================================================
   yiy.io - Mobile Menu & Clipboard Helper Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Safe Copy Email / Contact Helper (with HTTP fallback)
function copyEmail(email) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(() => {
      alert('E-posta adresi panoya kopyalandı: ' + email);
    }).catch(() => {
      fallbackCopyEmail(email);
    });
  } else {
    fallbackCopyEmail(email);
  }
}

function fallbackCopyEmail(email) {
  const textArea = document.createElement('textarea');
  textArea.value = email;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    alert('E-posta adresi panoya kopyalandı: ' + email);
  } catch (e) {
    prompt('E-posta adresini kopyalayın:', email);
  }
  document.body.removeChild(textArea);
}
