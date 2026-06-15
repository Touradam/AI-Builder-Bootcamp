function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initSpotlight() {
  const hero = document.querySelector('.roadmap-hero');
  const spotlight = document.getElementById('roadmap-spotlight');
  if (!hero || !spotlight || prefersReducedMotion()) return;

  let raf = null;
  hero.addEventListener('pointermove', (e) => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.setProperty('--spot-x', `${x}px`);
      spotlight.style.setProperty('--spot-y', `${y}px`);
      spotlight.style.opacity = '1';
    });
  });

  hero.addEventListener('pointerleave', () => {
    spotlight.style.opacity = '0';
  });
}

function renderFloatingEquations(containerId, equations) {
  const container = document.getElementById(containerId);
  if (!container || !equations?.length) return;

  container.innerHTML = equations
    .map(
      (eq) => `
    <span
      class="roadmap-equation"
      style="left: ${eq.x}%; top: ${eq.y}%; --eq-size: ${eq.size}; transform: rotate(${eq.rot}deg);"
      data-x="${eq.x}"
      data-y="${eq.y}"
      data-rot="${eq.rot}"
    >${eq.html}</span>
  `
    )
    .join('');
}

const equationDriftStates = [];

function randomVelocity(scale) {
  return (Math.random() - 0.5) * scale;
}

