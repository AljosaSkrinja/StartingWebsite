//update
function updateTheme(newTheme) {
    var rootElement = document.documentElement;
    var moonIcon = document.getElementById('moonIcon');
    var sunIcon = document.getElementById('sunIcon');

    rootElement.setAttribute('data-bs-theme', newTheme);
    moonIcon.style.display = (newTheme === 'dark') ? 'block' : 'none';
    sunIcon.style.display = (newTheme === 'dark') ? 'none' : 'block';
}

// save
function saveThemePreference(theme) {
    localStorage.setItem('themePreference', theme);
}

// load
function loadTheme() {
    var savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
        updateTheme(savedTheme);
    }
}

// theme toggle
function setupThemeToggle() {
    document.getElementById('themeToggle').addEventListener('click', function() {
        var rootElement = document.documentElement;
        var currentTheme = rootElement.getAttribute('data-bs-theme');
        var newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        updateTheme(newTheme);
        saveThemePreference(newTheme);
    });
}

// esential ?DOMContentLoaded?
// note to self: DOM is used so we have moon and sun ready here!
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    setupThemeToggle();
});
