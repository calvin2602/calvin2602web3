const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');

    // Update text color for light/dark mode within .mein div
    const meinDivs = document.querySelectorAll('.mein');
    meinDivs.forEach((div) => {
        if (!isDarkMode) {
            div.style.color = 'black'; // Text color in Light Mode
        } else {
            div.style.color = 'white'; // Text color in Dark Mode
        }
    });
});

// Check and apply dark mode
const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode === 'true') {
    body.classList.add('dark-mode');

    const meinDivs = document.querySelectorAll('.mein');
    meinDivs.forEach((div) => {
        div.style.color = 'white'; // Text color in Dark Mode
    });
}
