document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.alih-btn');
  const navLinks = document.getElementById('navLinks');

  toggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  window.addEventListener('click', function (e) {
    if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });
});
                                                               