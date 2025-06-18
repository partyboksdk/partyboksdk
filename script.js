document.addEventListener('DOMContentLoaded', ()=>{
  const buttons = document.querySelectorAll('.toggle-btn');
  const cards = document.querySelectorAll('.pricing-card');
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.target;
      cards.forEach(card=>{
        card.style.display = card.dataset.type === target ? 'block' : 'none';
      });
    });
  });
  // Initialize
  buttons[0].click();
