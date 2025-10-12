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
  
  const items = document.querySelectorAll('.fadeUp');
  function reveal(){
    const top = window.innerHeight * 0.85;
    items.forEach(i => {
      const r = i.getBoundingClientRect();
      if(r.top < top) i.classList.add('show');
    });
  }
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
  
  function openGallery(index){
    alert('Gallery viewer - Image ' + (index + 1) + '\n\nIn production, this would open a full-screen image viewer.');
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