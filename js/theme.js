// Theme toggle functionality
const themeToggleDarkIcon = '<i class="fas fa-moon"></i>';
const themeToggleLightIcon = '<i class="fas fa-sun"></i>';

// Check for saved user preference, if any, on load of the website
const darkModePreference = localStorage.getItem('darkMode') === 'true';

// Function to toggle dark mode
function toggleDarkMode(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark);
    
    // Update all theme toggle buttons across pages
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    themeToggleBtns.forEach(btn => {
        btn.innerHTML = isDark ? themeToggleLightIcon : themeToggleDarkIcon;
        btn.setAttribute('title', isDark ? 'Toggle light mode' : 'Toggle dark mode');
    });
}

// Initialize dark mode based on saved preference
document.addEventListener('DOMContentLoaded', () => {
    toggleDarkMode(darkModePreference);
    
    // Add click event listeners to all theme toggle buttons
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isDark = !document.documentElement.classList.contains('dark');
            toggleDarkMode(isDark);
        });
    });
});