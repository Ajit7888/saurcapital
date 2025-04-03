// Simple smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Select all links with hashes
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Only prevent default if the link is on the same page
      if(this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        // Get the target element
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
          // Add smooth scrolling
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});