(function() {
  const init = () => {
    const btnCerere = document.getElementById('btn-cerere');
    const btnFurnizor = document.getElementById('btn-furnizor');
    
    if (btnCerere && btnFurnizor) {
      const activeClass = ['bg-slate-900', 'text-white', 'shadow-sm'];
      const inactiveClass = ['text-slate-500', 'hover:text-slate-900'];
      
      btnCerere.addEventListener('click', () => {
        btnCerere.classList.add(...activeClass);
        btnCerere.classList.remove(...inactiveClass);
        btnFurnizor.classList.remove(...activeClass);
        btnFurnizor.classList.add(...inactiveClass);
      });
      
      btnFurnizor.addEventListener('click', () => {
        btnFurnizor.classList.add(...activeClass);
        btnFurnizor.classList.remove(...inactiveClass);
        btnCerere.classList.remove(...activeClass);
        btnCerere.classList.add(...inactiveClass);
      });
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();