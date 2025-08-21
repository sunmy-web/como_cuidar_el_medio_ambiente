// Variables globales
let currentUser = null;

// Datos de usuarios (en un entorno real, esto estaría en una base de datos)
const users = {
    'admin': 'admin123',
    'profesor': 'profesor123',
    'estudiante': 'estudiante123',
    'director': 'director123'
};

// Contenido educativo sobre medio ambiente
const environmentalContent = {
    reciclaje: {
        title: 'Reciclaje en el Perú',
        content: `
            <h3><i class="fas fa-recycle"></i> ¿Qué es el reciclaje?</h3>
            <p>El reciclaje es el proceso de convertir materiales usados en nuevos productos para prevenir el desperdicio de materiales potencialmente útiles.</p>
            
            <h4>Tipos de materiales reciclables:</h4>
            <ul>
                <li><strong>Papel y cartón:</strong> Periódicos, revistas, cajas de cartón</li>
                <li><strong>Plástico:</strong> Botellas PET, envases de yogurt, bolsas</li>
                <li><strong>Vidrio:</strong> Botellas, frascos, ventanas</li>
                <li><strong>Metal:</strong> Latas de aluminio, cobre, hierro</li>
            </ul>
            
            <h4>Beneficios del reciclaje:</h4>
            <ul>
                <li>Reduce la contaminación del aire y agua</li>
                <li>Conserva los recursos naturales</li>
                <li>Ahorra energía</li>
                <li>Reduce la cantidad de basura en rellenos sanitarios</li>
                <li>Crea empleos verdes</li>
            </ul>
            
            <h4>¿Cómo reciclar en casa?</h4>
            <ol>
                <li>Separa los materiales en contenedores diferentes</li>
                <li>Limpia los envases antes de reciclar</li>
                <li>Lleva los materiales a centros de reciclaje</li>
                <li>Participa en programas municipales de reciclaje</li>
            </ol>
            
            <div class="tip-box">
                <strong>💡 Dato interesante:</strong> En el Perú se generan aproximadamente 23,000 toneladas de residuos sólidos al día. ¡Cada persona puede marcar la diferencia!
            </div>
        `
    },
    agua: {
        title: 'Cuidado del Agua',
        content: `
            <h3><i class="fas fa-tint"></i> El Agua: Recurso Vital</h3>
            <p>El agua es esencial para la vida y el desarrollo sostenible. En el Perú, enfrentamos desafíos relacionados con la disponibilidad y calidad del agua.</p>
            
            <h4>Situación del agua en el Perú:</h4>
            <ul>
                <li>El 70% del agua se encuentra en la selva amazónica</li>
                <li>La costa (donde vive el 65% de la población) solo tiene el 2% del agua</li>
                <li>Muchas comunidades rurales no tienen acceso a agua potable</li>
            </ul>
            
            <h4>Consejos para ahorrar agua:</h4>
            <ol>
                <li>Cierra la llave mientras te cepillas los dientes</li>
                <li>Toma duchas más cortas (5-7 minutos)</li>
                <li>Repara las fugas inmediatamente</li>
                <li>Usa la lavadora solo con carga completa</li>
                <li>Recolecta agua de lluvia para regar plantas</li>
                <li>Instala dispositivos ahorradores de agua</li>
            </ol>
            
            <h4>Protección de fuentes de agua:</h4>
            <ul>
                <li>No arrojes basura a ríos, lagos o mares</li>
                <li>Evita usar químicos tóxicos cerca de fuentes de agua</li>
                <li>Participa en campañas de limpieza de ríos</li>
                <li>Protege los bosques que son fuentes de agua</li>
            </ul>
            
            <div class="tip-box">
                <strong>🌊 ¿Sabías que?</strong> Una persona necesita al menos 50 litros de agua al día para beber, cocinar y asearse. ¡Usémosla sabiamente!
            </div>
        `
    },
    reforestacion: {
        title: 'Reforestación',
        content: `
            <h3><i class="fas fa-tree"></i> Reforestación en el Perú</h3>
            <p>La reforestación es la plantación de árboles en áreas que han perdido su cobertura forestal. Es crucial para combatir el cambio climático.</p>
            
            <h4>Árboles nativos del Perú:</h4>
            <ul>
                <li><strong>Queñua:</strong> Resistente a las heladas, crece en la sierra</li>
                <li><strong>Caoba:</strong> Árbol amazónico de gran valor</li>
                <li><strong>Huarango:</strong> Ideal para zonas áridas de la costa</li>
                <li><strong>Eucalipto:</strong> Crece rápido, bueno para combustible</li>
                <li><strong>Cedro:</strong> Árbol noble de la selva</li>
            </ul>
            
            <h4>Beneficios de los árboles:</h4>
            <ul>
                <li>Absorben CO2 y producen oxígeno</li>
                <li>Previenen la erosión del suelo</li>
                <li>Regulan el ciclo del agua</li>
                <li>Proporcionan hábitat para animales</li>
                <li>Ofrecen sombra y regulan la temperatura</li>
                <li>Proporcionan madera, frutos y medicinas</li>
            </ul>
            
            <h4>Cómo plantar un árbol:</h4>
            <ol>
                <li>Elige la especie adecuada para tu zona</li>
                <li>Busca un lugar con suficiente espacio y luz</li>
                <li>Cava un hoyo del doble del tamaño de la raíz</li>
                <li>Coloca el árbol y cubre con tierra</li>
                <li>Riega abundantemente</li>
                <li>Cuida y protege el árbol joven</li>
            </ol>
            
            <div class="tip-box">
                <strong>🌳 Meta nacional:</strong> El Perú se ha comprometido a reforestar 3.2 millones de hectáreas para el 2030. ¡Tú puedes ser parte del cambio!
            </div>
        `
    },
    plasticos: {
        title: 'Reducción de Plásticos',
        content: `
            <h3><i class="fas fa-ban"></i> Reduciendo el Plástico</h3>
            <p>Los plásticos son uno de los principales contaminantes del planeta. Cada año, millones de toneladas terminan en océanos y ecosistemas.</p>
            
            <h4>Impacto del plástico:</h4>
            <ul>
                <li>Tarda entre 100 y 1000 años en degradarse</li>
                <li>Contamina océanos y mata vida marina</li>
                <li>Se acumula en cadenas alimentarias</li>
                <li>Libera químicos tóxicos al ambiente</li>
                <li>Contribuye al cambio climático</li>
            </ul>
            
            <h4>Alternativas al plástico:</h4>
            <ul>
                <li><strong>Bolsas reutilizables:</strong> De tela, yute o fibra natural</li>
                <li><strong>Botellas de agua:</strong> De vidrio o acero inoxidable</li>
                <li><strong>Utensilios:</strong> De bambú, madera o metal</li>
                <li><strong>Envases:</strong> De vidrio, papel encerado o hojas naturales</li>
                <li><strong>Sorbetes:</strong> De bambú, acero inoxidable o papel</li>
            </ul>
            
            <h4>Acciones en el hogar:</h4>
            <ol>
                <li>Compra productos con menos empaque</li>
                <li>Reutiliza envases plásticos</li>
                <li>Lleva tu propia bolsa al mercado</li>
                <li>Evita productos desechables</li>
                <li>Prefiere productos a granel</li>
                <li>Participa en campañas de limpieza</li>
            </ol>
            
            <h4>Innovaciones peruanas:</h4>
            <ul>
                <li>Platos biodegradables hechos con hojas de plátano</li>
                <li>Bolsas comestibles a base de yuca</li>
                <li>Empaques de bioplástico de cáscara de papa</li>
            </ul>
            
            <div class="tip-box">
                <strong>♻️ Regla de las 5 R:</strong> Rechazar, Reducir, Reutilizar, Reciclar y Rot (compostar). ¡Aplícala en tu vida diaria!
            </div>
        `
    }
};

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Configurar event listeners
    setupEventListeners();
    
    // Verificar si hay usuario logueado
    checkLoginStatus();
    
    // Configurar navegación suave
    setupSmoothScrolling();
    
    // Inicializar componentes interactivos
    setTimeout(() => {
        initializeComponents();
    }, 100);
}

