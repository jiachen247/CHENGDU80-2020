const latestNews = [
  {
    date: "12/30/12",
    title: "Carlyle Agrees to Buy Duff & Phelps for $665.5 Million",
    url:
      "http://www.bloomberg.com/news/2012-12-30/carlyle-agrees-to-buy-duff-phelps-for-665-5-million.html",
    sentiment_score: "0.9806",
    industry: "Consumer Discretionary",
  },
  {
    date: "12/30/12",
    title: "Egypt Pound Weakens to Record After Central Bank Sells Dollars",
    url:
      "http://www.bloomberg.com/news/2012-12-30/egypt-to-start-dollar-auctions-as-reserves-hit-critical-level.html",
    sentiment_score: "-0.9723",
    industry: "Consumer Discretionary",
  },
  {
    date: "12/28/12",
    title: "Internet Stocks Lead Gain on Manufacturing Data: China Overnight",
    url:
      "http://www.bloomberg.com/news/2012-12-28/tech-companies-lead-longest-rally-in-two-months-china-overnight.html",
    sentiment_score: "0.993",
    industry: "Information Technology",
  },
  {
    date: "12/31/12",
    title: "L&T finance and SBI Global Ltd CP:India Money Markets",
    url:
      "http://www.bloomberg.com/news/2012-12-31/l-t-finance-and-sbi-global-ltd-cp-india-money-markets.html",
    sentiment_score: "0.7003",
    industry: "Consumer Discretionary",
  },
  {
    date: "12/31/12",
    title: "A Deal Both Sides Should Hate -- and Support",
    url:
      "http://www.bloomberg.com/news/2012-12-31/a-deal-both-sides-should-hate-and-support.html",
    sentiment_score: "0.9909",
    industry: "Health Care",
  },
  {
    date: "12/31/12",
    title: "Malawi‚ President Pledges to Keep Floating Currency",
    url:
      "http://www.bloomberg.com/news/2012-12-31/malawi-s-president-pledges-to-keep-floating-currency.html",
    sentiment_score: "-0.5875",
    industry: "Financials",
  },
  {
    date: "12/31/12",
    title: "Amazon Apologizes for Christmas Eve Outage Affecting Netflix",
    url:
      "http://www.bloomberg.com/news/2012-12-31/amazon-apologizes-for-christmas-eve-disruption-affecting-netflix.html",
    sentiment_score: "0.8687",
    industry: "Real Estate",
  },
  {
    date: "12/31/12",
    title: "AMF Bowling Executives Seek $1 Million in Bonuses",
    url:
      "http://www.bloomberg.com/news/2012-12-31/amf-bowling-executives-seek-1-million-in-bonuses.html",
    sentiment_score: "0.9501",
    industry: "Utilities",
  },
  {
    date: "12/31/12",
    title: "Mandela Under Medical Attention at His Johannesburg Home",
    url:
      "http://www.bloomberg.com/news/2012-12-31/mandela-under-medical-attention-at-his-johannesburg-home.html",
    sentiment_score: "0.8519",
    industry: "Financials",
  },
  {
    date: "12/31/12",
    title: "Arsenal Sets Two-Week Walcott Contract Deadline: Soccer Roundup",
    url:
      "http://www.bloomberg.com/news/2012-12-31/arsenal-sets-two-week-walcott-contract-deadline-soccer-roundup.html",
    sentiment_score: "0.9921",
    industry: "Consumer Staples",
  },
  {
    date: "12/31/12",
    title: "Asia Gasoil Crack Gains; Arcadia Buys Gasoline: Oil Products",
    url:
      "http://www.bloomberg.com/news/2012-12-31/asia-gasoil-crack-gains-arcadia-buys-gasoline-oil-products.html",
    sentiment_score: "0.9152",
    industry: "Energy",
  },
  {
    date: "12/31/12",
    title: "Most Asian Stocks Drop as U.S. Budget Talks Stall; Fairfax Gains",
    url:
      "http://www.bloomberg.com/news/2012-12-31/asian-stocks-drop-paring-2012-gains-as-u-s-budget-talks-stall.html",
    sentiment_score: "0.9895",
    industry: "Financials",
  },
  {
    date: "12/31/12",
    title: "Bangladesh Scraps Plan to Send Cricket Team to Play in Pakistan",
    url:
      "http://www.bloomberg.com/news/2012-12-31/bangladesh-scraps-plan-to-send-cricket-team-to-play-in-pakistan.html",
    sentiment_score: "-0.8834",
    industry: "Energy",
  },
  {
    date: "12/31/12",
    title: "Berkshire‚ CTB Buys Martin to Expand Grain-Handling Unit",
    url:
      "http://www.bloomberg.com/news/2012-12-31/berkshire-s-ctb-buys-martin-industries-to-expand-grain-business.html",
    sentiment_score: "0.9678",
    industry: "Industrials",
  },
  {
    date: "12/31/12",
    title: "Boise State Spurns Big East for Mountain West in All Sports",
    url:
      "http://www.bloomberg.com/news/2012-12-31/boise-state-will-spurn-big-east-move-and-stay-in-mountain-west.html",
    sentiment_score: "0.9582",
    industry: "Energy",
  },
  {
    date: "12/31/12",
    title: "Cameroon Nine-Month Revenue From Oil Resources Increases 9.3%",
    url:
      "http://www.bloomberg.com/news/2012-12-31/cameroon-nine-month-revenue-from-oil-resources-increases-9-3-.html",
    sentiment_score: "0.5574",
    industry: "Financials",
  },
  {
    date: "12/31/12",
    title: "Canadian Dollar Gains on Optimism U.S. May Reach Deal",
    url:
      "http://www.bloomberg.com/news/2012-12-31/canadian-dollar-gains-on-hope-u-s-avoids-recession.html",
    sentiment_score: "0.9582",
    industry: "Health Care",
  },
  {
    date: "12/31/12",
    title: "McConnell-Biden Said Close to Deal Except for Sequester",
    url:
      "http://www.bloomberg.com/news/2012-12-31/mcconnell-biden-said-close-to-deal-except-for-sequester.html",
    sentiment_score: "-0.8442",
    industry: "Financials",
  },
  {
    date: "12/31/12",
    title: "Central African‚ President Pledges Talks to End Conflict",
    url:
      "http://www.bloomberg.com/news/2012-12-31/central-african-s-president-pledges-talks-to-end-conflict.html",
    sentiment_score: "0.875",
    industry: "Energy",
  },
  {
    date: "12/31/12",
    title: "Certificate of Deposits Reported: India Money Markets",
    url:
      "http://www.bloomberg.com/news/2012-12-31/certificate-of-deposits-reported-india-money-markets.html",
    sentiment_score: "0",
    industry: "Industrials",
  },
  {
    date: "12/31/12",
    title: "Chargers Fire Coach Norv Turner, GM A.J. Smith After 7-9 Season",
    url:
      "http://www.bloomberg.com/news/2012-12-31/chargers-fire-coach-norv-turner-gm-a-j-smith-after-7-9-season.html",
    sentiment_score: "0.788",
    industry: "Consumer Discretionary",
  },
  {
    date: "12/31/12",
    title: "China Manufacturing Pickup Shows Rebound Gains Traction: Economy",
    url:
      "http://www.bloomberg.com/news/2012-12-31/china-s-manufacturing-expands-at-fastest-pace-since-may-2011.html",
    sentiment_score: "0.9874",
    industry: "Industrials",
  },
  {
    date: "12/31/12",
    title: "Cleveland Browns Fire General Manager Heckert, Coach Shurmur",
    url:
      "http://www.bloomberg.com/news/2012-12-31/cleveland-browns-fire-general-manager-heckert-coach-shurmur.html",
    sentiment_score: "-0.6486",
    industry: "Consumer Staples",
  },
  {
    date: "12/31/12",
    title: "Clinton Expected to Make Full Recovery From Blood Clot",
    url:
      "http://www.bloomberg.com/news/2012-12-31/clinton-s-blood-clot-is-between-brain-and-skull-doctor-says.html",
    sentiment_score: "-0.9005",
    industry: "Consumer Staples",
  },
  {
    date: "12/31/12",
    title: "Clippers Beat Jazz for 17th Straight NBA Win, Unbeaten December",
    url:
      "http://www.bloomberg.com/news/2012-12-31/clippers-beat-jazz-for-17th-straight-nba-win-unbeaten-december.html",
    sentiment_score: "0.9686",
    industry: "Consumer Staples",
  },
  {
    date: "12/31/12",
    title: "Congress Dysfunction as Deadline Arrives Poses 2013 Risks",
    url:
      "http://www.bloomberg.com/news/2012-12-31/congress-dysfunction-as-deadline-arrives-poses-2013-risks.html",
    sentiment_score: "-0.9091",
    industry: "Consumer Staples",
  },
  {
    date: "12/31/12",
    title: "Copper Climbs in London After China‚ Manufacturing: LME Preview",
    url:
      "http://www.bloomberg.com/news/2012-12-31/copper-climbs-in-london-after-china-s-manufacturing-lme-preview.html",
    sentiment_score: "0.5994",
    industry: "Energy",
  },
  {
    date: "12/31/12",
    title: "Corporate Credit Swaps in U.S. Decline as Budget Deadline Looms",
    url:
      "http://www.bloomberg.com/news/2012-12-31/corporate-credit-swaps-in-u-s-decline-as-budget-deadline-looms.html",
    sentiment_score: "-0.6428",
    industry: "Utilities",
  },
  {
    date: "12/31/12",
    title: "Corporate Sales Primed for Another Record in 2013: Canada Credit",
    url:
      "http://www.bloomberg.com/news/2012-12-31/corporate-sales-primed-for-another-record-in-2013-canada-credit.html",
    sentiment_score: "0.9792",
    industry: "Real Estate",
  },
  {
    date: "12/31/12",
    title: "Demand for Clean-Energy Credits in India Doubled in December",
    url:
      "http://www.bloomberg.com/news/2012-12-31/demand-for-clean-energy-credits-in-india-doubled-in-december.html",
    sentiment_score: "0.9896",
    industry: "Communication Services",
  },
  {
    date: "12/28/12",
    title: "Apple Will Drop Galaxy S III Mini From Samsung Patent Suit",
    url:
      "http://www.bloomberg.com/news/2012-12-28/apple-will-drop-galaxy-s-iii-mini-from-samsung-patent-suit-1-.html",
    sentiment_score: "-0.8834",
    industry: "Information Technology",
  },
  {
    date: "12/31/12",
    title: "Dubai Lowers 2013 Budget Deficit Forecast to Below 0.5% of GDP",
    url:
      "http://www.bloomberg.com/news/2012-12-31/dubai-lowers-2013-budget-deficit-forecast-to-below-0-5-of-gdp.html",
    sentiment_score: "0.7717",
    industry: "Real Estate",
  },
  {
    date: "12/31/12",
    title: "Egypt‚ Mursi Not Worried About Currency‚ Slide Against Dollar",
    url:
      "http://www.bloomberg.com/news/2012-12-31/egypt-s-mursi-not-worried-about-currency-s-slide-against-dollar.html",
    sentiment_score: "0.4919",
    industry: "Real Estate",
  },
  {
    date: "12/31/12",
    title: "Telecom Egypt Sees Regulator Decision on Vodafone Stake in 2013",
    url:
      "http://www.bloomberg.com/news/2012-12-31/telecom-egypt-sees-regulator-decision-on-vodafone-stake-in-2013.html",
    sentiment_score: "-0.1531",
    industry: "Communication Services",
  },
  {
    date: "12/31/12",
    title: "Emaar Drops as U.A.E. Said to Cap Expat Mortgages: Dubai Mover",
    url:
      "http://www.bloomberg.com/news/2012-12-31/emaar-drops-as-u-a-e-said-to-cap-expat-mortgages-dubai-mover.html",
    sentiment_score: "0.8885",
    industry: "Real Estate",
  },
  {
    date: "12/31/12",
    title: "Amazon Apologizes for Christmas Eve Outage Affecting Netflix",
    url:
      "http://www.bloomberg.com/news/2012-12-31/amazon-apologizes-for-christmas-eve-disruption-affecting-netflix.html",
    sentiment_score: "-0.9915",
    industry: "Information Technology",
  },
  {
    date: "12/31/12",
    title: "Ethanol-Gasoline Gap Widens on Imports, Domestic Output",
    url:
      "http://www.bloomberg.com/news/2012-12-31/ethanol-gasoline-gap-widens-on-imports-domestic-output.html",
    sentiment_score: "0.2023",
    industry: "Industrials",
  },
  {
    date: "12/31/12",
    title: "Fiscal Cliff Uncertainty Slowed Structured Note Sales in U.S.",
    url:
      "http://www.bloomberg.com/news/2012-12-31/fiscal-cliff-uncertainty-slowed-structured-note-sales-in-u-s-.html",
    sentiment_score: "0.9716",
    industry: "Communication Services",
  },
  {
    date: "12/31/12",
    title: "Gold Records 12th Straight Annual Advance: Commodities at Close",
    url:
      "http://www.bloomberg.com/news/2012-12-31/gold-records-12th-straight-annual-advance-commodities-at-close.html",
    sentiment_score: "0.9842",
    industry: "Industrials",
  },
  {
    date: "12/31/12",
    title: "India‚ Budget Gap at 80% of Full-Year Target Through November",
    url:
      "http://www.bloomberg.com/news/2012-12-31/india-s-budget-gap-at-80-of-full-year-target-through-november.html",
    sentiment_score: "-0.4767",
    industry: "Utilities",
  },
  {
    date: "12/31/12",
    title: "Invenergy Gets Financing for Des Moulins Wind Project in Canada",
    url:
      "http://www.bloomberg.com/news/2012-12-31/invenergy-gets-financing-for-des-moulins-wind-project-in-canada.html",
    sentiment_score: "0.5719",
    industry: "Communication Services",
  },
  {
    date: "12/31/12",
    title: "Japan Releases Chinese Fishing Boat Amid Tensions Over Islands",
    url:
      "http://www.bloomberg.com/news/2012-12-31/japan-detains-chinese-fishing-boat-amid-tensions-over-islands.html",
    sentiment_score: "-0.7184",
    industry: "Health Care",
  },
  {
    date: "12/31/12",
    title: "Judge Seeks Bond Called High in Samsung-Apple Phone Case",
    url:
      "http://www.bloomberg.com/news/2012-12-31/judge-seeks-bond-called-high-in-samsung-apple-phone-case.html",
    sentiment_score: "-0.2023",
    industry: "Information Technology",
  },
  {
    date: "12/31/12",
    title: "Netflix Says Users Can't Access Service's DVD Website",
    url:
      "http://www.bloomberg.com/news/2012-12-31/netflix-says-some-customers-can-t-access-dvd-portion-of-website.html",
    sentiment_score: "-0.34",
    industry: "Information Technology",
  },
  {
    date: "12/31/12",
    title: "NFL‚ Cardinals Fire Coach Whisenhunt, General Manager Graves",
    url:
      "http://www.bloomberg.com/news/2012-12-31/nfl-s-cardinals-fire-coach-whisenhunt-general-manager-graves.html",
    sentiment_score: "-0.9169",
    industry: "Health Care",
  },
  {
    date: "12/31/12",
    title: "Oil Heads for Annual Loss as U.S. Budget Talks Near Deadline",
    url:
      "http://www.bloomberg.com/news/2012-12-31/oil-drops-a-third-day-as-u-s-budget-deadline-nears-without-deal.html",
    sentiment_score: "0.6293",
    industry: "Communication Services",
  },
  {
    date: "12/31/12",
    title: "Retailers La Polar, Hites to Enter Chilean Benchmark Stock Index",
    url:
      "http://www.bloomberg.com/news/2012-12-31/retailers-la-polar-hites-to-enter-chilean-benchmark-stock-index.html",
    sentiment_score: "0.34",
    industry: "Consumer Discretionary",
  },
  {
    date: "12/31/12",
    title: "Tribune Co. Emerges From Bankruptcy",
    url:
      "http://www.bloomberg.com/news/2012-12-31/tribune-co-emerges-from-bankruptcy.html",
    sentiment_score: "0.9734",
    industry: "Health Care",
  },
  {
    date: "12/31/12",
    title: "Salix Wins FDA Approval of Dragon‚ Blood Drug for Diarrhea",
    url:
      "http://www.bloomberg.com/news/2012-12-31/salix-wins-fda-approval-of-dragon-s-blood-drug-for-diarrhea-1-.html",
    sentiment_score: "0.9705",
    industry: "Utilities",
  },
  {
    date: "12/31/12",
    title: "Singapore Property Stocks to Extend 2012 Rally: Southeast Asia",
    url:
      "http://www.bloomberg.com/news/2012-12-31/singapore-property-stocks-to-extend-2012-rally-southeast-asia.html",
    sentiment_score: "0.9969",
    industry: "Utilities",
  },
];

export default latestNews;
