(function(){
    const btn = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    btn.addEventListener('click', function(){
        const open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });
})();

/* ===============================
   Render Projek dari JSON
================================ */
fetch("projects.json")
  .then(res => res.json())
  .then(projects => {
    const grid = document.getElementById("projectGrid");

    projects
      .filter(p => p.status === "published")
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .forEach(p => {
        const tanggal = new Date(p.date).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        });

        grid.innerHTML += `
          <a href="${p.link}" class="project-card">
            <img src="${p.image}" alt="${p.title}">
            <div class="project-content">
              <span class="project-date">${tanggal}</span>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
          </a>
        `;
      });
  });