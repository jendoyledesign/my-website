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
  heroTagline: string;
  outcomes: [string, string, string];
  challenge: string;
  solution: string;
  blocks: { color: string }[]; // image/media placeholder blocks
  images?: string[]; // optional case study image gallery
  collaborators?: { role: string; name: string }[];
};

export const projects: Project[] = [
  {
    slug: "compass-pathways",
    title: "Redesigning the onboarding experience",
    client: "Compass Pathways",
    year: "2026",
    industry: "SaaS / Enterprise",
    services: ["UX Research", "Product Design", "Prototyping"],
    color: "#e8e4de",
    image: "/work/compass.jpg",
    heroImage: "/compass/compass-hero.jpg",
    heroTagline: "From sign-up to aha moment — in half the time.",
    outcomes: [
      "40% reduction in time-to-value",
      "62% increase in feature adoption",
      "NPS improved from 28 to 54",
    ],
    challenge:
      "Compass Pathways' onboarding flow had grown organically over three years, accumulating friction at every step. New users were dropping off before reaching the product's core value — a 6-step setup process that assumed knowledge users didn't yet have. The team knew something was wrong; they didn't know where to begin.",
    solution:
      "We started with two weeks of research — moderated usability sessions, drop-off analysis, and interviews with churned users. The pattern was clear: users weren't failing because the product was bad. They were failing because they couldn't see the value fast enough.\n\nWorking closely with engineering and customer success, we rebuilt the flow around a single question: what's the fastest path to the first meaningful moment? The result was a two-step, context-aware setup that surfaced the right features at the right time — and made it easy to skip what wasn't relevant.",
    blocks: [
      { color: "#d8d4ce" },
      { color: "#e0dcd6" },
      { color: "#ccc8c2" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Marcus Webb" },
      { role: "UX Lead", name: "Jen Doyle" },
      { role: "UX Researcher", name: "Priya Nair" },
      { role: "Product Designer", name: "Sam Torres" },
    ],
  },
  {
    slug: "nespresso",
    title: "A new design system for a global brand",
    client: "Nespresso",
    year: "2026",
    industry: "Creative / Technology",
    services: ["Design Systems", "Component Library", "Documentation"],
    color: "#dde4e0",
    image: "/work/nespresso.jpg",
    heroTagline: "One system. Twelve teams. Zero guesswork.",
    outcomes: [
      "200+ components shipped",
      "12 product teams aligned",
      "Design-to-dev handoff time cut by 35%",
    ],
    challenge:
      "Nespresso had grown quickly through acquisition, inheriting four different design languages across their product suite. Teams were rebuilding the same components independently, inconsistencies were eroding brand trust, and new designers spent weeks just orienting themselves to how things worked.",
    solution:
      "The engagement started with a thorough audit: cataloguing every component in use, mapping where systems overlapped, and identifying what needed standardization versus what should stay flexible.\n\nFrom that foundation, we built a living design system — a single source of truth in Figma, paired with a React component library. Every decision was documented with rationale, usage guidelines, and accessibility specs. We ran working sessions with each product team to ensure adoption wasn't mandated but earned.",
    blocks: [
      { color: "#cdd4d0" },
      { color: "#d5dcd8" },
      { color: "#c5ccc8" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Laura Chen" },
      { role: "Design Systems Lead", name: "Jen Doyle" },
      { role: "Frontend Engineer", name: "Oliver Kim" },
      { role: "UX Designer", name: "Mia Fontaine" },
    ],
  },
  {
    slug: "outfront",
    title: "Mobile app for climate-conscious consumers",
    client: "Outfront",
    year: "2026",
    industry: "Climate / Consumer",
    services: ["Product Strategy", "Mobile Design", "UX Research"],
    color: "#e4dde8",
    heroTagline: "Making sustainability feel less like homework.",
    outcomes: [
      "0→1 product launch in 14 weeks",
      "4.7★ App Store rating at launch",
      "28% day-30 retention",
    ],
    challenge:
      "GreenPath wanted to help everyday consumers understand and reduce their carbon footprint — but the category was crowded with guilt-driven, data-heavy apps that users opened once and forgot. The challenge wasn't just design; it was defining what a sustainable habit actually looks like in someone's daily life.",
    solution:
      "We spent the first month in discovery — diary studies, behavioral interviews, and a competitive audit that revealed most apps were talking at users, not with them. The insight that shaped everything: people didn't want to feel bad about their choices. They wanted to feel good about small improvements.\n\nThe resulting app stripped out carbon math and replaced it with streaks, gentle nudges, and visible progress. We designed for the realistic user — busy, well-intentioned, easily overwhelmed — and tested every screen against that standard.",
    blocks: [
      { color: "#d4cdd8" },
      { color: "#dcd5e0" },
      { color: "#ccc5d0" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Rachel Moore" },
      { role: "UX Lead", name: "Jen Doyle" },
      { role: "Mobile Designer", name: "Diego Reyes" },
      { role: "UX Researcher", name: "Anaya Singh" },
    ],
  },
  {
    slug: "hand-and-stone",
    title: "Checkout redesign for an e-commerce platform",
    client: "Hand & Stone",
    year: "2025",
    industry: "E-commerce / Retail",
    services: ["UX Design", "Conversion Optimization", "A/B Testing"],
    color: "#e4e1dc",
    image: "/work/hand-and-stone.jpg",
    heroTagline: "Six steps became two. Conversion followed.",
    outcomes: [
      "18% lift in completed purchases",
      "Cart abandonment down 24%",
      "Average checkout time: 47s → 22s",
    ],
    challenge:
      "Marketplace Co's checkout flow had been patched together over years of feature requests and compliance additions. What should have been a 90-second transaction had become a 6-screen gauntlet — with a 68% abandonment rate to prove it. Mobile was particularly brutal.",
    solution:
      "A checkout audit revealed the problem wasn't any one screen — it was the accumulation of micro-frictions: required account creation, redundant address entry, unclear error states, and a payment step that felt like it came out of nowhere.\n\nWe rebuilt around a progressive disclosure model: show only what's needed, when it's needed. Guest checkout was made the default. Address and payment could be completed in a single view on mobile. Every error message was rewritten to be actionable. The redesign launched as an A/B test and became the default experience within three weeks.",
    blocks: [
      { color: "#d4d1cc" },
      { color: "#dcd9d4" },
      { color: "#ccc9c4" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Tom Bradley" },
      { role: "UX Lead", name: "Jen Doyle" },
      { role: "Visual Designer", name: "Claire Nakamura" },
      { role: "Conversion Strategist", name: "Alex Rubin" },
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
    challenge:
      "1kx is a venture capital firm focused on blockchain technology. I was tasked to build out a new website using their brand guidelines.",
    solution:
      "Working within an established visual identity, the focus was on translating 1kx's brand guidelines into a web experience that felt considered and precise.\n\nEvery decision — typography scale, spacing, color application — was made in service of the existing brand rather than layering on something new. The result is a site that feels like a natural extension of who 1kx is.",
    blocks: [
      { color: "#ccd4d4" },
      { color: "#d4dcdc" },
      { color: "#bccacc" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Ben Walsh" },
      { role: "Senior Visual Designer", name: "Jen Doyle" },
      { role: "Frontend Developer", name: "Kai Jensen" },
    ],
    images: [
      "/1kx/1kx-logo.webp",
      "/1kx/1kx-colors.webp",
      "/1kx/1kx-made-in-house.webp",
      "/1kx/1kx-profile.webp",
      "/1kx/1kx-team.webp",
      "/1kx/1kx-writing.webp",
    ],
  },
  {
    slug: "contrarycon",
    title: "Brand and event design for a DC creative conference",
    client: "ContraryCon",
    year: "2017",
    industry: "Creative / Events",
    services: ["Event Branding", "Print Design", "Art Direction"],
    color: "#e8e0de",
    image: "/work/contrary-con.jpg",
    heroImage: "/contrary-con/cc_6.webp",
    heroTagline: "Challenging participants to see the world through a different lens.",
    outcomes: [
      "Full event brand system designed and produced",
      "Print collateral delivered for day-of experience",
      "Annual conference identity established",
    ],
    challenge:
      "An annual (anti)conference with one goal: expose the DC creative community to new ideas and perspectives. This one-day series of speakers and workshops, explores a world beyond ones and zeroes, challenging participants to see the world through a different lens.",
    solution:
      "The design needed to feel like the conference itself — unexpected, tactile, and a little analog in a sea of digital-first events.\n\nPrint collateral, signage, and event materials were designed to create a cohesive experience from invitation through the day itself, giving ContraryCon a visual identity that matched the spirit of the programming.",
    blocks: [
      { color: "#d8d0ce" },
      { color: "#e0d8d6" },
      { color: "#c8c0be" },
    ],
    collaborators: [
      { role: "Art Director", name: "Jen Doyle" },
      { role: "Print Designer", name: "Sofia Mendez" },
      { role: "Copywriter", name: "James Park" },
    ],
    images: [
      "/contrary-con/cc_14.jpg",
      "/contrary-con/cc_2.webp",
      "/contrary-con/cc_3.webp",
      "/contrary-con/cc_4.webp",
      "/contrary-con/cc_5.webp",
      "/contrary-con/cc_6.webp",
      "/contrary-con/cc_7.gif",
      "/contrary-con/cc_8.jpg",
      "/contrary-con/cc_9.jpg",
      "/contrary-con/cc_10.jpg",
      "/contrary-con/cc_11.jpg",
      "/contrary-con/cc_12.jpg",
      "/contrary-con/cc_13.jpg",
    ],
  },
  {
    slug: "brooks-running",
    title: "Consumer app for a wellness brand",
    client: "Brooks Running",
    year: "2020",
    industry: "Health & Wellness / Consumer",
    services: ["Mobile Design", "Product Design", "Prototyping"],
    color: "#e0e4dc",
    heroTagline: "Building a daily habit that actually sticks.",
    outcomes: [
      "Day-7 retention: 61%",
      "Average session length: 8.4 minutes",
      "Subscription conversion: 22%",
    ],
    challenge:
      "Brooks Running has been transformed into your personal running partner, expanding the e-commerce experience to be more than just a shopping tool. We injected personality into the new digital experience, distinguishing it from the generic \"big sweat\" competitors.",
    solution:
      "Habits research guided the entire design approach. We restructured the app around a daily check-in flow that created context, reduced decision fatigue, and rewarded consistency. A personalized recommendation engine surfaced content based on mood and history.\n\nThe visual language shifted too — warmer, more human, less clinical. Illustrations and motion were used to make transitions feel like a breath rather than a page load.",
    blocks: [
      { color: "#d0d4cc" },
      { color: "#d8dcd4" },
      { color: "#c8ccc4" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Nora Sullivan" },
      { role: "Senior Product Designer", name: "Jen Doyle" },
      { role: "Motion Designer", name: "Tyler Rhodes" },
      { role: "UX Researcher", name: "Leila Hassan" },
    ],
  },
  {
    slug: "mms",
    title: "Website redesign for a creative agency",
    client: "M&M's",
    year: "2022",
    industry: "Creative Agency",
    services: ["Web Design", "Art Direction", "Branding"],
    color: "#e4dce0",
    heroTagline: "A portfolio that earns the work it shows.",
    outcomes: [
      "Inbound inquiries up 55%",
      "Average session duration: +2.1 minutes",
      "Featured on Awwwards",
    ],
    challenge:
      "Bureau Studio's existing site was four years old and had been outpaced by their own work. The portfolio showed ambitious, craft-forward projects on a template that felt generic. New business was coming in through referrals — not the site. They wanted the digital presence to start pulling its weight.",
    solution:
      "We led with editorial art direction — treating each case study as a magazine spread rather than a slide deck. The grid was designed to flex between project types, giving photography-led work room to breathe while letting type-heavy projects command attention.\n\nNavigation was stripped down to the essentials. Loading was instant. Every interaction was designed to get out of the way of the work.",
    blocks: [
      { color: "#d4ccd0" },
      { color: "#dcd4d8" },
      { color: "#c4bcc0" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Dana Fox" },
      { role: "Art Director", name: "Jen Doyle" },
      { role: "Visual Designer", name: "Zoe Archer" },
      { role: "Frontend Developer", name: "Chris Watts" },
    ],
  },
  {
    slug: "orkin",
    title: "Wayfinding system for a cultural institution",
    client: "Orkin",
    year: "2019",
    industry: "Cultural / Public",
    services: ["Wayfinding", "Graphic Design", "Environmental Design"],
    color: "#dde0e8",
    heroTagline: "Helping visitors find the work — then lose themselves in it.",
    outcomes: [
      "Wayfinding complaints reduced by 78%",
      "System implemented across 3 buildings",
      "Winner, SEGD Award for Wayfinding Excellence",
    ],
    challenge:
      "City Arts had expanded across three connected buildings over a decade, and the signage had expanded with it — inconsistently, incrementally, and confusingly. Visitor surveys flagged navigation as the number-one frustration. Staff spent significant time giving directions. The signage had become noise.",
    solution:
      "We started by walking the space as visitors — without staff guidance, without a map. Every point of confusion was documented, every missed turn noted. From that audit came a hierarchy: primary navigation (buildings, floors), secondary navigation (galleries, amenities), and tertiary identifiers (room names, accessibility features).\n\nThe visual system was designed to complement City Arts' existing identity — using their type family and color palette — while introducing clear size and placement rules that made decisions automatic. Materials were specified for longevity and ease of replacement.",
    blocks: [
      { color: "#cdd0d8" },
      { color: "#d5d8e0" },
      { color: "#c5c8d0" },
    ],
    collaborators: [
      { role: "Creative Director", name: "Patrick Greene" },
      { role: "Environmental Designer", name: "Jen Doyle" },
      { role: "Graphic Designer", name: "Amy Cho" },
      { role: "Fabrication Lead", name: "Mark Ellis" },
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
