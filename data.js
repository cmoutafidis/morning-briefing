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
    date: `Wednesday, July 1, 2026`,
    iso: `2026-07-01`,
    greeting: `Good morning — here's your briefing for Wednesday, July 1, 2026. Your personal calendars are clear; the only item is a private evening hold (17:30) on the Fiji Solutions work calendar. Two open to-dos remain in each of Tasklist A and Tasklist B, and one lead follow-up is now overdue — Theodoros Papatheodorou at PAP Center (due June 30). In the headlines: MiniMax ships its open-weight M3 model, Italy's Bending Spoons heads for a Nasdaq IPO, bitcoin hovers near $59K, and a batch of new Swiss traffic fines takes effect today.`,
    calendar: {
      allDay: [],
      events: [
        { time: `17:30–19:00`, title: `Busy (private)`, calendar: `charis@fijisolutions.net` }
      ],
      note: `One private hold on the Fiji Solutions work calendar this evening (title not shared); your personal calendars are otherwise clear.`
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `Get the files to get stamps or whatever`] },
        { name: `Tasklist B`, tasks: [`Peak Code Consulting website copy home page should not be slop`, `Fiji Solutions website copy home page should not be slop`] }
      ]
    },
    followups: {
      source: `Fiji Solutions — Lead Outreach`,
      url: `https://outreach.fijisolutions.net/`,
      leads: [
        { name: `Θεόδωρος Παπαθεοδώρου`, company: `PAP Center`, status: `Working - Contacted`, followUp: `2026-06-30`, email: `theo@papcenter.gr` }
      ]
    },
    news: [
      {
        group: `AI & ML`,
        section: `global`,
        items: [
          { text: `MiniMax released MiniMax-M3, an open-weight model pairing frontier agentic-coding performance with a 1M-token context and native multimodality.`, source: `Open Data Science`, url: `https://opendatascience.com/in-case-you-missed-it-last-week-in-ai-week-of-june-22-28-2026/` },
          { text: `OpenAI launched its GPT-5.6 family in a government-gated preview, as regulatory review moves to the center of how frontier models ship.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` },
          { text: `Qualcomm is in early talks to acquire AI-chip maker Tenstorrent for $8–10B.`, source: `TechCrunch`, url: `https://techcrunch.com/category/artificial-intelligence/` }
        ]
      },
      {
        group: `Tech & Startups`,
        section: `global`,
        items: [
          { text: `Italy's Bending Spoons filed for a US IPO and is heading toward a Nasdaq listing.`, source: `TechCrunch`, url: `https://techcrunch.com/` },
          { text: `Lime (Neutron Holdings) updated its IPO terms, targeting a late-June/early-July debut.`, source: `AccessIPOs`, url: `https://accessipos.com/upcoming-ipos/` },
          { text: `Robotics funding hit ~$14B in 2025 (+70% YoY), topping the 2021 peak, as capital concentrates in AI, robotics and defense tech.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/2026-tech-startup-trends-ipo-ai-ma/` }
        ]
      },
      {
        group: `Software & Dev Tools`,
        section: `global`,
        items: [
          { text: `At Microsoft Build 2026, GitHub shipped new agent tooling and made remote control of Copilot sessions GA on github.com and GitHub Mobile.`, source: `The GitHub Blog`, url: `https://github.blog/news-insights/` },
          { text: `GitHub Copilot switched to usage-based billing with AI Credits on June 1, briefly pausing new paid sign-ups during the rollout.`, source: `The GitHub Blog`, url: `https://github.blog/news-insights/` },
          { text: `Claude Fable 5 entries landed on the Terminal-Bench 2.1 leaderboard, with Claude Code + Fable 5 at 83.1%, just behind Codex + GPT-5.5.`, source: `Morph`, url: `https://www.morphllm.com/best-ai-coding-agents-2026` }
        ]
      },
      {
        group: `Cryptocurrency`,
        section: `global`,
        items: [
          { text: `Bitcoin hovered near $59,000 (-0.6%) and Ether near $1,590 (+0.4%) as both retested key support levels.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `Binance has under a week to secure a replacement EU license before permissions expire June 30, or halt services for European users.`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `Circle slid 17% after Stripe, Coinbase and BlackRock backed a rival stablecoin network.`, source: `Investing News`, url: `https://investingnews.com/cryptocurrency-market-recap/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `Twin earthquakes in Venezuela have killed more than 1,700 people, with tens of thousands still missing.`, source: `CBS News`, url: `https://www.cbsnews.com/world/` },
          { text: `The US Supreme Court struck down President Trump's executive order seeking to end birthright citizenship.`, source: `NPR`, url: `https://www.npr.org/sections/news/` },
          { text: `Australia moved to double potential fines for social media platforms that fail to keep children off their services.`, source: `ABC News`, url: `https://abcnews.com/` },
          { text: `Pakistan said it struck militant hideouts along the Afghan border; Kabul condemned the strikes as aggression.`, source: `NPR`, url: `https://www.npr.org/sections/world/` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `From July 1, undertaking (passing on the right) on motorways brings a CHF 200 fine, alongside new penalties for other maneuvers.`, source: `IamExpat`, url: `https://www.iamexpat.ch/expat-info/swiss-news/july-2026-changes-expats-need-know-switzerland` },
          { text: `Switzerland lifted its ban on organised circuit racing on public roads from July 1, with cantons overseeing safety.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/` },
          { text: `Switzerland recorded its third-warmest June since records began in 1864.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `Greek tourism revenues and arrivals in the first four months of 2026 far outpaced the same period in 2025.`, source: `GreekReporter`, url: `https://greekreporter.com/` },
          { text: `Chevron applied to join the "Block 10" offshore exploration area in the Ionian Sea, bolstering Greece's energy role.`, source: `Euronews`, url: `https://www.euronews.com/tag/greece` },
          { text: `Athens' Panathēnea 2026 gathering spotlighted access to capital, risk-taking and building global companies.`, source: `GreekReporter`, url: `https://greekreporter.com/` }
        ]
      }
    ]
  },
  {
    date: `Tuesday, June 30, 2026`,
    iso: `2026-06-30`,
    greeting: `Good morning — here's your briefing for Tuesday, June 30, 2026. One all-day item today (Invoice AKB) and no timed events, so the day is open. Two open to-dos remain in each of Tasklist A and Tasklist B. Your outreach CRM lit up overnight: 58 leads now flag for follow-up today — one genuine scheduled follow-up (Theodoros Papatheodorou at PAP Center) plus 57 newly added, not-yet-contacted prospects across Thessaloniki aesthetic clinics and Swiss enterprises. In the headlines: Meta ships its Llama 4 family, Qualcomm eyes an $8–10B deal for AI-chip maker Tenstorrent, bitcoin hovers near $60K, and a record heatwave grips Switzerland as President Parmelin heads to North America over US tariffs.`,
    calendar: {
      allDay: [`Invoice AKB`],
      events: [],
      note: `No timed events today — just the Invoice AKB reminder on your personal calendar.`
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `Get the files to get stamps or whatever`] },
        { name: `Tasklist B`, tasks: [`Peak Code Consulting website copy home page should not be slop`, `Fiji Solutions website copy home page should not be slop`] }
      ]
    },
    followups: {
      source: `Fiji Solutions — Lead Outreach`,
      url: `https://outreach.fijisolutions.net/`,
      leads: [
        { name: `Ευάγγελος Ακτσαλής`, company: `Aktsalis Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `contact@aktsalis.gr` },
        { name: `Δημήτριος Θεοδώρου`, company: `Theodorou Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@dtheodorou.gr` },
        { name: `KALIKA Med Care`, company: `KALIKA Med Care – Hair Clinic`, status: `Open - Not Contacted`, followUp: ``, email: `info@kalikamedhair.com` },
        { name: `Αναστάσιος Στρεβίνας`, company: `Strevinas Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info.strevinas@gmail.com` },
        { name: `Δημήτρης Τριανταφύλλου`, company: `Dr.Plastic (Triantafyllou Plastic Surgery)`, status: `Open - Not Contacted`, followUp: ``, email: `info@drplastic.gr` },
        { name: `Σωτήριος Τσέπουρας`, company: `Tsepouras Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@tsepourasplasticsurgery.gr` },
        { name: `Sascha Justl`, company: `Finnova AG Bankware`, status: `Open - Not Contacted`, followUp: ``, email: `sascha.justl@finnova.com` },
        { name: `Χριστίνα Γούλα`, company: `CG Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `ch_goula@yahoo.gr` },
        { name: `Ιωάννης Γκότσικας`, company: `Gkotsikas Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@gkotsikas.gr` },
        { name: `Τριαντάφυλλος Βρύζας`, company: `Vryzas Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `tvryzas@yahoo.gr` },
        { name: `Χρήστος Τσάκαλος`, company: `ChoiExpert (By Dr. Chris)`, status: `Open - Not Contacted`, followUp: ``, email: `info@choiexpert.com` },
        { name: `Guido Steiner`, company: `Allianz Suisse`, status: `Open - Not Contacted`, followUp: ``, email: `guido.steiner@allianz-suisse.ch` },
        { name: `Michael Rieger`, company: `CSS Versicherung`, status: `Open - Not Contacted`, followUp: ``, email: `michael.rieger@css.ch` },
        { name: `Philipp Knus`, company: `SBB Cargo`, status: `Open - Not Contacted`, followUp: ``, email: `philipp.knus@sbbcargo.com` },
        { name: `Π. Καραϊσκάκης`, company: `Karaiskakis Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@drkaraiskakis.gr` },
        { name: `Andre Hurschler`, company: `Suva`, status: `Open - Not Contacted`, followUp: ``, email: `andre.hurschler@suva.ch` },
        { name: `Θεόδωρος Παπαθεοδώρου`, company: `PAP Center`, status: `Working - Contacted`, followUp: `2026-06-30`, email: `theo@papcenter.gr` },
        { name: `Bjoern Zapadlo`, company: `Adcubum`, status: `Open - Not Contacted`, followUp: ``, email: `bjoern.zapadlo@adcubum.com` },
        { name: `Dieter Wijngaards`, company: `SUISA`, status: `Open - Not Contacted`, followUp: ``, email: `dieter.wijngaards@suisa.ch` },
        { name: `Θεόδωρος Μπρέντας`, company: `Brentas Hair Clinic`, status: `Open - Not Contacted`, followUp: ``, email: `brentastheodoros@gmail.com` },
        { name: `Adrian Lingenhag`, company: `PostFinance`, status: `Open - Not Contacted`, followUp: ``, email: `adrian.lingenhag@postfinance.ch` },
        { name: `Michael Wuersch`, company: `Helsana`, status: `Open - Not Contacted`, followUp: ``, email: `michael.wuersch@helsana.ch` },
        { name: `Γεωργία Βαδαρλή`, company: `ClinicVIE (Vadarli Plastic Surgery)`, status: `Open - Not Contacted`, followUp: ``, email: `info@vadarli.gr` },
        { name: `Βασίλειος Σταματίου`, company: `Stamatiou Aesthetics / Excel Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@drstamatiou.com` },
        { name: `Γεώργιος Πάγκαλος`, company: `Dr. Pagkalos Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `doctor@drpagkalos.gr` },
        { name: `Martin Christen`, company: `Berner Fachhochschule (BFH)`, status: `Open - Not Contacted`, followUp: ``, email: `martin.christen@bfh.ch` },
        { name: `Bernd Dahmen`, company: `Kuehne+Nagel`, status: `Open - Not Contacted`, followUp: ``, email: `bernd.dahmen@kuehne-nagel.com` },
        { name: `Σωτήριος Ιωαννίδης`, company: `Plastic Surgery Clinic (Thessaloniki)`, status: `Open - Not Contacted`, followUp: ``, email: `info@plastic-surgery-clinic.gr` },
        { name: `Σταμάτης Σαπουντζής`, company: `Dr.Stam Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@drstam.gr` },
        { name: `Νικόλαος Ισσόπουλος`, company: `Surgical Artistry`, status: `Open - Not Contacted`, followUp: ``, email: `info@surgicalartistry.gr` },
        { name: `Μαρία Κανακίδου`, company: `MK Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@mk-plasticsurgery.gr` },
        { name: `Χρήστος Χριστάκης`, company: `Bergmann Kord Hair Clinics – Θεσσαλονίκη`, status: `Open - Not Contacted`, followUp: ``, email: `info@kord.gr` },
        { name: `Σωτήρης Τυρκαλάς`, company: `Starks Medical (Starks Greece)`, status: `Open - Not Contacted`, followUp: ``, email: `thessaloniki@starksmedical.gr` },
        { name: `Fabian Voegeli`, company: `Visana Group`, status: `Open - Not Contacted`, followUp: ``, email: `fabian.voegeli@visana.ch` },
        { name: `Αθανάσιος Εξαδάκτυλος`, company: `Exadaktylos Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `exadac@plasticsurgery.gr` },
        { name: `Αθανάσιος Αντωνιάδης`, company: `Kalaesthesis`, status: `Open - Not Contacted`, followUp: ``, email: `info@kalaesthesis.gr` },
        { name: `Dirk Appelzoeller`, company: `msg global solutions`, status: `Open - Not Contacted`, followUp: ``, email: `dirk.appelzoeller@msg-global.com` },
        { name: `Πρόδρομος Παπαϊωάννου`, company: `Papaioannou Clinic`, status: `Open - Not Contacted`, followUp: ``, email: `info@drpapaioannou.gr` },
        { name: `Γεωργία Χουρπουλιάδου-Χόρτη`, company: `PROFILE Centre of Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@profilelaser.gr` },
        { name: `Αχιλλέας Χαντές`, company: `Chantes Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@chantes.gr` },
        { name: `Juergen Horwath`, company: `Swiss Federal Institute of Intellectual Property (IGE/IPI)`, status: `Open - Not Contacted`, followUp: ``, email: `juergen.horwath@ipi.ch` },
        { name: `Urs Zihlmann`, company: `Sanitas`, status: `Open - Not Contacted`, followUp: ``, email: `urs.zihlmann@sanitas.com` },
        { name: `Αναστάσιος Βεκρής`, company: `Advanced Hair Clinics – Θεσσαλονίκη`, status: `Open - Not Contacted`, followUp: ``, email: `info@advancedhairclinics.gr` },
        { name: `Rouven Oberholzer`, company: `Solveva AG`, status: `Open - Not Contacted`, followUp: ``, email: `rouven.oberholzer@solveva.com` },
        { name: `Federica Pattarozzi`, company: `Citta di Lugano`, status: `Open - Not Contacted`, followUp: ``, email: `federica.pattarozzi@lugano.ch` },
        { name: `Aurelio Cortesi`, company: `enovetic AG`, status: `Open - Not Contacted`, followUp: ``, email: `aurelio.cortesi@enovetic.ch` },
        { name: `Βασιλική Παπαδοπούλου`, company: `Dermis Clinic`, status: `Open - Not Contacted`, followUp: ``, email: `info@dermis-clinic.gr` },
        { name: `Άγγελος Κεραμιδάς`, company: `K-Hair Clinic`, status: `Open - Not Contacted`, followUp: ``, email: `info@k-hairclinic.gr` },
        { name: `Peter Herger`, company: `CONCORDIA`, status: `Open - Not Contacted`, followUp: ``, email: `peter.herger@concordia.ch` },
        { name: `Ανδρέας Μουτσούδης`, company: `Dr. Moutsoudis Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@drmoutsoudis.gr` },
        { name: `Pascal Auderset`, company: `Die Mobiliar`, status: `Open - Not Contacted`, followUp: ``, email: `pascal.auderset@mobi.ch` },
        { name: `Απόστολος Παγανός`, company: `Maco Health (Hair Transplant)`, status: `Open - Not Contacted`, followUp: ``, email: `info@macohealth.gr` },
        { name: `Κωνσταντίνος Καλοκασίδης`, company: `Dr. Kalokasidis Dermatology`, status: `Open - Not Contacted`, followUp: ``, email: `info@dermatologist.gr` },
        { name: `DHI Θεσσαλονίκη`, company: `DHI Thessaloniki (DHI Global)`, status: `Open - Not Contacted`, followUp: ``, email: `info@dhiglobal.com` },
        { name: `Antonio Gallicchio`, company: `Generali Switzerland`, status: `Open - Not Contacted`, followUp: ``, email: `antonio.gallicchio@generali.com` },
        { name: `Andreas Eigenmann`, company: `Helvetia`, status: `Open - Not Contacted`, followUp: ``, email: `andreas.eigenmann@helvetia.ch` },
        { name: `Alexander Galman`, company: `Pro Informatik AG`, status: `Open - Not Contacted`, followUp: ``, email: `alexander@pro-info.ch` },
        { name: `Μιχαήλ Στάμπος`, company: `Stampos Plastic Surgery`, status: `Open - Not Contacted`, followUp: ``, email: `info@stampos.gr` }
      ]
    },
    news: [
      {
        group: `AI & ML`,
        section: `global`,
        items: [
          { text: `Meta deployed its Llama 4 family — Scout (109B, 10M-token context) and Maverick (400B) — under the Llama 4 Community License.`, source: `LLM Stats`, url: `https://llm-stats.com/llm-updates` },
          { text: `Qualcomm is in early talks to acquire RISC-V AI-chip maker Tenstorrent for $8–10B.`, source: `TechCrunch`, url: `https://techcrunch.com/category/artificial-intelligence/` },
          { text: `WEF analysis finds 37% of young workers are in roles highly exposed to AI, with entry-level jobs being "seniorised" rather than cut.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` }
        ]
      },
      {
        group: `Tech & Startups`,
        section: `global`,
        items: [
          { text: `Ramp raised $750M (Iconiq, GIC, Ontario Teachers') at a $44B valuation — the week's largest round.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/` },
          { text: `Flourish, building brain-inspired AI models, raised $500M from backers including Jeff Bezos, Lux Capital and Google Ventures.`, source: `Tech Funding News`, url: `https://techfundingnews.com/` },
          { text: `Ex-Infosys chief Vishal Sikka's new startup Hang Ten Systems raised a $32M seed led by Mayfield.`, source: `TechCrunch`, url: `https://techcrunch.com/2026/06/24/former-infosys-chief-has-a-new-startup-that-wants-to-challenge-the-it-services-world/` }
        ]
      },
      {
        group: `Software & Dev Tools`,
        section: `global`,
        items: [
          { text: `MiniMax launched M3, billed as the first open-weight model pairing frontier software-engineering skill with a 1M-token context.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `NVIDIA launched the RTX Spark Superchip, bringing up to 128GB unified memory and ~1 petaflop of AI compute to workstation laptops.`, source: `Developer Tech`, url: `https://www.developer-tech.com/` },
          { text: `The Model Context Protocol (MCP) is becoming a foundational layer across major agent frameworks.`, source: `InfoQ`, url: `https://www.infoq.com/` }
        ]
      },
      {
        group: `Cryptocurrency`,
        section: `global`,
        items: [
          { text: `Bitcoin traded near $60,100 (+0.9%) and Ether near $1,610 (+2.5%) on June 29.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `BlackRock pushed deeper into DeFi via an Ethena integration, adding a $100M liquidity facility for its tokenized money-market fund.`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `JPMorgan urged Congress to pair crypto market-structure clarity with strong safeguards as the Senate weighs the Clarity Act.`, source: `CoinDesk`, url: `https://www.coindesk.com/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `The US Supreme Court ruled 5–4 that states may count mailed-on-time ballots arriving after Election Day.`, source: `Fox News`, url: `https://www.foxnews.com/politics/supreme-court-rules-mail-in-ballots-received-after-election-day` },
          { text: `A skydiving plane (Pilatus PC-6) crashed in northeastern France, killing all 11 aboard.`, source: `Fox News`, url: `https://www.foxnews.com/world/french-investigators-probe-fatal-skydiving-plane-crash-killed-pilot-10-parachutists` },
          { text: `Trump said US–Iran talks would take place in Doha today; Tehran denied any meeting is planned.`, source: `Al Jazeera`, url: `https://www.aljazeera.com/news/liveblog/2026/6/30/iran-war-live-tehran-denies-trumps-claims-of-meeting-in-doha` },
          { text: `A dangerous, prolonged heat wave is set to scorch the eastern two-thirds of the US this week.`, source: `CBS News`, url: `https://www.cbsnews.com/news/dangerous-long-heat-wave-large-swathes-of-us-this-week/` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `A record heatwave hit Switzerland — 39°C in Basel — with temperatures set to drop ~10°C in the days ahead.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/swiss-diaspora/switzerland-today/91668728` },
          { text: `President Guy Parmelin travelled to North America aiming to avert new US tariff hikes before the 10% rate expires July 24.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/` },
          { text: `The 32nd Swiss Yodelling Festival in Basel closed with a festive parade.`, source: `Le News`, url: `https://lenews.ch/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `June 29 marked Greece's Tax Freedom Day — Greeks work ~179 days before earning for themselves.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` },
          { text: `The government opened its National Housing Strategy 2026–2035 for consultation, floating rent caps and affordable-mortgage incentives.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `Sébastien Ogier won his 69th WRC title at the EKO Acropolis Rally Greece.`, source: `Athens Times`, url: `https://athens-times.com/` }
        ]
      }
    ]
  },
  {
    date: `Monday, June 29, 2026`,
    iso: `2026-06-29`,
    greeting: `Good morning — here's your briefing for Monday, June 29, 2026. No all-day items, but two timed events this evening: the Weekly TRW Dev Meeting at 18:00 and Box at 19:00. Two open to-dos remain in Tasklist A and two in Tasklist B, with no lead follow-ups due (the outreach CRM is currently empty). In the headlines: Qualcomm is in talks to buy AI-chip startup Tenstorrent for $8–10B, spot bitcoin ETFs are heading for their worst month on record, and Switzerland pushes through a 10th straight day above 30°C.`,
    calendar: {
      allDay: [],
      events: [
        { time: `18:00–19:00`, title: `Weekly TRW Dev Meeting`, calendar: `charismoutafidis@gmail.com` },
        { time: `19:00–21:00`, title: `Box`, calendar: `charismoutafidis@gmail.com` }
      ],
      note: `Two timed items this evening on your personal calendar; the daytime is open.`
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `Get the files to get stamps or whatever`] },
        { name: `Tasklist B`, tasks: [`Peak Code Consulting website copy home page should not be slop`, `Fiji Solutions website copy home page should not be slop`] }
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
          { text: `Qualcomm is in early talks to acquire RISC-V AI-chip startup Tenstorrent for $8–10B.`, source: `TechCrunch`, url: `https://techcrunch.com/category/artificial-intelligence/` },
          { text: `HPE expanded its AI Factory portfolio with NVIDIA, adding the Vera CPU and Agent Toolkit to run agentic AI in production.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` },
          { text: `DeepSeek v3.2 (671B MoE, MIT license) leads open models on math, scoring 96.0% on GSM8K.`, source: `LLM Stats`, url: `https://llm-stats.com/ai-news` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `SpaceX is reportedly planning a record ~$75B IPO to fund space-based AI data centers.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/26/top-tech-news-today-june-26-2026/` },
          { text: `AI-infrastructure startup Baseten raised $1.5B at a $13B valuation for model deployment.`, source: `TechCrunch`, url: `https://techcrunch.com/` },
          { text: `Onsemi agreed to acquire Synaptics in an all-stock deal worth ~$7B to expand in edge AI and robotics.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/26/top-tech-news-today-june-26-2026/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `At Microsoft Build 2026, GitHub shipped new agent tooling and made Copilot remote control GA on web and mobile.`, source: `GitHub Blog`, url: `https://github.blog/news-insights/` },
          { text: `MiniMax M3 launched as the first open-weight model pairing frontier software-engineering skills with a 1M-token context window.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `The Model Context Protocol (MCP) has become a foundational layer across major agent frameworks.`, source: `Developer Tech`, url: `https://www.developer-tech.com/` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin traded near $59.8K (-0.4%) and Ethereum near $1,578 (+0.3%).`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `Spot bitcoin ETFs are headed for their worst month on record, with ~$4B of outflows in June.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `Coinbase and OKX are courting Binance's EU users after Binance failed to secure a MiCA license.`, source: `CoinDesk`, url: `https://www.coindesk.com/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `Iran launched drone and missile attacks on Kuwait and Bahrain and threatened to halt talks with the US.`, source: `CBS News`, url: `https://www.cbsnews.com/live-updates/us-iran-war-israel-hezbollah-strait-of-hormuz-peace-deal-talks/` },
          { text: `Twin earthquakes in Venezuela killed more than 1,400 people, with US search-and-rescue teams deployed.`, source: `CBS News`, url: `https://www.cbsnews.com/world/` },
          { text: `World Cup 2026: Canada reached the round of 16; Brazil–Japan and Germany–Paraguay play knockout ties.`, source: `ESPN`, url: `https://www.espn.com/soccer/story/_/id/49213287/world-cup-2026-today-blog-29-06-2026-live-updates-news-fixtures-schedule-results-canada-brazil-japan` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `President Guy Parmelin began a US, Canada and Mexico economic and scientific mission (June 29–July 9).`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/` },
          { text: `Switzerland endured a 10th straight day above 30°C, with 19 stations hitting record highs and the Aare setting a record.`, source: `Le News`, url: `https://lenews.ch/` },
          { text: `Switzerland completed a CHF500M advance payment for US F-35 fighter jets.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `Greek startup funding reached €732.2M across 90+ startups in 2025, up 35% year over year.`, source: `Mean CEO`, url: `https://blog.mean.ceo/startups-greece-news-june-2026/` },
          { text: `The Bank of Greece warned that climate change and overtourism threaten tourism's long-term sustainability.`, source: `GreekReporter`, url: `https://greekreporter.com/` },
          { text: `The government announced plans to send a Greek astronaut into space within two years.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` }
        ]
      }
    ]
  },
  {
    date: `Sunday, June 28, 2026`,
    iso: `2026-06-28`,
    greeting: `Good morning — here's your briefing for Sunday, June 28, 2026. One all-day item today (Weekly Accounting work) and no timed meetings; two open to-dos remain in Tasklist A and five in Tasklist B, with no lead follow-ups due. In the headlines: the big frontier AI launches (GPT-5.6, Gemini 3.5 Pro, Grok 5) all slipped into July, Bitcoin steadied near $59K after multi-year lows, and Switzerland logged its hottest-ever June at 38°C in Basel.`,
    calendar: {
      allDay: [`Weekly Accounting work`],
      events: [],
      note: `One all-day accounting block on your Home calendar; no timed events scheduled.`
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `Get the files to get stamps or whatever`] },
        { name: `Tasklist B`, tasks: [`Vibe code an app for time tracking personal projects`, `Vibe code an app for tracking expenses for your companies`, `Peak Code Consulting website copy home page should not be slop`, `Fiji Solutions website copy home page should not be slop`, `Understand what the flow is for creating new vibe coded apps with a small backend.`] }
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
          { text: `Frontier launches stalled: GPT-5.6, Gemini 3.5 Pro and Grok 5 all slipped past June into July as the week ended with no releases.`, source: `Build Fast with AI`, url: `https://www.buildfastwithai.com/blogs/ai-news-today-june-27-2026` },
          { text: `ChatGPT's market share reportedly fell below 50% for the first time as rival assistants gained ground.`, source: `Build Fast with AI`, url: `https://www.buildfastwithai.com/blogs/ai-news-today-june-27-2026` },
          { text: `The June AI model tracker logs the latest frontier and open-weight releases plus benchmark shifts.`, source: `LLM Stats`, url: `https://llm-stats.com/llm-updates` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `Ex-Infosys chief Vishal Sikka's new startup Hang Ten Systems raised a $32M seed (Mayfield, with Aramco Ventures) for AI-driven software automation.`, source: `TechCrunch`, url: `https://techcrunch.com/2026/06/24/former-infosys-chief-has-a-new-startup-that-wants-to-challenge-the-it-services-world/` },
          { text: `US startups captured nearly 80% of global seed-to-growth funding so far in 2026 as AI concentrates capital.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/us-ai-startup-funding-boom-data/` },
          { text: `AI now draws roughly half of all global venture funding, which reached $425B in 2025.`, source: `Crunchbase News`, url: `https://news.crunchbase.com/venture/us-ai-startup-funding-boom-data/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `NVIDIA's RTX Spark Superchip brings up to 1 petaflop of AI compute and 128GB unified memory to workstation laptops.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `Microsoft Build 2026: Fabric Data Warehouse now runs eligible queries directly on NVIDIA accelerated compute — no cluster sizing needed.`, source: `Microsoft`, url: `https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live/` },
          { text: `Hugging Face's smolagents compresses agent routing to ~1,000 lines of Python, letting models write and run code in a managed sandbox.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin touched its lowest level since September 2024 (~$59.2K) before rebounding; roughly $1B in futures positions were liquidated.`, source: `Yahoo Finance`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-thursday-june-25-2026-bitcoin-hits-its-lowest-levels-in-years-125308371.html` },
          { text: `Binance has days to secure a replacement EU license before June 30 or halt services for millions of European users.`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `Tether expanded its tokenized-gold play, letting XAUT holders borrow against their bullion without selling.`, source: `CoinDesk`, url: `https://www.coindesk.com/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `World Cup 2026: Egypt reached the knockouts for the first time (1-1 with Iran), Belgium beat New Zealand 5-1 to top Group G, and Uzbekistan became the first Central Asian side to qualify.`, source: `ESPN`, url: `https://www.espn.com/soccer/story/_/id/49194724/world-cup-2026-today-blog-27-06-2026-live-updates-news-fixtures-schedule-results-cape-verde-uruguay-england` },
          { text: `The US-Iran ceasefire looked increasingly fragile after fresh hostilities, including US strikes on Iranian military targets.`, source: `NPR`, url: `https://www.npr.org/sections/world/` },
          { text: `Venezuela declared a state of emergency as powerful earthquakes caused widespread damage.`, source: `NPR`, url: `https://www.npr.org/sections/world/` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Switzerland logged its hottest-ever June, hitting 38°C in Basel and breaking a record set roughly eight decades earlier.`, source: `The Local`, url: `https://www.thelocal.ch/20260626/today-in-switzerland-a-roundup-of-the-latest-news-on-friday-249` },
          { text: `Eighty Swiss rescue specialists landed in Caracas to aid search efforts after two deadly Venezuelan earthquakes.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `The Beznau nuclear reactors were taken off the grid as river water overheated during the heatwave.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `The government opened its National Housing Strategy 2026–2035 for consultation, floating rent caps, mortgage tax incentives and lower VAT on social housing.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `The Hellenic Olympic Committee began a major restoration of the Panathenaic Stadium ahead of a planned 2027 Diamond League meet.`, source: `GreekReporter`, url: `https://greekreporter.com/greek-news/` },
          { text: `A proposed €136.5M tourism development on Kalamata's western beachfront sparked debate over coastal access and the environment.`, source: `GreekReporter`, url: `https://greekreporter.com/greek-news/` }
        ]
      }
    ]
  },
  {
    date: `Saturday, June 27, 2026`,
    iso: `2026-06-27`,
    greeting: `Good morning — here's your briefing for Saturday, June 27, 2026. One timed item today: invoicing New Era Learning at 09:00, and it's John Mavroudopoulos's birthday. Two open to-dos remain in Tasklist A and five in Tasklist B, with no lead follow-ups due. In the headlines: Venezuela's earthquake toll passes 920, Bitcoin slides toward $58K, and Switzerland sets a new June heat record of 38.8°C.`,
    calendar: {
      allDay: [`John Mavroudopoulos (birthday)`],
      events: [
        { time: `09:00–10:00`, title: `Invoice NEW ERA LEARNING`, calendar: `charismoutafidis@gmail.com` }
      ],
      note: `One timed item on your personal calendar; the rest of the day is open.`
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `Get the files to get stamps or whatever`] },
        { name: `Tasklist B`, tasks: [`Vibe code an app for time tracking personal projects`, `Vibe code an app for tracking expenses for your companies`, `Peak Code Consulting website copy — home page should not be slop`, `Fiji Solutions website copy — home page should not be slop`, `Define the flow for creating new vibe-coded apps with a small backend — Lambda functions vs a small app in a k8s cluster, monorepo in both cases? Have a flow ready to blast out a lot of apps.`] }
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
          { text: `Qualcomm is in early talks to acquire RISC-V AI-chip designer Tenstorrent for roughly $8–10B, a major bet on AI infrastructure.`, source: `AI News`, url: `https://www.artificialintelligence-news.com/` },
          { text: `The European Commission's proposed Cloud and AI Development Act aims to coordinate compute investment and protect EU data residency.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/ai-news-june-2026-models-research-developments` },
          { text: `DeepSeek v3.2 (671B MoE, 37B active, MIT-licensed) leads open models on math, scoring 96.0% on the GSM8K benchmark.`, source: `LLM Stats`, url: `https://llm-stats.com/llm-updates` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `General Intuition raised $320M (Khosla, General Catalyst, Jeff Bezos) to train AI agents on millions of hours of gameplay.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/26/top-tech-news-today-june-26-2026/` },
          { text: `Quantifind secured a $200M growth investment led by Summit Partners for AI-driven anti-money-laundering and fraud detection.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/26/top-tech-news-today-june-26-2026/` },
          { text: `OpenAI detailed "Jalapeño," a custom inference chip built with Broadcom, joining Google, Apple and SpaceX in reducing single-supplier risk.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/26/top-tech-news-today-june-26-2026/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `At Microsoft Build 2026, the Agent 365 SDK reached general availability, adding observability, access controls and compliance for enterprise agents.`, source: `Microsoft`, url: `https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live/` },
          { text: `MiniMax M3 launched as the first open-weight model pairing frontier software-engineering ability with a 1M-token context window and native computer use.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` },
          { text: `Anthropic's Claude Agent SDK (TypeScript/Python) ships native MCP server and sub-agent support for building custom agents.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/open-source-ai-roundup-june-2026` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin fell to about $58,189 on June 26 — its lowest since September 2024 — before recovering near $60,300; Ether traded around $1,580.`, source: `Yahoo Finance`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-thursday-june-25-2026-bitcoin-tumbles-further-below-60000-125308371.html` },
          { text: `US spot-Bitcoin ETFs logged a ~$692M net outflow on June 25, the largest single-day redemption since May 27.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `Binance told EU users it will halt services after failing to secure a MiCA license, with permits set to expire June 30.`, source: `The Block`, url: `https://www.theblock.co/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `Venezuela's earthquake disaster: at least 920 dead and over 3,000 injured as rescuers race to reach survivors.`, source: `CNN`, url: `https://www.cnn.com/2026/06/26/world/live-news/venezuela-earthquake-hnk` },
          { text: `World Cup 2026: Cape Verde reached the knockout stage and Uruguay crashed out, while France beat Norway 4-1 on a Dembélé hat-trick.`, source: `ESPN`, url: `https://www.espn.com/soccer/story/_/id/49194724/world-cup-2026-today-blog-27-06-2026-live-updates-news-fixtures-schedule-results-cape-verde-uruguay-england` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Switzerland recorded a new June heat record of 38.8°C, with glacier "melt day" reached unusually early.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `The Beznau nuclear reactors were taken off the grid as river water overheated during the heatwave.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `Swiss intelligence warned the security climate is worsening amid rising Russian hybrid threats and terrorism risk.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `The 2026 EKO Acropolis Rally (WRC round 8) opened Friday with its grueling first leg.`, source: `GreekReporter`, url: `https://greekreporter.com/` },
          { text: `The Parthenon's west façade is fully visible for the first time in about 220 years after scaffolding was permanently removed.`, source: `GreekReporter`, url: `https://greekreporter.com/greek-news/` },
          { text: `The government opened its National Housing Strategy 2026–2035 for consultation, floating rent caps, mortgage incentives and lower VAT on social housing.`, source: `Keep Talking Greece`, url: `https://www.keeptalkinggreece.com/` }
        ]
      }
    ]
  },
  {
    date: `Friday, June 26, 2026`,
    iso: `2026-06-26`,
    greeting: `Good morning — here's your briefing for Friday, June 26, 2026. Your calendar is clear today, four open to-dos remain in Tasklist A, and no lead follow-ups are due. In the headlines: Venezuela's deadliest earthquake in over a century, a $10.5B Bitcoin options expiry, and Swiss median salaries climbing to CHF 87,000.`,
    calendar: {
      allDay: [],
      events: [],
      note: ``
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `handover L2`, `Get the files to get stamps or whatever`, `Call the new accountant`] },
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
          { text: `Five Eyes cyber agencies (US, UK, Canada, Australia and New Zealand) jointly published "Careful Adoption of Agentic AI Services" guidance for critical-infrastructure and defense deployments.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/ai-news-june-2026-models-research-developments` },
          { text: `New York City's Department of Education will require every AI tool to pass a bias-and-equity review before use across its 1.1M-student system.`, source: `devFlokers`, url: `https://www.devflokers.com/blog/ai-news-june-2026-models-research-developments` },
          { text: `The 2026 throughline: agentic systems are pushing AI from chat to task completion across research, coding, support, legal work and payments.`, source: `Crescendo AI`, url: `https://www.crescendo.ai/news/latest-ai-news-and-updates` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `AI-infrastructure startup Baseten raised $1.5B at a $13B valuation, one of the year's largest deployment-focused rounds.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/25/top-tech-news-today-june-25-2026/` },
          { text: `SpaceX pulled off a record $75B IPO while Alphabet ran an $80B stock sale and Microsoft pushed into on-device AI agents.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/25/top-tech-news-today-june-25-2026/` },
          { text: `VCs are pivoting to hard tech as AI squeezes software margins — Eclipse-backed firms have raised $14B in 2026, including Cerebras' IPO.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/25/top-tech-news-today-june-25-2026/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `Mistral AI shipped OCR 4 on June 23, moving from plain-text extraction to structured document output.`, source: `MarkTechPost`, url: `https://www.marktechpost.com/2026/06/24/top-generative-ai-coding-tools-of-2026/` },
          { text: `At Microsoft Build 2026, GitHub made remote control of Copilot coding sessions generally available on github.com and GitHub Mobile.`, source: `The GitHub Blog`, url: `https://github.blog/news-insights/` },
          { text: `Surveys now put AI-generated code at up to 46% of new code in some organizations, with tool cost a rising concern.`, source: `Developer Tech`, url: `https://www.developer-tech.com/` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin fell below $60,000 to multi-year lows (~$59,300, -2.3%) and Ether slid to ~$1,560 amid ETF outflows.`, source: `Yahoo Finance`, url: `https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-thursday-june-25-2026-bitcoin-hits-its-lowest-levels-in-years-125308371.html` },
          { text: `A $10.5B Bitcoin options expiry lands Friday, June 26 — analysts call it a critical market reset.`, source: `PANews`, url: `https://www.panewslab.com/en/articles/019efc82-17c1-70d4-b58a-a09035abf615` },
          { text: `BlackRock moved ~$257M of BTC and ETH to Coinbase, while Kraken weighs a 15% stake in DeFi lender Aave at a $385M valuation.`, source: `PANews`, url: `https://www.panewslab.com/en/articles/019efc82-17c1-70d4-b58a-a09035abf615` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `Two major earthquakes struck Venezuela, killing at least 164 (officials now cite up to 188 dead) — the country's strongest in over a century.`, source: `CBS News`, url: `https://www.cbsnews.com/world/` },
          { text: `An Ebola outbreak in eastern DR Congo has topped 1,000 cases and 250 deaths in just over a month, among the largest in years.`, source: `CBS News`, url: `https://www.cbsnews.com/world/` },
          { text: `The US Supreme Court issued two major immigration rulings, one lifting deportation restrictions for thousands of Haitian and Syrian immigrants.`, source: `CBS News`, url: `https://www.cbsnews.com/world/` },
          { text: `At the FIFA World Cup, Türkiye beat the US with a stoppage-time winner — the Americans' first defeat of the tournament.`, source: `ESPN`, url: `https://www.espn.com/soccer/story/_/id/49183943/world-cup-2026-today-blog-26-06-2026-live-updates-news-fixtures-schedule-results-ecuador-sweden-norway-france` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Switzerland's median full-time gross salary climbed to CHF 87,000 in 2025, up from CHF 81,500 a year earlier.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `The Federal Council scaled back its planned VAT increase for the armed forces, proposing 0.5% instead of 0.8% after criticism.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `Amid a heatwave, Bern's River Aare hit its highest-ever June temperature and Ticino's heat-danger level was raised to 4.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `Greece joined "Pax Silica," a US-led pact on AI, energy, semiconductors and critical minerals, signed June 23 in Washington.`, source: `GreekReporter`, url: `https://greekreporter.com/` },
          { text: `The Education Ministry unveiled a major restructuring of the school network for 2026–2027, merging or closing low-enrollment schools amid a demographic crisis.`, source: `To Vima`, url: `https://www.tovima.com/` },
          { text: `Boxing legend Floyd Mayweather faces Greek kickboxing icon Mike Zambidis in an exhibition bout on June 27 at Athens' OAKA.`, source: `GreekReporter`, url: `https://greekreporter.com/` }
        ]
      }
    ]
  },
  {
    date: `Thursday, June 25, 2026`,
    iso: `2026-06-25`,
    greeting: `Good morning — here's your briefing for Thursday, June 25, 2026. Two events today: Dev Day Virtual (10:00–13:00) and the Weekly TRW Dev Meeting (18:00–19:00). Four open to-dos remain in Tasklist A, and no lead follow-ups are due today.`,
    calendar: {
      allDay: [],
      events: [
        { time: `10:00–13:00`, title: `Dev Day Virtual`, calendar: `charismoutafidis@gmail.com` },
        { time: `18:00–19:00`, title: `Weekly TRW Dev Meeting`, calendar: `charismoutafidis@gmail.com` }
      ],
      note: `Snowflake Dev Day runs through midday; the weekly TRW dev sync is at 18:00.`
    },
    checklist: {
      source: `The Real World — Daily Checklist`,
      url: `https://app.jointherealworld.com/checklist`,
      groups: [
        { name: `Tasklist A`, tasks: [`Check driving licence if it is valid`, `handover L2`, `Get the files to get stamps or whatever`, `Call the new accountant`] },
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
          { text: `Anthropic is in early talks with Microsoft to run Claude inference on Microsoft's custom Maia 200 chips via Azure.`, source: `Latest AI News`, url: `https://blog.mean.ceo/latest-ai-developments-news-june-2026/` },
          { text: `Qualcomm is in early talks to acquire RISC-V AI-chip designer Tenstorrent for roughly $8–10B.`, source: `Latest AI News`, url: `https://blog.mean.ceo/latest-ai-developments-news-june-2026/` },
          { text: `A study comparing 100,000+ people with leading AI systems found generative AI can now beat the average human on some creativity tests.`, source: `Crescendo AI`, url: `https://www.crescendo.ai/news/latest-ai-news-and-updates` }
        ]
      },
      {
        group: `Tech & startups`,
        section: `global`,
        items: [
          { text: `AI-memory startup Engram emerged from stealth with a $98M round at a $600M valuation, backed by General Catalyst, Kleiner Perkins and Sequoia.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/23/top-tech-news-today-june-23-2026/` },
          { text: `Qualcomm announced a $4B all-stock acquisition of AI-software startup Modular, taking aim at Nvidia's CUDA platform.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/23/top-tech-news-today-june-23-2026/` },
          { text: `SpaceX signed a $6.3B compute deal with Reflection AI, which will pay $150M/month from July 1 for GB300 access at its Memphis data center.`, source: `Tech Startups`, url: `https://techstartups.com/2026/06/23/top-tech-news-today-june-23-2026/` }
        ]
      },
      {
        group: `Software engineering`,
        section: `global`,
        items: [
          { text: `Pragmatic Engineer's 2026 survey found Claude Code is now the most-used AI coding tool, overtaking GitHub Copilot and Cursor.`, source: `The Pragmatic Engineer`, url: `https://newsletter.pragmaticengineer.com/p/ai-tooling-2026` },
          { text: `A roundup flagged Temporal, Pkl, Faro, Devbox and Socket as the emerging developer tools to watch in 2026.`, source: `DEV Community`, url: `https://dev.to/thebitforge/top-5-emerging-developer-tools-to-watch-in-2026-12pl` },
          { text: `Gartner projects the low-code market will reach $44.5B in 2026 as platform engineering scales across teams.`, source: `Intelegain`, url: `https://www.intelegain.com/top-20-software-development-trends-in-2026/` }
        ]
      },
      {
        group: `Crypto`,
        section: `global`,
        items: [
          { text: `Bitcoin held above $62,500 and Ether near $1,665, with widening put skews signaling bears remain in control.`, source: `CoinDesk`, url: `https://www.coindesk.com/` },
          { text: `Binance has under a week to secure a replacement EU license before June 30 after its Greek passporting bid collapsed.`, source: `The Block`, url: `https://www.theblock.co/` },
          { text: `Crypto slid on a strong dollar and risk-off mood as this week's AI-stock selloff weighed on Bitcoin and Ether.`, source: `Investing News`, url: `https://investingnews.com/cryptocurrency-market-recap/` }
        ]
      },
      {
        group: `World`,
        section: `global`,
        items: [
          { text: `Millions in France endured extreme heat, with 40 drowning deaths reported since June 18.`, source: `CBS News`, url: `https://www.cbsnews.com/world/` },
          { text: `An Ebola outbreak in eastern DR Congo topped 1,000 confirmed cases and 250 deaths in just over a month.`, source: `CBS News`, url: `https://www.cbsnews.com/world/` },
          { text: `UK PM Keir Starmer is resigning, with a fellow Labour MP known as the "King of the North" tipped to succeed him.`, source: `NPR`, url: `https://www.npr.org/sections/world/` },
          { text: `Iran says there are no plans to allow inspections of its bombed nuclear sites, despite Trump claiming Tehran agreed.`, source: `CNN`, url: `https://www.cnn.com/world` }
        ]
      },
      {
        group: `Switzerland`,
        section: `local`,
        items: [
          { text: `Switzerland plans a compulsory civil-protection service to boost available personnel.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `A Swiss–EU electricity deal advanced in parliament, promising market access and consumer choice.`, source: `SWI swissinfo.ch`, url: `https://www.swissinfo.ch/eng/latest-news/` },
          { text: `Switzerland beat Canada 2–1 to top Group B at the FIFA World Cup 2026.`, source: `Outlook India`, url: `https://www.outlookindia.com/sports/football/switzerland-vs-canada-live-score-fifa-world-cup-2026-group-b-sui-v-can-updates-bc-place-highlights` }
        ]
      },
      {
        group: `Greece`,
        section: `local`,
        items: [
          { text: `The government released its National Housing Strategy 2026–2035 for consultation, floating rent caps and mortgage incentives.`, source: `Greek City Times`, url: `https://greekcitytimes.com/` },
          { text: `Owners in Athens and Thessaloniki are rushing permits before strict new Airbnb rules take effect July 1.`, source: `GreekReporter`, url: `https://greekreporter.com/` },
          { text: `The Parthenon's west façade is visible in full for the first time in about 220 years after scaffolding was removed.`, source: `GreekReporter`, url: `https://greekreporter.com/` }
        ]
      }
    ]
  },
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
