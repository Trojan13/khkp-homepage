// Ultra-Modern Gaming Effects JavaScript

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Initialize all effects when page loads
document.addEventListener('DOMContentLoaded', function () {
    initializeAllEffects();
});

function initializeAllEffects() {
    console.log('🎮 Starting KHKP EPIC Gaming Site Initialization...');
    
    // Show epic loading screen first
    showEpicLoadingScreen();
    
    // Show all content immediately as fallback
    const contentSections = document.querySelectorAll('main, .intro-section, .countdown-section, .squad-section, .matches-section');
    contentSections.forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
    });
    
    // Initialize epic effects first
    initEpicEffects();
    
    // Initialize all advanced epic features
    initAdvancedEpicFeatures();
    
    // Initialize ultimate enhancements
    initUltimateParticleSystem();
    initEpicConsoleCommands();
    initEpicMatrixBackground();
    
    // Then initialize other effects
    initParticles();
    initMatrixBackground();
    initTypedText();
    initGSAPAnimations();
    initAOS();
    initCyberEffects();
    
    // Original functions
    updateCountdown();
    setInterval(updateCountdown, 1000);
    updateNavbar();
    updateParallax();
    initDudeAnimation();
    
    // Scroll listeners
    window.addEventListener('scroll', function () {
        updateNavbar();
        updateParallax();
    });
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Debug info
    debugInit();
    
    // Finalize epic experience
    finalizeEpicExperience();
    
    console.log('🔥 ALL EPIC EFFECTS INITIALIZED SUCCESSFULLY! 🚀');
}

// Particles.js configuration
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: '#00ffff' },
                shape: { 
                    type: 'circle',
                    stroke: { width: 1, color: '#00ffff' }
                },
                opacity: { 
                    value: 0.3, 
                    random: true,
                    anim: { enable: true, speed: 0.5, opacity_min: 0.1 }
                },
                size: { 
                    value: 2, 
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.5 }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00ffff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 200, line_linked: { opacity: 0.5 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
}

// Matrix rain effect using Three.js
function initMatrixBackground() {
    if (typeof THREE !== 'undefined') {
        const canvas = document.getElementById('matrix-bg');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");
        
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ffff';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(drawMatrix, 35);
    }
}

// Typed.js effect for title
function initTypedText() {
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Keine Hose Kein Problem!',
                'ELITE GAMING CLAN',
                'LEGENDARY SQUAD',
                'CYBER WARRIORS'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
        });
    }
}

// GSAP advanced animations
function initGSAPAnimations() {
    if (typeof gsap !== 'undefined') {
        // Hero logo entrance
        gsap.from('.main-logo', {
            duration: 2,
            scale: 0,
            rotation: 360,
            ease: 'elastic.out(1, 0.3)',
            delay: 0.5
        });
        
        // Mascot animation
        gsap.from('.mascot-svg', {
            duration: 1.5,
            x: 100,
            opacity: 0,
            ease: 'power3.out',
            delay: 1
        });
        
        // Feature cards stagger animation
        gsap.from('.feature', {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.features',
                start: 'top 80%'
            }
        });
        
        // Squad cards 3D flip animation
        gsap.from('.squad-card', {
            duration: 1.2,
            rotationY: 90,
            opacity: 0,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.squad-grid',
                start: 'top 70%'
            }
        });
        
        // Countdown boxes with bounce
        gsap.from('.countdown-box', {
            duration: 1.5,
            scale: 0,
            rotation: 180,
            stagger: 0.1,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: '.countdown-section',
                start: 'top 80%'
            }
        });
        
        // Floating animation for cards
        gsap.to('.cyber-card', {
            y: '+=5',
            duration: 2,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: {
                each: 0.2,
                from: 'random'
            }
        });
    }
}

// Initialize AOS (Animate On Scroll)
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 50,
            easing: 'ease-out-cubic',
            disable: false,
            startEvent: 'DOMContentLoaded'
        });
        console.log('AOS initialized successfully');
    } else {
        console.log('AOS not available, content will be visible without animations');
    }
}

// Custom cyber effects
function initCyberEffects() {
    // Add glitch effect to titles
    const titles = document.querySelectorAll('.cyber-title');
    titles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.style.animation = 'glitch 0.3s';
        });
    });
    
    // Cyber card hover effects
    const cyberCards = document.querySelectorAll('.cyber-card');
    cyberCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateX(0)';
        });
    });
    
    // Add scan line effect
    createScanLine();
}

function createScanLine() {
    const scanLine = document.createElement('div');
    scanLine.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ffff, transparent);
        z-index: 9999;
        pointer-events: none;
        animation: scanMove 3s linear infinite;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scanMove {
            0% { top: 0; }
            100% { top: 100vh; }
        }
        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(scanLine);
}

// EPIC GAMING EFFECTS ENHANCEMENT

// Cursor trail effect
function initCursorTrail() {
    let trails = [];
    
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);
        
        trails.push(trail);
        
        setTimeout(() => {
            trail.remove();
            trails = trails.filter(t => t !== trail);
        }, 500);
        
        // Limit trails
        if (trails.length > 10) {
            trails[0].remove();
            trails.shift();
        }
    });
}

// Data streams effect
function initDataStreams() {
    const streamCount = 8;
    
    for (let i = 0; i < streamCount; i++) {
        setTimeout(() => {
            createDataStream();
        }, i * 500);
    }
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            createDataStream();
        }
    }, 2000);
}

function createDataStream() {
    const stream = document.createElement('div');
    stream.className = 'data-stream';
    stream.style.left = Math.random() * window.innerWidth + 'px';
    stream.style.animationDuration = (2 + Math.random() * 3) + 's';
    stream.style.opacity = 0.3 + Math.random() * 0.7;
    
    document.body.appendChild(stream);
    
    setTimeout(() => {
        stream.remove();
    }, 5000);
}

// Epic screen shake on certain actions
function epicScreenShake() {
    document.body.style.animation = 'glitch-screen 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

// Advanced particle system for header
function initAdvancedParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 150, density: { enable: true, value_area: 800 } },
                color: { value: ['#00ffff', '#ff0080', '#00ff80'] },
                shape: { 
                    type: ['circle', 'triangle', 'edge'],
                    stroke: { width: 2, color: '#00ffff' }
                },
                opacity: { 
                    value: 0.6, 
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: { 
                    value: 4, 
                    random: true,
                    anim: { enable: true, speed: 4, size_min: 0.3, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00ffff',
                    opacity: 0.4,
                    width: 1,
                    shadow: { enable: true, color: '#00ffff', blur: 5 }
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
        });
    }
}

// Epic countdown with enhanced effects
function epicCountdownUpdate() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now
    
    const now = new Date();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownBoxes = document.querySelectorAll('.countdown-box');
        if (countdownBoxes.length >= 4) {
            countdownBoxes[0].firstChild.textContent = String(days).padStart(2, '0');
            countdownBoxes[1].firstChild.textContent = String(hours).padStart(2, '0');
            countdownBoxes[2].firstChild.textContent = String(minutes).padStart(2, '0');
            countdownBoxes[3].firstChild.textContent = String(seconds).padStart(2, '0');
            
            // Epic pulse effect on seconds change
            const currentSeconds = parseInt(countdownBoxes[3].firstChild.textContent);
            if (seconds !== currentSeconds) {
                countdownBoxes[3].style.animation = 'cyber-pulse 0.5s ease, epic-loading 0.3s ease';
                setTimeout(() => {
                    countdownBoxes[3].style.animation = 'cyber-pulse 2s ease-in-out infinite';
                }, 500);
            }
        }
    }
}

