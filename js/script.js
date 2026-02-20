// Floating Up Button logic
window.addEventListener('scroll', function() {
    const upBtn = document.querySelector('.floating-up');
    if (window.scrollY > 300) {
        upBtn.classList.add('active');
    } else {
        upBtn.classList.remove('active');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// TOC Toggle logic
function toggleTOC() {
    const body = document.getElementById('tocBody');
    const icon = document.getElementById('tocIcon');
    if (body.style.display === 'none') {
        body.style.display = 'block';
        icon.classList.replace('bi-chevron-down', 'bi-chevron-up');
    } else {
        body.style.display = 'none';
        icon.classList.replace('bi-chevron-up', 'bi-chevron-down');
    }
}

// Auto TOC Generator
document.addEventListener('DOMContentLoaded', function() {
    const article = document.querySelector('.article-content');
    const tocBody = document.getElementById('tocBody');
    
    if (article && tocBody) {
        const headings = article.querySelectorAll('h2, h3');
        const ul = document.createElement('ul');
        ul.className = 'list-unstyled mb-0';
        
        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;
            
            const li = document.createElement('li');
            li.className = heading.tagName === 'H3' ? 'ms-4 mb-2' : 'mb-2';
            
            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = heading.textContent;
            a.className = 'text-decoration-none text-dark';
            
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        tocBody.appendChild(ul);
    }
});

// Share buttons functionality
function shareToWA() {
    const url = window.location.href;
    const text = "Cek artikel menarik ini: " + url;
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
}

function shareToFB() {
    const url = window.location.href;
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
}

function shareToTW() {
    const url = window.location.href;
    const text = "Cek artikel menarik ini: " + url;
    window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text), "_blank");
}
