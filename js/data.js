const SITE_NAME = 'AI Mastery Program';
const COPYRIGHT_HOLDER = 'adamatourelab';
const LOGO_SRC = 'assets/logo.svg';
const programTagline = 'Learn how to build with AI before AI learns to replace you.';

const instructorProfile = {
  name: 'Adama Touré',
  role: 'AI Builder instructor',
  lab: 'Adama Touré Lab',
  photo: 'assets/adama.jpg',
  tagline: 'Click to learn more',
  bio: [
    'Adama Touré is a renewable energy engineer, entrepreneur, educator, and systems thinker dedicated to helping people use technology to improve their lives and create a better future.',
    'Raised in Conakry, Guinea, where unreliable electricity and water scarcity were part of everyday life, Adama developed a deep commitment to solving the infrastructure challenges that limit human potential. His work is driven by a mission to expand access to clean energy, knowledge, and technology while helping communities become more resilient to climate and economic challenges.',
    'With a multidisciplinary background spanning architecture, physics, mathematics, renewable energy engineering, and artificial intelligence, Adama brings a systems-level perspective to problem solving. He is the founder of SEPT (Solar Energy Protection Technology), where he develops intelligent hardware and machine learning solutions that make solar energy systems safer, smarter, and more reliable.',
    'Beyond his work in renewable energy, Adama is passionate about teaching others how to understand and build with AI. He believes that AI will become one of the most important technologies of our time, and that the people who learn to work alongside it will have the greatest ability to create opportunities, solve problems, and shape the future.',
    'His teaching philosophy is simple: technology should empower people, not replace them. Through this program, students will learn not only how to use AI tools, but how to think critically, build practical solutions, and become creators in the AI era rather than passive consumers of technology.',
    'At his core, Adama is building more than technology—he is helping people develop the skills, mindset, and confidence needed to thrive in a rapidly changing world.',
  ],
};

const NOTION_FORM_URL =
  'https://touradam.notion.site/3ae2b0c9b1298068a814eb7107ec24c9?pvs=105';

const cohortSchedule = {
  cohortName: 'November Friends Cohort',
  cohortEyebrow: 'AI Education Program · November Friends Cohort',
  firstSessionDate: '2026-11-14',
  firstSessionDateTime: '2026-11-14T08:00:00-08:00',
  firstSessionDay: 'Saturday, November 14, 2026',
  firstSessionTime: '8:00–9:30 AM Pacific Time',
  firstSessionLabel: 'Session 1 · Become an AI Builder',
  dateRangeLabel: 'November 14–22, 2026',
  timezone: 'America/Los_Angeles',
  timezoneLabel: 'Pacific Time',
  durationLabel: '2 Weeks',
  durationWeeks: 2,
  seats: 10,
  offerLine: 'Free for friends · 10 seats',
  paidProgramNote: 'The full paid program begins at the beginning of January 2027.',
  saturdayTime: '8:00–9:30 AM',
  sundayTime: '8:00–9:30 AM',
  sessionStartHour: 8,
  sessionEndHour: 9.5,
  sessionDurationHours: 1.5,
  weeklyScheduleSummary: 'Saturday & Sunday, 8:00–9:30 AM Pacific Time',
};

const cohortEnrollment = {
  freeForFriends: true,
  seats: 10,
  cta: 'Reserve a Seat',
  joinEyebrow: 'Friends cohort',
  joinTitle: 'Claim one of 10 free seats.',
  joinBody:
    'Enter the code you received. This two-week cohort is free for friends, and seats are limited to 10.',
  continueLabel: 'Claim My Seat',
  enrollTitle: 'Reserve your free seat',
  enrollSummary:
    'Your code is in. Complete the form to claim your seat. We will send the class link after your seat is confirmed.',
  enrollButton: 'Complete Signup',
};

const cohortPricing = {
  pricePerSession: 0,
  sessionsPerWeek: 2,
  totalSessions: 4,
  referralFreeSessions: 4,
  currency: 'USD',
  withReferralTotal: 0,
  withoutReferralTotal: 0,
  headline: 'Free',
  referralSubline: '10 seats',
};

const paymentPlans = [
  {
    id: 'per-session',
    label: 'Per session',
    amount: '$100/session',
    note: 'Pay before each session',
  },
  {
    id: 'per-week',
    label: 'Per week',
    amount: '$200/week',
    note: 'Covers 2 live sessions',
  },
  {
    id: 'half',
    label: 'Half & half',
    amount: '$500 + $500',
    note: 'Two equal payments',
  },
  {
    id: 'full',
    label: 'Pay in full',
    amount: 'Varies',
    note: 'One upfront payment for the full program',
  },
];

const betaLearnTopics = [
  {
    title: 'The builder mindset',
    description:
      'Tell a chatbot user from an AI builder, and stay in control of what the tool changes.',
  },
  {
    title: 'Cursor and prompts',
    description:
      'Describe the work in plain language, review what Cursor writes, and approve each change.',
  },
  {
    title: 'Git and GitHub',
    description:
      'Save the project, commit, and push so the work has a home you can update.',
  },
  {
    title: 'A live website',
    description:
      'Publish on GitHub Pages, check it on a phone, and connect an optional custom domain.',
  },
];

const betaGateDigits1 = [1, 2, 3, 5, 8];
const betaGateDigits2 = [1, 2, 3, 5, 8];
const betaGatePairs = [13, 21, 34, 55, 89];

