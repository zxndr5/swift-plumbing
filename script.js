const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thanks. This is a demo booking form.");
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});