// Enhanced mascot with epic interactions
function epicMascotEffects() {
    const mascot = document.querySelector('#mascot-dude');
    const shorts = document.querySelector('#mascot-shorts');
    
    if (mascot) {
        // Epic click effect
        mascot.addEventListener('click', () => {
            epicScreenShake();
            mascot.style.filter = 'drop-shadow(0 0 50px #00ffff) saturate(2) contrast(1.5)';
            setTimeout(() => {
                mascot.style.filter = '';
            }, 1000);
        });
        
        // Enhanced scroll animation
        let lastScrollY = 0;
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const scrollDirection = scrolled > lastScrollY ? 1 : -1;
            lastScrollY = scrolled;
            
            if (typeof gsap !== 'undefined') {
                // Epic mascot rotation and tilt
                const rotation = Math.sin(scrolled * 0.01) * 10;
                const tilt = scrollDirection * Math.min(scrolled * 0.05, 15);
                
                gsap.set(mascot, {
                    rotation: rotation,
                    rotationY: tilt,
                    transformOrigin: 'center center'
                });
                
                // Epic shorts animation with bounce
                if (shorts) {
                    const translateY = Math.sin(scrolled * 0.02) * 20 + scrolled * 0.1;
                    const skew = Math.sin(scrolled * 0.03) * 5;
                    
                    gsap.set(shorts, {
                        y: translateY,
                        skewX: skew,
                        transformOrigin: 'center center'
                    });
                }
            }
        });
    }
}

// Epic sound effects (if audio is available)
function initEpicSounds() {
    const sounds = {
        hover: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+j2wmkdAzWH0fPTfC0FKnTB5+OVRwsZXbHu7aBOEg=='),
        click: new Audio('data:audio/wav;base64,UklGRmgAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAA=')
    };
    
    // Add epic hover sounds
    document.querySelectorAll('.cyber-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (sounds.hover && typeof sounds.hover.play === 'function') {
                sounds.hover.currentTime = 0;
                sounds.hover.volume = 0.1;
                sounds.hover.play().catch(() => {}); // Silent fail if no audio
            }
        });
    });
}

// Epic background parallax enhancement
function epicParallaxEffect() {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallax = scrolled * 0.5;
            const blur = Math.min(scrolled * 0.01, 5);
            const hue = scrolled * 0.1;
            
            parallaxBg.style.transform = `translate3d(0, ${parallax}px, 0)`;
            parallaxBg.style.filter = `blur(${blur}px) hue-rotate(${hue}deg)`;
            
            if (scrolled > 100) {
                parallaxBg.classList.add('scrolled');
            } else {
                parallaxBg.classList.remove('scrolled');
            }
        });
    }
}

// Initialize all epic effects
function initEpicEffects() {
    console.log('🔥 Initializing EPIC gaming effects...');
    
    initCursorTrail();
    initDataStreams();
    initAdvancedParticles();
    epicMascotEffects();
    initEpicSounds();
    epicParallaxEffect();
    
    // Replace normal countdown with epic version
    setInterval(epicCountdownUpdate, 1000);
    
    // Initialize HUD
    initEpicHUD();
    // Display console art
    displayEpicConsoleArt();
    // Activate easter eggs
    initEpicEasterEggs();
    
    console.log('🚀 EPIC effects loaded successfully!');
}

// Epic HUD system
function initEpicHUD() {
    const fpsCounter = document.querySelector('.fps-value');
    const pingIndicator = document.querySelector('.ping-value');
    
    if (fpsCounter) {
        // Simulate dynamic FPS counter
        setInterval(() => {
            const fps = 120 + Math.floor(Math.random() * 24); // 120-144 FPS
            fpsCounter.textContent = fps;
            
            if (fps > 140) {
                fpsCounter.style.color = '#00ff00';
            } else if (fps > 120) {
                fpsCounter.style.color = '#ffff00';
            } else {
                fpsCounter.style.color = '#ff8800';
            }
        }, 100);
    }
    
    if (pingIndicator) {
        // Simulate dynamic ping
        setInterval(() => {
            const ping = 8 + Math.floor(Math.random() * 20); // 8-28ms
            pingIndicator.textContent = ping + 'ms';
            
            if (ping < 15) {
                pingIndicator.style.color = '#00ff00';
            } else if (ping < 25) {
                pingIndicator.style.color = '#ffff00';
            } else {
                pingIndicator.style.color = '#ff8800';
            }
        }, 500);
    }
}

// Epic console art
function displayEpicConsoleArt() {
    console.clear();
    console.log(`
🔥🎮 KHKP GAMING CLAN - ULTRA EPIC MODE ACTIVATED 🎮🔥

    ██╗  ██╗██╗  ██╗      ██╗  ██╗██████╗ 
    ██║ ██╔╝██║  ██║      ██║ ██╔╝██╔══██╗
    █████╔╝ ███████║█████╗█████╔╝ ██████╔╝
    ██╔═██╗ ██╔══██║╚════╝██╔═██╗ ██╔═══╝ 
    ██║  ██╗██║  ██║      ██║  ██╗██║     
    ╚═╝  ╚═╝╚═╝  ╚═╝      ╚═╝  ╚═╝╚═╝     

🚀 SYSTEM STATUS: EPIC MODE ENGAGED
🔥 EFFECTS LOADED: MAXIMUM OVERDRIVE
⚡ PERFORMANCE: LEGENDARY
🎯 GAMING LEVEL: OVER 9000!

====================================
 KEINE HOSE KEIN PROBLEM - EST. 2018
====================================
    `);
    
    console.log('🎮 Epic Gaming Effects Initialized:');
    console.log('  ✅ Cursor Trail System');
    console.log('  ✅ Data Stream Effects');
    console.log('  ✅ RGB Border Animations');
    console.log('  ✅ 3D Card Transforms');
    console.log('  ✅ Hologram Mascot');
    console.log('  ✅ Epic Particle System');
    console.log('  ✅ Dynamic HUD');
    console.log('  ✅ Screen Glitch Effects');
    console.log('  ✅ Epic Sound System');
    console.log('  ✅ Parallax Enhancement');
}

// Epic easter eggs
function initEpicEasterEggs() {
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            activateEpicMode();
            konamiCode = [];
        }
    });
    
    // Secret click combo on mascot
    let clickCount = 0;
    const mascot = document.querySelector('#mascot-dude');
    if (mascot) {
        mascot.addEventListener('click', () => {
            clickCount++;
            if (clickCount >= 10) {
                activateUltraEpicMode();
                clickCount = 0;
            }
        });
    }
}

