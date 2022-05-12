//sidebar

const openSidebar = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-btn");

openSidebar.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeSidebar.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

//show button

const joinBtn = document.querySelector(".join");
const ctaBtn = document.querySelector(".CTA");

ctaBtn.addEventListener("click", function () {
  ctaBtn.textContent = "Join our team today!";
  ctaBtn.style.background = " rgba(198, 210, 246, 1)";
});

localStorage.setItem("ctaBtnText", "Join our team today!");
localStorage.setItem("background", "rgba(198, 210, 246, 1)");

// window.addEventListener("popstate", function () {
//   ctaBtn.textContent = localStorage.getItem("ctaBtnText");
//   ctaBtn.style.background = localStorage.getItem("background");
// });

//alert
// setTimeout(() => {
//   alert("No longer available");
//   if (alert) {
//     window.location.href = "status_expired.html";
//   }
// }, 3000);
