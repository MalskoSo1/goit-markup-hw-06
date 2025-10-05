document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal-mob-overlay');
  const service_modal = document.querySelector('.modal-overlay');
  const button = document.querySelector('button');
  const service_button = document.querySelector('.hero-button');
  const close = document.querySelector('.close');
  const service_close = document.querySelector('.modal-close-btn');
  const content = document.querySelector('.content');
  const body = document.querySelector('.main-screen');

  button.addEventListener('click', () => {
    modal.classList.add('is-open');
    body.classList.add('modal-open');
  });

  service_button.addEventListener('click', () => {
    service_modal.classList.add('is-open');
    body.classList.add('modal-open');
  });

  close.addEventListener('click', () => {
    modal.classList.remove('is-open');
    body.classList.remove('modal-open');
  });

  service_close.addEventListener('click', () => {
    service_modal.classList.remove('is-open');
    body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.remove('is-open');
      service_modal.classList.remove('is-open');
      body.classList.remove('modal-open');
    }
  });
});