function initEquationDrift() {
  if (prefersReducedMotion()) return;

  document.querySelectorAll('.roadmap-equation').forEach((el) => {
    const isHero = el.closest('.roadmap-equations--hero');
    equationDriftStates.push({
      el,
      x: parseFloat(el.dataset.x),
      y: parseFloat(el.dataset.y),
      rot: parseFloat(el.dataset.rot),
      vx: randomVelocity(isHero ? 0.006 : 0.009),
      vy: randomVelocity(isHero ? 0.005 : 0.008),
      vRot: randomVelocity(0.02),
      bounds: isHero
        ? { minX: 0, maxX: 92, minY: 8, maxY: 88 }
        : { minX: 1, maxX: 86, minY: 4, maxY: 82 },
      opacity: 0.45 + Math.random() * 0.35,
      vOpacity: randomVelocity(0.0015),
    });
  });

  if (!equationDriftStates.length) return;

  function tick() {
    equationDriftStates.forEach((s) => {
      if (Math.random() < 0.008) {
        s.vx += randomVelocity(0.004);
        s.vy += randomVelocity(0.004);
        s.vRot += randomVelocity(0.012);
      }

      const maxV = s.el.closest('.roadmap-equations--hero') ? 0.01 : 0.014;
      s.vx = Math.max(-maxV, Math.min(maxV, s.vx));
      s.vy = Math.max(-maxV, Math.min(maxV, s.vy));
      s.vRot = Math.max(-0.035, Math.min(0.035, s.vRot));

      s.x += s.vx;
      s.y += s.vy;
      s.rot += s.vRot;
      s.opacity += s.vOpacity;
      s.opacity = Math.max(0.35, Math.min(0.85, s.opacity));
      if (s.opacity <= 0.38 || s.opacity >= 0.82) s.vOpacity *= -1;

      const { minX, maxX, minY, maxY } = s.bounds;
      if (s.x <= minX || s.x >= maxX) {
        s.vx *= -1;
        s.x = Math.max(minX, Math.min(maxX, s.x));
      }
      if (s.y <= minY || s.y >= maxY) {
        s.vy *= -1;
        s.y = Math.max(minY, Math.min(maxY, s.y));
      }

      s.el.style.left = `${s.x}%`;
      s.el.style.top = `${s.y}%`;
      s.el.style.transform = `rotate(${s.rot}deg)`;
      s.el.style.opacity = String(s.opacity);
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initFloatingEquations() {
  if (typeof floatingEquations !== 'undefined') {
    renderFloatingEquations('roadmap-equations-svg', floatingEquations);
  }
  if (typeof floatingEquationsHero !== 'undefined') {
    renderFloatingEquations('roadmap-equations-hero', floatingEquationsHero);
  }
  initEquationDrift();
}

function initParticles() {
  const container = document.getElementById('roadmap-particles');
  if (!container || prefersReducedMotion()) return;

  const count = 18;
  for (let i = 0; i < count; i += 1) {
    const p = document.createElement('span');
    p.className = 'roadmap-particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 8}s`;
    p.style.animationDuration = `${6 + Math.random() * 10}s`;
    p.style.opacity = `${0.15 + Math.random() * 0.35}`;
    container.appendChild(p);
  }
}

function initTiltCards() {
  if (prefersReducedMotion()) return;

  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--tilt-x', `${y * -6}deg`);
      card.style.setProperty('--tilt-y', `${x * 6}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}

function initRevealAnimations() {
  if (prefersReducedMotion()) {
    document.querySelectorAll('.reveal-item, .reveal-on-scroll').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  document.querySelectorAll('.reveal-stagger .reveal-item').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.08}s`;
    el.classList.add('reveal-animate');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
}

function renderFlipCardFront(phase) {
  return `
    <div class="roadmap-card-num">${phase.id}</div>
    <div class="roadmap-card-body">
      <span class="roadmap-card-tag">${phase.tag}</span>
      <h2>${phase.title}</h2>
      <p class="roadmap-card-lead">${phase.lead}</p>
      <ul>
        ${phase.sessions.map((s) => `<li>${s}</li>`).join('')}
      </ul>
      <span class="roadmap-card-outcome">${phase.outcome}</span>
    </div>
  `;
}

function getSessionTime(day) {
  if (typeof cohortSchedule === 'undefined') return '';
  if (day === 'Friday') return cohortSchedule.fridayTime.replace(' PST', '');
  if (day === 'Saturday') return cohortSchedule.saturdayTime.replace(' PST', '');
  if (day === 'Sunday') return cohortSchedule.sundayTime.replace(' PST', '');
  return '';
}

function renderFlipCardBack(phase) {
  const details = phase.sessionDetails || [];
  return `
    <div class="roadmap-card-back-inner">
      <span class="roadmap-card-tag">${phase.tag}</span>
      <h3>${phase.title}</h3>
      <p class="roadmap-flip-rhythm">Fri intro · Sat practice · Sun mastery</p>
      <ul class="roadmap-flip-sessions">
        ${details
          .map(
            (s) => `
          <li>
            <span class="roadmap-flip-session-meta">${getSessionTime(s.day)} · ${s.label} · ${s.day} · ${s.type}</span>
            <strong>${s.title}</strong>
            <span>${s.description}</span>
          </li>
        `
          )
          .join('')}
      </ul>
      ${phase.summary ? `<p class="roadmap-flip-summary">${phase.summary}</p>` : ''}
      <span class="roadmap-card-outcome">${phase.outcome}</span>
      <button type="button" class="roadmap-flip-close" aria-label="Close week details">&times;</button>
    </div>
  `;
}

function renderMobileRoadmapCards(phases) {
  const container = document.getElementById('roadmap-cards-mobile');
  if (!container) return;

  container.innerHTML = phases
    .map((phase, index) => {
      const offsetClass = index % 2 === 1 ? ' roadmap-card--offset' : '';
      return `
    <article class="roadmap-card roadmap-card--flip tilt-card${offsetClass}" data-phase="${phase.id}" tabindex="0" aria-expanded="false">
      <div class="roadmap-card-flipper">
        <div class="roadmap-card-face roadmap-card-front">
          ${renderFlipCardFront(phase)}
        </div>
        <div class="roadmap-card-face roadmap-card-back">
          ${renderFlipCardBack(phase)}
        </div>
      </div>
    </article>
  `;
    })
    .join('');
}

function renderDesktopFlipOverlays(phases, hotspots) {
  const container = document.getElementById('roadmap-flip-overlays');
  if (!container || !hotspots.length) return;

  container.innerHTML = hotspots
    .map((spot) => {
      const phase = phases.find((p) => p.id === spot.phase);
      if (!phase) return '';
      return `
    <article
      class="roadmap-flip-overlay"
      data-phase="${spot.phase}"
      style="--x: ${spot.x}%; --y: ${spot.y}%; --w: ${spot.w}%; --h: ${spot.h}%;"
      hidden
    >
      <div class="roadmap-flip-overlay-panel">
        ${renderFlipCardBack(phase)}
      </div>
    </article>
  `;
    })
    .join('');
}

function flipPhaseCard(phaseId, shouldFlip) {
  document.querySelectorAll('.roadmap-card--flip, .roadmap-flip-overlay').forEach((el) => {
    const isMatch = Number(el.dataset.phase) === phaseId;
    if (isMatch) {
      el.classList.toggle('is-flipped', shouldFlip);
      if (el.classList.contains('roadmap-card--flip')) {
        el.setAttribute('aria-expanded', String(shouldFlip));
      }
      if (el.classList.contains('roadmap-flip-overlay')) {
        if (shouldFlip) {
          el.removeAttribute('hidden');
        } else {
          el.setAttribute('hidden', '');
        }
      }
    } else if (shouldFlip) {
      el.classList.remove('is-flipped');
      if (el.classList.contains('roadmap-card--flip')) {
        el.setAttribute('aria-expanded', 'false');
      }
      if (el.classList.contains('roadmap-flip-overlay')) {
        el.setAttribute('hidden', '');
      }
    }
  });
}

function clearActivePhase() {
  document.querySelectorAll('.roadmap-phase-btn.is-active, .roadmap-hotspot.is-active, .roadmap-card.is-active').forEach((el) => {
    el.classList.remove('is-active', 'is-entering');
  });
  document.querySelectorAll('.roadmap-card--flip, .roadmap-flip-overlay').forEach((el) => {
    el.classList.remove('is-flipped');
    if (el.classList.contains('roadmap-card--flip')) {
      el.setAttribute('aria-expanded', 'false');
    }
    if (el.classList.contains('roadmap-flip-overlay')) {
      el.setAttribute('hidden', '');
    }
  });
  const panel = document.getElementById('roadmap-phase-detail');
  if (panel) {
    panel.classList.remove('is-visible');
    panel.setAttribute('hidden', '');
  }
}

function setActivePhase(phaseId) {
  const phases = typeof roadmapPhases !== 'undefined' ? roadmapPhases : [];
  const phase = phases.find((p) => p.id === phaseId);
  if (!phase) return;

  document.querySelectorAll('.roadmap-phase-btn, .roadmap-hotspot, .roadmap-card--flip').forEach((el) => {
    const isMatch = Number(el.dataset.phase) === phaseId;
    el.classList.toggle('is-active', isMatch);
    if (el.classList.contains('roadmap-hotspot')) {
      el.classList.remove('is-entering');
      if (isMatch) {
        void el.offsetWidth;
        el.classList.add('is-entering');
        setTimeout(() => el.classList.remove('is-entering'), 600);
      }
    }
  });

  flipPhaseCard(phaseId, true);

  const card = document.querySelector(`.roadmap-card--flip[data-phase="${phaseId}"]`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function initRoadmapHotspots() {
  const container = document.getElementById('roadmap-hotspots');
  const hotspots = typeof roadmapHotspots !== 'undefined' ? roadmapHotspots : [];
  const phases = typeof roadmapPhases !== 'undefined' ? roadmapPhases : [];
  if (!container || !hotspots.length) return;

  container.innerHTML = hotspots
    .map((spot) => {
      const phase = phases.find((p) => p.id === spot.phase);
      const label = phase ? `Phase ${spot.phase}: ${phase.title}` : `Phase ${spot.phase}`;
      return `
        <button
          type="button"
          class="roadmap-hotspot"
          data-phase="${spot.phase}"
          style="--x: ${spot.x}%; --y: ${spot.y}%; --w: ${spot.w}%; --h: ${spot.h}%;"
          aria-label="${label}"
        ></button>
      `;
    })
    .join('');
}

function initPhaseExplorer() {
  const nav = document.getElementById('roadmap-phase-nav');
  const phases = typeof roadmapPhases !== 'undefined' ? roadmapPhases : [];
  const hotspots = typeof roadmapHotspots !== 'undefined' ? roadmapHotspots : [];
  if (!nav || !phases.length) return;

  initRoadmapHotspots();
  renderMobileRoadmapCards(phases);
  renderDesktopFlipOverlays(phases, hotspots);
  initTiltCards();

  nav.innerHTML = phases
    .map(
      (p) => `
    <button type="button" class="roadmap-phase-btn" data-phase="${p.id}" aria-pressed="false">
      <span class="roadmap-phase-btn-num">${p.id}</span>
      <span class="roadmap-phase-btn-label">${p.title}</span>
    </button>
  `
    )
    .join('');

  function handlePhaseSelect(phaseId) {
    const current = document.querySelector('.roadmap-phase-btn.is-active');
    if (current && Number(current.dataset.phase) === phaseId) {
      clearActivePhase();
      nav.querySelectorAll('.roadmap-phase-btn').forEach((btn) => btn.setAttribute('aria-pressed', 'false'));
      return;
    }
    setActivePhase(phaseId);
    nav.querySelectorAll('.roadmap-phase-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(Number(btn.dataset.phase) === phaseId));
    });
  }

  nav.querySelectorAll('.roadmap-phase-btn').forEach((btn) => {
    btn.addEventListener('click', () => handlePhaseSelect(Number(btn.dataset.phase)));
  });

  document.querySelectorAll('.roadmap-hotspot, .roadmap-card--flip').forEach((el) => {
    const activate = (e) => {
      if (e.target.closest('.roadmap-flip-close')) return;
      handlePhaseSelect(Number(el.dataset.phase));
    };
    el.addEventListener('click', activate);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate(e);
      }
    });
  });

  document.getElementById('roadmap-flip-overlays')?.addEventListener('click', (e) => {
    if (e.target.closest('.roadmap-flip-close')) {
      e.stopPropagation();
      clearActivePhase();
      nav.querySelectorAll('.roadmap-phase-btn').forEach((btn) => btn.setAttribute('aria-pressed', 'false'));
    }
  });

  document.getElementById('roadmap-cards-mobile')?.addEventListener('click', (e) => {
    if (e.target.closest('.roadmap-flip-close')) {
      e.stopPropagation();
      clearActivePhase();
      nav.querySelectorAll('.roadmap-phase-btn').forEach((btn) => btn.setAttribute('aria-pressed', 'false'));
    }
  });
}

function initCountdown() {
  const wrap = document.getElementById('countdown-wrap');
  const timer = document.getElementById('countdown-timer');
  if (!wrap || !timer || typeof cohortSchedule === 'undefined') return;

  const target = new Date(`${cohortSchedule.firstSessionDate}T19:00:00-07:00`);
  if (Number.isNaN(target.getTime()) || target.getTime() <= Date.now()) {
    wrap.remove();
    return;
  }

  wrap.hidden = false;

  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      wrap.remove();
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    timer.innerHTML = `
      <span class="countdown-unit"><strong>${days}</strong><small>days</small></span>
      <span class="countdown-sep">:</span>
      <span class="countdown-unit"><strong>${String(hours).padStart(2, '0')}</strong><small>hrs</small></span>
      <span class="countdown-sep">:</span>
      <span class="countdown-unit"><strong>${String(mins).padStart(2, '0')}</strong><small>min</small></span>
      <span class="countdown-sep">:</span>
      <span class="countdown-unit"><strong>${String(secs).padStart(2, '0')}</strong><small>sec</small></span>
    `;
  }

  update();
  setInterval(update, 1000);
}

function initButtonRipple() {
  document.querySelectorAll('.btn-shine').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

function initInteractions() {
  if (!document.querySelector('.roadmap-page')) return;
  initSpotlight();
  initFloatingEquations();
  initParticles();
  initRevealAnimations();
  initPhaseExplorer();
  initCountdown();
  initButtonRipple();
}

document.addEventListener('DOMContentLoaded', initInteractions);