function activateEpicMode() {
    console.log('🔥 EPIC MODE ACTIVATED! 🔥');
    document.body.style.animation = 'rgb-border 2s linear infinite';
    
    // Epic screen flash
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
        opacity: 0.3;
        z-index: 99999;
        pointer-events: none;
        animation: glitch-screen 0.5s ease-in-out;
    `;
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.remove();
        document.body.style.animation = '';
    }, 500);
}

function activateUltraEpicMode() {
    console.log('🚀 ULTRA EPIC MODE UNLOCKED! MAXIMUM OVERDRIVE! 🚀');
    
    // Ultra epic effects
    document.querySelectorAll('.cyber-card').forEach(card => {
        card.style.animation = 'rgb-border 0.5s linear infinite, cyber-pulse 1s ease-in-out infinite';
    });
    
    const mascot = document.querySelector('#mascot-dude');
    if (mascot) {
        mascot.style.animation = 'spin 2s linear infinite, cyber-pulse 1s ease-in-out infinite';
    }
    
    setTimeout(() => {
        document.querySelectorAll('.cyber-card').forEach(card => {
            card.style.animation = '';
        });
        if (mascot) {
            mascot.style.animation = '';
        }
    }, 5000);
}

// Enhanced Navigation scroll effect
function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;

    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Enhanced Parallax effect with multiple layers
function updateParallax() {
    const parallaxBg = document.querySelector('.bg-image');
    if (parallaxBg) {
        const scrolled = window.scrollY;
        const zoomFactor = 1 + (scrolled * 0.0003);
        const rotateZ = scrolled * 0.01;
        parallaxBg.style.transform = `scale(${zoomFactor}) rotateZ(${rotateZ}deg)`;
    }
    
    // Parallax for particles
    const particles = document.getElementById('particles-js');
    if (particles) {
        const scrolled = window.scrollY;
        particles.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
}

// Enhanced countdown with cyber effects
function updateCountdown() {
    const targetDate = new Date('2025-07-17T10:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownBoxes = document.querySelectorAll('.countdown-box');
        if (countdownBoxes.length >= 4) {
            countdownBoxes[0].firstChild.textContent = String(days).padStart(2, '0');
            countdownBoxes[1].firstChild.textContent = String(hours).padStart(2, '0');
            countdownBoxes[2].firstChild.textContent = String(minutes).padStart(2, '0');
            countdownBoxes[3].firstChild.textContent = String(seconds).padStart(2, '0');
            
            // Add pulse effect to seconds
            if (seconds !== parseInt(countdownBoxes[3].firstChild.textContent)) {
                countdownBoxes[3].style.animation = 'pulse-neon 0.3s ease';
                setTimeout(() => {
                    countdownBoxes[3].style.animation = 'pulse-neon 2s ease-in-out infinite alternate';
                }, 300);
            }
        }
    } else {
        const countdownBoxes = document.querySelectorAll('.countdown-box');
        countdownBoxes.forEach(box => {
            box.firstChild.textContent = '00';
        });
    }
}

// Enhanced mascot animation - works with inline SVG
function initDudeAnimation() {
    const mascot = document.querySelector('.mascot-svg');
    const shorts = document.querySelector('#mascot-shorts');
    
    if (mascot) {
        console.log('✅ Mascot SVG found, initializing animation');
        
        if (shorts) {
            console.log('✅ Mascot shorts found, enabling scroll animation');
        } else {
            console.warn('⚠️ Mascot shorts not found');
        }
        
        // Simple hover animation for the mascot
        mascot.addEventListener('mouseenter', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(mascot, {
                    duration: 0.3,
                    scale: 1.1,
                    rotation: 5,
                    ease: 'power2.out'
                });
            }
        });
        
        mascot.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(mascot, {
                    duration: 0.3,
                    scale: 1,
                    rotation: 0,
                    ease: 'power2.out'
                });
            }
        });
        
        // Scroll-based animation for mascot and shorts
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const maxScroll = 500;
            
            // Rotate the entire mascot
            const rotation = Math.min(scrolled * 0.02, 10);
            
            if (typeof gsap !== 'undefined') {
                gsap.set(mascot, {
                    rotation: rotation,
                    transformOrigin: 'center center'
                });
                
                // Animate shorts separately if found
                if (shorts) {
                    const translateY = Math.min(scrolled / 8, maxScroll / 8);
                    gsap.set(shorts, {
                        y: translateY,
                        transformOrigin: 'center center'
                    });
                }
            } else {
                mascot.style.transform = `rotate(${rotation}deg)`;
                
                if (shorts) {
                    const translateY = Math.min(scrolled / 8, maxScroll / 8);
                    shorts.style.transform = `translateY(${translateY}px)`;
                }
            }
        });
        
        // Floating animation
        if (typeof gsap !== 'undefined') {
            gsap.to(mascot, {
                y: '+=10',
                duration: 2,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: -1
            });
        }
    } else {
        console.warn('⚠️ Mascot SVG not found');
    }
}

// Smooth scrolling with easing
function initSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                // GSAP smooth scroll
                if (typeof gsap !== 'undefined') {
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: offsetTop,
                        ease: 'power3.inOut'
                    });
                } else {
                    // Fallback smooth scroll
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Debug initialization
function debugInit() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const bgImage = document.querySelector('.bg-image');
    
    console.log('🎮 KHKP Ultra-Modern Gaming Site Initialized');
    console.log('🚀 Effects loaded:', {
        particles: typeof particlesJS !== 'undefined',
        gsap: typeof gsap !== 'undefined',
        aos: typeof AOS !== 'undefined',
        typed: typeof Typed !== 'undefined',
        three: typeof THREE !== 'undefined'
    });
    
    if (parallaxBg) {
        console.log('✅ Parallax background element found');
    } else {
        console.warn('⚠️ Parallax background element not found');
    }
    
    if (bgImage) {
        console.log('✅ Background image element found:', bgImage.src);
        bgImage.onload = () => console.log('✅ Background image loaded successfully');
        bgImage.onerror = () => console.error('❌ Background image failed to load');
    } else {
        console.warn('⚠️ Background image element not found');
    }
}

// Initialize all advanced epic features
function initAdvancedEpicFeatures() {
    console.log('🌟 Initializing Advanced Epic Features...');
    
    initHolographicModels();
    initWeatherEffects();
    initAIEpicChatbot();
    initInteractiveMiniGame();
    initThemeSwitcher();
    initSoundVisualizer();
    initRealTimeServerStatus();
    initPerformanceMonitor();
    
    console.log('🚀 All Advanced Epic Features Loaded!');
}

// HOLOGRAPHIC 3D MODELS
function initHolographicModels() {
    const hologramCanvas = document.getElementById('hologram-canvas');
    if (!hologramCanvas || typeof THREE === 'undefined') return;
    
    console.log('🌟 Initializing Holographic 3D Models...');
    
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, hologramCanvas.clientWidth / hologramCanvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: hologramCanvas, alpha: true });
    
    renderer.setSize(hologramCanvas.clientWidth, hologramCanvas.clientHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Create holographic material
    const hologramMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            opacity: { value: 0.7 }
        },
        vertexShader: `
            varying vec3 vWorldPosition;
            void main() {
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPosition.xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform float opacity;
            varying vec3 vWorldPosition;
            
            void main() {
                float fresnel = pow(1.0 + dot(normalize(vWorldPosition), vec3(0.0, 0.0, 1.0)), 2.0);
                float scan = sin(vWorldPosition.y * 10.0 + time * 3.0) * 0.5 + 0.5;
                vec3 color = mix(vec3(0.0, 1.0, 1.0), vec3(0.0, 0.5, 1.0), scan);
                gl_FragColor = vec4(color * fresnel, opacity * fresnel * scan);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending
    });
    
    // Create rotating holographic geometries
    const geometries = [
        new THREE.OctahedronGeometry(1, 2),
        new THREE.TetrahedronGeometry(1, 0),
        new THREE.IcosahedronGeometry(1, 1)
    ];
    
    const holoObjects = [];
    geometries.forEach((geo, i) => {
        const mesh = new THREE.Mesh(geo, hologramMaterial.clone());
        mesh.position.set((i - 1) * 2.5, 0, 0);
        scene.add(mesh);
        holoObjects.push(mesh);
    });
    
    camera.position.z = 5;
    
    // Animation loop
    function animateHologram() {
        requestAnimationFrame(animateHologram);
        
        const time = performance.now() * 0.001;
        
        holoObjects.forEach((obj, i) => {
            obj.rotation.x = time * (0.5 + i * 0.2);
            obj.rotation.y = time * (0.3 + i * 0.1);
            obj.position.y = Math.sin(time + i) * 0.5;
            obj.material.uniforms.time.value = time;
        });
        
        renderer.render(scene, camera);
    }
    
    animateHologram();
    
    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = hologramCanvas.clientWidth / hologramCanvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(hologramCanvas.clientWidth, hologramCanvas.clientHeight);
    });
}

