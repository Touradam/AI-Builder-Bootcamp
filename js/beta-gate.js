const BETA_FORM_REVOKED_KEY = 'betaFormRevoked';

function isValidGateEntry(digit, allowedList) {
  if (digit === '' || digit === null || digit === undefined) return false;
  const num = parseInt(digit, 10);
  return allowedList.includes(num);
}

function isValidGatePair(pairStr, allowedPairs) {
  if (pairStr.length !== 2) return false;
  const num = parseInt(pairStr, 10);
  return allowedPairs.includes(num);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add('beta-modal-open');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.hidden = true;
  if (!document.querySelector('.beta-modal-root:not([hidden])')) {
    document.body.classList.remove('beta-modal-open');
  }
}

function revokeFormAccess() {
  sessionStorage.setItem(BETA_FORM_REVOKED_KEY, 'true');
}

function isFormAccessRevoked() {
  return sessionStorage.getItem(BETA_FORM_REVOKED_KEY) === 'true';
}

function openNotionForm() {
  if (typeof NOTION_FORM_URL !== 'undefined' && NOTION_FORM_URL && !NOTION_FORM_URL.startsWith('PASTE_')) {
    window.open(NOTION_FORM_URL, '_blank', 'noopener,noreferrer');
  }
}

function shakeGateInputs(inputs) {
  inputs.forEach((input) => {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    setTimeout(() => input.classList.remove('is-invalid'), 500);
  });
}

function flashGateInput(input) {
  if (!input || !input.value) return;
  input.classList.add('is-valid');
  input.classList.remove('is-invalid');
}

function spawnConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  container.innerHTML = '';
  const colors = ['#c4a35a', '#e2c887', '#9a7b3c', '#eceae4', '#c4a35a'];
  for (let i = 0; i < 48; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    piece.style.animationDuration = `${2.2 + Math.random() * 1.5}s`;
    container.appendChild(piece);
  }
}

function showSuccessModal() {
  spawnConfetti();
  openModal('beta-success-modal');
}

function initBetaGate() {
  const joinBtn = document.getElementById('join-beta-btn');
  const continueBtn = document.getElementById('beta-gate-continue');
  const errorEl = document.getElementById('beta-gate-error');
  const modalCloseBtn = document.getElementById('beta-modal-close');
  const successModal = document.getElementById('beta-success-modal');

  const input1 = document.getElementById('beta-gate-1');
  const input2 = document.getElementById('beta-gate-2');
  const input3 = document.getElementById('beta-gate-3');
  const inputs = [input1, input2, input3];

  if (!joinBtn) return;

  const digits1 = typeof betaGateDigits1 !== 'undefined' ? betaGateDigits1 : [];
  const digits2 = typeof betaGateDigits2 !== 'undefined' ? betaGateDigits2 : [];
  const pairs = typeof betaGatePairs !== 'undefined' ? betaGatePairs : [];

  let formClaimedThisVisit = false;
  let successModalOpen = false;

  function clearError() {
    if (errorEl) errorEl.hidden = true;
  }

  function showError(message) {
    if (errorEl) {
      errorEl.textContent = message || "That didn't work. Try again.";
      errorEl.hidden = false;
    }
    shakeGateInputs(inputs);
  }

  function isValidSingleDigit(value, allowed) {
    if (!value) return false;
    const num = parseInt(value, 10);
    return allowed.includes(num);
  }

  function isValidPairPrefix(value) {
    if (!value) return true;
    return pairs.some((p) => String(p).startsWith(value));
  }

  function handleDigitInput(input, allowed, nextInput, prevInput, isPair) {
    input.addEventListener('input', () => {
      clearError();
      let value = input.value.replace(/\D/g, '');

      if (isPair) {
        if (value.length > 2) value = value.slice(0, 2);
        if (value && !isValidPairPrefix(value)) {
          value = value.slice(0, -1);
        }
        input.value = value;
        if (value.length === 2) {
          flashGateInput(input);
          tryAutoSubmit();
        }
        return;
      }

      if (value.length > 1) value = value.slice(-1);
      if (value && !isValidSingleDigit(value, allowed)) {
        input.value = '';
        return;
      }
      input.value = value;
      if (value) {
        flashGateInput(input);
        if (nextInput) nextInput.focus();
        else tryAutoSubmit();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && prevInput) {
        e.preventDefault();
        prevInput.focus();
        prevInput.value = '';
      }
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
    });
  }

  function tryAutoSubmit() {
    const box1 = input1 ? input1.value : '';
    const box2 = input2 ? input2.value : '';
    const box3 = input3 ? input3.value : '';
    if (
      box1 &&
      box2 &&
      box3.length === 2 &&
      isValidGateEntry(box1, digits1) &&
      isValidGateEntry(box2, digits2) &&
      isValidGatePair(box3, pairs)
    ) {
      setTimeout(onContinue, 280);
    }
  }

  if (input1) handleDigitInput(input1, digits1, input2, null, false);
  if (input2) handleDigitInput(input2, digits2, input3, input1, false);
  if (input3) handleDigitInput(input3, pairs, null, input2, true);

  function openJoinModal() {
    openModal('join-modal');
    if (isFormAccessRevoked()) {
      if (input1) {
        input1.value = '';
        input2.value = '';
        input3.value = '';
        inputs.forEach((inp) => inp.classList.remove('is-valid', 'is-invalid'));
      }
      showError('Your invitation window has closed. Reach out to your friend if you still want to join.');
      return;
    }
    if (input1) {
      input1.value = '';
      input2.value = '';
      input3.value = '';
      inputs.forEach((inp) => inp.classList.remove('is-valid', 'is-invalid'));
      clearError();
      setTimeout(() => input1.focus(), 200);
    }
  }

  joinBtn.addEventListener('click', openJoinModal);

  if (window.location.hash === '#join') {
    openJoinModal();
  }

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal(btn.getAttribute('data-close-modal'));
    });
  });

  function dismissSuccessWithoutClaim() {
    if (!successModalOpen || formClaimedThisVisit) return;
    successModalOpen = false;
    revokeFormAccess();
    closeModal('beta-success-modal');
  }

  function grantAccess() {
    if (isFormAccessRevoked()) {
      showError('Your invitation window has closed. Reach out to your friend if you still want to join.');
      return;
    }
    closeModal('join-modal');
    successModalOpen = true;
    showSuccessModal();
  }

  function onContinue() {
    if (isFormAccessRevoked()) {
      showError('Your invitation window has closed. Reach out to your friend if you still want to join.');
      return;
    }

    const box1 = input1 ? input1.value : '';
    const box2 = input2 ? input2.value : '';
    const box3 = input3 ? input3.value : '';

    const box1Ok = isValidGateEntry(box1, digits1);
    const box2Ok = isValidGateEntry(box2, digits2);
    const box3Ok = isValidGatePair(box3, pairs);

    if (box1Ok && box2Ok && box3Ok) {
      grantAccess();
    } else {
      showError();
    }
  }

  if (continueBtn) {
    continueBtn.addEventListener('click', onContinue);
  }

  function claimSpotAndOpenForm() {
    formClaimedThisVisit = true;
    successModalOpen = false;
    revokeFormAccess();
    closeModal('beta-success-modal');
    openNotionForm();
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', claimSpotAndOpenForm);
  }

  if (successModal) {
    const successOverlay = successModal.querySelector('.beta-modal-overlay');
    if (successOverlay) {
      successOverlay.addEventListener('click', (e) => {
        if (e.target === successOverlay) {
          dismissSuccessWithoutClaim();
        }
      });
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal && !successModal.hidden) {
      dismissSuccessWithoutClaim();
    }
  });
}
