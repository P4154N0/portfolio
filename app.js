document.addEventListener('DOMContentLoaded', function () {
  var translations = {
    tag: {
      en: 'SYSTEM ACTIVE // ARGENTINA → CALGARY, AB',
      es: 'SISTEMA ACTIVO // ARGENTINA → CALGARY, AB'
    },
    heroSub: {
      en: 'Building the Bridge Between<br>Software &amp; Energy Infrastructure',
      es: 'Construyendo el Puente Entre<br>Software e Infraestructura Energética'
    },
    btnConnect: {
      en: 'Establish Connection',
      es: 'Establecer Conexión'
    },
    interopEyebrow: {
      en: '// INTEROPERABILITY LAYER',
      es: '// CAPA DE INTEROPERABILIDAD'
    },
    interopTitle: {
      en: 'Building the Bridge Between <span class="c-cyan">Software</span> &amp; <span class="c-orange">Energy Infrastructure</span>',
      es: 'Construyendo el Puente Entre <span class="c-cyan">Software</span> e <span class="c-orange">Infraestructura Energética</span>'
    },
    historyEyebrow: {
      en: 'OPERATIONAL HISTORY &amp; ROADMAP',
      es: 'HISTORIAL OPERATIVO Y HOJA DE RUTA'
    },
    historyP1: {
      en: 'Backend Software Developer backed by +20 years of hands-on experience in electromechanical infrastructure, electronics, and telecommunications. I combine formal systems education with modern backend engineering to translate physical world data into reliable software architecture.',
      es: 'Desarrollador Backend respaldado por más de 20 años de experiencia técnica en infraestructura electromecánica, electrónica y telecomunicaciones. Combino formación terciaria en sistemas con ingeniería backend moderna para traducir datos del mundo físico en arquitectura de software confiable.'
    },
    historyP2: {
      en: 'Core focus is on <span class="c-cyan">Java 21 LTS</span>, <span class="c-cyan">Spring Boot 3</span>, <span class="c-orange">PostgreSQL/Flyway</span>, and OCI Cloud services. Actively preparing for SAIT 2028 with a long-term focus on energy sector infrastructure in Calgary, Alberta.',
      es: 'Mi foco principal está en <span class="c-cyan">Java 21 LTS</span>, <span class="c-cyan">Spring Boot 3</span>, <span class="c-orange">PostgreSQL/Flyway</span> y servicios Cloud OCI. En preparación activa hacia SAIT 2028 con objetivo en la industria energética de Calgary, Alberta.'
    },
    certLabel: {
      en: 'CERTIFICATION ROADMAP',
      es: 'HOJA DE RUTA DE CERTIFICACIONES'
    },
    verified: {
      en: 'Verified',
      es: 'Verificado'
    },
    inProgress: {
      en: 'In Progress',
      es: 'En Proceso'
    },
    focusLabel: {
      en: 'CURRENT FOCUS &amp; TARGET',
      es: 'ENFOQUE ACTUAL Y OBJETIVO'
    },
    focusText: {
      en: 'Java 21 Backend &amp; Cloud Interoperability.<br>Target: SAIT 2028 &amp; Energy Industry in Calgary, AB.',
      es: 'Backend Java 21 e Interoperabilidad Cloud.<br>Objetivo: SAIT 2028 e Industria Energética en Calgary, AB.'
    },
    stackEyebrow: {
      en: 'TECHNOLOGY STACK',
      es: 'STACK TECNOLÓGICO'
    },
    stackTitle: {
      en: 'Infrastructure &amp; Logic',
      es: 'Infraestructura y Lógica'
    },
    stack1Desc: {
      en: 'Java 21 LTS (Virtual Threads), Spring Boot 3, REST APIs, layered architecture.',
      es: 'Java 21 LTS (Virtual Threads), Spring Boot 3, APIs REST, arquitectura por capas.'
    },
    stack2Desc: {
      en: 'OCI Foundations Certified. Linux server configuration, networks, and cloud fundamentals.',
      es: 'Certificado OCI Foundations. Configuración de servidores Linux, redes y fundamentos Cloud.'
    },
    stack3Desc: {
      en: 'Relational modeling, migration control with Flyway, and SQL query optimization.',
      es: 'Modelado relacional, control de migraciones con Flyway y optimización SQL.'
    },
    stack4Desc: {
      en: 'ESP32, Raspberry Pi (Debian), MQTT protocols, and field sensor integration.',
      es: 'ESP32, Raspberry Pi (Debian), protocolo MQTT e integración de sensores de campo.'
    },
    specEyebrow: {
      en: 'CORE SPECIALIZATION',
      es: 'ESPECIALIZACIÓN PRINCIPAL'
    },
    specTitle: {
      en: 'Energy &amp; Industrial Digitalization',
      es: 'Digitalización Industrial y Energética'
    },
    specText: {
      en: 'Connecting modern <span class="c-cyan">backend software</span> with <span class="c-orange">physical assets</span>. Designing systems that process field telemetry into structured data for cloud analytics.',
      es: 'Conectando <span class="c-cyan">software backend</span> moderno con <span class="c-orange">activos físicos</span>. Diseñando sistemas que procesan la telemetría de campo en datos estructurados para analítica en la nube.'
    },
    feat1Name: {
      en: 'Telemetry &amp; Data Structuring',
      es: 'Telemetría y Estructuración'
    },
    feat1Desc: {
      en: 'Parsing raw sensor inputs into clean, validated JSON schemas.',
      es: 'Procesamiento de lecturas crudas de sensores en esquemas JSON limpios y validados.'
    },
    feat2Name: {
      en: 'Field Diagnostic Logic',
      es: 'Lógica de Diagnóstico de Campo'
    },
    feat2Desc: {
      en: 'Applying +20 years of hardware troubleshooting to build fault-tolerant backend APIs.',
      es: 'Aplicando +20 años de resolución de fallas técnicas para construir APIs backend tolerantes a fallos.'
    },
    statExperienceLabel: {
      en: 'FIELD EXP',
      es: 'EXP. CAMPO'
    },
    statExperienceVal: {
      en: '+20 YRS',
      es: '+20 AÑOS'
    },
    ctaEyebrow: {
      en: 'CONNECT &amp; EVOLVE',
      es: 'CONECTAR Y EVOLUCIONAR'
    },
    ctaTitle: {
      en: 'Interested in backend systems<br>for industrial infrastructure?',
      es: '¿Interesado en sistemas backend<br>para infraestructura industrial?'
    },
    btnLinkedin: {
      en: 'LinkedIn Profile',
      es: 'Perfil de LinkedIn'
    },
    btnGithub: {
      en: 'GitHub Repositories',
      es: 'Repositorios de GitHub'
    },
    footerCopy: {
      en: '© 2026 HÉCTOR PABLO GRAFF // BACKEND ENGINEERING',
      es: '© 2026 HÉCTOR PABLO GRAFF // INGENIERÍA BACKEND'
    },
    // ===== PROJECTS SECTION =====
    projectsEyebrow: {
      en: 'FEATURED PROJECTS &amp; SYSTEMS',
      es: 'PROYECTOS Y SISTEMAS DESTACADOS'
    },
    projectsTitle: {
      en: 'Software &amp; Industrial Solutions',
      es: 'Soluciones de Software e Industria'
    },
    statusReady: {
      en: 'Production Ready',
      es: 'Listo para Producción'
    },
    btnRepo: {
      en: 'View Repository',
      es: 'Ver Repositorio'
    },
    proj1Desc: {
      en: 'Residential energy intelligence platform with resilient Java 21 / Spring Boot 3 architecture and FastAPI (ML). Deployed on Oracle Cloud (OCI) with Fallback pattern and SLA benchmarking <75ms.',
      es: 'Plataforma de inteligencia energética residencial con arquitectura resiliente Java 21 / Spring Boot 3 y FastAPI (ML). Desplegada en Oracle Cloud (OCI) con patrón Fallback y benchmarking SLA <75ms.'
    },
    proj2Desc: {
      en: 'Distributed processing system for production analytics and predictive maintenance in refineries/offshore platforms, based on Equinor open industrial dataset (North Sea).',
      es: 'Sistema de procesamiento distribuido para analítica de producción y mantenimiento predictivo en refinerías/plataformas, basado en el dataset industrial liberado por Equinor (Mar del Norte).'
    },
    proj2Tag: {
      en: 'TARGET: CALGARY ENERGY SECTOR',
      es: 'OBJETIVO: SECTOR ENERGÉTICO CALGARY'
    },
    proj3Desc: {
      en: 'Massive IoT telemetry engine for autonomous monitoring and smart maintenance of agricultural machinery. Offline-First architecture with MQTT, Java 21 Virtual Threads, and TimescaleDB.',
      es: 'Motor IoT de telemetría masiva para monitoreo autónomo y mantenimiento inteligente de maquinaria agrícola. Arquitectura Offline-First con MQTT, Java 21 Virtual Threads y TimescaleDB.'
    },
    proj3Tag: {
      en: 'OFFLINE-FIRST ARCHITECTURE',
      es: 'ARQUITECTURA OFFLINE-FIRST'
    }
  }; // <--- Este es el cierre de la variable translations

  var langButtons = document.querySelectorAll('.lang-btn');
  var i18nEls = document.querySelectorAll('[data-i18n]');

  function setLanguage(lang) {
    langButtons.forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    i18nEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        el.innerHTML = translations[key][lang];
      }
    });
    document.documentElement.setAttribute('lang', lang);
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
});