// FIXED WEATHER EFFECTS SYSTEM
function initWeatherEffects() {
    const weatherCanvas = document.getElementById('weather-canvas');
    if (!weatherCanvas) {
        console.warn('Weather canvas not found');
        return;
    }
    
    console.log('🌦️ Initializing Weather Effects...');
    
    const ctx = weatherCanvas.getContext('2d');
    weatherCanvas.width = window.innerWidth;
    weatherCanvas.height = window.innerHeight;
    
    let weatherType = 'off'; // off, rain, snow, lightning
    let particles = [];
    let isAnimating = false;
    
    // Particle class for weather effects
    class WeatherParticle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * weatherCanvas.width;
            this.y = -10;
            this.speed = Math.random() * 3 + 2;
            this.size = Math.random() * 3 + 1;
            this.opacity = Math.random() * 0.6 + 0.4;
            this.angle = Math.random() * Math.PI * 2;
        }
        
        update() {
            if (weatherType === 'rain') {
                this.y += this.speed * 4;
                this.x += Math.sin(performance.now() * 0.001) * 0.5;
            } else if (weatherType === 'snow') {
                this.y += this.speed;
                this.x += Math.sin(performance.now() * 0.001 + this.y * 0.01) * 2;
                this.angle += 0.02;
            }
            
            if (this.y > weatherCanvas.height + 20) {
                this.reset();
            }
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            
            if (weatherType === 'rain') {
                ctx.strokeStyle = '#4dd0e1';
                ctx.lineWidth = this.size;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - 1, this.y + 15);
                ctx.stroke();
            } else if (weatherType === 'snow') {
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Add sparkle effect
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1;
                ctx.beginPath();
                for (let i = 0; i < 4; i++) {
                    const angle = (Math.PI * 2 * i) / 4 + this.angle;
                    const x1 = this.x + Math.cos(angle) * this.size * 2;
                    const y1 = this.y + Math.sin(angle) * this.size * 2;
                    const x2 = this.x + Math.cos(angle) * this.size * 3;
                    const y2 = this.y + Math.sin(angle) * this.size * 3;
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                }
                ctx.stroke();
            }
            
            ctx.restore();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < 100; i++) {
        particles.push(new WeatherParticle());
    }
    
    // Lightning effect
    function drawLightning() {
        if (weatherType === 'lightning' && Math.random() < 0.002) {
            ctx.save();
            ctx.globalAlpha = 0.9;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 3;
            ctx.shadowBlur = 30;
            ctx.shadowColor = '#00ffff';
            
            const startX = Math.random() * weatherCanvas.width;
            let currentX = startX;
            let currentY = 0;
            
            ctx.beginPath();
            ctx.moveTo(currentX, currentY);
            
            while (currentY < weatherCanvas.height) {
                currentX += (Math.random() - 0.5) * 80;
                currentY += Math.random() * 80 + 30;
                ctx.lineTo(currentX, currentY);
            }
            
            ctx.stroke();
            ctx.restore();
            
            // Flash effect
            const flash = document.createElement('div');
            flash.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(255, 255, 255, 0.3);
                pointer-events: none;
                z-index: 9999;
            `;
            document.body.appendChild(flash);
            
            setTimeout(() => {
                flash.remove();
            }, 100);
        }
    }
    
    // Animation loop
    function animateWeather() {
        if (!isAnimating) return;
        
        ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);
        
        if (weatherType === 'rain' || weatherType === 'snow') {
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
        }
        
        if (weatherType === 'lightning') {
            drawLightning();
        }
        
        requestAnimationFrame(animateWeather);
    }
    
    // Weather controls
    const weatherControls = document.createElement('div');
    weatherControls.className = 'weather-controls';
    weatherControls.innerHTML = `
        <h4>Weather FX</h4>
        <button class="weather-btn" data-weather="rain">Rain</button>
        <button class="weather-btn" data-weather="snow">Snow</button>
        <button class="weather-btn" data-weather="lightning">Lightning</button>
        <button class="weather-btn active" data-weather="off">Off</button>
    `;
    document.body.appendChild(weatherControls);
    
    // Weather control event listeners
    weatherControls.addEventListener('click', (e) => {
        if (e.target.classList.contains('weather-btn')) {
            const newWeatherType = e.target.dataset.weather;
            
            // Update active button
            weatherControls.querySelectorAll('.weather-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Change weather
            changeWeather(newWeatherType);
        }
    });
    
    // Global weather change function
    function changeWeather(type) {
        weatherType = type;
        
        if (type === 'off') {
            weatherCanvas.classList.remove('active');
            isAnimating = false;
        } else {
            weatherCanvas.classList.add('active');
            isAnimating = true;
            animateWeather();
        }
        
        console.log(`🌦️ Weather changed to: ${type}`);
    }
    
    // Make changeWeather global for external access
    window.changeWeather = changeWeather;
    
    // Resize handler
    window.addEventListener('resize', () => {
        weatherCanvas.width = window.innerWidth;
        weatherCanvas.height = window.innerHeight;
    });
    
    console.log('🌦️ Weather effects system ready!');
}

// AI-POWERED EPIC CHATBOT
function initAIEpicChatbot() {
    const chatContainer = document.querySelector('.ai-chat-container');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input');
    const chatSend = document.querySelector('.chat-send');
    
    if (!chatContainer) return;
    
    console.log('🤖 Initializing AI Epic Chatbot...');
    
    const responses = {
        greetings: [
            "Welcome to KHKP, legendary gamer! 🎮",
            "Greetings, cyber warrior! Ready to dominate? ⚡",
            "Hey there, elite player! What brings you to our digital realm? 🚀"
        ],
        gaming: [
            "Our squad dominates every battlefield! Want to join the legends? 🔥",
            "We're currently recruiting epic gamers for our next tournament! 💪",
            "KHKP clan stats: 100% legendary, 0% noobs allowed! 😎"
        ],
        clan: [
            "KHKP has been crushing the competition since 2018! 🏆",
            "We're not just a clan, we're a family of gaming legends! 👑",
            "No pants, no problem - that's our motto! 😂"
        ],
        random: [
            "Did you know our mascot can fly? Try scrolling to see! ✈️",
            "Pro tip: Use the Konami code for epic surprises! 🎯",
            "Our servers run at legendary speed - just like our reflexes! ⚡"
        ]
    };
    
    function addMessage(text, isBot = false) {
        const message = document.createElement('div');
        message.className = `chat-message ${isBot ? 'bot' : 'user'}`;
        message.innerHTML = `
            <div class="message-avatar">${isBot ? '🤖' : '👤'}</div>
            <div class="message-text">${text}</div>
        `;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Epic typing effect
        if (isBot) {
            message.style.opacity = '0';
            message.style.transform = 'translateY(20px)';
            setTimeout(() => {
                message.style.transition = 'all 0.3s ease';
                message.style.opacity = '1';
                message.style.transform = 'translateY(0)';
            }, 100);
        }
    }
    
    function getBotResponse(userInput) {
        const input = userInput.toLowerCase();
        let responseCategory = 'random';
        
        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
            responseCategory = 'greetings';
        } else if (input.includes('game') || input.includes('play') || input.includes('match')) {
            responseCategory = 'gaming';
        } else if (input.includes('clan') || input.includes('khkp') || input.includes('team')) {
            responseCategory = 'clan';
        }
        
        const responses_list = responses[responseCategory];
        return responses_list[Math.floor(Math.random() * responses_list.length)];
    }
    
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        
        addMessage(text, false);
        chatInput.value = '';
        
        // Bot response with delay
        setTimeout(() => {
            const response = getBotResponse(text);
            addMessage(response, true);
        }, 1000 + Math.random() * 1000);
    }
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Welcome message
    setTimeout(() => {
        addMessage("Welcome to KHKP AI Assistant! Ask me anything about our epic gaming clan! 🎮", true);
    }, 1000);
}

// INTERACTIVE MINI-GAME
function initInteractiveMiniGame() {
    const gameContainer = document.querySelector('.mini-game-container');
    const gameArea = document.querySelector('.game-area');
    const startBtn = document.querySelector('.game-start');
    const scoreDisplay = document.querySelector('.game-score');
    
    if (!gameContainer) return;
    
    console.log('🎯 Initializing Interactive Mini-Game...');
    
    let gameActive = false;
    let score = 0;
    let targets = [];
    
    class GameTarget {
        constructor() {
            this.element = document.createElement('div');
            this.element.className = 'game-target';
            this.element.style.cssText = `
                position: absolute;
                width: 40px;
                height: 40px;
                background: linear-gradient(45deg, #ff0080, #00ffff);
                border-radius: 50%;
                cursor: crosshair;
                box-shadow: 0 0 20px #00ffff;
                animation: target-pulse 1s ease-in-out infinite;
            `;
            
            this.x = Math.random() * (gameArea.clientWidth - 40);
            this.y = Math.random() * (gameArea.clientHeight - 40);
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
            
            this.element.addEventListener('click', () => this.hit());
            gameArea.appendChild(this.element);
            
            // Auto-remove after 3 seconds
            this.timeout = setTimeout(() => {
                this.remove();
            }, 3000);
        }
        
        hit() {
            score += 10;
            scoreDisplay.textContent = score;
            this.element.style.animation = 'target-hit 0.3s ease';
            setTimeout(() => {
                this.remove();
            }, 300);
        }
        
        remove() {
            if (this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
            clearTimeout(this.timeout);
            targets = targets.filter(t => t !== this);
        }
    }
    
    function startGame() {
        if (gameActive) return;
        
        gameActive = true;
        score = 0;
        scoreDisplay.textContent = score;
        startBtn.textContent = 'Game Active!';
        startBtn.disabled = true;
        
        // Spawn targets
        const gameInterval = setInterval(() => {
            if (gameActive && targets.length < 5) {
                targets.push(new GameTarget());
            }
        }, 800);
        
        // End game after 30 seconds
        setTimeout(() => {
            gameActive = false;
            startBtn.textContent = 'Start Game';
            startBtn.disabled = false;
            clearInterval(gameInterval);
            
            // Clear remaining targets
            targets.forEach(target => target.remove());
            
            alert(`Game Over! Final Score: ${score} points! 🎯`);
        }, 30000);
    }
    
    startBtn.addEventListener('click', startGame);
    
    // Add game styles
    const gameStyles = document.createElement('style');
    gameStyles.textContent = `
        @keyframes target-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        @keyframes target-hit {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(gameStyles);
}

// THEME SWITCHER
function initThemeSwitcher() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    console.log('🎨 Initializing Theme Switcher...');
    
    const themes = {
        cyber: {
            primary: '#00ffff',
            secondary: '#ff0080',
            accent: '#00ff80',
            bg: '#0a0a0a'
        },
        neon: {
            primary: '#ff00ff',
            secondary: '#ffff00',
            accent: '#00ff00',
            bg: '#1a0a1a'
        },
        matrix: {
            primary: '#00ff00',
            secondary: '#008800',
            accent: '#004400',
            bg: '#000000'
        },
        fire: {
            primary: '#ff4400',
            secondary: '#ff8800',
            accent: '#ffaa00',
            bg: '#2a1100'
        }
    };
    
    let currentTheme = 'cyber';
    
    function applyTheme(themeName) {
        if (!themes[themeName]) return;
        
        const theme = themes[themeName];
        const root = document.documentElement;
        
        root.style.setProperty('--accent', theme.primary);
        root.style.setProperty('--accent-2', theme.secondary);
        root.style.setProperty('--accent-3', theme.accent);
        root.style.setProperty('--main-bg', theme.bg);
        
        // Store preference
        localStorage.setItem('khkp-theme', themeName);
        currentTheme = themeName;
        
        // Epic transition effect
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
        
        console.log(`🎨 Theme changed to: ${themeName}`);
    }
    
    themeToggle.addEventListener('click', () => {
        const themeNames = Object.keys(themes);
        const currentIndex = themeNames.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeNames.length;
        applyTheme(themeNames[nextIndex]);
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('khkp-theme');
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
}

// SOUND VISUALIZER
function initSoundVisualizer() {
    const visualizerCanvas = document.getElementById('visualizer-canvas');
    if (!visualizerCanvas) return;
    
    console.log('🎵 Initializing Sound Visualizer...');
    
    const ctx = visualizerCanvas.getContext('2d');
    visualizerCanvas.width = 300;
    visualizerCanvas.height = 150;
    
    let audioContext, analyser, dataArray;
    let isListening = false;
    
    async function startAudioVisualization() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            const source = audioContext.createMediaStreamSource(stream);
            
            source.connect(analyser);
            analyser.fftSize = 256;
            dataArray = new Uint8Array(analyser.frequencyBinCount);
            
            isListening = true;
            visualize();
        } catch (err) {
            console.log('Microphone access denied or not available');
            // Create demo visualization instead
            createDemoVisualization();
        }
    }
    
    function createDemoVisualization() {
        dataArray = new Uint8Array(128);
        isListening = true;
        
        function generateDemoData() {
            for (let i = 0; i < dataArray.length; i++) {
                dataArray[i] = Math.random() * 255 * (Math.sin(performance.now() * 0.001 + i * 0.1) * 0.5 + 0.5);
            }
        }
        
        function demoVisualize() {
            if (!isListening) return;
            
            generateDemoData();
            visualize();
            requestAnimationFrame(demoVisualize);
        }
        
        demoVisualize();
        return;
    }
    
    function visualize() {
        if (!isListening) return;
        
        if (analyser) {
            analyser.getByteFrequencyData(dataArray);
        }
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        
        const barWidth = visualizerCanvas.width / dataArray.length * 2;
        let x = 0;
        
        for (let i = 0; i < dataArray.length; i++) {
            const barHeight = (dataArray[i] / 255) * visualizerCanvas.height;
            
            const r = Math.floor(barHeight + 25 * (i / dataArray.length));
            const g = Math.floor(250 * (i / dataArray.length));
            const b = 50;
            
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight);
            
            x += barWidth + 1;
        }
        
        if (analyser) {
            requestAnimationFrame(visualize);
        }
    }
    
    // Auto-start demo visualization
    createDemoVisualization();
    
    // Add microphone button
    const micBtn = document.createElement('button');
    micBtn.textContent = '🎤 Use Mic';
    micBtn.style.cssText = `
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: rgba(0, 255, 255, 0.2);
        border: 1px solid #00ffff;
        color: #00ffff;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    `;
    micBtn.onclick = startAudioVisualization;
    
    const visualizerContainer = document.querySelector('.sound-visualizer');
    if (visualizerContainer) {
        visualizerContainer.style.position = 'relative';
        visualizerContainer.appendChild(micBtn);
    }
}

// REAL-TIME SERVER STATUS
function initRealTimeServerStatus() {
    const serverList = document.querySelector('.server-list');
    if (!serverList) return;
    
    console.log('🖥️ Initializing Real-Time Server Status...');
    
    const servers = [
        { name: 'EU West', status: 'online', ping: 12, players: 847 },
        { name: 'US East', status: 'online', ping: 98, players: 632 },
        { name: 'Asia Pacific', status: 'maintenance', ping: 0, players: 0 },
        { name: 'Brazil', status: 'online', ping: 156, players: 234 }
    ];
    
    function updateServerStatus() {
        serverList.innerHTML = '';
        
        servers.forEach(server => {
            // Simulate dynamic changes
            if (server.status === 'online') {
                server.ping += Math.floor(Math.random() * 6 - 3); // ±3ms variation
                server.ping = Math.max(1, server.ping);
                server.players += Math.floor(Math.random() * 21 - 10); // ±10 players
                server.players = Math.max(0, Math.min(1000, server.players));
            }
            
            const statusColor = server.status === 'online' ? '#00ff00' : 
                               server.status === 'maintenance' ? '#ffaa00' : '#ff0000';
            
            const serverElement = document.createElement('div');
            serverElement.className = 'server-item';
            serverElement.innerHTML = `
                <div class="server-name">${server.name}</div>
                <div class="server-status" style="color: ${statusColor};">
                    ● ${server.status.toUpperCase()}
                </div>
                <div class="server-ping">${server.status === 'online' ? server.ping + 'ms' : 'N/A'}</div>
                <div class="server-players">${server.players}/1000</div>
            `;
            
            serverList.appendChild(serverElement);
        });
    }
    
    // Update every 3 seconds
    updateServerStatus();
    setInterval(updateServerStatus, 3000);
}

// PERFORMANCE MONITOR
function initPerformanceMonitor() {
    const perfMonitor = document.querySelector('.perf-monitor');
    if (!perfMonitor) return;
    
    console.log('📊 Initializing Performance Monitor...');
    
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 0;
    
    function updatePerformance() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime >= lastTime + 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
        }
        
        // Mock data for CPU, RAM, GPU
        const cpu = 15 + Math.random() * 25; // 15-40%
        const ram = 60 + Math.random() * 20; // 60-80%
        const gpu = 45 + Math.random() * 30; // 45-75%
        
        perfMonitor.innerHTML = `
            <div class="perf-item">
                <span class="perf-label">FPS:</span>
                <span class="perf-value" style="color: ${fps > 50 ? '#00ff00' : fps > 30 ? '#ffaa00' : '#ff0000'}">${fps}</span>
            </div>
            <div class="perf-item">
                <span class="perf-label">CPU:</span>
                <span class="perf-value" style="color: ${cpu < 30 ? '#00ff00' : cpu < 60 ? '#ffaa00' : '#ff0000'}">${cpu.toFixed(1)}%</span>
            </div>
            <div class="perf-item">
                <span class="perf-label">RAM:</span>
                <span class="perf-value" style="color: ${ram < 70 ? '#00ff00' : ram < 85 ? '#ffaa00' : '#ff0000'}">${ram.toFixed(1)}%</span>
            </div>
            <div class="perf-item">
                <span class="perf-label">GPU:</span>
                <span class="perf-value" style="color: ${gpu < 60 ? '#00ff00' : gpu < 80 ? '#ffaa00' : '#ff0000'}">${gpu.toFixed(1)}%</span>
            </div>
        `;
        
        requestAnimationFrame(updatePerformance);
    }
    
    updatePerformance();
}

