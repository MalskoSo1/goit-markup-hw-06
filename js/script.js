document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal-mob-overlay');
  const service_modal = document.querySelector('.modal-overlay');
  const button = document.querySelector('button');
  const service_button = document.querySelector('.hero-button');
  const close = document.querySelector('.close');
  const service_close = document.querySelector('.modal-close-btn');
  const content = document.querySelector('.content');

  button.addEventListener('click', () => {
    modal.classList.add('is-open');
  });

  service_button.addEventListener('click', () => {
    service_modal.classList.add('is-open');
  });

  close.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });

  service_close.addEventListener('click', () => {
    service_modal.classList.remove('is-open');
  });

  modal.addEventListener('click', e => {
    if (!content.contains(e.target)) {
      modal.classList.remove('is-open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.remove('is-open');
      service_modal.classList.remove('is-open');
    }
  });
});