function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    const navigationLinks = document.querySelectorAll('.nav-link');
    navigationLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Environment cards
    const envCards = document.querySelectorAll('.env-card');
    envCards.forEach(card => {
        card.addEventListener('click', handleEnvironmentCard);
    });
    
    // Region buttons
    const regionBtns = document.querySelectorAll('.region-btn');
    regionBtns.forEach(btn => {
        btn.addEventListener('click', handleRegionChange);
    });
    
    // Modal close
    const modal = document.getElementById('envModal');
    const closeBtn = document.querySelector('.close');
    if (modal && closeBtn) {
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Learn more buttons
    const learnMoreBtns = document.querySelectorAll('.learn-more');
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = e.target.closest('.env-card');
            if (card) {
                const topic = card.dataset.topic;
                showEnvironmentalModal(topic);
            }
        });
    });
    
    // Hero buttons
    const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    heroButtons.forEach(btn => {
        if (btn.onclick) return; // Si ya tiene un onclick, no agregar listener
        btn.addEventListener('click', function() {
            if (this.textContent.includes('Medio Ambiente')) {
                scrollToSection('medio-ambiente');
            } else if (this.textContent.includes('Perú')) {
                scrollToSection('peru');
            }
        });
    });
    
    // Window resize for responsive handling
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Scroll events for animations
    window.addEventListener('scroll', debounce(handleScroll, 10));
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('envModal');
            if (modal && modal.style.display === 'block') {
                closeModal();
            }
        }
    });
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !password) {
        showAlert('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Verificar credenciales
    if (users[username] && users[username] === password) {
        currentUser = username;
        
        // Animación de éxito
        showAlert('¡Bienvenido al sistema educativo!', 'success');
        
        setTimeout(() => {
            // Ocultar login screen con animación
            const loginScreen = document.getElementById('loginScreen');
            const mainContent = document.getElementById('mainContent');
            
            if (loginScreen && mainContent) {
                loginScreen.style.transition = 'all 0.5s ease';
                loginScreen.style.opacity = '0';
                loginScreen.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    loginScreen.classList.add('hidden');
                    mainContent.classList.remove('hidden');
                    
                    // Animación de entrada del contenido principal
                    mainContent.style.opacity = '0';
                    mainContent.style.transform = 'translateY(20px)';
                    mainContent.style.transition = 'all 0.5s ease';
                    
                    setTimeout(() => {
                        mainContent.style.opacity = '1';
                        mainContent.style.transform = 'translateY(0)';
                        
                        // Inicializar componentes después de mostrar el contenido
                        setTimeout(() => {
                            initializeComponents();
                        }, 500);
                        
                    }, 100);
                    
                }, 300);
            }
            
        }, 1500);
        
    } else {
        showAlert('Usuario o contraseña incorrectos', 'error');
        
        // Animación de error en el formulario
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) {
            loginContainer.style.animation = 'shake 0.5s ease-in-out';
            
            setTimeout(() => {
                loginContainer.style.animation = '';
            }, 500);
        }
    }
}