// ULTIMATE EPIC PARTICLE ENHANCEMENT
function initUltimateParticleSystem() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 200, 
                    density: { enable: true, value_area: 1000 } 
                },
                color: { 
                    value: ['#00ffff', '#ff0080', '#00ff80', '#ffff00', '#ff4400'] 
                },
                shape: { 
                    type: ['circle', 'triangle', 'star', 'polygon'],
                    stroke: { width: 2, color: '#00ffff' },
                    polygon: { nb_sides: 6 }
                },
                opacity: { 
                    value: 0.8, 
                    random: true,
                    anim: { 
                        enable: true, 
                        speed: 2, 
                        opacity_min: 0.1, 
                        sync: false 
                    }
                },
                size: { 
                    value: 6, 
                    random: true,
                    anim: { 
                        enable: true, 
                        speed: 6, 
                        size_min: 0.5, 
                        sync: false 
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: '#00ffff',
                    opacity: 0.6,
                    width: 2,
                    shadow: { 
                        enable: true, 
                        color: '#00ffff', 
                        blur: 8 
                    }
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'bounce',
                    bounce: true,
                    attract: { 
                        enable: true, 
                        rotateX: 800, 
                        rotateY: 1600 
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { 
                        enable: true, 
                        mode: ['repulse', 'bubble'] 
                    },
                    onclick: { 
                        enable: true, 
                        mode: ['push', 'remove'] 
                    },
                    resize: true
                },
                modes: {
                    grab: { 
                        distance: 500, 
                        line_linked: { opacity: 1 } 
                    },
                    bubble: { 
                        distance: 300, 
                        size: 60, 
                        duration: 1, 
                        opacity: 1, 
                        speed: 5 
                    },
                    repulse: { 
                        distance: 150, 
                        duration: 0.8 
                    },
                    push: { particles_nb: 8 },
                    remove: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
        
        console.log('🌟 Ultimate particle system activated!');
    }
}

// EPIC CONSOLE COMMANDS SYSTEM
function initEpicConsoleCommands() {
    // Override console.log to add epic styling
    const originalLog = console.log;
    console.log = function(...args) {
        originalLog.apply(console, [
            '%c🎮 KHKP SYSTEM:', 
            'color: #00ffff; font-weight: bold; text-shadow: 0 0 10px #00ffff;',
            ...args
        ]);
    };
    
    // Add global epic commands
    window.khkp = {
        activateGodMode: () => {
            document.body.style.animation = 'rgb-border 2s linear infinite, cyber-pulse 1s ease-in-out infinite';
            console.log('🔥 GOD MODE ACTIVATED! 🔥');
            setTimeout(() => {
                document.body.style.animation = '';
            }, 10000);
        },
        
        maxOverdrive: () => {
            document.querySelectorAll('.cyber-card').forEach(card => {
                card.style.animation = 'rgb-border 0.3s linear infinite, cyber-pulse 0.5s ease-in-out infinite, spin 3s linear infinite';
            });
            console.log('🚀 MAXIMUM OVERDRIVE ENGAGED! 🚀');
        },
        
        epicReset: () => {
            document.querySelectorAll('.cyber-card').forEach(card => {
                card.style.animation = '';
            });
            document.body.style.animation = '';
            console.log('✨ System reset to epic normal mode');
        },
        
        showSecrets: () => {
            console.log(`
🎯 KHKP SECRET COMMANDS:
  • khkp.activateGodMode() - Ultimate power mode
  • khkp.maxOverdrive() - Everything spins and glows
  • khkp.epicReset() - Reset all effects
  • khkp.launchFireworks() - Epic celebration
  • khkp.matrixMode() - Enter the matrix
  • Konami Code: ↑↑↓↓←→←→BA - Secret mode
  • Click mascot 10 times - Ultra epic mode
            `);
        },
        
        launchFireworks: () => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    createFirework();
                }, i * 200);
            }
            console.log('🎆 EPIC FIREWORKS LAUNCHED! 🎆');
        },
        
        matrixMode: () => {
            document.body.style.background = '#000000';
            document.body.style.color = '#00ff00';
            document.querySelectorAll('*').forEach(el => {
                el.style.color = '#00ff00';
                el.style.textShadow = '0 0 10px #00ff00';
            });
            console.log('🕶️ ENTERING THE MATRIX... 🕶️');
        }
    };
    
    console.log('🎮 Epic console commands initialized! Type khkp.showSecrets() for help!');
}

