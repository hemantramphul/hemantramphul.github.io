/*!
 * Lightweight client-side i18n for the portfolio (EN / FR).
 * - Text is tagged in index.html with data-i18n="key".
 * - The language switch (.lang-switch / .lang-option) floats at the top-right.
 * - The chosen language is remembered in localStorage, like the theme.
 * - The résumé download link and the typed-roles animation switch too.
 */
(function () {
  "use strict";

  var I18N = {
    /* ---- Navigation ---- */
    nav_about: { en: "About", fr: "À propos" },
    nav_experience: { en: "Experience", fr: "Expérience" },
    nav_education: { en: "Education", fr: "Formation" },
    nav_skills: { en: "Skills", fr: "Compétences" },
    nav_awards: { en: "Awards", fr: "Distinctions" },

    /* ---- About ---- */
    im: { en: "I'm", fr: "Je suis" },
    about_p1: {
      en: "Hey there! With over 15 years of professional experience, I’m a Software Engineer with deep expertise in .NET and full-stack development, now focused on Embedded Systems, AI &amp; Robotics. I design and develop software for robots and drones — spanning real-time connectivity, video streaming, telemetry, and 3D visualization — and build AI solutions for industrial inspection, from image analysis to the automated detection of structural anomalies and defects.",
      fr: "Bonjour ! Fort de plus de 15 ans d’expérience professionnelle, je suis ingénieur logiciel avec une solide expertise en .NET et en développement full-stack, aujourd’hui orienté vers les systèmes embarqués, l’IA &amp; la robotique. Je conçois et développe des logiciels pour robots et drones — de la connectivité en temps réel au streaming vidéo, à la télémétrie et à la visualisation 3D — et je crée des solutions d’IA pour l’inspection industrielle, de l’analyse d’images à la détection automatisée d’anomalies et de pathologies structurelles.",
    },
    about_p2: {
      en: "My expertise spans a wide range of programming languages, including Python, C#, JavaScript, and TypeScript, as well as frameworks such as React, Node.js, and Flutter. Passionate about innovation, I focus on building scalable, efficient systems, optimizing performance, and crafting intelligent solutions that deliver impactful results across AI and robotics applications.",
      fr: "Mon expertise couvre un large éventail de langages de programmation, dont Python, C#, JavaScript et TypeScript, ainsi que des frameworks tels que React, Node.js et Flutter. Passionné par l’innovation, je me concentre sur la conception de systèmes évolutifs et performants, l’optimisation des performances et la création de solutions intelligentes qui produisent des résultats concrets dans les applications d’IA et de robotique.",
    },
    avail_open: { en: "Open to work", fr: "Ouvert aux opportunités" },
    avail_discuss: {
      en: "Discuss Job Opportunities",
      fr: "Discuter d’opportunités d’emploi",
    },
    avail_roles_strong: {
      en: "Open for exciting opportunities in <span class='badge badge-pill badge-info'>AI Engineer</span>, <span class='badge badge-pill badge-info'>Software Development</span>, <span class='badge badge-pill badge-info'>Backend Engineer</span>, and <span class='badge badge-pill badge-info'>Senior Software Engineer</span> roles.",
      fr: "Ouvert à des opportunités passionnantes en tant qu’<span class='badge badge-pill badge-info'>Ingénieur IA</span>, <span class='badge badge-pill badge-info'>Développeur logiciel</span>, <span class='badge badge-pill badge-info'>Ingénieur Backend</span> et <span class='badge badge-pill badge-info'>Ingénieur logiciel senior</span>.",
    },
    avail_passionate: {
      en: "Passionate about writing clean code, system design, tackling complex challenges, and continually learning new technologies to make a meaningful impact.",
      fr: "Passionné par l’écriture d’un code propre, la conception de systèmes, la résolution de défis complexes et l’apprentissage continu de nouvelles technologies pour avoir un impact significatif.",
    },

    /* ---- Section titles ---- */
    sec_experience: { en: "Experience", fr: "Expérience" },
    sec_education: { en: "Education", fr: "Formation" },
    sec_skills: { en: "Skills", fr: "Compétences" },
    sec_awards: {
      en: "Awards &amp; Certifications",
      fr: "Distinctions &amp; Certifications",
    },

    /* ---- Job titles ---- */
    job_lynx: {
      en: "Embedded Systems, AI & Robotics Engineer",
      fr: "Ingénieur en systèmes embarqués, IA et robotique",
    },
    job_fulll: { en: "Senior Software Engineer", fr: "Ingénieur logiciel senior" },
    job_cegid: { en: "Senior Software Engineer", fr: "Ingénieur logiciel senior" },
    job_web: { en: "PHP Developer", fr: "Développeur PHP" },
    job_esokia: { en: "PHP/Drupal Developer", fr: "Développeur PHP/Drupal" },

    /* ---- Locations ---- */
    loc_lynx: { en: ", Canéjan, France", fr: ", Canéjan, France" },
    loc_fulll: { en: ", Quatre Bornes, Mauritius", fr: ", Quatre Bornes, Maurice" },
    loc_cegid: { en: ", Quatre Bornes, Mauritius", fr: ", Quatre Bornes, Maurice" },
    loc_web: { en: ", Port Louis, Mauritius", fr: ", Port Louis, Maurice" },
    loc_esokia: { en: ", Quatre Bornes, Mauritius", fr: ", Quatre Bornes, Maurice" },

    /* ---- Dates ---- */
    date_lynx: { en: "Sept 2024 – Present", fr: "sept. 2024 – présent" },
    date_fulll: { en: "Jan 2024 – Aug 2024", fr: "janv. 2024 – août 2024" },
    date_cegid: { en: "Aug 2011 – Dec 2023", fr: "août 2011 – déc. 2023" },
    date_web: { en: "Feb 2011 – Aug 2011", fr: "févr. 2011 – août 2011" },
    date_esokia: { en: "Aug 2010 – Jan 2011", fr: "août 2010 – janv. 2011" },
    date_edu_master: { en: "Nov 2021 – Dec 2024", fr: "nov. 2021 – déc. 2024" },
    date_edu_bsc: { en: "Aug 2015 – Dec 2016", fr: "août 2015 – déc. 2016" },
    date_edu_dip: { en: "Aug 2008 – Dec 2010", fr: "août 2008 – déc. 2010" },

    /* ---- Lynxdrone bullets ---- */
    lynx_b1: {
      en: "Developed software tools for robots and drones enabling connectivity, supervision, and exploitation of field data.",
      fr: "Développement d’outils logiciels pour robots et drones dédiés à la connexion, à la supervision et à l’exploitation des données terrain.",
    },
    lynx_b2: {
      en: "Designed applications for robot connectivity, mission tracking, and display of operational data.",
      fr: "Conception d’applications pour la connexion aux robots, le suivi de mission et l’affichage des données opérationnelles.",
    },
    lynx_b3: {
      en: "Integrated real-time video streaming and robotic telemetry for on-site operation monitoring.",
      fr: "Intégration de flux vidéo en temps réel et de télémétrie robotique pour le monitoring des interventions sur le terrain.",
    },
    lynx_b4: {
      en: "Built 3D visualizations and point clouds from ROS data to improve analysis of inspected environments.",
      fr: "Mise en place de visualisations 3D et de nuages de points à partir de données ROS afin d’améliorer l’analyse des environnements inspectés.",
    },
    lynx_b5: {
      en: "Developed robust interface components for control, visualization, and exploitation of embedded data — focusing on usability, reliability, and maintainability.",
      fr: "Développement de composants d’interface robustes pour le pilotage, la visualisation et l’exploitation de données embarquées, en veillant à l’ergonomie, à la fiabilité et à la maintenabilité.",
    },
    lynx_b6: {
      en: "Developed AI solutions for inspection, including image analysis and automated detection of structural anomalies and defects.",
      fr: "Développement de solutions d’IA appliquées à l’inspection, notamment pour l’analyse d’images et la détection automatisée d’anomalies ou de pathologies structurelles.",
    },

    /* ---- fulll bullets ---- */
    fulll_b1: {
      en: "Developed and optimized OCR algorithms, significantly improving accuracy and processing speed for document analysis applications.",
      fr: "Développement et optimisation d’algorithmes OCR, améliorant significativement la précision et la vitesse de traitement des applications d’analyse de documents.",
    },
    fulll_b2: {
      en: "Utilized Node.js for backend development and React Native for building cross-platform mobile applications, improving overall system performance and user experience.",
      fr: "Utilisation de Node.js pour le développement backend et de React Native pour créer des applications mobiles multiplateformes, améliorant les performances globales et l’expérience utilisateur.",
    },
    fulll_b3: {
      en: "Led the design and implementation of UI features for both web and mobile applications, enhancing functionality and user interface consistency.",
      fr: "Pilotage de la conception et de la mise en œuvre de fonctionnalités UI pour les applications web et mobiles, améliorant les fonctionnalités et la cohérence de l’interface.",
    },
    fulll_b4: {
      en: "Maintained clear communication with teams, using tools like Slack to collaborate on technical discussions, product development, and system enhancements.",
      fr: "Maintien d’une communication claire avec les équipes, en s’appuyant sur des outils comme Slack pour collaborer sur les échanges techniques, le développement produit et les améliorations système.",
    },
    fulll_b5: {
      en: "Actively participated in code reviews, mentoring junior developers, and ensuring code quality and adherence to best practices.",
      fr: "Participation active aux revues de code, encadrement des développeurs juniors et garantie de la qualité du code et du respect des bonnes pratiques.",
    },

    /* ---- Cegid bullets ---- */
    cegid_b1: {
      en: "Designed and maintained intuitive UI/UX interfaces, ensuring seamless user experiences across web and mobile applications.",
      fr: "Conception et maintenance d’interfaces UI/UX intuitives, garantissant une expérience utilisateur fluide sur les applications web et mobiles.",
    },
    cegid_b2: {
      en: "Led the development of new features for applications, integrating third-party libraries to extend functionality and improve system performance.",
      fr: "Pilotage du développement de nouvelles fonctionnalités, avec intégration de bibliothèques tierces pour étendre les fonctionnalités et améliorer les performances.",
    },
    cegid_b3: {
      en: "Championed the optimization of backend integrations, contributing to enhanced mobile experiences in Agile/Scrum environments.",
      fr: "Optimisation des intégrations backend, contribuant à améliorer les expériences mobiles dans des environnements Agile/Scrum.",
    },
    cegid_b4: {
      en: "Regularly conducted code reviews and introduced best practices, fostering an environment of continuous improvement and quality.",
      fr: "Réalisation régulière de revues de code et introduction de bonnes pratiques, favorisant une culture d’amélioration continue et de qualité.",
    },
    cegid_b5: {
      en: "Produced detailed technical documentation for code, APIs, and system architecture, ensuring clear understanding across the team.",
      fr: "Rédaction de documentation technique détaillée sur le code, les API et l’architecture système, assurant une compréhension claire au sein de l’équipe.",
    },

    /* ---- Web Companies bullets ---- */
    web_b1: {
      en: "Developed and maintained dynamic websites and applications using PHP, improving overall website performance and user engagement.",
      fr: "Développement et maintenance de sites web et d’applications dynamiques en PHP, améliorant les performances des sites et l’engagement des utilisateurs.",
    },
    web_b2: {
      en: "Collaborated with frontend developers to ensure seamless integration of user-facing elements with server-side functionality.",
      fr: "Collaboration avec les développeurs front-end pour assurer une intégration fluide des éléments d’interface avec les fonctionnalités côté serveur.",
    },
    web_b3: {
      en: "Contributed to database management and server maintenance, optimizing system efficiency and reducing downtime.",
      fr: "Contribution à la gestion des bases de données et à la maintenance des serveurs, optimisant l’efficacité du système et réduisant les temps d’arrêt.",
    },

    /* ---- Esokia bullets ---- */
    esokia_b1: {
      en: "Built and maintained Drupal websites with PHP, improving site scalability and performance.",
      fr: "Création et maintenance de sites web sous Drupal avec PHP, améliorant l’évolutivité et les performances des sites.",
    },
    esokia_b2: {
      en: "Developed custom Drupal modules and themes to meet client requirements.",
      fr: "Développement de modules et thèmes Drupal sur mesure pour répondre aux besoins des clients.",
    },
    esokia_b3: {
      en: "Configured content types, views, taxonomies, and user roles.",
      fr: "Configuration des types de contenu, des vues, des taxonomies et des rôles utilisateurs.",
    },
    esokia_b4: {
      en: "Integrated third-party modules and built responsive templates with HTML, CSS, and JavaScript.",
      fr: "Intégration de modules tiers et création de gabarits responsives en HTML, CSS et JavaScript.",
    },
    esokia_b5: {
      en: "Followed team coding standards and documented custom modules.",
      fr: "Respect des standards de code de l’équipe et documentation des modules sur mesure.",
    },

    /* ---- Education ---- */
    edu_master_sub: {
      en: "Master in Artificial Intelligence and Robotics - M2",
      fr: "Master en Intelligence Artificielle et Robotique - M2",
    },
    edu_master_field: {
      en: "Artificial Intelligence and Robotics",
      fr: "Intelligence Artificielle et Robotique",
    },
    edu_master_honours: {
      en: "<strong>Honours:</strong> Distinction <i> (15.9/20)</i>",
      fr: "<strong>Mention :</strong> Distinction <i> (15,9/20)</i>",
    },
    edu_master_course: {
      en: "<strong>Courseworks:</strong> Distributed Systems, Information Retrieval, Database Systems, Machine Learning, Modern Networking Concepts, Design and Analysis of Algorithms, Algorithms for Modern Computing, Project Development &amp; Wireless Networks Security.",
      fr: "<strong>Cours :</strong> Systèmes distribués, Recherche d’information, Systèmes de bases de données, Apprentissage automatique, Concepts de réseaux modernes, Conception et analyse d’algorithmes, Algorithmes pour l’informatique moderne, Développement de projet &amp; Sécurité des réseaux sans fil.",
    },
    edu_master_accomp: {
      en: "<strong>Accomplishments: </strong> Collaborated on advanced projects in robotics and AI, such as structural analysis using predictive maintenance and image segmentation for defect detection. Demonstrated expertise in tools and frameworks like TensorFlow, PyTorch, OpenCV, and MATLAB for AI and robotics applications.",
      fr: "<strong>Réalisations : </strong> Collaboration sur des projets avancés en robotique et en IA, tels que l’analyse structurelle par maintenance prédictive et la segmentation d’images pour la détection de défauts. Maîtrise d’outils et de frameworks tels que TensorFlow, PyTorch, OpenCV et MATLAB pour des applications d’IA et de robotique.",
    },
    edu_bsc_sub: {
      en: "BSc (Hons) Software Engineering",
      fr: "Licence en Génie Logiciel",
    },
    edu_bsc_field: { en: "Software Engineering", fr: "Génie Logiciel" },
    edu_bsc_gpa: {
      en: "<strong>GPA:</strong> 4.0 <i>- First-Class Honours</i>",
      fr: "<strong>Moyenne :</strong> 4,0 <i>- Mention Très Bien</i>",
    },
    edu_bsc_course: {
      en: "<strong>Courseworks:</strong> Web Programming, Database Systems, Software Engineering, Object-Oriented Programming, .NET Programming, Operating Systems, and Software Testing.",
      fr: "<strong>Cours :</strong> Programmation web, Systèmes de bases de données, Génie logiciel, Programmation orientée objet, Programmation .NET, Systèmes d’exploitation et Tests logiciels.",
    },
    edu_bsc_accomp: {
      en: "<strong>Accomplishments:</strong> Designed and led workshops on software engineering and database management, earning positive feedback from peers. Successfully developed web applications showcasing modern UI/UX principles and database integration.",
      fr: "<strong>Réalisations :</strong> Conception et animation d’ateliers sur le génie logiciel et la gestion de bases de données, salués par les pairs. Développement réussi d’applications web mettant en valeur des principes UI/UX modernes et l’intégration de bases de données.",
    },
    edu_dip_sub: {
      en: "Diploma in Information Systems",
      fr: "Diplôme en Systèmes d’Information",
    },
    edu_dip_field: {
      en: "Specialization in Software Development",
      fr: "Spécialisation en Développement Logiciel",
    },
    edu_dip_gpa: {
      en: "<strong>GPA:</strong> 3.7 <i>- Good</i>",
      fr: "<strong>Moyenne :</strong> 3,7 <i>- Bien</i>",
    },
    edu_dip_course: {
      en: "<strong>Courseworks:</strong> Java, C#, VB.NET, PHP, SQL, and Software Development Lifecycle Principles.",
      fr: "<strong>Cours :</strong> Java, C#, VB.NET, PHP, SQL et principes du cycle de vie du développement logiciel.",
    },
    edu_dip_accomp: {
      en: "<strong>Accomplishments:</strong> Achieved proficiency in building dynamic applications and working with relational databases. Led academic projects focusing on real-world applications, earning distinction for innovative solutions.",
      fr: "<strong>Réalisations :</strong> Maîtrise de la création d’applications dynamiques et du travail avec des bases de données relationnelles. Pilotage de projets académiques axés sur des applications concrètes, distingués pour leurs solutions innovantes.",
    },

    /* ---- Skills ---- */
    skill_ai: {
      en: "AI, Robotics & Computer Vision",
      fr: "IA, Robotique & Vision par ordinateur",
    },
    skill_ai_list: {
      en: "TensorFlow, PyTorch, Keras, OpenCV, YOLO, U-Net, image processing, object detection, ROS, Foxglove, Three.js, 3D visualization &amp; point clouds, real-time video (WebRTC, RTSP, GStreamer, FFmpeg), telemetry (MQTT, WebSocket), NLP (sentiment analysis, NER, text classification), embedded systems &amp; IoT",
      fr: "TensorFlow, PyTorch, Keras, OpenCV, YOLO, U-Net, traitement d’images, détection d’objets, ROS, Foxglove, Three.js, visualisation 3D &amp; nuages de points, vidéo en temps réel (WebRTC, RTSP, GStreamer, FFmpeg), télémétrie (MQTT, WebSocket), NLP (analyse de sentiments, NER, classification de texte), systèmes embarqués &amp; IoT",
    },
    skill_web: {
      en: "Web & Mobile Development",
      fr: "Développement Web & Mobile",
    },
    skill_web_list: {
      en: "REST/SOAP APIs, .NET Core, .NET MVC, ASP.NET, Flask, Node.js, HTML, CSS, JavaScript, TypeScript, jQuery, Bootstrap 5, React, React Native, Flutter, Xamarin, Electron, Tauri, WordPress, PHP",
      fr: "APIs REST/SOAP, .NET Core, .NET MVC, ASP.NET, Flask, Node.js, HTML, CSS, JavaScript, TypeScript, jQuery, Bootstrap 5, React, React Native, Flutter, Xamarin, Electron, Tauri, WordPress, PHP",
    },
    skill_db: { en: "Database Systems", fr: "Systèmes de bases de données" },
    skill_db_list: {
      en: "MySQL, MongoDB, NoSQL, Relational Database, SQLite",
      fr: "MySQL, MongoDB, NoSQL, bases de données relationnelles, SQLite",
    },
    skill_cloud: { en: "Cloud Platforms", fr: "Plateformes Cloud" },
    skill_cloud_list: { en: "Azure, Apache Kafka", fr: "Azure, Apache Kafka" },
    skill_practices: {
      en: "Software Practices & Principles",
      fr: "Pratiques & principes logiciels",
    },
    skill_practices_list: {
      en: "Algorithms, Design Patterns, Object-Oriented Programming, Microservices, Documentation",
      fr: "Algorithmes, Design patterns, Programmation orientée objet, Microservices, Documentation",
    },
    skill_tools: { en: "Tools & Methodologies", fr: "Outils & Méthodologies" },
    skill_tools_list: {
      en: "Git, Azure DevOps Server, Scrum, Agile methodologies, Continuous Integration and Deployment, Shell Scripting, Version Control",
      fr: "Git, Azure DevOps Server, Scrum, méthodologies Agile, intégration et déploiement continus, scripting shell, gestion de versions",
    },

    /* ---- Awards (dates & credentials) ---- */
    aw_mcsa_date: { en: ", September 26, 2016 ", fr: ", 26 septembre 2016 " },
    aw_mcsa_cred: {
      en: "(Certification number: 16CA6F-A34EAF)",
      fr: "(Numéro de certification : 16CA6F-A34EAF)",
    },
    aw_html5_date: { en: ", March 27, 2014 ", fr: ", 27 mars 2014 " },
    aw_html5_cred: {
      en: "(Certification number: YBAADA-C6AF61)",
      fr: "(Numéro de certification : YBAADA-C6AF61)",
    },
    aw_mcp_date: { en: ", March 27, 2014 ", fr: ", 27 mars 2014 " },
    aw_mcp_cred: {
      en: "(Certification number: B3EK6B-E170CD)",
      fr: "(Numéro de certification : B3EK6B-E170CD)",
    },
    aw_mcpd_date: { en: ", July 16, 2013 ", fr: ", 16 juillet 2013 " },
    aw_mcpd_cred: {
      en: "(Certification number: 4B77F2-DFQ620)",
      fr: "(Numéro de certification : 4B77F2-DFQ620)",
    },
    aw_ibm_date: { en: ", January 2017 ", fr: ", janvier 2017 " },
    aw_ibm_cred: {
      en: "(Credential ID: 4020-1484-2148-1057)",
      fr: "(Identifiant : 4020-1484-2148-1057)",
    },
    aw_gcp_date: { en: ", November 2023 ", fr: ", novembre 2023 " },
    aw_gcp_cred: {
      en: "(Credential ID: RAATE4QTWBJ4)",
      fr: "(Identifiant : RAATE4QTWBJ4)",
    },
    aw_ml_date: { en: ", January 2024 ", fr: ", janvier 2024 " },

    /* ---- Résumé download ---- */
    dl_popup: { en: "Download My Resume", fr: "Télécharger mon CV" },
  };

  var TYPED_STRINGS = {
    en: [
      "a software engineer",
      "an EMBEDDED SYSTEMS, AI &amp; ROBOTICS ENGINEER",
      "a fullstack developer",
      "an adventurer",
    ],
    fr: [
      "ingénieur logiciel",
      "INGÉNIEUR EN SYSTÈMES EMBARQUÉS, IA &amp; ROBOTIQUE",
      "développeur fullstack",
      "un aventurier",
    ],
  };

  var RESUME = {
    en: { href: "resources/en/en_CV-Hemant Ramphul.pdf", title: "Download my resume" },
    fr: { href: "resources/fr/fr_CV-Hemant Ramphul.pdf", title: "Télécharger mon CV" },
  };

  var typedInstance = null;

  function initTyped(lang) {
    if (typeof Typed === "undefined") return;
    var el = document.getElementById("typed-output");
    if (!el) return;
    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }
    el.textContent = "";
    typedInstance = new Typed("#typed-output", {
      strings: TYPED_STRINGS[lang] || TYPED_STRINGS.en,
      typeSpeed: 70,
      backSpeed: 25,
      loop: true,
      showCursor: true,
      cursorChar: "_",
      backDelay: 1000,
    });
  }

  function applyLang(lang) {
    if (lang !== "fr") lang = "en";
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var entry = I18N[key];
      if (entry && entry[lang] != null) {
        nodes[i].innerHTML = entry[lang];
      }
    }

    var dl = document.getElementById("resume-download");
    if (dl) {
      dl.setAttribute("href", RESUME[lang].href);
      dl.setAttribute("title", RESUME[lang].title);
    }

    var options = document.querySelectorAll(".lang-option");
    for (var j = 0; j < options.length; j++) {
      var isActive = options[j].getAttribute("data-lang") === lang;
      if (isActive) {
        options[j].classList.add("active");
      } else {
        options[j].classList.remove("active");
      }
      options[j].setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    initTyped(lang);

    try {
      localStorage.setItem("selected-lang", lang);
    } catch (e) {}
  }

  function getInitialLang() {
    var saved = null;
    try {
      saved = localStorage.getItem("selected-lang");
    } catch (e) {}
    if (saved === "en" || saved === "fr") return saved;
    var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return nav.indexOf("fr") === 0 ? "fr" : "en";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var current = getInitialLang();
    applyLang(current);

    var options = document.querySelectorAll(".lang-option");
    for (var k = 0; k < options.length; k++) {
      options[k].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    }
  });
})();