function handleLogout() {
    if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
        currentUser = null;
        
        const loginScreen = document.getElementById('loginScreen');
        const mainContent = document.getElementById('mainContent');
        
        // Limpiar formulario
        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');
        
        if (usernameField) usernameField.value = '';
        if (passwordField) passwordField.value = '';
        
        // Animación de salida
        if (mainContent && loginScreen) {
            mainContent.style.transition = 'all 0.3s ease';
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                mainContent.classList.add('hidden');
                loginScreen.classList.remove('hidden');
                
                // Restablecer estilos del login screen
                loginScreen.style.opacity = '1';
                loginScreen.style.transform = 'scale(1)';
                
            }, 300);
        }
        
        showAlert('Sesión cerrada correctamente', 'success');
    }
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    
    if (navLinks && hamburger) {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

function handleNavigation(e) {
    e.preventDefault();
    
    const targetId = e.target.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            // Cerrar menú móvil si está abierto
            const navLinks = document.getElementById('navLinks');
            const hamburger = document.getElementById('hamburger');
            if (navLinks && hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            // Scroll suave a la sección
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Actualizar navegación activa
            updateActiveNavigation(e.target);
        }
    }
}

function updateActiveNavigation(activeLink) {
    // Remover clase active de todos los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Agregar clase active al enlace actual
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function handleEnvironmentCard(e) {
    const card = e.currentTarget;
    const topic = card.dataset.topic;
    
    if (!topic) return;
    
    // Animación de click
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    showEnvironmentalModal(topic);
}

function showEnvironmentalModal(topic) {
    const modal = document.getElementById('envModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent || !environmentalContent[topic]) {
        console.error('Modal o contenido no encontrado');
        return;
    }
    
    const content = environmentalContent[topic];
    modalContent.innerHTML = `
        <h2>${content.title}</h2>
        ${content.content}
        <style>
            .tip-box {
                background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
                border-left: 4px solid var(--secondary-color);
                padding: 20px;
                margin: 25px 0;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            #modalContent h2 {
                color: var(--primary-color);
                margin-bottom: 20px;
                font-size: 1.8rem;
                text-align: center;
            }
            #modalContent h3 {
                color: var(--primary-color);
                margin: 25px 0 15px;
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 1.4rem;
            }
            #modalContent h4 {
                color: var(--secondary-color);
                margin: 20px 0 12px;
                font-size: 1.2rem;
            }
            #modalContent ul, #modalContent ol {
                margin: 15px 0 25px 25px;
                line-height: 1.7;
            }
            #modalContent li {
                margin-bottom: 10px;
                line-height: 1.6;
            }
            #modalContent p {
                line-height: 1.7;
                margin-bottom: 15px;
                color: var(--text-color);
            }
        </style>
    `;
    
    modal.style.display = 'block';
    modal.style.opacity = '0';
    
    // Animación de apertura
    setTimeout(() => {
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '1';
        
        const modalContentEl = modal.querySelector('.modal-content');
        if (modalContentEl) {
            modalContentEl.style.transform = 'scale(0.9)';
            modalContentEl.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                modalContentEl.style.transform = 'scale(1)';
            }, 10);
        }
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('envModal');
    
    if (!modal) return;
    
    // Animación de cierre
    modal.style.transition = 'opacity 0.3s ease';
    modal.style.opacity = '0';
    
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.transition = 'transform 0.3s ease';
        modalContent.style.transform = 'scale(0.9)';
    }
    
    setTimeout(() => {
        modal.style.display = 'none';
        // Restablecer estilos
        if (modalContent) {
            modalContent.style.transform = 'scale(1)';
        }
    }, 300);
}