// EPIC FIREWORKS SYSTEM
function createFirework() {
    const firework = document.createElement('div');
    firework.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #ffffff, #00ffff, #ff0080);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight}px;
    `;
    
    document.body.appendChild(firework);
    
    // Animate firework
    if (typeof gsap !== 'undefined') {
        gsap.to(firework, {
            y: -window.innerHeight * (0.3 + Math.random() * 0.4),
            duration: 1 + Math.random(),
            ease: 'power2.out',
            onComplete: () => {
                explodeFirework(firework);
            }
        });
    } else {
        setTimeout(() => {
            explodeFirework(firework);
        }, 1000 + Math.random() * 1000);
    }
}

function explodeFirework(firework) {
    const rect = firework.getBoundingClientRect();
    firework.remove();
    
    // Create explosion particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: ${['#00ffff', '#ff0080', '#00ff80', '#ffff00', '#ffffff'][Math.floor(Math.random() * 5)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            left: ${rect.left}px;
            top: ${rect.top}px;
            box-shadow: 0 0 10px currentColor;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = 50 + Math.random() * 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        if (typeof gsap !== 'undefined') {
            gsap.to(particle, {
                x: vx,
                y: vy,
                opacity: 0,
                duration: 1 + Math.random(),
                ease: 'power2.out',
                onComplete: () => {
                    particle.remove();
                }
            });
        } else {
            setTimeout(() => {
                particle.remove();
            }, 1500);
        }
    }
}

// EPIC BACKGROUND MATRIX ENHANCEMENT
function initEpicMatrixBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function drawEpicMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        
        requestAnimationFrame(drawEpicMatrix);
    }
    
    drawEpicMatrix();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ULTRA EPIC LOADING SCREEN
function showEpicLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'epic-loading';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">
                <h1>KHKP</h1>
                <div class="loading-subtitle">KEINE HOSE KEIN PROBLEM</div>
            </div>
            <div class="loading-bar-container">
                <div class="loading-bar"></div>
                <div class="loading-text">INITIALIZING EPIC MODE...</div>
            </div>
            <div class="loading-effects"></div>
        </div>
    `;
    
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(45deg, #000000, #0a0a0f, #1a1a24);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #00ffff;
        font-family: 'Hestia', sans-serif;
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Add loading styles
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        .loading-content {
            text-align: center;
            animation: loading-pulse 2s ease-in-out infinite;
        }
        
        .loading-logo h1 {
            font-size: 4rem;
            margin: 0;
            text-shadow: 0 0 30px #00ffff;
            animation: loading-glow 1s ease-in-out infinite alternate;
        }
        
        .loading-subtitle {
            font-size: 1.2rem;
            margin: 10px 0 30px 0;
            opacity: 0.8;
        }
        
        .loading-bar-container {
            width: 300px;
            margin: 0 auto;
        }
        
        .loading-bar {
            width: 100%;
            height: 4px;
            background: rgba(0, 255, 255, 0.2);
            border-radius: 2px;
            overflow: hidden;
            position: relative;
        }
        
        .loading-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, #00ffff, #ff0080, #00ff80, #00ffff);
            transform: translateX(-100%);
            animation: loading-progress 3s ease-in-out forwards;
        }
        
        .loading-text {
            margin-top: 20px;
            font-size: 0.9rem;
            opacity: 0.7;
        }
        
        @keyframes loading-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        @keyframes loading-glow {
            0% { text-shadow: 0 0 30px #00ffff; }
            100% { text-shadow: 0 0 50px #00ffff, 0 0 70px #ff0080; }
        }
        
        @keyframes loading-progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
        }
    `;
    
    document.head.appendChild(loadingStyles);
    
    // Remove loading screen after delay
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            loadingScreen.remove();
            loadingStyles.remove();
        }, 1000);
    }, 4000);
}

// EPIC PERFORMANCE OPTIMIZATIONS
function optimizeEpicPerformance() {
    // Throttle scroll events for better performance
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function(e) {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                if (originalScrollHandler) originalScrollHandler(e);
                scrollTimeout = null;
            }, 16); // ~60fps
        }
    };
    
    // Optimize animations for mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile');
        
        // Reduce particle count on mobile
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            particlesContainer.style.opacity = '0.5';
        }
        
        // Disable some heavy effects on mobile
        const heavyEffects = document.querySelectorAll('.data-stream, .cursor-trail');
        heavyEffects.forEach(effect => {
            effect.style.display = 'none';
        });
    }
    
    // Memory management for particles
    setInterval(() => {
        const particles = document.querySelectorAll('.cursor-trail, .data-stream');
        if (particles.length > 50) {
            particles.forEach((particle, index) => {
                if (index < particles.length - 30) {
                    particle.remove();
                }
            });
        }
    }, 5000);
    
    console.log('⚡ Epic performance optimizations applied!');
}

// EPIC ACCESSIBILITY ENHANCEMENTS
function initEpicAccessibility() {
    // Add keyboard navigation for interactive elements
    const interactiveElements = document.querySelectorAll('.cyber-card, .squad-card, .feature-container');
    
    interactiveElements.forEach((element, index) => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.setAttribute('aria-label', `Interactive gaming element ${index + 1}`);
        
        element.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                element.click();
                e.preventDefault();
            }
        });
    });
    
    // Add reduced motion preference support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Disable animations for users who prefer reduced motion
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add high contrast mode
    const addHighContrastToggle = () => {
        const contrastToggle = document.createElement('button');
        contrastToggle.innerHTML = '🔆';
        contrastToggle.className = 'contrast-toggle';
        contrastToggle.style.cssText = `
            position: fixed;
            top: 250px;
            right: 20px;
            background: linear-gradient(45deg, var(--accent), var(--accent-2));
            border: none;
            color: white;
            padding: 15px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            font-size: 18px;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        contrastToggle.onclick = () => {
            document.body.classList.toggle('high-contrast');
            contrastToggle.innerHTML = document.body.classList.contains('high-contrast') ? '🔅' : '🔆';
        };
        
        document.body.appendChild(contrastToggle);
    };
    
    addHighContrastToggle();
    
    console.log('♿ Epic accessibility features enabled!');
}

