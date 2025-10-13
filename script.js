// Mobile Menu Toggle Functions
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const hamburger = document.querySelector('.hamburger');
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
}

function closeMenu() {
  const nav = document.getElementById('mainNav');
  const hamburger = document.querySelector('.hamburger');
  nav.classList.remove('active');
  hamburger.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const nav = document.getElementById('mainNav');
  const hamburger = document.querySelector('.hamburger');
  const isClickInsideNav = nav?.contains(event.target);
  const isClickOnHamburger = hamburger?.contains(event.target);
  
  if (!isClickInsideNav && !isClickOnHamburger && nav?.classList.contains('active')) {
    closeMenu();
  }
});

function scrollToSection(id){
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }
  
  function callNow(){
    window.location.href = 'tel:9811750130';
  }
  
  function openCallback(){
    document.getElementById('name').focus();
    window.scrollTo({top:document.getElementById('contact').offsetTop - 80, behavior:'smooth'});
  }
  
  function submitForm(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert('Thanks ' + name + '. Our sales concierge will contact you shortly.');
    document.getElementById('contactForm').reset();
    return false;
  }
  
  let items = [];
  let ticking = false;
  
  function reveal(){
    const top = window.innerHeight * 0.85;
    items.forEach(i => {
      const r = i.getBoundingClientRect();
      if(r.top < top && r.bottom > 0) {
        i.classList.add('show');
      }
    });
    ticking = false;
  }
  
  function requestReveal() {
    if (!ticking) {
      window.requestAnimationFrame(reveal);
      ticking = true;
    }
  }
  
  function initReveal() {
    items = document.querySelectorAll('.fadeUp');
    if (items.length > 0) {
      reveal(); // Initial reveal
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
  
  window.addEventListener('load', reveal);
  window.addEventListener('scroll', requestReveal, { passive: true });
  window.addEventListener('resize', requestReveal, { passive: true });
  
  setTimeout(reveal, 500);
  
  // Global variable to track current image index
  let currentImageIndex = 0;

  function openGallery(index){
    currentImageIndex = index;

    // Create modal if it doesn't exist
    let modal = document.getElementById('imageModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'imageModal';
      modal.className = 'image-modal';
      modal.innerHTML = `
        <div class="modal-overlay" onclick="closeImageModal()"></div>
        <div class="modal-content">
          <button class="modal-close" onclick="closeImageModal()">&times;</button>

          <!-- Navigation buttons -->
          <button class="modal-nav modal-prev" onclick="previousImage()" title="Previous Image">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          <button class="modal-nav modal-next" onclick="nextImage()" title="Next Image">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>

          <img id="modalImage" src="" alt="Enlarged image">
        </div>
      `;
      document.body.appendChild(modal);

      // Add keyboard navigation
      document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
          switch(e.key) {
            case 'Escape':
              closeImageModal();
              break;
            case 'ArrowLeft':
              e.preventDefault();
              previousImage();
              break;
            case 'ArrowRight':
              e.preventDefault();
              nextImage();
              break;
          }
        }
      });
    }

    // Define all images with their sources and captions
    const images = [
      { src: './images/6_page-0001.webp', alt: 'Exterior view' },
      { src: './images/7_page-0001.webp', alt: 'Living room' },
      { src: './images/13_page-0001.webp', alt: 'Master bedroom' },
      { src: './images/14_page-0001.webp', alt: 'Kitchen' },
      { src: './images/15_page-0001.webp', alt: 'Rooftop pool' },
      { src: './images/16_page-0001.webp', alt: 'Additional view' },
      { src: './images/17_page-0001.webp', alt: 'Additional view' },
      { src: './images/master-plan.webp', alt: 'Master plan layout' },
      { src: './images/H6_Gf3rd Floor_page-0001.jpg', alt: 'Ground Floor Layout' },
      { src: './images/H6_Gf3rd Floor_page-0002.jpg', alt: 'Food Court Layout' },
      { src: './images/location-map.webp', alt: 'Location Map' },
      { src: './images/7_page-0001.webp', alt: 'M3M Jacob & Co Logo' },
      { src: './images/20250609_H6%20Presentation_page-0001%20(1).webp', alt: 'M3M & Jacob & Co Luxury Property' }
    ];

    // Show the selected image
    updateModalImage(images);

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function updateModalImage(images) {
    const img = images[currentImageIndex];
    if (img) {
      document.getElementById('modalImage').src = img.src;

      // Update navigation button states
      const prevBtn = document.querySelector('.modal-prev');
      const nextBtn = document.querySelector('.modal-next');

      if (prevBtn && nextBtn) {
        prevBtn.style.opacity = currentImageIndex === 0 ? '0.5' : '1';
        prevBtn.style.pointerEvents = currentImageIndex === 0 ? 'none' : 'auto';
        nextBtn.style.opacity = currentImageIndex === images.length - 1 ? '0.5' : '1';
        nextBtn.style.pointerEvents = currentImageIndex === images.length - 1 ? 'none' : 'auto';
      }
    }
  }

  function nextImage() {
    const images = [
      { src: './images/6_page-0001.webp', alt: 'Exterior view' },
      { src: './images/7_page-0001.webp', alt: 'Living room' },
      { src: './images/13_page-0001.webp', alt: 'Master bedroom' },
      { src: './images/14_page-0001.webp', alt: 'Kitchen' },
      { src: './images/15_page-0001.webp', alt: 'Rooftop pool' },
      { src: './images/16_page-0001.webp', alt: 'Additional view' },
      { src: './images/17_page-0001.webp', alt: 'Additional view' },
      { src: './images/master-plan.webp', alt: 'Master plan layout' },
      { src: './images/H6_Gf3rd Floor_page-0001.jpg', alt: 'Ground Floor Layout' },
      { src: './images/H6_Gf3rd Floor_page-0002.jpg', alt: 'Food Court Layout' },
      { src: './images/location-map.webp', alt: 'Location Map' },
      { src: './images/7_page-0001.webp', alt: 'M3M Jacob & Co Logo' },
      { src: './images/20250609_H6%20Presentation_page-0001%20(1).webp', alt: 'M3M & Jacob & Co Luxury Property' }
    ];

    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      updateModalImage(images);
    }
  }

  function previousImage() {
    const images = [
      { src: './images/6_page-0001.webp', alt: 'Exterior view' },
      { src: './images/7_page-0001.webp', alt: 'Living room' },
      { src: './images/13_page-0001.webp', alt: 'Master bedroom' },
      { src: './images/14_page-0001.webp', alt: 'Kitchen' },
      { src: './images/15_page-0001.webp', alt: 'Rooftop pool' },
      { src: './images/16_page-0001.webp', alt: 'Additional view' },
      { src: './images/17_page-0001.webp', alt: 'Additional view' },
      { src: './images/master-plan.webp', alt: 'Master plan layout' },
      { src: './images/H6_Gf3rd Floor_page-0001.jpg', alt: 'Ground Floor Layout' },
      { src: './images/H6_Gf3rd Floor_page-0002.jpg', alt: 'Food Court Layout' },
      { src: './images/location-map.webp', alt: 'Location Map' },
      { src: './images/7_page-0001.webp', alt: 'M3M Jacob & Co Logo' },
      { src: './images/20250609_H6%20Presentation_page-0001%20(1).webp', alt: 'M3M & Jacob & Co Luxury Property' }
    ];

    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateModalImage(images);
    }
  }

  function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
  
  const planImages = {
    '3bhk': './images/f1.webp',
    '4bhk': './images/f2.webp',
    '5bhk': './images/f3.webp'
  };
  
  function switchPlan(type, event){
    document.querySelectorAll('.plan-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    const img = document.getElementById('planImage');
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = planImages[type];
      img.style.transition = 'opacity 0.3s ease';
      img.style.opacity = '1';
    }, 150);
  }
  
  function downloadPlan(){
    alert('Floor plan download initiated.\n\nIn production, this would download the selected floor plan PDF.');
  }
  
  function downloadMasterPlan(){
    alert('Master plan download initiated.\n\nIn production, this would download the complete master plan PDF.');
  }
  
  function viewInteractive(){
    alert('Opening interactive map viewer.\n\nIn production, this would open an interactive 3D site map.');
  }