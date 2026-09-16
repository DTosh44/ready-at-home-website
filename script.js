const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Keep the preparedness positioning consistent across the homepage and regional pages.
document.querySelectorAll(".not-doomsday").forEach((section) => {
  const mark = section.querySelector(".statement-mark");
  const eyebrow = section.querySelector(".eyebrow");
  const heading = section.querySelector("h2");
  const body = section.querySelector(".statement-grid > div:last-child > p:last-child");

  if (mark) {
    mark.innerHTML = "BE<br>READY.";
    mark.style.transform = "none";
  }
  if (eyebrow) eyebrow.textContent = "PRACTICAL PREPAREDNESS, WHATEVER YOUR STARTING POINT";
  if (heading) heading.textContent = "No hype. No pressure. Just a clearer way to be prepared.";
  if (body) body.textContent = "Whether you’re taking your first steps or already take preparedness seriously, Ready at Home helps you strengthen your household plan with practical actions, sensible priorities and guidance you can actually use.";
});

// Present the two homepage guide bundles straight rather than at opposing angles.
document.querySelectorAll(".hero-visual--dual .bundle-image").forEach((image) => {
  image.style.transform = "none";
});
