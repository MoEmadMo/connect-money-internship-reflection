(function () {
  "use strict";
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var total = slides.length;
  function brandMarkup(number) {
    return '<div class="brand"><img src="assets/brand/connect-symbol.jfif" alt="Connect Money"><span><b>Connect Money</b><small>Internship Reflection</small></span></div><div class="pageno">' + String(number).padStart(2, "0") + ' <b>/</b> ' + String(total).padStart(2, "0") + "</div>";
  }
  slides.forEach(function (slide, index) {
    var topbar = slide.querySelector(".topbar");
    var footer = slide.querySelector(".footer");
    if (topbar) topbar.innerHTML = brandMarkup(index + 1);
    if (footer) footer.innerHTML = "<span>" + (slide.getAttribute("data-footer") || "Connect Money") + "</span>";
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
  }, { threshold: 0.28 });
  slides.forEach(function (slide) { observer.observe(slide); });
  if (slides.length) slides[0].classList.add("is-visible");
  document.addEventListener("keydown", function (event) {
    var current = slides.reduce(function (closest, slide) {
      return Math.abs(slide.getBoundingClientRect().top) < Math.abs(closest.getBoundingClientRect().top) ? slide : closest;
    }, slides[0]);
    var currentIndex = slides.indexOf(current);
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      (slides[currentIndex + 1] || current).scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      (slides[currentIndex - 1] || current).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}());
