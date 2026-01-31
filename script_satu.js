// interaksi sederhana
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigasi diklik:", link.textContent);
  });
});