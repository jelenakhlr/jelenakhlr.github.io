// JavaScript code for sliding tabs
const tabs = document.querySelectorAll('.tab-list li');
const contentContainers = document.querySelectorAll('#home, #about, #contact');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and content containers
    tabs.forEach(t => t.classList.remove('active'));
    contentContainers.forEach(c => c.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content container
    tab.classList.add('active');
    contentContainers[index].classList.add('active');
  });
});
