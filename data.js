/*
 * Morning Briefing data.
 *
 * The daily task PREPENDS a new object to the front of this array
 * (newest first). Each entry is fully self-contained, so the page can
 * render the latest briefing plus an archive of every previous day.
 *
 * Shape of one briefing:
 * {
 *   date:     "Friday, June 19, 2026",        // human label
 *   iso:      "2026-06-19",                    // sort key (YYYY-MM-DD)
 *   greeting: "…one line…",
 *   calendar: {
 *     allDay: ["…"],                           // all-day items / holidays
 *     events: [{ time: "09:00–10:00", title: "…", calendar: "…" }],
 *     note:   "…optional closing line…"
 *   },
 *   news: [
 *     { group: "AI & ML", section: "global", items: [{ text: "…", source: "…", url: "…" }] },
 *     { group: "Switzerland", section: "local", items: [ … ] }
 *   ]
 * }
 */
window.BRIEFINGS = [
  {
    date: "Friday, June 19, 2026",
    iso: "2026-06-19",
    greeting: `Good morning — here's your briefing for Friday, June 19, 2026. It's Juneteenth (US holiday), and your only fixed item is a 09:00 bank visit.`,
    calendar: {
      allDay: [`Juneteenth (US holiday)`],
      events: [
        { time: "09:00–10:00", title: `τράπεζα (bank)`, calendar: `charis@fijisolutions.net` }
      ],
      note: `Otherwise clear — nothing else scheduled this afternoon or evening.`
    },
    news: [
      {
        group: "AI & ML",
        section: "global",
        items: [
          { text: `MIT researchers show a small AI model can outperform the largest ones at roughly 1% of the cost.`, source: `MIT News`, url: `https://news.mit.edu/topic/machine-learning` },
          { text: `UPenn's "Mollifier Layers" stabilize neural nets solving inverse PDEs, with results headed to NeurIPS 2026.`, source: `ScienceDaily`, url: `https://www.sciencedaily.com/news/computers_math/artificial_intelligence/` },
          { text: `The industry's big shift is agentic systems — moving AI from chat to task completion across coding, support, payments and commerce.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` },
          { text: `A new "ChartNet" dataset aims to improve how vision-language models read charts and scientific figures.`, source: `MIT News`, url: `https://news.mit.edu/topic/machine-learning` }
        ]
      },
      {
        group: "Tech & startups",
        section: "global",
        items: [
          { text: `Anthropic surpassed OpenAI in annualized revenue for the first time, hitting a ~$30B run rate (OpenAI ~$25–27B).`, source: `Tech Startups, Jun 18`, url: `https://techstartups.com/2026/06/18/top-tech-news-today-june-18-2026/` },
          { text: `VivaTech 2026 becomes a key test of whether Europe can turn regulatory ambition into competitive AI firms as US labs pull ahead on compute.`, source: `Tech Startups, Jun 18`, url: `https://techstartups.com/2026/06/18/top-tech-news-today-june-18-2026/` },
          { text: `Funding is rotating toward defense tech, robotics, healthtech, compliance and industrial software over hype plays.`, source: `Tech Startups, Jun 18`, url: `https://techstartups.com/2026/06/18/top-tech-news-today-june-18-2026/` }
        ]
      },
      {
        group: "Software engineering",
        section: "global",
        items: [
          { text: `AI coding tools dominate dev chatter — Claude Code stays most-used while OpenCode debuts at #1 in the latest rankings.`, source: `LogRocket`, url: `https://blog.logrocket.com/ai-dev-tool-power-rankings/` },
          { text: `At Microsoft Build 2026, GitHub Copilot remote control went generally available on github.com and GitHub Mobile.`, source: `GitHub Blog`, url: `https://github.blog/news-insights/` },
          { text: `Trust gap persists: a Stack Overflow survey found more developers distrust AI tools (46%) than trust them (33%).`, source: `LogRocket`, url: `https://blog.logrocket.com/ai-dev-tool-power-rankings/` }
        ]
      },
      {
        group: "Crypto",
        section: "global",
        items: [
          { text: `Bitcoin slipped to ~$62.4k (−2.9%) and Ethereum to ~$1,685 (−3.6%) after the Fed revived rate-hike risk.`, source: `Investing News`, url: `https://investingnews.com/cryptocurrency-market-recap/` },
          { text: `BlackRock now holds ~764,000 BTC, making it the third-largest bitcoin holder.`, source: `Investing News`, url: `https://investingnews.com/cryptocurrency-market-recap/` },
          { text: `Wyoming launched the first US state-backed stablecoin, the FRNT token.`, source: `Investing News`, url: `https://investingnews.com/cryptocurrency-market-recap/` }
        ]
      },
      {
        group: "World",
        section: "global",
        items: [
          { text: `US–Iran implementation talks in Switzerland were abruptly cancelled, clouding the 14-point deal and its 60-day window.`, source: `NPR World`, url: `https://www.npr.org/sections/world/` },
          { text: `US Defense Secretary Hegseth pushed a "NATO 3.0" reboot and announced a review of US forces in Europe.`, source: `NPR World`, url: `https://www.npr.org/sections/world/` },
          { text: `World Cup 2026: Scotland faces Morocco in Boston tonight; FIFA has mandated player hydration breaks amid extreme heat.`, source: `ESPN`, url: `https://www.espn.com/soccer/story/_/id/49114848/world-cup-2026-today-blog-19-06-2026-live-updates-news-fixtures-schedule-results-mexico-canada-win` }
        ]
      },
      {
        group: "Switzerland",
        section: "local",
        items: [
          { text: `Switzerland beat Bosnia and Herzegovina 4-1 at the World Cup, bouncing back from a 1-1 draw with Qatar.`, source: `The Local CH`, url: `https://www.thelocal.ch/20260619/today-in-switzerland-a-roundup-of-the-latest-news-on-friday-248` },
          { text: `Switzerland slipped to 3rd in the 2026 World Competitiveness Report (behind Singapore and Hong Kong) — still tops in Europe.`, source: `swissinfo`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `Planned US–Iran talks at the Bürgenstock resort near Lucerne were called off.`, source: `The Local CH`, url: `https://www.thelocal.ch/20260619/today-in-switzerland-a-roundup-of-the-latest-news-on-friday-248` }
        ]
      },
      {
        group: "Greece",
        section: "local",
        items: [
          { text: `Greece ranked 2nd in the EU for bathing-water quality in 2026, with 97.1% of waters meeting standards.`, source: `GreekReporter`, url: `https://greekreporter.com/` },
          { text: `Archaeologists rediscovered a long-lost temple to Poseidon — a dual-chamber sanctuary submerged for centuries.`, source: `GreekReporter`, url: `https://greekreporter.com/` },
          { text: `Greece is weighing deploying naval units for mine-clearing and security in the Strait of Hormuz.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` }
        ]
      }
    ]
  }
];
