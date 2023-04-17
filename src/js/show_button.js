// get the "show" button elements
const showButton1 = document.getElementById('show-button1');
const showButton2 = document.getElementById('show-button2');
const showButton3 = document.getElementById('show-button3');
const showButton4 = document.getElementById('show-button4');

// add an event listener to each button
showButton1.addEventListener('click', show_alert);
showButton2.addEventListener('click', show_alert);
showButton3.addEventListener('click', show_alert);
showButton4.addEventListener('click', show_alert);

function show_alert(event) {
  event.preventDefault(); // prevent the default behavior of the button

  // show an alert message
  alert('you should be logged in');

  // scroll to the current section to stay on the same section
  const currentSection = event.target.closest('.job-section');
  currentSection.scrollIntoView({ behavior: 'smooth' });
}
