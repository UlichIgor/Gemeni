// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Form submission handling
const form = document.querySelector('#contacts form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Here you can add code to send the form data to a server
  // or display a success message to the user.

  alert('Повідомлення надіслано!');
  form.reset();
});
