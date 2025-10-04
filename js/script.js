document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal-mob-overlay');
  const button = document.querySelector('button');
  const close = document.querySelector('.close');
  const content = document.querySelector('.content');

  button.addEventListener('click', () => {
    modal.classList.add('is-open');
  });

  close.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });

  modal.addEventListener('click', e => {
    if (!content.contains(e.target)) {
      modal.classList.remove('is-open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.remove('is-open');
    }
  });
});
