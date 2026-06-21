/* Morning Briefing — renderer + theme toggle. No dependencies. */
(function () {
  "use strict";

  var ICONS = {
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderCalendar(cal) {
    cal = cal || {};
    var html = '<section class="section"><h2 class="section__label">Your Day</h2>';
    var hasAllDay = cal.allDay && cal.allDay.length;
    var hasEvents = cal.events && cal.events.length;

    if (hasAllDay) {
      html += '<div class="allday">';
      cal.allDay.forEach(function (a) { html += '<span class="badge">' + esc(a) + "</span>"; });
      html += "</div>";
    }

    if (hasEvents) {
      html += '<div class="events">';
      cal.events.forEach(function (e) {
        html += '<div class="event"><span class="event__time">' + esc(e.time) + "</span>" +
          '<span class="event__body"><span class="event__title">' + esc(e.title) + "</span>" +
          (e.calendar ? '<span class="event__cal">' + esc(e.calendar) + "</span>" : "") +
          "</span></div>";
      });
      html += "</div>";
    }

    if (!hasAllDay && !hasEvents) {
      html += '<p class="empty">Nothing scheduled today.</p>';
    }
    if (cal.note) html += '<p class="calendar__note">' + esc(cal.note) + "</p>";

    return html + "</section>";
  }

  function renderGroup(g) {
    var html = '<div class="news-group"><h3 class="news-group__title">' + esc(g.group) + "</h3><ul class=\"news-list\">";
    (g.items || []).forEach(function (it) {
      var src = it.url
        ? ' <a class="src" href="' + esc(it.url) + '" target="_blank" rel="noopener noreferrer">' + esc(it.source || "source") + " ↗</a>"
        : (it.source ? ' <span class="src">' + esc(it.source) + "</span>" : "");
      html += '<li class="news-item">' + esc(it.text) + src + "</li>";
    });
    return html + "</ul></div>";
  }

  function renderNews(news) {
    news = news || [];
    var global = news.filter(function (g) { return g.section !== "local"; });
    var local = news.filter(function (g) { return g.section === "local"; });

    var html = '<section class="section"><h2 class="section__label">News</h2>';
    global.forEach(function (g) { html += renderGroup(g); });
    if (local.length) {
      html += '<div class="subhead">Local — Switzerland &amp; Greece</div>';
      local.forEach(function (g) { html += renderGroup(g); });
    }
    return html + "</section>";
  }

  function renderChecklist(cl) {
    if (!cl || !cl.groups || !cl.groups.length) return "";
    var html = '<section class="section"><h2 class="section__label">Your To-dos</h2>';
    cl.groups.forEach(function (g) {
      html += '<div class="todo-group"><h3 class="todo-group__title">' + esc(g.name) + "</h3>";
      if (g.tasks && g.tasks.length) {
        html += '<ul class="todo-list">';
        g.tasks.forEach(function (t) { html += '<li class="todo-item">' + esc(t) + "</li>"; });
        html += "</ul>";
      } else {
        html += '<p class="empty todo-empty">No open tasks.</p>';
      }
      html += "</div>";
    });
    if (cl.url) html += '<p class="todo-src"><a href="' + esc(cl.url) + '" target="_blank" rel="noopener noreferrer">Open checklist ↗</a></p>';
    return html + "</section>";
  }

  function renderFollowups(fu) {
    if (!fu || !fu.leads) return "";
    var html = '<section class="section"><h2 class="section__label">Follow-ups</h2>';
    if (!fu.leads.length) {
      html += '<p class="empty">No follow-ups due.</p>';
    } else {
      html += '<ul class="lead-list">';
      fu.leads.forEach(function (l) {
        var meta = [];
        if (l.status) meta.push(esc(l.status));
        if (l.followUp) meta.push("follow-up " + esc(l.followUp));
        if (l.email) meta.push(esc(l.email));
        html += '<li class="lead-item"><span class="lead-name">' + esc(l.name) + "</span>" +
          (l.company ? '<span class="lead-co"> · ' + esc(l.company) + "</span>" : "") +
          (meta.length ? '<span class="lead-meta">' + meta.join(" · ") + "</span>" : "") +
          "</li>";
      });
      html += "</ul>";
    }
    if (fu.url) html += '<p class="todo-src"><a href="' + esc(fu.url) + '" target="_blank" rel="noopener noreferrer">Open outreach ↗</a></p>';
    return html + "</section>";
  }

  function renderBriefing(b) {
    return (b.greeting ? '<p class="greeting">' + esc(b.greeting) + "</p>" : "") +
      renderCalendar(b.calendar) +
      renderChecklist(b.checklist) +
      renderFollowups(b.followups) +
      renderNews(b.news);
  }

  function bySpecDesc(a, b) {
    return String(b.iso || "").localeCompare(String(a.iso || ""));
  }

  function render() {
    var data = (window.BRIEFINGS || []).slice().sort(bySpecDesc);
    // Collapse duplicate same-day entries (e.g. a "Run now" after the scheduled run), keeping the newest.
    var seen = {};
    data = data.filter(function (b) { var k = b.iso || b.date; if (seen[k]) return false; seen[k] = 1; return true; });
    var content = document.getElementById("content");
    var dateEl = document.getElementById("latest-date");
    var countEl = document.getElementById("archive-count");

    if (!data.length) {
      content.innerHTML = '<div class="briefing"><p class="empty">No briefing yet. The first one lands tomorrow morning.</p></div>';
      if (dateEl) dateEl.textContent = "—";
      return;
    }

    var latest = data[0];
    if (dateEl) dateEl.textContent = latest.date || latest.iso || "";

    var html = '<article class="briefing">' + renderBriefing(latest) + "</article>";

    var rest = data.slice(1);
    if (rest.length) {
      html += '<section class="archive"><h2 class="archive__heading">Earlier briefings</h2>';
      rest.forEach(function (b) {
        html += '<details class="archive-item"><summary>' + esc(b.date || b.iso) + "</summary>" +
          '<div class="archive-body">' + renderBriefing(b) + "</div></details>";
      });
      html += "</section>";
    }
    content.innerHTML = html;

    if (countEl) {
      countEl.textContent = data.length + (data.length === 1 ? " briefing" : " briefings");
    }
  }

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
    try { localStorage.setItem("mb-theme", theme); } catch (e) {}
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("mb-theme"); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark");
      });
    }
  }

  function boot() { initTheme(); render(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
