(function () {
  var SITE = "bloom-blog";
  // TODO: replace with your deployed healing-games URL once it's live
  var API_BASE = "https://jimmytheorangecat.com";
  var NUM_KEY = "visitor-num-" + SITE;
  var TICKED_KEY = "visitor-ticked-" + SITE;

  function render(num) {
    var ticked = localStorage.getItem(TICKED_KEY) === "1";
    var badge = document.createElement("p");
    badge.id = "visitor-badge";
    badge.style.cssText =
      "text-align:center;font-size:0.72rem;color:var(--text-muted);" +
      "margin:6px 0 0;letter-spacing:0.02em;";

    if (ticked) {
      badge.textContent = "✓ Welcome, visitor #" + Number(num).toLocaleString();
    } else {
      badge.innerHTML =
        "You are visitor #" +
        Number(num).toLocaleString() +
        " — <span id='vb-tick' style='cursor:pointer;text-decoration:underline'>tick here ✓</span>";
      badge.querySelector("#vb-tick").addEventListener("click", function () {
        localStorage.setItem(TICKED_KEY, "1");
        badge.textContent = "✓ Welcome, visitor #" + Number(num).toLocaleString();
      });
    }

    var footer = document.querySelector("footer");
    if (footer) footer.appendChild(badge);
  }

  var stored = localStorage.getItem(NUM_KEY);
  if (stored) {
    render(stored);
    return;
  }

  fetch(API_BASE + "/api/visitor?site=" + SITE)
    .then(function (r) { return r.json(); })
    .then(function (d) {
      localStorage.setItem(NUM_KEY, String(d.count));
      render(d.count);
    })
    .catch(function () {});
})();
