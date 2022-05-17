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

sidebar.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

//show button

const joinBtn = document.querySelector(".join");
const ctaBtn = document.querySelector(".CTA");

ctaBtn.addEventListener("click", function () {
  ctaBtn.textContent = "Join our team today!";
  localStorage.setItem("ctaBtnText", "Join our team today!");
  ctaBtn.style.background = "rgba(198, 210, 246, 1)";
  localStorage.setItem("background", "rgba(198, 210, 246, 1)");
});

window.addEventListener("load", function () {
  let ctaBtnText = localStorage.getItem("ctaBtnText");
  let background = localStorage.getItem("background");

  if (ctaBtnText) {
    ctaBtn.textContent = ctaBtnText;
  } else {
    ctaBtn.textContent = "Got what it takes?";
  }
  if (background) {
    ctaBtn.style.background = background;
  } else {
    ctaBtn.style.background =
      "linear-gradient( 90deg, rgba(222, 162, 31, 1) 28%,rgba(247, 190, 109, 1) 60%);";
  }
});

alert;
setTimeout(() => {
  alert("No longer available");
  if (alert) {
    window.location.href = "job_status.html";
  }
}, 300000);

// localStorage.removeItem("ctaBtnText");
// localStorage.removeItem("background");
