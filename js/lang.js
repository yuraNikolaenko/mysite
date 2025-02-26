// Функція для завантаження JSON-файлу з перекладом
function loadLanguage(lang) {
    fetch(`/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.title = data.title;
            document.querySelector('header h1').textContent = data.header;
            document.querySelector('nav a[href="#about"]').textContent = data.about;
            document.querySelector('nav a[href="resume.html"]').textContent = data.resume;
            document.querySelector('nav a[href="projects.html"]').textContent = data.projects;
            document.querySelector('footer p').textContent = data.footer;
        });
}

// Функція для зміни мови при натисканні на перемикач
document.querySelectorAll('.lang-switch').forEach(item => {
    item.addEventListener('click', function() {
        const lang = this.dataset.lang;
        loadLanguage(lang);
        localStorage.setItem('lang', lang); // Зберегти вибір мови в localStorage
    });
});

// Завантаження мови при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ukr'; // За замовчуванням укр
    loadLanguage(savedLang);
});
