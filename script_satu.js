const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.dataset.page;

    // menu active
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // page switch
    pages.forEach(page => {
      page.classList.remove("active");
      if (page.id === target) {
        page.classList.add("active");
      }
    });
  });
});