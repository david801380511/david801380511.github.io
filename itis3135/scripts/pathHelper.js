function getBaseURL() {
    return '/itis3135/';
}

function fixLinks() {
    const base = getBaseURL();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.href.startsWith(window.location.origin) && !link.href.includes('github.com')) {
            link.href = base + link.getAttribute('href').replace('./', '');
        }
    });
}

window.addEventListener('load', fixLinks);
