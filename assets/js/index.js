document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.tech-dropdown .dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content && content.classList.contains('dropdown-content')) {
                const isVisible = content.style.display === 'block';
                content.style.display = isVisible ? 'none' : 'block';
            }
        });
    });
});