function handleRegionChange(e) {
    const button = e.target;
    const region = button.dataset.region;
    
    if (!region) return;
    
    // Actualizar botones activos
    document.querySelectorAll('.region-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    // Mostrar contenido de la región
    document.querySelectorAll('.region-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const targetContent = document.querySelector(`.region-content[data-region="${region}"]`);
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

function setupSmoothScrolling() {
    // Configurar scroll suave para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeComponents() {
    try {
        // Inicializar animaciones de entrada
        observeElements();
        
        // Configurar header sticky
        setupStickyHeader();
        
        // Inicializar contadores de estadísticas
        initializeCounters();
        
        // Configurar lazy loading para imágenes si las hubiera
        setupLazyLoading();
        
    } catch (error) {
        console.error('Error inicializando componentes:', error);
    }
}

function observeElements() {
    try {
        // Intersection Observer para animaciones de entrada
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Desconectar el elemento una vez animado
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observar elementos que necesitan animación de entrada
        const animatedElements = document.querySelectorAll('.news-card, .env-card, .gallery-item, .team-card, .stat-item');
        animatedElements.forEach((el, index) => {
            // Configurar estado inicial
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `all 0.6s ease ${index * 0.1}s`; // Stagger animation
            
            observer.observe(el);
        });
    } catch (error) {
        console.error('Error configurando animaciones:', error);
    }
}

function setupStickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
    }
    
    function requestHeaderUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestHeaderUpdate);
}

