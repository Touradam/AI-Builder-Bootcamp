const SITE_NAME = 'AI Mastery Program';
const COPYRIGHT_HOLDER = 'Tourdam AI Lab';
const LOGO_SRC = 'assets/logo.svg';
const programTagline = 'Learn how to build with AI before AI learns to replace you.';

const instructorProfile = {
  name: 'Adama Touré',
  role: 'AI Builder instructor',
  lab: 'Tourdam AI Lab',
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
  'https://touradam.notion.site/3682b0c9b12980368964cb112ed1af0c?pvs=105';

const cohortSchedule = {
  firstSessionDate: '2026-08-01',
  firstSessionDateTime: '2026-08-01T08:00:00-07:00',
  firstSessionDay: 'Saturday, August 1, 2026',
  firstSessionTime: '8:00–10:00 AM PDT',
  firstSessionLabel: 'Session 1 · AI + Cursor intro',
  timezone: 'America/Los_Angeles',
  timezoneLabel: 'Pacific Time (PDT)',
  durationLabel: '1.5 Months',
  durationWeeks: 6,
  saturdayTime: '8:00–10:00 AM PDT',
  sundayTime: '8:00–10:00 AM PDT',
  sessionStartHour: 8,
  sessionEndHour: 10,
  sessionDurationHours: 2,
  weeklyScheduleSummary: 'Saturday & Sunday 8–10 AM practice & mastery PDT',
};

const betaLearnTopics = [
  {
    title: 'Build with Cursor',
    description:
      'Use LLMs through Cursor to build real projects — even if you have never written code before.',
  },
  {
    title: 'HTML, CSS & JavaScript',
    description:
      'Structure pages, style them, and add interactivity — websites, games, and useful tools.',
  },
  {
    title: 'Git & GitHub',
    description:
      'Save your work, track changes, and collaborate with version control from day one.',
  },
  {
    title: 'Chrome Extensions',
    description:
      'Build browser tools that run where you work — including an AI-powered chatbox.',
  },
  {
    title: 'AI APIs (safely)',
    description:
      'Connect OpenAI to your projects the right way — keys, requests, and safe patterns.',
  },
  {
    title: 'Deploy & Host',
    description:
      'Ship projects live on GitHub Pages or Hostinger so anyone can use what you built.',
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

/* Hotspot bounds match course-roadmap.svg viewBox 1600×900 */
const roadmapHotspots = [
  { phase: 1, x: 2.5, y: 35.333, w: 15.125, h: 32.444 },
  { phase: 2, x: 18.625, y: 51.778, w: 15.125, h: 32.444 },
  { phase: 3, x: 34.75, y: 35.333, w: 15.125, h: 32.444 },
  { phase: 4, x: 50.875, y: 51.778, w: 15.125, h: 32.444 },
  { phase: 5, x: 67, y: 35.333, w: 15.125, h: 32.444 },
  { phase: 6, x: 83.125, y: 51.778, w: 15.125, h: 32.444 },
];

const roadmapPhases = [
  {
    id: 1,
    tag: 'Week 1',
    title: 'AI + First Site',
    lead: 'Cursor setup, HTML & CSS',
    sessions: ['S1: AI + Cursor', 'S2: Build site'],
    outcome: 'Outcome: site structure built',
    icon: '01',
    summary: 'End week 1 with your first HTML pages and a personal site started in Cursor.',
    sessionDetails: [
      { label: 'S1', day: 'Saturday', type: 'Intro', title: 'AI + Cursor', description: 'What AI is, Cursor setup, and your first HTML page in the browser.' },
      { label: 'S2', day: 'Sunday', type: 'Practice', title: 'Build site', description: 'Build a personal site with HTML and CSS — guided builds in Cursor.' },
    ],
  },
  {
    id: 2,
    tag: 'Week 2',
    title: 'Deploy Site',
    lead: 'GitHub Pages + web foundations',
    sessions: ['S3: GitHub Pages', 'S4: How the web works'],
    outcome: 'Outcome: live website',
    icon: '02',
    summary: 'End week 2 with a live personal website on GitHub Pages.',
    sessionDetails: [
      { label: 'S3', day: 'Saturday', type: 'Mastery', title: 'GitHub Pages', description: 'Create a repo, push your code, and deploy a live URL you can share.' },
      { label: 'S4', day: 'Sunday', type: 'Intro', title: 'How the web works', description: 'HTML, CSS, and JavaScript — how pages structure, style, and respond to clicks.' },
    ],
  },
  {
    id: 3,
    tag: 'Week 3',
    title: 'Build a Game',
    lead: 'JavaScript + Git',
    sessions: ['S5: Build a game', 'S6: Git mastery'],
    outcome: 'Outcome: playable game',
    icon: '03',
    summary: 'End week 3 with a playable browser game and confident Git basics.',
    sessionDetails: [
      { label: 'S5', day: 'Saturday', type: 'Practice', title: 'Build a game', description: 'Build a simple browser game (tic-tac-toe, guess-the-number, or clicker).' },
      { label: 'S6', day: 'Sunday', type: 'Mastery', title: 'Git mastery', description: 'Commits, history, branches, and shipping your game update to GitHub.' },
    ],
  },
  {
    id: 4,
    tag: 'Week 4',
    title: 'Extension Shell',
    lead: 'Chrome + chat UI',
    sessions: ['S7: Extension basics', 'S8: Build chat UI'],
    outcome: 'Outcome: extension UI ready',
    icon: '04',
    summary: 'End week 4 with a Chrome extension shell and chat interface.',
    sessionDetails: [
      { label: 'S7', day: 'Saturday', type: 'Intro', title: 'Extension basics', description: 'Manifest, popup UI, permissions — and why API keys never go in frontend code.' },
      { label: 'S8', day: 'Sunday', type: 'Practice', title: 'Build chat UI', description: 'Build the extension shell and chat interface in Cursor.' },
    ],
  },
  {
    id: 5,
    tag: 'Week 5',
    title: 'Connect AI',
    lead: 'Safe API + capstone plan',
    sessions: ['S9: Connect API safely', 'S10: Plan + hosting'],
    outcome: 'Outcome: working AI chat',
    icon: '05',
    summary: 'End week 5 with a working AI extension and capstone plan.',
    sessionDetails: [
      { label: 'S9', day: 'Saturday', type: 'Mastery', title: 'Connect API safely', description: 'Wire OpenAI chat end-to-end with a safe proxy pattern and test on real sites.' },
      { label: 'S10', day: 'Sunday', type: 'Intro', title: 'Plan + hosting', description: 'Pick your capstone tool, define v1 scope, and choose GitHub Pages or Hostinger.' },
    ],
  },
  {
    id: 6,
    tag: 'Week 6',
    title: 'Demo Day',
    lead: 'Capstone sprint + deploy',
    sessions: ['S11: Build sprint', 'S12: Demo Day'],
    outcome: 'Outcome: useful tool live',
    icon: '06',
    summary: 'End week 6 with a useful capstone tool deployed and ready to demo.',
    sessionDetails: [
      { label: 'S11', day: 'Saturday', type: 'Practice', title: 'Build sprint', description: 'Build your capstone in Cursor — core features, UX polish, and edge cases.' },
      { label: 'S12', day: 'Sunday', type: 'Mastery', title: 'Demo Day', description: 'Final deploy, demo rehearsal, peer feedback, and next steps.' },
    ],
  },
];
