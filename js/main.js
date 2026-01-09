// ================= AOS INIT =================
AOS.init({
  duration: 900,
  once: true
});

// ================= CURSOR GLOW =================
const glow = document.getElementById("cursorGlow");
if (glow) {
  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

// ================= FORCE DARK MODE =================
document.body.classList.add("dark");

// ================= FIX SECTION IDS =================
document.addEventListener("DOMContentLoaded", () => {
  const map = [
    ["About", "about"],
    ["Education", "education"],
    ["Technical Skills", "skills"],
    ["Experience", "experience"],
    ["Noteworthy Projects", "projects"],
    ["Reports & Documentation", "reports"],
    ["Certifications", "certifications"],
    ["Achievements", "achievements"],
    ["Let’s Work Together", "contact"]
  ];

  document.querySelectorAll("section").forEach(sec => {
    const title = sec.querySelector("h2");
    if (!title) return;

    map.forEach(([text, id]) => {
      if (title.innerText.includes(text)) {
        sec.id = id;
      }
    });
  });
});

// ================= DOT NAV SCROLL =================
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".nav-item");

  const sections = [...items].map(item => ({
    nav: item,
    section: document.getElementById(item.dataset.target)
  })).filter(x => x.section);

  // Click scroll
  sections.forEach(({ nav, section }) => {
    nav.addEventListener("click", () => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Active highlight
  window.addEventListener("scroll", () => {
    let activeId = "";
    sections.forEach(({ section }) => {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
        activeId = section.id;
      }
    });

    sections.forEach(({ nav }) => {
      nav.classList.toggle("active", nav.dataset.target === activeId);
    });
  });
});
