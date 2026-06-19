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
    greeting: `Good morning — here's your briefing for Friday, June 19, 2026.`,
    calendar: {
      allDay: [`Juneteenth (US holiday)`],
      events: [
        { time: "09:00–10:00", title: `τράπεζα (bank)`, calendar: `charis@fijisolutions.net` }
      ],
      note: `Otherwise clear — nothing scheduled this afternoon or evening.`
    },
    news: [
      {
        group: "AI & ML",
        section: "global",
        items: [
          { text: `ChatGPT reportedly crossed 1 billion monthly active users.`, source: `AI Update, Jun 12`, url: `https://www.marketingprofs.com/opinions/2026/54994/ai-update-june-12-2026-ai-news-and-views-from-the-past-week` },
          { text: `Visa × ChatGPT: users can connect payment credentials to let the AI agent search for and buy products directly.`, source: `AI News, Jun 8`, url: `https://www.buildfastwithai.com/blogs/ai-news-today-june-8-2026` },
          { text: `Trump signed a revised AI + cybersecurity executive order directing federal AI cyber-capability benchmarking.`, source: `AI Update, Jun 12`, url: `https://www.marketingprofs.com/opinions/2026/54994/ai-update-june-12-2026-ai-news-and-views-from-the-past-week` },
          { text: `Study finds top models' attention degrades sharply as tasks get longer and more complex.`, source: `ScienceDaily`, url: `https://www.sciencedaily.com/news/computers_math/artificial_intelligence/` }
        ]
      },
      {
        group: "Tech & startups",
        section: "global",
        items: [
          { text: `Hark closed a Series A north of $700M at a $6B valuation.`, source: `Funding roundup`, url: `https://blog.mean.ceo/tech-startup-funding-news-june-2026/` },
          { text: `Ramp raised $500M (Series E) and Tennr $101M (Series C); AI is absorbing ~half of global VC.`, source: `Funding news`, url: `https://blog.mean.ceo/startup-funding-news-june-2026/` }
        ]
      },
      {
        group: "Software engineering",
        section: "global",
        items: [
          { text: `Vercel launched "eve," an open-source agent framework (announced Jun 17).`, source: `Open-source AI roundup`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `MiniMax M3 — first open-weight model pairing frontier software-engineering ability with a 1M-token context and native computer use.`, source: `Open-source AI roundup`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `Gartner projects 80% of software firms adopt Internal Developer Platforms by 2026.`, source: `Developer's World, Jun 2026`, url: `https://medium.com/@umarhussainkhokhar1234/the-developers-world-in-june-2026-everything-that-s-changing-right-now-1de29f6d695e` }
        ]
      },
      {
        group: "Crypto",
        section: "global",
        items: [
          { text: `Bitcoin ~$64k, Ethereum grinding a recovery; market cautious but stable.`, source: `Market recap`, url: `https://investingnews.com/cryptocurrency-market-recap/` },
          { text: `Stellar (XLM) jumped 40%+ after DTCC picked its network for a tokenized-securities rollout.`, source: `CoinDesk`, url: `https://www.coindesk.com/markets/2026/06/01/bitcoin-ether-start-june-in-the-red-while-futures-show-taste-for-risk-xlm-hype-gain` },
          { text: `Michael Saylor signaled a resumption of Bitcoin accumulation.`, source: `Market recap`, url: `https://investingnews.com/cryptocurrency-market-recap/` }
        ]
      },
      {
        group: "World",
        section: "global",
        items: [
          { text: `Trump signed a preliminary agreement with Iran to end the war and reopen the Strait of Hormuz.`, source: `Major Events of 2026`, url: `https://www.britannica.com/topic/Major-Events-of-2026` },
          { text: `U.S. Defense Sec. Hegseth pushed a "NATO 3.0" reboot and a review of U.S. forces in Europe.`, source: `Major Events of 2026`, url: `https://www.britannica.com/topic/Major-Events-of-2026` },
          { text: `World Cup: Mexico became the first team into the knockouts; FIFA mandated player hydration breaks.`, source: `Major Events of 2026`, url: `https://www.britannica.com/topic/Major-Events-of-2026` },
          { text: `The Obama Presidential Center opens to the public in Chicago today.`, source: `Major Events of 2026`, url: `https://www.britannica.com/topic/Major-Events-of-2026` }
        ]
      },
      {
        group: "Switzerland",
        section: "local",
        items: [
          { text: `Voters rejected the People's Party plan to cap the population at 10 million (Jun 14 vote).`, source: `swissinfo`, url: `https://www.swissinfo.ch/eng/swiss-politics/june-14-2026-votes-results-from-across-switzerland/91505856` },
          { text: `G7 summit ran Jun 15–17 in Évian; Switzerland held temporary border controls Jun 10–19.`, source: `Swiss federal admin`, url: `https://www.eda.admin.ch/en/g7-summit-in-evian` },
          { text: `The Swiss National Bank held its key rate at 0%; SECO nudged its GDP forecast down, citing the war in Iran.`, source: `iamexpat`, url: `https://www.iamexpat.ch/expat-info/swiss-news/june-2026-8-key-updates-radar-expats-switzerland` }
        ]
      },
      {
        group: "Greece",
        section: "local",
        items: [
          { text: `The "I Renovate" scheme launched, offering up to 95% subsidies for home renovations and energy upgrades across 20,000 properties.`, source: `Greek City Times`, url: `https://greekcitytimes.com/2026/04/19/greece-i-renovate-subsidy-june-2026/` },
          { text: `Greece marked World Environment Day with 65 events nationwide.`, source: `GreekReporter`, url: `https://greekreporter.com/2026/06/05/world-environment-day-2026-greece/` },
          { text: `Air traffic controllers publicly criticized the Civil Aviation Authority over delays.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` }
        ]
      }
    ]
  }
];
