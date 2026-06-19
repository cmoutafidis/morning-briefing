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
    date: `Friday, June 19, 2026`,
    iso: `2026-06-19`,
    greeting: `Good morning — here's your briefing for Friday, June 19, 2026 (Juneteenth). One fixed item today: a 09:00 bank visit. Two open to-dos and no leads due for follow-up.`,
    calendar: {
      allDay: [`Juneteenth (US holiday)`],
      events: [
        { time: `09:00–10:00`, title: `τραπεζα (bank)`, calendar: `charis@fijisolutions.net` }
      ],
      note: `Otherwise clear — nothing scheduled this afternoon or evening.`
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `Followup PAP Center`] },
        { name: `Tasklist B`, tasks: [] }
      ]
    },
    followups: {
      source: `Fiji Solutions — Lead Outreach`,
      url: `https://outreach.fijisolutions.net/`,
      leads: []
    },
    news: [
      {
        group: `AI & ML`,
        section: `global`,
        items: [
          { text: `Claude Fable 5 came back online after a six-day government-forced shutdown, restored following Anthropic–White House negotiations.`, source: `AI Update, Jun 18`, url: `https://medium.com/adi-insights-innovations-collective/ai-update-thursday-june-18-2026-f74c93022f92` },
          { text: `Google made Gemini 2.5 Flash the default model across all Gemini products.`, source: `AI Update, Jun 18`, url: `https://medium.com/adi-insights-innovations-collective/ai-update-thursday-june-18-2026-f74c93022f92` },
          { text: `Northwestern engineers printed artificial neurons that communicate with biological ones, advancing brain-machine interfaces.`, source: `ScienceDaily`, url: `https://www.sciencedaily.com/news/computers_math/artificial_intelligence/` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `Anthropic surpassed OpenAI in annualized revenue for the first time, hitting a ~$30B run rate (OpenAI ~$25–27B).`, source: `Tech Startups, Jun 18`, url: `https://techstartups.com/2026/06/18/top-tech-news-today-june-18-2026/` },
          { text: `VivaTech 2026 becomes a key test of whether Europe can convert regulatory ambition into competitive AI firms as US labs pull ahead on compute.`, source: `Tech Startups, Jun 18`, url: `https://techstartups.com/2026/06/18/top-tech-news-today-june-18-2026/` },
          { text: `Crunchbase flags a 2026 IPO boom and more large AI M&A among the year's top startup trends.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/2026-tech-startup-trends-ipo-ai-ma/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `AI coding tools dominate dev chatter — Claude Code stays most-used (46% "most loved") while OpenCode debuts at #1 in the latest rankings.`, source: `LogRocket`, url: `https://blog.logrocket.com/ai-dev-tool-power-rankings/` },
          { text: `Google sunsets Gemini CLI on June 18, replaced by the Go-based Antigravity CLI with async workflows.`, source: `The Developer's World`, url: `https://medium.com/@umarhussainkhokhar1234/the-developers-world-in-june-2026-everything-that-s-changing-right-now-1de29f6d695e` },
          { text: `Anthropic shipped the Claude Agent SDK (TypeScript & Python) with native MCP server and sub-agent support.`, source: `The Developer's World`, url: `https://medium.com/@umarhussainkhokhar1234/the-developers-world-in-june-2026-everything-that-s-changing-right-now-1de29f6d695e` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin slid to ~$62,300 as a hawkish Fed weighed on prices and a US–Iran signing faltered.`, source: `BlockchainReporter`, url: `https://blockchainreporter.net/crypto-market-today-june-19-2026-bitcoin-62328-iran-signing-collapses/` },
          { text: `US spot Bitcoin ETFs saw an $82.2M net outflow on June 17, extending a ~$2B monthly drain.`, source: `BlockchainReporter`, url: `https://blockchainreporter.net/bitcoin-news-today/` },
          { text: `BlackRock launched the iShares Bitcoin Premium Income ETF (BITA) on Nasdaq, a covered-call income strategy.`, source: `BlockchainReporter`, url: `https://blockchainreporter.net/bitcoin-news-today/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `The US and Iran reached a preliminary peace agreement, though the planned signing ceremony has hit obstacles.`, source: `NPR World`, url: `https://www.npr.org/sections/world/` },
          { text: `Labour's Andy Burnham won a by-election, positioning him to challenge PM Keir Starmer for the party's leadership.`, source: `NPR`, url: `https://www.npr.org/sections/news` },
          { text: `World Cup 2026: Mexico reached the knockout stage; Scotland face Morocco in Boston tonight with a place in the last 16 on the line.`, source: `ESPN`, url: `https://www.espn.com/soccer/story/_/id/49114848/world-cup-2026-today-blog-19-06-2026-live-updates-news-fixtures-schedule-results-mexico-canada-win` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Switzerland beat Bosnia-Herzegovina 4-1 to take control of its World Cup group, sparked by Johan Manzambi's late volley.`, source: `ESPN`, url: `https://www.espn.com/soccer/match/_/gameId/760439/bosnia-herzegovina-switzerland` },
          { text: `Swiss parliament backed the government's proposal to allow construction of new nuclear power stations.`, source: `swissinfo`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `France–Geneva border crossings reopened earlier than planned after the G7 summit in Evian.`, source: `The Local CH`, url: `https://www.thelocal.ch/20260618/today-in-switzerland-a-roundup-of-the-latest-news-on-thursday-242` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `Scaffolding was removed from the Parthenon's western façade after restoration of its western pediment.`, source: `GreekReporter`, url: `https://greekreporter.com/greek-news/` },
          { text: `A US Senate committee approved the Eastern Mediterranean Gateway Act.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `The Corinth Canal is being fully reopened to maritime traffic.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` }
        ]
      }
    ]
  },
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
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `Followup PAP Center`] },
        { name: `Tasklist B`, tasks: [] }
      ]
    },
    followups: {
      source: `Fiji Solutions — Lead Outreach`,
      url: `https://outreach.fijisolutions.net/`,
      leads: [
        { name: `Θεόδωρος Παπαθεοδώρου`, company: `PAP Center`, status: `Working - Contacted`, followUp: `2026-06-23`, email: `theo@papcenter.gr` }
      ]
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
