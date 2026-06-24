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
    date: `Wednesday, June 24, 2026`,
    iso: `2026-06-24`,
    greeting: `Good morning — here's your briefing for Wednesday, June 24, 2026. Your personal calendars are clear; the only items are two private holds on the Fiji Solutions calendar (10:00 and 17:30, no titles shared). Two open to-dos remain in Tasklist A, and no lead follow-ups are due today.`,
    calendar: {
      allDay: [],
      events: [
        { time: `10:00–10:30`, title: `Busy (private)`, calendar: `charis@fijisolutions.net` },
        { time: `17:30–19:00`, title: `Busy (private)`, calendar: `charis@fijisolutions.net` }
      ],
      note: `Both blocks are private holds on the Fiji Solutions work calendar (titles not shared); your personal calendars are otherwise clear.`
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `handover L2`] },
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
          { text: `Meta began laying off about 8,000 staff (~10% of its workforce) in an AI-focused restructuring, reassigning ~7,000 others to AI teams.`, source: `TechCrunch`, url: `https://techcrunch.com/category/artificial-intelligence/` },
          { text: `Qualcomm is in early talks to acquire RISC-V AI-chip designer Tenstorrent for roughly $8–10B.`, source: `Crescendo AI`, url: `https://www.crescendo.ai/news/latest-ai-news-and-updates` },
          { text: `The US, UK, Australia, Canada and New Zealand issued joint guidance on securing agentic AI in critical infrastructure.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `AI-infrastructure startup Baseten raised $1.5B at a $13B valuation, led by Sands Capital and Wellington.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/23/venture-capital-startup-funding-roundup-june-23-2026/` },
          { text: `Oracle cut 21,000 roles, attributing the layoffs directly to its AI deployment as capex jumped 162% to $55.7B.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/23/top-tech-news-today-june-23-2026/` },
          { text: `Meta led a $900M round in Indian fintech CRED at a $4.5B valuation, deepening its India commerce push.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/23/venture-capital-startup-funding-roundup-june-23-2026/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `Databricks released Genie One, an agentic "coworker" for business teams, expanding its Genie suite.`, source: `SD Times`, url: `https://sdtimes.com/` },
          { text: `Checkmarx unveiled Checkmarx SAST, billed as the first static-analysis engine with a security-tuned LLM at its core.`, source: `Developer Tech`, url: `https://www.developer-tech.com/` },
          { text: `Vercel's rebuilt v0 runtime can now work against existing GitHub repos and open pull requests from chat.`, source: `SD Times`, url: `https://sdtimes.com/` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin opened near $62,660 (−2%) and Ether near $1,665 — their lowest levels in about two weeks.`, source: `Yahoo Finance`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-wednesday-june-24-2026-opened-at-lowest-levels-in-about-two-weeks-125349040.html` },
          { text: `A surge in Runes-protocol activity pushed Bitcoin transaction counts and fees to multi-year highs.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `Senate Democrats called for hearings into a $500M UAE investment in World Liberty Financial.`, source: `Investing News`, url: `https://investingnews.com/cryptocurrency-market-recap/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `An extreme "heat dome" put two dozen-plus European countries under heat alerts; France logged its hottest day ever (~111°F).`, source: `Democracy Now`, url: `https://www.democracynow.org/2026/6/24/headlines` },
          { text: `The US Senate passed a War Powers resolution (50–48) to bar hostilities against Iran without congressional authorization.`, source: `CBS News`, url: `https://www.cbsnews.com/live-updates/iran-us-war-trump-nuclear-sites-strait-of-hormuz/` },
          { text: `Congress passed the largest housing-affordability bill in decades, sending it to the president's desk.`, source: `NPR`, url: `https://www.npr.org/2026/06/23/nx-s1-5867575/congress-passes-housing-affordability-bill` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Switzerland and Indonesia signed a deal to secure sustainable access to vital tech raw materials.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `A new study found AI is reducing entry-level job openings for juniors across Switzerland.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/` },
          { text: `The Bürgenstock Resort cancelled 1,200 bookings at short notice to host the US–Iran talks.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `PM Mitsotakis met President Tassoulas and tied recent inflation almost entirely to higher oil prices.`, source: `ProtoThema`, url: `https://en.protothema.gr/` },
          { text: `The National Housing Strategy 2026–2035 went out for public consultation, floating rent caps and mortgage incentives.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `Amazon will open a local AWS cloud hub in Athens in July 2026; tourism arrivals rose 27.1% in Jan–Apr.`, source: `GreekReporter`, url: `https://greekreporter.com/` }
        ]
      }
    ]
  },
  {
    date: `Tuesday, June 23, 2026`,
    iso: `2026-06-23`,
    greeting: `Good morning — here's your briefing for Tuesday, June 23, 2026. It's a travel day: you fly Prague→Zurich first thing on LX 1483 (lands 07:40), check out of the Prague Marriott, and have German class at 17:30. Two open to-dos remain in Tasklist A, and one lead is due today: PAP Center's follow-up (Θεόδωρος Παπαθεοδώρου).`,
    calendar: {
      allDay: [`Stay: Prague Marriott Hotel (check-out today)`],
      events: [
        { time: `06:15–07:40`, title: `Flight: LX 1483 from PRG to ZRH`, calendar: `charismoutafidis@gmail.com` },
        { time: `17:30–19:00`, title: `Deutsch`, calendar: `Home` }
      ],
      note: `Early flight back to Zurich (lands 07:40); German lesson at 17:30. Prague Marriott checkout is today.`
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
        group: `AI & ML`,
        section: `global`,
        items: [
          { text: `Getty Images signed a multi-year deal to license its visual content to OpenAI for use in ChatGPT.`, source: `TechCrunch`, url: `https://techcrunch.com/category/artificial-intelligence/` },
          { text: `MIT researchers unveiled a spatial-memory system that helps robots track objects as they explore new spaces.`, source: `MIT News`, url: `https://news.mit.edu/topic/artificial-intelligence2` },
          { text: `New Swansea University research reframes AI as a creative collaborator rather than a replacement for human work.`, source: `ScienceDaily`, url: `https://www.sciencedaily.com/news/computers_math/artificial_intelligence/` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `Seedcamp closed its 7th fund at $220M plus a $100M select fund to back early-stage European startups.`, source: `Tech Funding News`, url: `https://techfundingnews.com/` },
          { text: `Q1 2026 set a venture-funding record near $300B as the AI boom drove investment, with about half going to AI.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/record-breaking-funding-ai-global-q1-2026/` },
          { text: `Defense-tech funding hit an all-time record, with True Anomaly, Sierra Space and Vast among the top recipients.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/defense-tech/startup-venture-funding-all-time-record-ai-anduril/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `Checkmarx launched Checkmarx SAST, billed as the first static-analysis engine with a security-tuned LLM at its core.`, source: `SD Times`, url: `https://sdtimes.com/` },
          { text: `Databricks released Genie One, an agentic "coworker" for business teams, expanding its Genie suite.`, source: `SD Times`, url: `https://sdtimes.com/` },
          { text: `Reporting put Claude Code as the most-used AI coding tool as its rivalry with OpenAI Codex intensified.`, source: `The New Stack`, url: `https://thenewstack.io/software-development/` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin traded near $65,100 (+2.2%) and Ether around $1,760 (+2.6%) as the market steadied.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `Taiko halted its Ethereum layer-2 after a bridge exploit drained about $1.7M via forged withdrawal proofs.`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `The Bank of England softened its stablecoin rules, dropping retail holding limits for a ~£40B aggregate cap.`, source: `CoinDesk`, url: `https://www.coindesk.com/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `Alan Greenspan, who chaired the US Federal Reserve under four presidents, died Monday at age 100.`, source: `CNBC`, url: `https://www.cnbc.com/2026/06/22/alan-greenspan-former-chairman-of-the-fed-dies-at-age-100.html` },
          { text: `US–Iran talks in Switzerland set a roadmap toward a final deal within 60 days, including a Lebanon "de-confliction cell."`, source: `Al Jazeera`, url: `https://www.aljazeera.com/news/2026/6/22/what-are-the-key-outcomes-of-the-iran-us-talks-in-switzerland-what-next` },
          { text: `China sanctioned 10 US military-related firms after Washington barred some Chinese tech companies from defense contracts.`, source: `CBS News`, url: `https://www.cbsnews.com/world/` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `The Swiss government said it's ready to put up to CHF 200M toward hosting the 2038 Winter Olympics.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/` },
          { text: `A heatwave pushed the Lakes Neuchâtel, Biel and Murten areas, plus central Valais and Lake Geneva, to high-risk level.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `From Friday, Zurich Airport passengers can carry liquids up to two litres in hand luggage.`, source: `The Local Switzerland`, url: `https://www.thelocal.ch/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `Greek tourism revenue rose sharply early in 2026, with April receipts topping €1.1B.`, source: `GTP Headlines`, url: `https://news.gtp.gr/` },
          { text: `Cruise-ship arrivals to Santorini on June 22 were canceled as tourist-bus owners struck over the new "70-30" measure.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` },
          { text: `Greece won 39 medals, including 11 golds, at the Balkan Athletics Championships in Volos.`, source: `GreekReporter`, url: `https://greekreporter.com/` }
        ]
      }
    ]
  },
  {
    date: `Monday, June 22, 2026`,
    iso: `2026-06-22`,
    greeting: `Good morning — here's your briefing for Monday, June 22, 2026. You're in Prague (Marriott through Wednesday), with one timed item today: the Weekly TRW Dev Meeting at 18:00. Two open to-dos remain in Tasklist A, and no leads are overdue or due today — PAP Center's follow-up lands tomorrow, June 23.`,
    calendar: {
      allDay: [`Stay: Prague Marriott Hotel (through Jun 24)`],
      events: [
        { time: `18:00–19:00`, title: `Weekly TRW Dev Meeting`, calendar: `charismoutafidis@gmail.com` }
      ],
      note: `Hotel stay continues through Wednesday (checkout Jun 24); the TRW dev sync is on Google Meet.`
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
          { text: `Meta began laying off about 8,000 employees in an AI-focused restructuring, moving 7,000 more staff onto AI teams.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` },
          { text: `Qualcomm is in early talks to acquire RISC-V AI-chip startup Tenstorrent for $8–10B.`, source: `Mean.ceo`, url: `https://blog.mean.ceo/latest-ai-developments-news-june-2026/` },
          { text: `EU AI Act transparency rules for chatbots take effect Aug 2, with major labs racing to comply.`, source: `Crescendo AI`, url: `https://www.crescendo.ai/news/latest-ai-news-and-updates` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `Ramp raised $750M at a $44B valuation for its spend-management platform.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/` },
          { text: `Fusion startup Helion picked up a $465M Series G at a $15.5B valuation.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/` },
          { text: `US-headquartered startups captured roughly 80% of global VC funding in 2026, with AI taking about half.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/us-ai-startup-funding-boom-data/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `Databricks released Genie One, an agentic "coworker" for business teams, expanding its Genie suite.`, source: `SD Times`, url: `https://sdtimes.com/` },
          { text: `NVIDIA's RTX Spark Superchip launched with up to 128GB unified memory and ~1 petaflop on workstation laptops.`, source: `Developer Tech`, url: `https://www.developer-tech.com/` },
          { text: `Hugging Face's smolagents compresses agent routing to ~1,000 lines of Python, letting models write and run code in a sandbox.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `US spot-Bitcoin ETFs logged a record 13-day outflow streak (-$4.4B), with BTC down about 30% year-to-date.`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `Bitcoin steadied near $64K and Ether attempted a gradual rebound after Friday's sell-off.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `An attacker drained $7.5M from an Ethereum sandwich bot by tricking it into approving fake trading routes.`, source: `The Block`, url: `https://www.theblock.co/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `US–Iran talks in Switzerland set a 60-day roadmap to a final deal, but Trump threatened to resume strikes over the Strait of Hormuz.`, source: `CNN`, url: `https://www.cnn.com/2026/06/21/world/live-news/iran-war-trump-israel-lebanon` },
          { text: `Oil rose after Trump's Hormuz "take over" comments, with Brent up 1.35% to $81.66 a barrel.`, source: `CNN`, url: `https://www.cnn.com/world` },
          { text: `Britain unveiled one of the world's toughest social-media bans for children.`, source: `CNN`, url: `https://www.cnn.com/world` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Mediators said the US–Iran talks at Bürgenstock concluded in a "positive and constructive" atmosphere; sessions continue this week.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `A heatwave pushed temperatures toward record highs with "tropical nights" (~35°C in Sion), possibly lasting until month-end.`, source: `The Local Switzerland`, url: `https://www.thelocal.ch/20260619/how-long-will-the-extreme-heat-last-in-switzerland` },
          { text: `Switzerland slipped to 3rd in the 2026 World Competitiveness ranking, still the most competitive in Europe.`, source: `The Local Switzerland`, url: `https://www.thelocal.ch/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `All cruise-ship arrivals to Santorini were canceled today as tourist-bus owners struck over the new "70-30" measure.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` },
          { text: `The Hellenic Navy chief visited Israel for high-level talks on Eastern Mediterranean maritime security.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `Greece's current-account deficit narrowed to €1.4B in April 2026, down €956M from a year earlier.`, source: `To Vima`, url: `https://www.tovima.com/` }
        ]
      }
    ]
  },
  {
    date: `Sunday, June 21, 2026`,
    iso: `2026-06-21`,
    greeting: `Good morning — here's your briefing for Sunday, June 21, 2026 (Father's Day in Greece). It's a travel day: you fly Zurich→Prague at 12:35 on LX 1486 and check into the Prague Marriott through Wednesday. Two open to-dos remain in Tasklist A, and no leads are overdue or due today (PAP Center is next, on June 23).`,
    calendar: {
      allDay: [`Weekly Accounting work`, `Stay: Prague Marriott Hotel (through Jun 24)`, `Father's Day (Greece observance)`],
      events: [
        { time: `12:35–13:55`, title: `Flight: LX 1486 from ZRH to PRG`, calendar: `charismoutafidis@gmail.com` }
      ],
      note: `Hotel check-in from 15:00 (reservation 72656932).`
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
          { text: `Qualcomm is in early talks to acquire AI-chip startup Tenstorrent for $8–10B, a bid to challenge Nvidia and AMD.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` },
          { text: `HPE expanded its AI Factory portfolio with NVIDIA for agentic, multi-agent systems, adding the Vera CPU for agent orchestration.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` },
          { text: `NYC's Department of Education will require every AI tool to pass a bias-and-equity review before classroom use.`, source: `Crescendo AI`, url: `https://www.crescendo.ai/news/latest-ai-news-and-updates` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `Ramp raised $750M (Iconiq, GIC, Ontario Teachers') at a $44B valuation.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/` },
          { text: `Brain-inspired AI startup Flourish raised $500M, backed by Jeff Bezos, Lux Capital and GV.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/` },
          { text: `Fusion startup Helion picked up $465M Series G led by Thrive Capital at a $15.5B valuation.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `Anthropic shipped the Claude Agent SDK (TypeScript/Python) with native MCP server and sub-agent support.`, source: `SD Times`, url: `https://sdtimes.com/` },
          { text: `MiniMax M3 launched as the first open-weight model pairing frontier software-engineering skills with a 1M-token context window.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `Checkmarx unveiled SAST, a static-analysis engine with a security-tuned LLM at its core.`, source: `Developer Tech`, url: `https://www.developer-tech.com/` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin recovered toward $64,000 as US–Iran ceasefire talks opened in Switzerland.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `The Ethereum Foundation lost another senior leader as co-executive director Hsiao-Wei Wang resigned.`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `The FHFA ordered Fannie Mae and Freddie Mac to prepare to count cryptocurrency as a mortgage asset.`, source: `InvestingNews`, url: `https://investingnews.com/cryptocurrency-market-recap/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `An Iranian delegation arrived in Switzerland for talks with the US at the Bürgenstock resort to halt the Middle East conflict.`, source: `Xinhua`, url: `https://english.news.cn/20260621/a80af3fb601f402ea226bd0847278d7e/c.html` },
          { text: `Trump said no tolls would be charged in the Strait of Hormuz during the 60-day interim ceasefire with Iran.`, source: `Xinhua`, url: `https://english.news.cn/20260621/a80af3fb601f402ea226bd0847278d7e/c.html` },
          { text: `The USMNT beat Australia in Seattle to clinch a World Cup 2026 knockout-stage spot.`, source: `ESPN`, url: `https://www.espn.com/soccer/story/_/id/49132616/world-cup-2026-today-blog-21-06-2026-live-updates-news-fixtures-schedule-results-curacao-make-history-germany-ivory-coast` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Switzerland is hosting US–Iran peace talks at Bürgenstock; VP JD Vance said the US looks forward to the negotiations.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `Murten marked the 550th anniversary of its decisive 1476 battle.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/` },
          { text: `The government proposed banning swastikas and the Hitler salute in public spaces.`, source: `The Local Switzerland`, url: `https://www.thelocal.ch/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `Santorini was named one of the world's top 3 most romantic destinations for 2026 by Condé Nast Traveller.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `Greece ranked 2nd in the EU for bathing-water quality, with 97.1% of areas meeting standards.`, source: `Greek Reporter`, url: `https://greekreporter.com/greek-news/` },
          { text: `Markets are weighing the EU's new €3 duty on low-value (under €150) imports from Asian platforms.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` }
        ]
      }
    ]
  },
  {
    date: `Sunday, June 21, 2026`,
    iso: `2026-06-21`,
    greeting: `Good morning — here's your briefing for Sunday, June 21, 2026 (Father's Day in Greece). It's a travel day: you fly Zurich→Prague at 12:35 on LX 1486 and check into the Prague Marriott through Wednesday. Two open to-dos remain in Tasklist A, and no leads are due for follow-up.`,
    calendar: {
      allDay: [`Weekly Accounting work`, `Stay: Prague Marriott Hotel (through Jun 24)`, `Father's Day (Greece observance)`],
      events: [
        { time: `12:35–13:55`, title: `Flight: LX 1486 from ZRH to PRG`, calendar: `charismoutafidis@gmail.com` }
      ],
      note: `Hotel check-in from 15:00 (reservation 72656932).`
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
          { text: `Google made Gemini 2.5 Flash the default model across all Gemini products.`, source: `LLM Stats`, url: `https://llm-stats.com/llm-updates` },
          { text: `China unveiled a ~$295B national AI infrastructure plan (2 trillion yuan over five years) for interconnected data centers built mostly on domestic chips.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` },
          { text: `Northwestern engineers printed artificial neurons that can communicate with biological neurons — a step toward brain–machine interfaces.`, source: `Radical Data Science`, url: `https://radicaldatascience.wordpress.com/2026/06/04/ai-news-briefs-bulletin-board-for-june-2026/` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `Startup funding is concentrating in fewer names: Ramp raised $500M and Tennr $101M in new rounds.`, source: `Tech Funding News`, url: `https://techfundingnews.com/` },
          { text: `US startups have raised ~$389B across ~3,680 equity rounds so far in 2026, with AI drawing roughly half of global venture funding.`, source: `Tracxn`, url: `https://tracxn.com/d/geographies/united-states/__agFBbaWLXQ9BaxreLIz_EPAASY3VwAK-kFQ6rvJvIco` },
          { text: `Investors are clustering around AI, logistics, compute and deeptech bets.`, source: `Mean CEO`, url: `https://blog.mean.ceo/tech-startup-funding-news-june-2026/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `Coding agents went team-scale in early June: Cognition's Devin Desktop, Microsoft's Rayfin (Build 2026) and Augment's Cosmos all shipped.`, source: `The New Stack`, url: `https://thenewstack.io/coding-agents-team-infrastructure/` },
          { text: `NVIDIA's RTX Spark Superchip brings ~1 petaflop of AI compute and 128GB of unified memory to workstation laptops.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `Anthropic shipped the Claude Agent SDK (TypeScript/Python) with native MCP server and sub-agent support.`, source: `SD Times`, url: `https://sdtimes.com/` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin and Ethereum extended their post-Fed slide, with BTC near $62,900 and ETH near $1,709.`, source: `Yahoo Finance, Jun 19`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-friday-june-19-2026-prices-keep-falling-post-fed-decision-123239380.html` },
          { text: `The Ethereum Foundation lost another senior leader as co-executive director Hsiao-Wei Wang resigned.`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `The FHFA ordered Fannie Mae and Freddie Mac to prepare to count cryptocurrency as an asset in mortgage applications.`, source: `Yahoo Finance, Jun 19`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-friday-june-19-2026-prices-keep-falling-post-fed-decision-123239380.html` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `The new US–Iran understanding came under strain: Iran said it closed the Strait of Hormuz after Israel struck Lebanon on Saturday.`, source: `NPR World`, url: `https://www.npr.org/sections/world/` },
          { text: `US and Iranian teams are set to hold "technical-level" talks, according to Pakistan's foreign ministry.`, source: `NPR World`, url: `https://www.npr.org/sections/world/` },
          { text: `UK: Greater Manchester mayor Andy Burnham won a by-election, positioning him to challenge PM Keir Starmer.`, source: `NPR`, url: `https://www.npr.org/sections/news/` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Several people were injured by falling trees during a violent storm in Zurich.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `Murten staged a ceremony marking the 550th anniversary of its decisive 1476 battle.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `Switzerland's men's national team beat Bosnia & Herzegovina 4-1 at the World Cup.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `A magnitude-5.0 earthquake struck near Chania, Crete on Saturday, alongside a 3.2 near Lesbos.`, source: `VolcanoDiscovery`, url: `https://www.volcanodiscovery.com/earthquake/news/314261/World-Earthquake-Report-for-Saturday-20-June-2026.html` },
          { text: `Greece's South Aegean Region launched a major tourism campaign on the "Cube" billboard in New York's Times Square.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `Athens ranks among the top international destinations for US travelers over the July 4th holiday.`, source: `Greek Reporter`, url: `https://greekreporter.com/greek-news/` }
        ]
      }
    ]
  },
  {
    date: `Saturday, June 20, 2026`,
    iso: `2026-06-20`,
    greeting: `Good morning — here's your briefing for Saturday, June 20, 2026. The calendar's clear today, two open to-dos remain in Tasklist A, and no leads are due for follow-up (PAP Center is next, on June 23).`,
    calendar: {
      allDay: [],
      events: [],
      note: `Nothing scheduled today. (Based on your Google calendar — the macOS Calendar work account couldn't be reached this run.)`
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
          { text: `OpenAI launched DeployCo, a majority-owned enterprise unit with $4B+ in initial funding to help companies build and deploy AI systems.`, source: `LLM Stats`, url: `https://llm-stats.com/ai-news` },
          { text: `A crowded June model wave is forming: Google's Gemini 3.5 Pro is expected this month, alongside xAI's Grok 5 and Anthropic's limited-access Claude Mythos 1.`, source: `WaveSpeed`, url: `https://wavespeed.ai/blog/posts/june-2026-ai-launch-wave/` },
          { text: `Reuters Institute's Digital News Report 2026 finds 10% of people now use AI chatbots for news each week, up from 7% a year ago.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `Anthropic surpassed OpenAI in annualized revenue for the first time, reaching a roughly $30B run rate (OpenAI ~$25–27B).`, source: `Tech Startups, Jun 18`, url: `https://techstartups.com/2026/06/18/top-tech-news-today-june-18-2026/` },
          { text: `Investors are pivoting from thin "AI wrapper" startups toward vertical AI in law, healthcare, logistics and finance, plus climate and cybersecurity tooling.`, source: `Mean CEO`, url: `https://blog.mean.ceo/startup-trends-news-june-2026/` },
          { text: `A wave of ransomware attacks is hitting education-technology providers and schools.`, source: `Tech Startups, Jun 18`, url: `https://techstartups.com/2026/06/18/top-tech-news-today-june-18-2026/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `Microsoft Build 2026: Work IQ APIs reached general availability June 16, giving agents access to email, calendar, files and line-of-business context.`, source: `DEV Community`, url: `https://dev.to/pwd9000/microsoft-build-2026-top-announcements-from-a-devops-lens-419k` },
          { text: `MiniMax M3 launched as the first open-weight model pairing frontier-tier software-engineering ability with a 1M-token context window and native computer use.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `Claude Code is mid-2026's most-used AI coding tool (46% "most loved"); developer awareness jumped from 31% to 57%.`, source: `Medium`, url: `https://medium.com/@umarhussainkhokhar1234/the-developers-world-in-june-2026-everything-that-s-changing-right-now-1de29f6d695e` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin slid for a 4th straight day to about $62,900 (−2.4%) and Ethereum to about $1,709 (−2.2%) following the Fed's decision.`, source: `Yahoo Finance, Jun 19`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-friday-june-19-2026-prices-keep-falling-post-fed-decision-123239380.html` },
          { text: `The FHFA director ordered Fannie Mae and Freddie Mac to prepare to count cryptocurrency as an asset in mortgage applications.`, source: `Yahoo Finance, Jun 19`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-friday-june-19-2026-prices-keep-falling-post-fed-decision-123239380.html` },
          { text: `Microsoft flagged malware that hijacks crypto wallets and spreads through USB sticks.`, source: `Yahoo Finance, Jun 19`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-friday-june-19-2026-prices-keep-falling-post-fed-decision-123239380.html` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `The US and Iran signed a 14-point memorandum of understanding to end the war, signed by Trump at a Versailles dinner after the G7 wrapped in Évian.`, source: `Britannica`, url: `https://www.britannica.com/event/2026-Iran-war` },
          { text: `Israel and Hezbollah agreed to halt fighting as the US–Iran deal came together.`, source: `Democracy Now, Jun 18`, url: `https://www.democracynow.org/2026/6/18/headlines` },
          { text: `Ukraine launched one of its largest attacks on Moscow since the start of Russia's full-scale invasion.`, source: `NPR World`, url: `https://www.npr.org/sections/world/` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Switzerland slipped to 3rd in the 2026 IMD World Competitiveness ranking (behind Singapore and Hong Kong) but remains Europe's most competitive.`, source: `The Local CH, Jun 19`, url: `https://www.thelocal.ch/20260619/today-in-switzerland-a-roundup-of-the-latest-news-on-friday-248` },
          { text: `The Swiss men's national team beat Bosnia & Herzegovina 4-1 at the World Cup after a 1-1 opener with Qatar.`, source: `The Local CH, Jun 19`, url: `https://www.thelocal.ch/20260619/today-in-switzerland-a-roundup-of-the-latest-news-on-friday-248` },
          { text: `Planned US–Iran talks at the Bürgenstock resort were called off.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `Greece raised concerns over a new Libya offshore energy exploration deal involving Turkish and European firms, tied to the contested Turkey–Libya maritime accord.`, source: `Greek Reporter`, url: `https://greekreporter.com/greek-news/` },
          { text: `Scaffolding came off the Parthenon's western façade after restoration of its western pediment, Culture Minister Lina Mendoni announced.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `Greece ranked 2nd in the EU for bathing-water quality in 2026, with 97.1% of waters meeting standards.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` }
        ]
      }
    ]
  },
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