function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) return;
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/\D/g, '')) || 0;
                const suffix = counter.textContent.replace(/\d/g, '');
                let current = 0;
                const increment = target / 100;
                const duration = 2000; // 2 segundos
                const stepTime = duration / 100;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current) + suffix;
                        setTimeout(updateCounter, stepTime);
                    } else {
                        counter.textContent = target + suffix;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function setupLazyLoading() {
    // Para futuras imágenes
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

function handleResize() {
    // Cerrar menú móvil al cambiar tamaño de ventana
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    
    if (window.innerWidth > 768 && navLinks && hamburger) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
    
    // Cerrar modal si la pantalla es muy pequeña
    const modal = document.getElementById('envModal');
    if (modal && modal.style.display === 'block' && window.innerWidth < 480) {
        // Ajustar modal para pantallas muy pequeñas
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.width = '95%';
            modalContent.style.height = '90vh';
        }
    }
}

function handleScroll() {
    try {
        // Actualizar navegación activa basada en el scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (sections.length === 0 || navLinks.length === 0) return;
        
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 150; // Offset para mejor detección
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    } catch (error) {
        console.error('Error en handleScroll:', error);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Hacer la función global para que pueda ser llamada desde onclick
window.scrollToSection = scrollToSection;

function showAlert(message, type = 'info') {
    // Remover alertas existentes
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Crear elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Insertar la alerta en el body
    document.body.appendChild(alert);

    // Desaparecer la alerta después de 3 segundos
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

    // Estilos para la alerta
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 3000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
        font-weight: 500;
    `;
    
    // Estilos para el contenido de la alerta
    const alertContent = alert.querySelector('.alert-content');
    alertContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
    `;
    
    // Agregar al DOM
    document.body.appendChild(alert);
    
    // Animación de entrada
    requestAnimationFrame(() => {
        alert.style.opacity = '1';
        alert.style.transform = 'translateX(0)';
    });
    
    // Remover después de 4 segundos
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(alert)) {
                document.body.removeChild(alert);
            }
        }, 400);
    }, 4000);
    
    // Permitir cerrar con click
    alert.addEventListener('click', () => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(alert)) {
                document.body.removeChild(alert);
            }
        }, 300);
    });


function checkLoginStatus() {
    // En un entorno real, verificaríamos el estado de autenticación
    // desde localStorage, sessionStorage o cookies
    const loginScreen = document.getElementById('loginScreen');
    const mainContent = document.getElementById('mainContent');
    
    if (!loginScreen || !mainContent) return;
    
    // Por defecto, mostrar pantalla de login
    loginScreen.classList.remove('hidden');
    mainContent.classList.add('hidden');
    
    // Configurar transiciones
    loginScreen.style.transition = 'all 0.5s ease';
    mainContent.style.transition = 'all 0.5s ease';
}