const floatingEquations = [
  {
    html: '<span class="math-sym">V</span><span class="math-op">=</span><span class="math-sym">I</span><span class="math-op">·</span><span class="math-sym">R</span>',
    x: 6, y: 18, size: 1.35, rot: -8, duration: 22,
  },
  {
    html: '<span class="math-sym">F</span><span class="math-op">=</span><span class="math-sym">m</span><span class="math-sym">a</span>',
    x: 82, y: 12, size: 1.5, rot: 5, duration: 26,
  },
  {
    html: '<span class="math-sym">E</span><span class="math-op">=</span><span class="math-sym">mc</span><span class="math-op">²</span>',
    x: 72, y: 78, size: 1.2, rot: -4, duration: 24,
  },
  {
    html: '<span class="math-sym">P</span><span class="math-op">=</span><span class="math-sym">IV</span>',
    x: 10, y: 82, size: 1.1, rot: 7, duration: 20,
  },
  {
    html: '<span class="math-sym">F</span><span class="math-op">=</span><span class="math-op">−</span><span class="math-sym">kx</span>',
    x: 48, y: 8, size: 1.15, rot: -2, duration: 28,
  },
  {
    html: '<span class="math-sym">v</span><span class="math-op">=</span><span class="math-sym">u</span><span class="math-op">+</span><span class="math-sym">at</span>',
    x: 90, y: 48, size: 1.05, rot: 6, duration: 23,
  },
  {
    html: '<span class="math-sym">W</span><span class="math-op">=</span><span class="math-sym">Fd</span>',
    x: 4, y: 52, size: 1.25, rot: -6, duration: 25,
  },
  {
    html: '<span class="math-sym">p</span><span class="math-op">=</span><span class="math-sym">mv</span>',
    x: 58, y: 88, size: 1.1, rot: 3, duration: 21,
  },
];

const floatingEquationsHero = [
  { html: '<span class="math-sym">V</span><span class="math-op">=</span><span class="math-sym">IR</span>', x: 88, y: 22, size: 2.2, rot: 12, duration: 30 },
  { html: '<span class="math-sym">F</span><span class="math-op">=</span><span class="math-sym">ma</span>', x: 4, y: 38, size: 2.5, rot: -10, duration: 32 },
  { html: '<span class="math-sym">E</span><span class="math-op">=</span><span class="math-sym">mc</span><span class="math-op">²</span>', x: 92, y: 62, size: 1.8, rot: 8, duration: 28 },
  { html: '<span class="math-sym">P</span><span class="math-op">=</span><span class="math-sym">VI</span>', x: 2, y: 72, size: 1.6, rot: -5, duration: 26 },
];

/* Hotspot bounds match course-roadmap.svg viewBox 1600×900. The live page uses the flip cards. */
const roadmapHotspots = [
  { phase: 1, x: 5, y: 37.778, w: 15.125, h: 32.444 },
  { phase: 2, x: 48.75, y: 37.778, w: 15.125, h: 32.444 },
];

const roadmapPhases = [
  {
    id: 1,
    tag: 'Week 1',
    title: 'Learn to Build',
    lead: 'Mindset, Cursor, and first apps',
    when: 'November 14–15 · Saturday and Sunday',
    sessions: ['S1: Become an AI builder', 'S2: Three apps on GitHub'],
    outcome: 'Outcome: code on GitHub',
    icon: '01',
    summary: 'End the first weekend with Cursor installed, three small apps built, and the code on GitHub.',
    sessionDetails: [
      { label: 'S1', day: 'Saturday', type: 'Nov 14', title: 'Become an AI Builder', description: 'Meet the cohort, install Cursor, and learn the difference between asking a chatbot and building with AI.', image: 'assets/cohort/session-1-mindset.jpg', imageAlt: 'Illustration of Atlai climbing golden steps from a chat bubble toward a builder desk' },
      { label: 'S2', day: 'Sunday', type: 'Nov 15', title: 'Prompting and First Builds', description: 'Ask AI to draft a stronger prompt, build a calculator, a timer, and a counter, then publish the code on GitHub.', image: 'assets/cohort/session-2-publish.jpg', imageAlt: 'Illustration of Atlai publishing a glowing webpage from her laptop toward a globe' },
    ],
  },
  {
    id: 2,
    tag: 'Week 2',
    title: 'Put It Online',
    lead: 'Live site, phone check, optional domain',
    when: 'November 21–22 · Saturday and Sunday',
    sessions: ['S3: Website goes live', 'S4: Optional domain'],
    outcome: 'Outcome: website online',
    icon: '02',
    summary: 'End the second weekend with a personal website live on GitHub Pages, checked on a phone, and an optional domain if you want one.',
    sessionDetails: [
      { label: 'S3', day: 'Saturday', type: 'Nov 21', title: 'Your Website Goes Live', description: 'Build a personal website, portfolio, or digital business card, publish it on GitHub Pages, and run one update yourself.', image: 'assets/cohort/session-3-website.jpg', imageAlt: 'Illustration of Atlai arranging glowing golden website cards into her personal site' },
      { label: 'S4', day: 'Sunday', type: 'Nov 22', title: 'Your Own Domain', description: 'Polish the site for phones and follow one update from Cursor to the live address. A custom domain is optional.', image: 'assets/cohort/session-4-domain.jpg', imageAlt: 'Illustration of Atlai connecting a golden globe to the website she maintains' },
    ],
  },
];
