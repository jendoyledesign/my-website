export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  industry: string;
  services: string[];
  color: string;
  image?: string; // optional thumbnail image (overrides color swatch)
  heroImage?: string; // optional full-bleed hero background image
  heroVideo?: string; // optional full-bleed hero video (takes precedence over heroImage)
  overview?: string; // optional separate overview text (falls back to challenge)
  siteUrl?: string; // optional live site URL shown as "Visit site" link
  heroTagline: string;
  outcomes: [string, string, string];
  challenge: string;
  solution: string;
  blocks: { color: string }[]; // image/media placeholder blocks
  images?: (string | null)[]; // optional case study image gallery; null = color block, "" = skip slot
  collaborators?: { role: string; name: string }[];
};

export const projects: Project[] = [
  {
    slug: "compass-pathways",
    title: "Redesigning the onboarding experience",
    client: "Compass Pathways",
    year: "2026",
    industry: "SaaS / Enterprise",
    services: ["Web Design", "Motion", "Art Direction", "Design Systems"],
    color: "#e8e4de",
    image: "/work/compass.jpg",
    heroTagline: "From sign-up to aha moment — in half the time.",
    outcomes: [
      "40% reduction in time-to-value",
      "62% increase in feature adoption",
      "NPS improved from 28 to 54",
    ],
    siteUrl: "https://www.compasspathways.com",
    overview:
      "Compass Pathways is a mental health care biotechnology company that develops synthetic psilocybin therapy for severe psychiatric conditions like treatment-resistant depression. Its primary product, COMP360, pairs a proprietary formulation of psilocybin with psychological support and is evaluated in late-stage clinical trials.",
    challenge:
      "Compass Pathway's work is groundbreaking — and the new site needed to reflect that: communicating the science behind their products, the rigour of their research, and the deeply personal impact of their therapeutic treatments. The challenge was to design a web presence that not only expressed their new brand identity visually, but carried their mission and vision clearly across a wide range of audiences — patients, clinicians, and investors alike.",
    solution:
      "The result was a platform built to support Compass's new brand identity product launch. We delivered scalable page templates designed to grow with the company, and a flexible design system that drew on a rich palette of colors and patterns to create a distinct web experience. Motion was considered and intentional — masked shapes drift in the direction of the wind, evoking expansion, exploration, and the opening of new pathways. For imagery, we developed a bespoke AI-generated landscape collection to capture the varied journeys patients move through across the course of their treatment.",
    blocks: [
      { color: "#d8d4ce" },
      { color: "#e0dcd6" },
      { color: "#ccc8c2" },
    ],
    images: [
      "/compass/compass_1.jpg",
      "/compass/compass_2.jpg",
      "/compass/compass_3.jpg",
      "/compass/compass_4.jpg",
      "/compass/compass_5.mov",
      "/compass/compass_6.mov",
      "/compass/compass_7.mp4",
    ],
    collaborators: [
      { role: "Creative Director", name: "Tom Kershaw" },
      { role: "UX", name: "Jose Ramirez" },
      { role: "VD", name: "George Schon, Jen Doyle" },
    ],
  },
  {
    slug: "nespresso",
    title: "A new design system for a global brand",
    client: "Nespresso",
    year: "2026",
    industry: "Creative / Technology",
    services: ["Product Design", "UI/UX", "Motion"],
    color: "#dde4e0",
    image: "/work/nespresso.jpg",
    siteUrl: "https://www.nespresso.com/us/en/explore-vertuo-technology",
    heroTagline: "One system. Twelve teams. Zero guesswork.",
    outcomes: [
      "200+ components shipped",
      "12 product teams aligned",
      "Design-to-dev handoff time cut by 35%",
    ],
    overview:
      "Nespresso is an iconic brand of single-serve coffee and espresso system created by Nestlé.",
    challenge:
      "Nespresso had grown quickly through acquisition, inheriting four different design languages across their product suite. Teams were rebuilding the same components independently, inconsistencies were eroding brand trust, and new designers spent weeks just orienting themselves to how things worked.",
    solution:
      "The engagement started with a thorough audit: cataloguing every component in use, mapping where systems overlapped, and identifying what needed standardization versus what should stay flexible.\n\nFrom that foundation, we built a living design system — a single source of truth in Figma, paired with a React component library. Every decision was documented with rationale, usage guidelines, and accessibility specs. We ran working sessions with each product team to ensure adoption wasn't mandated but earned.",
    images: [
      "/nespresso/nespresso_1.jpg", // [0] single before challenge
      "/nespresso/nespresso_2.webm", // [1] single after challenge
      "",                            // [2] skip two-up left
      "",                            // [3] skip two-up right
      "/nespresso/nespresso_5.mov", // [4] below solution
      "",                            // [5] skip extra two-up left
      "",                            // [6] skip extra two-up right
      "",                            // [7] skip
      "",                            // [8] skip
      "/nespresso/nespresso_3.webm", // [9] double left
      null,                          // [10] double right (color block)
    ],
    blocks: [
      { color: "#cdd4d0" },
      { color: "#d5dcd8" },
      { color: "#c5ccc8" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Kristin Agnarsdottir" },
      { role: "UX", name: "James Craig" },
      { role: "VD", name: "Russel Hinton, Jen Doyle" },
      { role: "Motion", name: "Carlos Eduardo Mejia Martinez" },
    ],
  },
  {
    slug: "outfront",
    title: "Mobile app for climate-conscious consumers",
    client: "Outfront",
    year: "2026",
    industry: "Climate / Consumer",
    services: ["Product Design", "UI/UX", "Motion", "Art Direction", "Design Systems"],
    color: "#e4dde8",
    image: "/work/outfront.jpg",
    heroTagline: "Making sustainability feel less like homework.",
    outcomes: [
      "0→1 product launch in 14 weeks",
      "4.7★ App Store rating at launch",
      "28% day-30 retention",
    ],
    overview:
      "OUTFRONT is a major outdoor advertising company that specializes in out-of-home (OOH) and In Real Life (IRL) media.",
    challenge:
      "GreenPath wanted to help everyday consumers understand and reduce their carbon footprint — but the category was crowded with guilt-driven, data-heavy apps that users opened once and forgot. The challenge wasn't just design; it was defining what a sustainable habit actually looks like in someone's daily life.",
    solution:
      "We spent the first month in discovery — diary studies, behavioral interviews, and a competitive audit that revealed most apps were talking at users, not with them. The insight that shaped everything: people didn't want to feel bad about their choices. They wanted to feel good about small improvements.\n\nThe resulting app stripped out carbon math and replaced it with streaks, gentle nudges, and visible progress. We designed for the realistic user — busy, well-intentioned, easily overwhelmed — and tested every screen against that standard.",
    blocks: [
      { color: "#d4cdd8" },
      { color: "#dcd5e0" },
      { color: "#ccc5d0" },
    ],
    images: [
      "/outfront/outfront_1.jpg", // [0] before challenge
      null,                        // [1] after challenge
      null,                        // [2] two-up left
      null,                        // [3] two-up right
      null,                        // [4] below solution
      null,                        // [5] extra two-up left
      null,                        // [6] extra two-up right
      "",                           // [7] skip single
      "",                           // [8] skip single
      null,                        // [9] second extra two-up left
      null,                        // [10] second extra two-up right
    ],
    collaborators: [
      { role: "Creative Director", name: "Tom Kershaw" },
      { role: "UX", name: "Darin Spicer & Joar Heiberg" },
      { role: "VD", name: "Jen Doyle & Steph Corona" },
    ],
  },
  {
    slug: "hand-and-stone",
    title: "Checkout redesign for an e-commerce platform",
    client: "Hand & Stone",
    year: "2025",
    industry: "E-commerce / Retail",
    services: ["Product Design", "UI/UX", "Motion", "Art Direction", "Design Systems"],
    color: "#e4e1dc",
    image: "/work/hand-and-stone.jpg",
    siteUrl: "https://www.handandstone.com",
    heroTagline: "Six steps became two. Conversion followed.",
    outcomes: [
      "18% lift in completed purchases",
      "Cart abandonment down 24%",
      "Average checkout time: 47s → 22s",
    ],
    overview:
      "Hand and Stone is a popular franchise chain of massage and facial spas with over 600 locations across the United States and Canada.",
    challenge:
      "Marketplace Co's checkout flow had been patched together over years of feature requests and compliance additions. What should have been a 90-second transaction had become a 6-screen gauntlet — with a 68% abandonment rate to prove it. Mobile was particularly brutal.",
    solution:
      "A checkout audit revealed the problem wasn't any one screen — it was the accumulation of micro-frictions: required account creation, redundant address entry, unclear error states, and a payment step that felt like it came out of nowhere.\n\nWe rebuilt around a progressive disclosure model: show only what's needed, when it's needed. Guest checkout was made the default. Address and payment could be completed in a single view on mobile. Every error message was rewritten to be actionable. The redesign launched as an A/B test and became the default experience within three weeks.",
    blocks: [
      { color: "#d4d1cc" },
      { color: "#dcd9d4" },
      { color: "#ccc9c4" },
    ],
    images: [
      "/handstone/hs_1.jpg",       // [0] before challenge
      null,                          // [1] after challenge
      null,                          // [2] two-up left
      null,                          // [3] two-up right
      null,                          // [4] below solution
      null,                          // [5] extra two-up left
      null,                          // [6] extra two-up right
      "",                             // [7] skip single
      "",                             // [8] skip single
      null,                          // [9] second extra two-up left
      null,                          // [10] second extra two-up right
    ],
    collaborators: [
      { role: "Creative Director", name: "Jessica Cunningham" },
      { role: "UX", name: "Tracy Michael, Priyanka Saha, Mikalai Andreyanau" },
      { role: "VD", name: "Keith Locke, Jen Doyle" },
    ],
  },
  {
    slug: "brooks-running",
    title: "Consumer app for a wellness brand",
    client: "Brooks Running",
    year: "2020",
    industry: "Health & Wellness / Consumer",
    services: ["Product Design", "UI/UX", "Motion", "Design Systems"],
    color: "#e0e4dc",
    image: "/work/brooks.jpg",
    siteUrl: "https://www.brooksrunning.com",
    heroTagline: "Building a daily habit that actually sticks.",
    outcomes: [
      "Day-7 retention: 61%",
      "Average session length: 8.4 minutes",
      "Subscription conversion: 22%",
    ],
    overview:
      "Brooks Running is a brand built around one simple idea: Run Happy. Their existing website had drifted from that spirit and was leaning too heavily into e-commerce and conversion at the expense of the brand's core identity. Our goal was to transform the Brooks digital experience from a transactional site into a fully runner-led platform.",
    challenge:
      "A major insight emerged early in discovery was that no two people run the exact same path. Brooks had an opportunity to become a true partner along that journey, but the existing site wasn't reflecting that. The experience was too focused on conversion and had lost the playfulness, warmth, and authenticity that made the brand beloved. The challenge was to bring the design back to a runner truth: more human, more fun, and more connected to the communities Brooks had always championed without abandoning the e-commerce infrastructure already in place.",
    solution:
      "After months of research and vision work, we reimagined the experience from the ground up. Working hand in hand with Brooks' internal design team across in-person workshops, we empowered the brand expression to live fully within the site through unique interactions, playful design details, and opportunities that celebrated real runners and their communities. We ultimately delivered a complete redesign through bespoke components, page templates, and layouts. The result was a runner centered site with genuine personality that was unmistakably Brooks.",
    blocks: [
      { color: "#d0d4cc" },
      { color: "#d8dcd4" },
      { color: "#c8ccc4" },
    ],
    images: [
      "/brooks/brooks_1.jpg",
      "/brooks/brooks_7.png",
      "/brooks/brooks_2.mov",
      "/brooks/brooks_8.mp4",
      "/brooks/brooks_4.jpg",
      "/brooks/brooks_5.jpg",
      "/brooks/brooks_3.mp4",
      "/brooks/brooks_6.mp4",
    ],
    collaborators: [
      { role: "Creative Director", name: "Rich Bloom, Nour Tabet" },
      { role: "UX Lead", name: "Alex Safchuk" },
      { role: "VD Lead", name: "Irina Moiseenko" },
      { role: "Senior Designer", name: "Jen Doyle, Rene Arvizu" },
      { role: "Designer", name: "Chris Sullivan" },
    ],
  },
  {
    slug: "mms",
    title: "Website redesign for a creative agency",
    client: "M&M'S",
    year: "2022",
    industry: "Creative Agency",
    services: ["Product Design", "UI/UX", "Motion", "Design Systems"],
    color: "#e4dce0",
    image: "/work/mms.jpg",
    siteUrl: "https://www.mms.com",
    heroTagline: "A portfolio that earns the work it shows.",
    overview:
      "M&M'S is one of the most recognizable confectionery brands in the world — beloved across generations for its color, character, and playfulness. With JKR's refresh of their brand identity, we were tasked with reimagining the M&M'S digital presence in a way that honored the brand's iconic heritage while bringing the new identity into the e-commerce site while giving it the energy and expression it needed to connect with a new generation of fans.",
    outcomes: [
      "Inbound inquiries up 55%",
      "Average session duration: +2.1 minutes",
      "Featured on Awwwards",
    ],
    challenge:
      "M&M'S, a leading brand in the Mars Wrigley confectionery portfolio, was tasked with doubling its revenue and adding 30M+ intimate relationships to their D2C consumer portfolio. We set out to deliver a modernized e-commerce experience to the brand's largest DTC channel, imbuing new brand purpose into a historically transactional touchpoint while developing the beacon for both the digital and physical brand ecosystem.",
    solution:
      "We took a human-centered, brand-focused approach to reimagining the digital experience. With gifting driving 90% of site sales, we focused on unlocking new audiences and building long-term customer value through research across three countries, in-store analysis, and targeted content strategy. The result was a streamlined e-commerce experience that positioned M&M'S as a champion of fun and connection while building brand strength and loyalty. The site also established the design foundation for in-store digital gifting and personalized product experiences.",
    blocks: [
      { color: "#d4ccd0" },
      { color: "#dcd4d8" },
      { color: "#c4bcc0" },
    ],
    images: [
      "/mms/mms_1.jpg",   // [0] single before challenge
      "/mms/mms_2.jpg",   // [1] single after challenge
      "/mms/mms_3.png",   // [2] two-up left
      "/mms/mms_4.jpg",   // [3] two-up right
      "/mms/mms_8.webm",  // [4] right below solution
      "/mms/mms_6.jpg",   // [5] two-up left
      "/mms/mms_7.jpg",   // [6] two-up right
      "/mms/mms_5.jpg",   // [7] single
    ],
    collaborators: [
      { role: "Creative Director", name: "Nour Tabet" },
      { role: "UX", name: "Jackie Littman" },
      { role: "VD", name: "Jen Doyle" },
    ],
  },
  {
    slug: "schneider-electric",
    title: "Wayfinding system for a cultural institution",
    client: "Schneider Electric",
    year: "2024",
    industry: "Energy / Technology",
    services: ["Branding", "Logo", "UI/UX", "Motion"],
    color: "#dde0e8",
    image: "/work/se.jpg",
    heroTagline: "Helping visitors find the work — then lose themselves in it.",
    outcomes: [
      "Wayfinding complaints reduced by 78%",
      "System implemented across 3 buildings",
      "Winner, SEGD Award for Wayfinding Excellence",
    ],
    overview:
      "Schneider Electric provides energy technology, combining energy management, industrial automation, and digital software to make power safe, efficient, and sustainable.",
    challenge:
      "City Arts had expanded across three connected buildings over a decade, and the signage had expanded with it — inconsistently, incrementally, and confusingly. Visitor surveys flagged navigation as the number-one frustration. Staff spent significant time giving directions. The signage had become noise.",
    solution:
      "We started by walking the space as visitors — without staff guidance, without a map. Every point of confusion was documented, every missed turn noted. From that audit came a hierarchy: primary navigation (buildings, floors), secondary navigation (galleries, amenities), and tertiary identifiers (room names, accessibility features).\n\nThe visual system was designed to complement City Arts' existing identity — using their type family and color palette — while introducing clear size and placement rules that made decisions automatic. Materials were specified for longevity and ease of replacement.",
    blocks: [
      { color: "#cdd0d8" },
      { color: "#d5d8e0" },
      { color: "#c5c8d0" },
    ],
    images: [
      "/se/se_1.jpg",  // [0] single before challenge
      "/se/se_3.webm", // [1] single after challenge
      null,            // [2] two-up left (color block)
      null,            // [3] two-up right (color block)
      "/se/se_4.webm", // [4] single below solution
      null,            // [5] double left (color block)
      null,            // [6] double right (color block)
    ],
    collaborators: [
      { role: "Creative Director", name: "Jude Gay" },
      { role: "UX", name: "Yolanda Lam" },
      { role: "VD", name: "Jen Doyle" },
    ],
  },
  {
    slug: "contrarycon",
    title: "Brand and event design for a DC creative conference",
    client: "ContraryCon",
    year: "2017",
    industry: "Creative / Events",
    services: ["Branding", "Merch", "Print", "Web Design", "Motion"],
    color: "#e8e0de",
    image: "/work/contrary-con.jpg",
    heroTagline: "Challenging participants to see the world through a different lens.",
    outcomes: [
      "Full event brand system designed and produced",
      "Print collateral delivered for day-of experience",
      "Annual conference identity established",
    ],
    overview:
      "An annual (anti)conference with a singular goal: to introduce the DC creative community to new ideas, perspectives, and ways of thinking. This one-day event brings together speakers from a range of industries across the city, encouraging participants to see their work and the world around them through a different lens.",
    challenge:
      "The event needed a digital experience that felt as unconventional and exploratory as the conference itself. The challenge was to create a visual language that could capture the energy and diversity of DC's creative community while making discovery and experimentation central to the experience.",
    solution:
      "We created an interactive microsite built around playful vignettes, experimental typography, and unexpected moments of interaction. These explorations became the foundation of the event's visual identity, creating an unconventional and expressive style that felt distinctly its own. Paired with an engaging lineup of speakers, the experience created a platform for new ideas while celebrating the city's diverse creative talent and perspective.",
    blocks: [
      { color: "#d8d0ce" },
      { color: "#e0d8d6" },
      { color: "#c8c0be" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Campbell Kwaka, Fernando Castro" },
      { role: "Design", name: "Dan Rader, Jen Doyle" },
    ],
    images: [
      "/contrary-con/cc_1.jpg",   // [0] single before challenge
      "/contrary-con/cc_2.webp",  // [1] single after challenge
      "/contrary-con/cc_3.webp",  // [2] two-up left
      "/contrary-con/cc_4.webp",  // [3] two-up right
      "/contrary-con/cc_5.webp",  // [4] single below solution
      "/contrary-con/cc_6.webp",  // [5] two-up left
      "/contrary-con/cc_7.gif",   // [6] two-up right
      "/contrary-con/cc_8.jpg",   // [7] single
      "",                          // [8] skip single
      "/contrary-con/cc_15.gif",  // [9] two-up left — right below cc_8
      "/contrary-con/cc_16.gif",  // [10] two-up right
      "/contrary-con/cc_9.jpg",   // [11] single
      "/contrary-con/cc_10.jpg",  // [12] two-up left
      "/contrary-con/cc_11.jpg",  // [13] two-up right
      "/contrary-con/cc_14.jpg",  // [14] single
      "/contrary-con/cc_17.jpg",  // [15] two-up left — right under cc_14
      "/contrary-con/cc_18.jpg",  // [16] two-up right — right under cc_14
      "/contrary-con/cc_19.jpg",  // [17] single
      "/contrary-con/cc_12.jpg",  // [18] two-up left
      "/contrary-con/cc_13.jpg",  // [19] two-up right
    ],
  },
  {
    slug: "1kx",
    title: "Website design for a blockchain VC firm",
    client: "1kx",
    year: "2024",
    industry: "Venture Capital / Blockchain",
    services: ["Web Design", "Brand Implementation"],
    color: "#dce4e4",
    image: "/work/1kx.gif",
    heroTagline: "Building a web presence from the brand up.",
    outcomes: [
      "Website launched on time and on brand",
      "Brand guidelines faithfully translated to web",
      "Fully responsive across all devices",
    ],
    overview:
      "1kx is a global, research-driven venture capital firm specializing in early-stage investments across blockchain, Web3, and tokenized networks.",
    challenge:
      "1kx needed a website that expressed their new brand identity with confidence — one that felt distinctly professional without losing the approachability and playfulness that set them apart from traditional venture capital.",
    solution:
      "We built a site that gave 1kx's new brand identity a confident digital home. The experience was designed to serve two distinct audiences: investors seeking credibility, and founders and builders looking for a firm they could genuinely connect with. By surfacing 1kx's editorial blog, the site positions the firm as a thought leader with both the track record and the perspective to back it up.",
    blocks: [
      { color: "#ccd4d4" },
      { color: "#d4dcdc" },
      { color: "#bccacc" },
    ],
    images: [
      "/1kx/1kx_1.jpg", // [0] single before challenge
      "/1kx/1kx_2.jpg", // [1] single after challenge
      "/1kx/1kx_3.jpg", // [2] two-up left
      "/1kx/1kx_4.jpg", // [3] two-up right
      "",               // [4] skip below solution
      "/1kx/1kx_5.jpg", // [5] two-up left (side by side)
      "/1kx/1kx_6.jpg", // [6] two-up right (side by side)
      "/1kx/1kx_7.jpg", // [7] single
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return projects[(idx + 1) % projects.length];
}

export function getPreviousProject(slug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return projects[(idx - 1 + projects.length) % projects.length];
}
