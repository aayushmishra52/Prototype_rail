// Animated counters for impact stats
function animateValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  const obj = document.getElementById(id);
  let timer = setInterval(function() {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

document.addEventListener("DOMContentLoaded", function() {
  animateValue("users", 0, 1200, 1200);
  animateValue("reports", 0, 350, 1000);
  animateValue("resolved", 0, 320, 1000);
});