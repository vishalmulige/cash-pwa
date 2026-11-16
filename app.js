(() => {
  const pages = ["dashboard", "borrowers", "loans", "activity", "settings"];
  const labels = {dashboard:"Overview", borrowers:"Borrowers", loans:"Loans", activity:"Activity", settings:"Settings"};
  const crumb = document.getElementById("crumb-title");
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function navigate(page) {
    if (!pages.includes(page)) return;
    document.querySelectorAll(".page").forEach(el => el.classList.toggle("active", el.id === `page-${page}`));
    document.querySelectorAll("[data-page]").forEach(el => {
      const active = el.dataset.page === page;
      if (el.classList.contains("nav-link") || el.classList.contains("mobile-nav-link")) {
        el.classList.toggle("active", active);
        if (active) el.setAttribute("aria-current", "page");
        else el.removeAttribute("aria-current");
      }
    });
    crumb.textContent = labels[page];
    window.scrollTo({top:0, behavior:"smooth"});
  }

  document.addEventListener("click", event => {
    const target = event.target.closest("[data-page]");
    if (target) {
      event.preventDefault();
      navigate(target.dataset.page);
    }
  });

  ["borrower-add","borrower-add-empty"].forEach(id => {
    document.getElementById(id)?.addEventListener("click", () => showToast("Borrower creation arrives in Stage 2."));
  });
  ["loan-add","loan-add-empty"].forEach(id => {
    document.getElementById(id)?.addEventListener("click", () => showToast("Loan creation arrives in Stage 3."));
  });

  const today = new Intl.DateTimeFormat("en-IN", {weekday:"long", day:"numeric", month:"long"}).format(new Date());
  document.getElementById("today-label").textContent = today.toUpperCase();

  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(err => console.warn("Service worker registration failed:", err));
    });
  }
})();
