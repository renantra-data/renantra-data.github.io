(function(){
    const btn = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    btn.addEventListener('click', function(){
        const open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });
})();
