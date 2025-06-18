const phrases = [
  "a Frontend Developer",
  "a Data Visualizer",
  "a Creative Coder",
  "a Tech Explorer"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  document.getElementById('typed-text').innerHTML = currentPhrase.join('');

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      document.getElementById('typed-text').innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      document.getElementById('typed-text').innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (150 - 100) + 100;
  const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
  setTimeout(loop, time);
}

document.addEventListener("DOMContentLoaded", loop);
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Thank you! Your message has been received. 💌";
    formMessage.style.color = "green";

    // Optional: clear form fields
    form.reset();
  });
});
// Loading animation
// Loader logic
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  if (loader) {
    loader.classList.add("fade-out");
  }
});

