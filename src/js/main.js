// ===== MOBILE MENU =====
(function () {
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.header__nav');
    var overlay = document.querySelector('.nav-overlay');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('active');
            toggle.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen);
            if (overlay) overlay.classList.toggle('active');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        if (overlay) {
            overlay.addEventListener('click', function () {
                nav.classList.remove('active');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close menu on nav link click
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('active');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ===== HEADER SCROLL =====
    var header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        }, { passive: true });
    }

    // ===== FADE-UP ANIMATION =====
    var fadeEls = document.querySelectorAll('.fade-up');
    if (fadeEls.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        fadeEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show all elements
        fadeEls.forEach(function (el) {
            el.classList.add('visible');
        });
    }
})();
