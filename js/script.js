document.addEventListener('DOMContentLoaded', () => {
  handleNavbar();
  window.addEventListener('scroll', (e) => {
    handleNavbar();
  });

  document.querySelectorAll('.card').forEach((item) => {
    item.onclick = () => {
      item.querySelector('.card-link').click()
    }
  });
});

function handleNavbar() {
  if (window.scrollY > 0) {
    if (!document.querySelector('[navbar-expandable]').classList.contains('bg-light')) {
      document.querySelector('[navbar-expandable]').classList.add('bg-light');
    }
  } else {
    if (document.querySelector('[navbar-expandable]').classList.contains('bg-light')) {
      document.querySelector('[navbar-expandable]').classList.remove('bg-light');
    }
  }
}
