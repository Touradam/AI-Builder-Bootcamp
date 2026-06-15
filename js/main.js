function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  const iconMenu = toggle.querySelector('.icon-menu');
  const iconClose = toggle.querySelector('.icon-close');

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (iconMenu) iconMenu.hidden = isOpen;
    if (iconClose) iconClose.hidden = !isOpen;
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      if (iconMenu) iconMenu.hidden = false;
      if (iconClose) iconClose.hidden = true;
    });
  });
}

function renderCohortStart() {
  if (typeof cohortSchedule === 'undefined') return;

  const { firstSessionDay, firstSessionTime } = cohortSchedule;
  const summary = `${firstSessionDay} · ${firstSessionTime}`;

  document.querySelectorAll('[data-cohort-start]').forEach((el) => {
    el.textContent = summary;
  });

  if (cohortSchedule.weeklyScheduleSummary) {
    document.querySelectorAll('[data-weekly-schedule]').forEach((el) => {
      el.textContent = cohortSchedule.weeklyScheduleSummary;
    });
  }
}

function renderBetaLearnTopics() {
  const container = document.getElementById('beta-learn-topics');
  if (!container || typeof betaLearnTopics === 'undefined') return;

  const icons = [
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />',
  ];

  container.innerHTML = betaLearnTopics
    .map(
      (topic, index) => `
    <div class="card">
      <div class="icon-box" aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">${icons[index] || icons[0]}</svg>
      </div>
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
    </div>
  `
    )
    .join('');
}

function renderInstructorCard() {
  const mount = document.getElementById('instructor-card-mount');
  if (!mount || typeof instructorProfile === 'undefined') return;

  const { name, role, lab, photo, tagline, bio, highlights } = instructorProfile;

  mount.innerHTML = `
    <article class="instructor-flip-card" tabindex="0" aria-expanded="false" aria-label="Instructor card for ${name}">
      <div class="instructor-flip-inner">
        <div class="instructor-flip-face instructor-flip-front">
          <img src="${photo}" alt="${name}" class="instructor-flip-photo" width="280" height="280" />
          <h3>${name}</h3>
          <p class="instructor-flip-role">${role}</p>
          <p class="instructor-flip-lab">${lab}</p>
          <span class="instructor-flip-hint">${tagline}</span>
        </div>
        <div class="instructor-flip-face instructor-flip-back">
          <div class="instructor-flip-back-inner">
            <span class="instructor-flip-eyebrow">About the Instructor</span>
            <h3>${name}</h3>
            ${bio.map((p) => `<p>${p}</p>`).join('')}
            ${
              highlights?.length
                ? `<ul class="instructor-flip-highlights">${highlights.map((item) => `<li>${item}</li>`).join('')}</ul>`
                : ''
            }
            <button type="button" class="instructor-flip-close" aria-label="Close instructor details">&times;</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function initInstructorFlipCard() {
  const card = document.querySelector('.instructor-flip-card');
  if (!card) return;

  function toggleFlip(open) {
    const shouldFlip = typeof open === 'boolean' ? open : !card.classList.contains('is-flipped');
    card.classList.toggle('is-flipped', shouldFlip);
    card.setAttribute('aria-expanded', String(shouldFlip));
  }

  card.addEventListener('click', (e) => {
    if (e.target.closest('.instructor-flip-close')) {
      e.stopPropagation();
      toggleFlip(false);
      return;
    }
    toggleFlip();
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
    if (e.key === 'Escape') {
      toggleFlip(false);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initMobileNav();
  renderCohortStart();
  renderBetaLearnTopics();
  renderInstructorCard();
  initInstructorFlipCard();
  if (typeof initBetaGate === 'function') {
    initBetaGate();
  }
});
