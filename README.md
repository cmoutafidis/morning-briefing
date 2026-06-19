# Morning Briefing

A tiny, dependency-free static site that shows a daily morning briefing —
today's calendar plus curated news — and keeps an archive of past days.
It's updated automatically each morning by a scheduled task, then committed
and pushed so it can be opened from any device (including a phone).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page shell (header, theme toggle, containers). |
| `styles.css` | shadcn-inspired styling, light/dark via `data-theme`. |
| `app.js` | Renders `window.BRIEFINGS` into the latest view + archive. |
| `data.js` | The data. **This is the only file the daily task edits.** |

## How the daily update works

Each morning the scheduled task generates the briefing and **prepends** one
object to the `window.BRIEFINGS` array in `data.js` (newest first), then
commits and pushes. No build step — the page reads the data directly.

One briefing object:

```js
{
  date: "Friday, June 19, 2026",   // human label, shown as the heading
  iso:  "2026-06-19",              // sort key (YYYY-MM-DD), newest first
  greeting: "Good morning — …",
  calendar: {
    allDay: ["Juneteenth (US holiday)"],
    events: [{ time: "09:00–10:00", title: "…", calendar: "charis@fijisolutions.net" }],
    note:   "Otherwise clear."     // optional
  },
  news: [
    { group: "AI & ML",      section: "global", items: [{ text: "…", source: "…", url: "…" }] },
    { group: "Switzerland",  section: "local",  items: [ … ] }
  ]
}
```

- `section: "global"` groups render under **News**.
- `section: "local"` groups render under **Local — Switzerland & Greece**.

## Viewing locally

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Hosting

Any static host works (GitHub Pages, Vercel, Netlify) since there's no build
step. The repo's `origin` already points to GitHub; enabling Pages on the
default branch will serve it at a public URL.
