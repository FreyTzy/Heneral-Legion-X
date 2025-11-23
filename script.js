// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Social link functionality for gaming
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const linkText = this.textContent;
        
        if (linkText === 'Add Friend') {
            alert('Game ID: 123456789 (1234)\nCopy this ID to add me in Mobile Legends!');
        } else if (linkText === 'Join Squad') {
            alert('Looking for squad members!\nMessage me to join our team.');
        } else if (linkText === 'Discord') {
            alert('Discord: JeffMLPro#1234\nJoin our gaming community!');
        }
    });
});

// View My Stats button functionality
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#stats').scrollIntoView({
        behavior: 'smooth'
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.background = '#2c3e50';
    }
});