// Get the button and body elements
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

// Add click event to toggle theme
themeToggle.addEventListener('click', () => {
    // Toggle between light and dark
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Update theme
    body.setAttribute('data-theme', newTheme);

    // Save preference
    localStorage.setItem('theme', newTheme);
});

// Check system preference if no saved preference exists
if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}