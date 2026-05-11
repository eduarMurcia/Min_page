// Resaltar enlace activo según la página (opcional)
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        } else if (currentPage === "index.html" && href === "index.html") {
            link.classList.add("active");
        }
    });
});