// EPIC SOCIAL MEDIA INTEGRATION
function initEpicSocialFeatures() {
    // Add share functionality
    const shareData = {
        title: 'KHKP Gaming Clan - Epic Gaming Experience',
        text: 'Check out this amazing gaming clan website with incredible effects!',
        url: window.location.href
    };
    
    // Add floating share button
    const shareButton = document.createElement('button');
    shareButton.innerHTML = '📤';
    shareButton.className = 'share-button';
    shareButton.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: linear-gradient(45deg, var(--accent), var(--accent-2));
        border: none;
        color: white;
        padding: 15px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        font-size: 18px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow);
    `;
    
    shareButton.onclick = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                console.log('🎮 Content shared successfully!');
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareData.url).then(() => {
                shareButton.innerHTML = '✅';
                setTimeout(() => {
                    shareButton.innerHTML = '📤';
                }, 2000);
                console.log('🔗 URL copied to clipboard!');
            });
        }
    };
    
    shareButton.onmouseenter = () => {
        shareButton.style.transform = 'scale(1.1)';
        shareButton.style.boxShadow = 'var(--neon-glow)';
    };
    
    shareButton.onmouseleave = () => {
        shareButton.style.transform = 'scale(1)';
        shareButton.style.boxShadow = 'var(--shadow)';
    };
    
    document.body.appendChild(shareButton);
    
    console.log('📱 Epic social features activated!');
}

// EPIC PWA (Progressive Web App) FEATURES
function initEpicPWAFeatures() {
    // Add install prompt for mobile
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button
        const installButton = document.createElement('button');
        installButton.innerHTML = '⬇️ Install App';
        installButton.className = 'install-button';
        installButton.style.cssText = `
            position: fixed;
            bottom: 160px;
            right: 20px;
            background: linear-gradient(45deg, var(--accent-3), var(--accent));
            border: none;
            color: white;
            padding: 10px 15px;
            border-radius: 25px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            font-size: 14px;
            font-weight: bold;
            box-shadow: var(--shadow);
        `;
        
        installButton.onclick = async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                
                if (outcome === 'accepted') {
                    console.log('🎮 KHKP App installed!');
                } else {
                    console.log('App installation declined');
                }
                
                deferredPrompt = null;
                installButton.remove();
            }
        };
        
        installButton.onmouseenter = () => {
            installButton.style.transform = 'scale(1.05)';
            installButton.style.boxShadow = 'var(--neon-glow)';
        };
        
        installButton.onmouseleave = () => {
            installButton.style.transform = 'scale(1)';
            installButton.style.boxShadow = 'var(--shadow)';
        };
        
        document.body.appendChild(installButton);
    });
    
    // Add offline support message
    window.addEventListener('offline', () => {
        const offlineMsg = document.createElement('div');
        offlineMsg.innerHTML = '📡 Offline Mode - Some features may be limited';
        offlineMsg.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 68, 0, 0.9);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            z-index: 10000;
            font-weight: bold;
        `;
        
        document.body.appendChild(offlineMsg);
        
        setTimeout(() => {
            offlineMsg.remove();
        }, 5000);
    });
    
    window.addEventListener('online', () => {
        const onlineMsg = document.createElement('div');
        onlineMsg.innerHTML = '🚀 Back Online - Full epic mode restored!';
        onlineMsg.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 255, 0, 0.9);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            z-index: 10000;
            font-weight: bold;
        `;
        
        document.body.appendChild(onlineMsg);
        
        setTimeout(() => {
            onlineMsg.remove();
        }, 3000);
    });
    
    console.log('📱 Epic PWA features initialized!');
}

// FINAL EPIC INITIALIZATION
function finalizeEpicExperience() {
    // Add final touches
    optimizeEpicPerformance();
    initEpicAccessibility();
    initEpicSocialFeatures();
    initEpicPWAFeatures();
    
    // Add epic completion message
    setTimeout(() => {
        console.log(`
🎉🎮 KHKP EPIC GAMING EXPERIENCE FULLY LOADED! 🎮🎉

🔥 All systems operational:
  ✅ Advanced Particle Systems
  ✅ Holographic 3D Models  
  ✅ Weather Effects
  ✅ AI Gaming Chatbot
  ✅ Interactive Mini-Game
  ✅ Sound Visualizer
  ✅ Real-time Server Status
  ✅ Performance Monitor
  ✅ Theme Switching
  ✅ Epic Console Commands
  ✅ Accessibility Features
  ✅ PWA Support
  ✅ Social Sharing

🚀 Website Performance: LEGENDARY
⚡ Gaming Effects: MAXIMUM OVERDRIVE
🎯 User Experience: OVER 9000!

Type 'khkp.showSecrets()' for hidden commands!
        `);
    }, 6000);
    
    console.log('🌟 Epic experience finalized!');
}