// Funciones de utilidad
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Animaciones adicionales
function addShakeAnimation() {
    if (document.getElementById('shake-styles')) return;
    
    const shakeStyles = document.createElement('style');
    shakeStyles.id = 'shake-styles';
    shakeStyles.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
            20%, 40%, 60%, 80% { transform: translateX(8px); }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translate3d(0, 40px, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
        
        @keyframes slideInRight {
            from {
                transform: translate3d(100%, 0, 0);
                visibility: visible;
            }
            to {
                transform: translate3d(0, 0, 0);
            }
        }
        
        .animate-pulse {
            animation: pulse 2s infinite;
        }
        
        .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slideInRight {
            animation: slideInRight 0.5s ease-out;
        }
    `;
    document.head.appendChild(shakeStyles);
}

// Funciones para manejar errores
function handleErrors() {
    window.addEventListener('error', function(e) {
        console.error('Error JavaScript:', e.error);
        
        // En desarrollo, mostrar el error
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            showAlert(`Error: ${e.message}`, 'error');
        } else {
            showAlert('Ha ocurrido un error. Por favor, recarga la página.', 'error');
        }
    });
    
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Promise rechazada:', e.reason);
        showAlert('Error de conexión. Verifica tu internet.', 'error');
    });
}

// Funciones para mejorar la experiencia de usuario
function addLoadingStates() {
    // Agregar estados de carga a los botones
    const buttons = document.querySelectorAll('button[type="submit"], .btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('loading')) return;
            
            this.classList.add('loading');
            const originalText = this.innerHTML;
            
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                this.classList.remove('loading');
            }, 1500);
        });
    });
}

// Función para mejorar la accesibilidad
function enhanceAccessibility() {
    // Agregar atributos ARIA
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.setAttribute('role', 'menuitem');
        link.setAttribute('tabindex', '0');
    });
    
    // Agregar soporte para navegación con teclado
    document.addEventListener('keydown', function(e) {
        // Navegación con Tab
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Cerrar modal con Escape
        if (e.key === 'Escape') {
            const modal = document.getElementById('envModal');
            if (modal && modal.style.display === 'block') {
                closeModal();
            }
        }
        
        // Activar enlaces con Enter o Espacio
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.classList.contains('nav-link')) {
                e.preventDefault();
                e.target.click();
            }
        }
    });
    
    // Remover indicador de navegación por teclado al usar mouse
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Función para optimizar el rendimiento
function optimizePerformance() {
    // Lazy loading para elementos pesados
    const heavyElements = document.querySelectorAll('.gallery-item, .news-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    heavyElements.forEach(element => {
        observer.observe(element);
    });
}

// Función para manejar el estado offline
function handleOfflineState() {
    function updateOnlineStatus() {
        const isOnline = navigator.onLine;
        
        if (!isOnline) {
            showAlert('Sin conexión a internet. Algunas funciones pueden no estar disponibles.', 'error');
            document.body.classList.add('offline');
        } else {
            document.body.classList.remove('offline');
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Verificar estado inicial
    updateOnlineStatus();
}

// Función para configurar PWA (Progressive Web App)
function setupPWA() {
    // Registrar service worker si está disponible
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // En un entorno real, aquí registrarías el service worker
            console.log('PWA capabilities available');
        });
    }
    
    // Manejar prompt de instalación
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Mostrar botón de instalación personalizado
        const installButton = document.createElement('button');
        installButton.textContent = 'Instalar App';
        installButton.className = 'install-button';
        installButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            box-shadow: var(--shadow);
            z-index: 1000;
            font-weight: 600;
            transition: all 0.3s ease;
        `;
        
        installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                
                if (outcome === 'accepted') {
                    showAlert('¡App instalada correctamente!', 'success');
                }
                
                deferredPrompt = null;
                installButton.remove();
            }
        });
        
        document.body.appendChild(installButton);
    });
}

// Inicializar funciones adicionales
function initializeEnhancements() {
    try {
        addShakeAnimation();
        handleErrors();
        addLoadingStates();
        enhanceAccessibility();
        optimizePerformance();
        handleOfflineState();
        setupPWA();
    } catch (error) {
        console.error('Error inicializando mejoras:', error);
    }
}

// Función principal mejorada
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización principal
    initializeApp();
    
    // Mejoras adicionales
    setTimeout(() => {
        initializeEnhancements();
    }, 500);
});

// Event listener para cuando la página se carga completamente
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Precargar recursos críticos
    const criticalImages = document.querySelectorAll('img[data-preload]');
    criticalImages.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
    
    // Inicializar funciones que requieren que todo esté cargado
    setTimeout(() => {
        // Aquí puedes agregar funciones que requieren la carga completa
        console.log('Aplicación completamente cargada y lista');
    }, 100);
});

// Funciones globales para uso externo
window.ColegioApp = {
    showAlert,
    scrollToSection,
    currentUser: () => currentUser,
    login: (username, password) => {
        document.getElementById('username').value = username;
        document.getElementById('password').value = password;
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    },
    logout: handleLogout
};

// Prevenir comportamientos no deseados
document.addEventListener('contextmenu', function(e) {
    // En producción, podrías deshabilitar el menú contextual
    // e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    // En producción, podrías deshabilitar la selección de texto
    // if (e.target.tagName === 'IMG') e.preventDefault();
});

// Optimización para dispositivos móviles
if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('mobile-device');
    
    // Mejorar el rendimiento en móviles
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-tap-highlight-color: transparent;
        }
        
        .mobile-device .animation-heavy {
            animation: none !important;
            transition: none !important;
        }
        
        .mobile-device .parallax {
            transform: none !important;
        }
    `;
    document.head.appendChild(style);
}

console.log('🎓 Colegio Juan Velasco Alvarado - Sistema cargado correctamente');
console.log('👥 Desarrollado por EcoTech Team');
console.log('🌱 Versión: 1.0.0')