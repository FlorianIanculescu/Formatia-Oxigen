// ================================
// MOBILE BURGER MENU TOGGLE
// ================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu pe click
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animație X pe burger button
            menuToggle.classList.toggle('active');
        });
    }

    // Închide meniul când dai click pe un link
    if (navLinks) {
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // Închide meniul când dai click în afara lui
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks && navLinks.contains(event.target);
        const isClickOnToggle = menuToggle && menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navLinks) {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    });
});

// ================================
// GALLERY FILTER & LIGHTBOX
// ================================
document.addEventListener('DOMContentLoaded', function() {
    
    // CSS pentru gallery - FIXED SIZE
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
            gap: 3rem;
            max-width: 1400px;
            margin: 0 auto 3rem auto;
            padding: 0 2rem;
            justify-content: center;
        }
        
        .gallery-item {
            transition: transform 0.3s ease;
            cursor: pointer;
            display: block;
            width: 280px;
        }
        
        .gallery-item.hidden {
            display: none !important;
        }
        
        .gallery-item:hover {
            transform: translateY(-5px);
        }
        
        .gallery-placeholder {
            height: 280px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
        }
        
        .gallery-item img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            display: block;
            border-radius: 10px;
        }
        
        .gallery-item p {
            margin-top: 1rem;
            text-align: center;
            font-weight: 400;
            font-size: 0.95rem;
            line-height: 1.4;
            min-height: 2.8em;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @media (max-width: 1024px) {
            .gallery-grid {
                grid-template-columns: repeat(auto-fit, minmax(240px, 240px));
            }
            
            .gallery-item {
                width: 240px;
            }
            
            .gallery-placeholder {
                height: 240px;
                font-size: 2.5rem;
            }
            
            .gallery-item img {
                height: 240px;
            }
        }
        
        @media (max-width: 768px) {
            .gallery-grid {
                grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
                gap: 1.5rem;
                padding: 0 1rem;
            }
            
            .gallery-item {
                width: 200px;
            }
            
            .gallery-placeholder {
                height: 200px;
                font-size: 2rem;
            }
            
            .gallery-item img {
                height: 200px;
            }
        }
        
        @media (max-width: 480px) {
            .gallery-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
                gap: 1rem;
                padding: 0 0.5rem;
            }
            
            .gallery-item {
                width: 150px;
            }
            
            .gallery-placeholder {
                height: 150px;
                font-size: 1.5rem;
            }
            
            .gallery-item img {
                height: 150px;
            }
            
            .gallery-item p {
                font-size: 0.85rem;
                min-height: 2.4em;
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    console.log('Filter buttons:', filterButtons.length, 'Gallery items:', galleryItems.length);

    // FILTRU
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                console.log('Filter:', filterValue);
                
                // Update button styles
                filterButtons.forEach(btn => {
                    btn.style.background = 'white';
                    btn.style.color = '#3498DB';
                    btn.style.borderColor = '#3498DB';
                });
                this.style.background = '#3498DB';
                this.style.color = 'white';
                this.style.borderColor = '#3498DB';
                
                // Filter items
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'toate' || category === filterValue) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });

        filterButtons[0].style.background = '#3498DB';
        filterButtons[0].style.color = 'white';
    }

    // LIGHTBOX
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const img = this.querySelector('img');
            if (img) {
                openLightbox(img.src, img.alt);
            }
        });
    });

    function openLightbox(imageSrc, altText) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        const imgContainer = document.createElement('div');
        imgContainer.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90vh;
        `;

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = altText;
        img.style.cssText = `
            max-width: 100%;
            max-height: 85vh;
            object-fit: contain;
            border-radius: 10px;
        `;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 3rem;
            cursor: pointer;
            font-weight: bold;
            padding: 0;
            width: 40px;
            height: 40px;
        `;

        closeBtn.addEventListener('click', function() {
            overlay.remove();
        });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.remove();
            }
        });

        document.addEventListener('keydown', function handler(e) {
            if (e.key === 'Escape' && overlay.parentNode) {
                overlay.remove();
                document.removeEventListener('keydown', handler);
            }
        });

        imgContainer.appendChild(img);
        imgContainer.appendChild(closeBtn);
        overlay.appendChild(imgContainer);
        document.body.appendChild(overlay);
    }
});

// ================================
// CONSOLE MESSAGE
// ================================
console.log('%c🎵 Website creat pentru formația ta! 🎵', 'color: #3498DB; font-size: 20px; font-weight: bold;');
console.log('%cFiltrare galerie activă', 'color: #76D7EA; font-size: 12px;');
