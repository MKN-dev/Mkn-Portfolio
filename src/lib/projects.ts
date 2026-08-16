export interface ProjectSection {
  num: string;
  title: string;
  content: string; // main paragraph(s)
  bullets?: string[];
  subsections?: { title: string; content?: string; bullets?: string[] }[];
  quote?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  sector: string;
  tags: string[];
  year: string;
  role: string;
  scope: string;
  description: string;
  vision: string; // italic quote under intro
  thumbnail: string;
  gallery: string[];
  tools: string[];
  metrics: { label: string; value: string }[];
  sections: ProjectSection[];
  url?: string;
  urlLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "monitrack",
    title: "MoniTrack",
    subtitle:
      "Application mobile multiplateforme de gestion des comptes, transactions et opérations financières",
    type: "Développement Mobile",
    sector: "Finance · Gestion",
    tags: ["Mobile", "KMP", "Finance", "Offline-first"],
    year: "2026",
    role: "Software Engineer · Mobile Developer",
    scope: "Conception · Développement Mobile · Architecture · Sécurité",
    description:
      "MoniTrack est une application mobile multiplateforme conçue pour centraliser la gestion des comptes clients, des transactions financières et des opérations administratives d'une structure. Le système distingue les rôles CLIENT, ADMIN et SUPER_ADMIN et combine authentification sécurisée, gestion des permissions, fonctionnement offline-first et synchronisation des données.",
    vision:
      "Construire une application métier fiable, sécurisée et utilisable même lorsque la connectivité n'est pas garantie.",
    thumbnail: "/images/projects/monitrack/01.png",
    gallery: [
      "/images/projects/monitrack/01.png",
      "/images/projects/monitrack/02.png",
      "/images/projects/monitrack/03.png",
    ],
    tools: [
      "Kotlin",
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "Compose Multiplatform",
      "Firebase Authentication",
      "Firestore",
      "Room",
      "Koin",
      "Coroutines",
      "MVI",
    ],
    metrics: [
      { label: "Type de projet", value: "Freelance" },
      { label: "Secteur", value: "Finance / Gestion" },
      { label: "Période", value: "02/2026–05/2026" },
      { label: "Rôle", value: "Software Engineer" },
    ],
    sections: [
      {
        num: "01",
        title: "Contexte & problématique",
        content:
          "Le besoin était de disposer d'une application centralisant les comptes clients, les transactions, les soldes et les activités administratives dans une interface unique et accessible sur mobile.",
        bullets: [
          "Gérer plusieurs niveaux de rôles et de permissions",
          "Sécuriser l'accès aux comptes et aux opérations sensibles",
          "Permettre la consultation et la modification des données avec ou sans connexion",
          "Conserver un historique exploitable des transactions et actions",
        ],
        quote:
          "Une application financière doit rester fiable lorsque la connectivité, les droits d'accès ou le contexte d'utilisation deviennent complexes.",
      },
      {
        num: "02",
        title: "Mon rôle & responsabilités",
        content:
          "J'ai conçu et développé l'application mobile multiplateforme ainsi que les mécanismes nécessaires à la sécurité, à la persistance locale et à la synchronisation des données.",
        bullets: [
          "Implémentation de l'authentification avec Firebase Authentication",
          "Gestion des rôles CLIENT, ADMIN et SUPER_ADMIN",
          "Mise en place des sessions, déconnexion et authentification biométrique",
          "Développement de la gestion des utilisateurs, archivage et réactivation des comptes",
          "Conception d'un fonctionnement offline-first avec Room et synchronisation Firestore",
          "Développement de l'historique des opérations et de la génération de rapports PDF",
        ],
      },
      {
        num: "03",
        title: "Architecture & approche technique",
        content:
          "L'application repose sur une architecture multiplateforme basée sur Kotlin Multiplatform et Compose Multiplatform, avec persistance locale, synchronisation distante et séparation claire des responsabilités.",
        subsections: [
          {
            title: "1. Authentification & autorisation",
            bullets: [
              "Firebase Authentication pour l'identité utilisateur",
              "Contrôle des rôles et permissions selon le profil",
              "Authentification biométrique sur Android/iOS",
            ],
          },
          {
            title: "2. Offline-first & synchronisation",
            bullets: [
              "Persistance locale des utilisateurs, transactions et actions",
              "Room comme source locale pour le fonctionnement hors connexion",
              "Synchronisation avec Firebase Firestore",
              "Gestion des migrations de schéma",
            ],
          },
          {
            title: "3. Architecture mobile",
            bullets: [
              "Kotlin Multiplatform pour mutualiser la logique",
              "Compose Multiplatform pour les interfaces",
              "MVI, Coroutines et Koin pour la structuration et l'injection de dépendances",
            ],
          },
        ],
      },
      {
        num: "04",
        title: "Fonctionnalités clés",
        content:
          "Le produit couvre les principaux flux métier nécessaires au suivi quotidien des opérations.",
        bullets: [
          "Gestion des comptes et des profils administratifs",
          "Consultation des soldes et transactions",
          "Historique avec filtrage par période",
          "Rapports financiers au format PDF",
          "Partage natif des rapports et invitations administrateur",
          "Gestion des actions et activités administratives",
        ],
      },
      {
        num: "05",
        title: "Résultat & valeur apportée",
        content:
          "MoniTrack fournit une base mobile métier orientée sécurité et continuité de service, avec une expérience pensée pour fonctionner dans des environnements où la disponibilité réseau peut varier.",
        bullets: [
          "Accès sécurisé selon le rôle de chaque utilisateur",
          "Continuité de consultation grâce au fonctionnement offline-first",
          "Centralisation des transactions et opérations administratives",
          "Base technique prête à évoluer vers davantage de fonctionnalités métier",
        ],
      },
    ],
  },

  {
    slug: "procedural-world-lab-launcher",
    title: "Procedural World Lab — Desktop Launcher",
    subtitle:
      "Launcher desktop multiplateforme pour distribuer, télécharger et installer des produits Unreal Engine",
    type: "Développement Desktop",
    sector: "Game Development · Distribution de logiciels",
    tags: ["Desktop", "KMP", "Unreal Engine", "Downloads"],
    year: "2024–2026",
    role: "Software Engineer · Desktop Developer",
    scope: "Conception · Développement Desktop · Intégration Web · Systèmes",
    description:
      "Procedural World Lab est un launcher desktop multiplateforme destiné à la distribution et à la gestion de produits pour Unreal Engine. L'application centralise l'authentification, le store, les téléchargements, l'installation des produits et la gestion des projets Unreal Engine.",
    vision:
      "Transformer un simple launcher en véritable point d'entrée pour l'achat, le téléchargement, l'installation et la gestion des produits Unreal Engine.",
    thumbnail: "/images/projects/pwl/01.png",
    gallery: [
      "/images/projects/pwl/01.png",
      "/images/projects/pwl/02.png",
      "/images/projects/pwl/03.png",
    ],
    tools: [
      "Kotlin",
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Material 3",
      "Coroutines",
      "Koin",
      "Unreal Engine",
      "WebView",
      "MVI",
    ],
    metrics: [
      { label: "Type de projet", value: "Freelance" },
      { label: "Secteur", value: "Game Development" },
      { label: "Période", value: "07/2024–01/2025 · Refonte 07/2026–Présent" },
      { label: "Rôle", value: "Software Engineer" },
    ],
    sections: [
      {
        num: "01",
        title: "Contexte & problématique",
        content:
          "Le projet nécessitait un launcher capable de relier une plateforme de vente web à une application desktop pour fournir aux utilisateurs une expérience cohérente de bout en bout.",
        bullets: [
          "Authentifier les utilisateurs depuis le launcher",
          "Permettre la consultation et l'achat des produits",
          "Télécharger des fichiers volumineux avec suivi de progression et gestion des erreurs",
          "Installer automatiquement les produits dans les projets Unreal Engine",
          "Retrouver et gérer les projets déjà présents sur la machine",
        ],
        quote:
          "Le launcher devait supprimer les étapes manuelles entre l'achat d'un produit et son utilisation dans Unreal Engine.",
      },
      {
        num: "02",
        title: "Mon rôle & responsabilités",
        content:
          "J'ai participé à la conception et au développement du launcher multiplateforme, en travaillant également avec les équipes backend et frontend pour assurer la cohérence entre les interfaces web et desktop.",
        bullets: [
          "Développement du launcher desktop avec Kotlin Multiplatform et Compose Multiplatform",
          "Intégration de l'authentification et de la gestion des comptes",
          "Intégration du store via WebView connecté à la plateforme de vente",
          "Développement du système de téléchargement et de progression",
          "Automatisation de la décompression et de l'installation des produits",
          "Détection et organisation des projets Unreal Engine via les fichiers .uproject",
          "Gestion du cycle de vie des produits acquis",
        ],
      },
      {
        num: "03",
        title: "Architecture & systèmes",
        content:
          "Le launcher est structuré pour séparer les responsabilités et permettre l'intégration progressive des services desktop tout en conservant une base multiplateforme.",
        subsections: [
          {
            title: "1. Expérience d'achat",
            bullets: [
              "Consultation du catalogue depuis le launcher",
              "Ouverture du parcours d'achat via WebView",
              "Gestion de l'accès aux produits déjà acquis",
            ],
          },
          {
            title: "2. Téléchargement & installation",
            bullets: [
              "Suivi de progression",
              "Gestion des erreurs et contrôle des limites de téléchargement",
              "Décompression automatique",
              "Installation dans les projets utilisateurs",
            ],
          },
          {
            title: "3. Intégration Unreal Engine",
            bullets: [
              "Scan automatique des projets présents sur la machine",
              "Détection des fichiers .uproject",
              "Organisation des projets et association des produits installés",
            ],
          },
        ],
      },
      {
        num: "04",
        title: "Refonte & collaboration",
        content:
          "La refonte 2026 vise à faire évoluer l'expérience desktop tout en maintenant une cohérence avec la plateforme web et les services existants.",
        bullets: [
          "Harmonisation de l'expérience entre web et desktop",
          "Collaboration avec les équipes backend et frontend",
          "Amélioration progressive de l'architecture et des services desktop",
          "Conservation d'une base commune Kotlin Multiplatform / Compose Multiplatform",
        ],
      },
      {
        num: "05",
        title: "Valeur apportée",
        content:
          "Le launcher centralise plusieurs étapes qui étaient auparavant séparées dans le parcours utilisateur.",
        bullets: [
          "Un seul point d'accès pour les produits acquis",
          "Automatisation du téléchargement et de l'installation",
          "Réduction des opérations manuelles pour l'utilisateur",
          "Meilleure continuité entre la plateforme de vente et les projets Unreal Engine",
        ],
      },
    ],
  },

  {
    slug: "canjix",
    title: "CanjiX",
    subtitle:
      "Écosystème e-commerce et marketplace multiplateforme pour le marché ouest-africain",
    type: "Produit · Mobile · Backend · Web",
    sector: "E-commerce · Marketplace · Logistique",
    tags: ["KMP", "Spring Boot", "E-commerce", "Marketplace", "Production"],
    year: "2024–Aujourd'hui",
    role: "Founder · Software Engineer",
    scope:
      "Architecture · Mobile · Backend · Web · CRM · Paiement · Logistique",
    description:
      "CanjiX est un produit entrepreneurial que j'ai conçu et développé pour le marché ouest-africain. L'écosystème regroupe une application mobile, une API REST, une landing page et un CRM / back-office afin de couvrir la découverte des produits, les commandes, les paiements, les stocks, la livraison et les opérations administratives.",
    vision:
      "Construire une plateforme e-commerce adaptée aux réalités du marché ouest-africain, avec une architecture capable d'évoluer indépendamment sur mobile, backend, web et opérations internes.",
    thumbnail: "/images/projects/canjix/01.png",
    gallery: [
      "/images/projects/canjix/01.png",
      "/images/projects/canjix/02.png",
      "/images/projects/canjix/03.png",
    ],
    tools: [
      "Kotlin",
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "Compose Multiplatform",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS S3",
      "Next.js",
      "React",
      "TypeScript",
      "Firebase Cloud Messaging",
      "WebSocket",
      "Flyway",
      "Spring Security",
      "JPA",
      "SQLDelight",
      "Koin",
      "MVI",
      "MVC",
    ],
    metrics: [
      { label: "Type de projet", value: "Projet entrepreneurial personnel" },
      { label: "Secteur", value: "E-commerce / Marketplace" },
      { label: "Période", value: "2024–Présent" },
      { label: "Utilisateurs", value: "700+ depuis avril 2026" },
      { label: "Rôle", value: "Founder · Software Engineer" },
    ],
    sections: [
      {
        num: "01",
        title: "Contexte & problématique",
        content:
          "CanjiX a été conçu comme un écosystème e-commerce adapté au contexte ouest-africain, avec des besoins spécifiques autour des paiements, de la livraison, des produits importés et des opérations internes.",
        bullets: [
          "Permettre aux clients de découvrir, commander et suivre leurs achats",
          "Gérer les variantes, attributs et disponibilités des produits",
          "Prendre en charge des produits immédiatement disponibles et des produits sous commande",
          "Intégrer des moyens de paiement et des parcours de livraison adaptés au marché régional",
          "Centraliser les opérations commerciales, logistiques et administratives",
        ],
        quote:
          "Le produit ne devait pas être une simple boutique en ligne : il devait couvrir toute la chaîne opérationnelle nécessaire à son fonctionnement.",
      },
      {
        num: "02",
        title: "Architecture globale",
        content:
          "L'architecture sépare les différentes interfaces et responsabilités afin de permettre leur évolution indépendante tout en centralisant la logique métier dans l'API REST.",
        subsections: [
          {
            title: "1. Application mobile",
            bullets: [
              "Application multiplateforme Android / iOS avec Kotlin Multiplatform et Compose Multiplatform",
              "Catalogue, variantes, panier, commandes, paiements et suivi de livraison",
              "Notifications et intégrations mobiles",
            ],
          },
          {
            title: "2. API REST",
            bullets: [
              "Backend central Spring Boot / Java",
              "Gestion utilisateurs, rôles, permissions, catalogue, commandes, stocks, paiements et logistique",
              "Sécurité, validation et contrôle des accès",
            ],
          },
          {
            title: "3. Web & CRM",
            bullets: [
              "Landing page Next.js / React pour l'acquisition et la présentation du produit",
              "CRM / back-office pour les équipes et opérations internes",
            ],
          },
        ],
      },
      {
        num: "03",
        title: "Application mobile",
        content:
          "L'application mobile constitue le principal point d'accès client à l'écosystème CanjiX.",
        bullets: [
          "Authentification synchronisée avec l'API REST",
          "Catalogue produits, catégories, variantes et attributs",
          "Gestion des combinaisons disponibles ou indisponibles",
          "Panier avec quantités, variantes et calcul des montants",
          "Processus de commande et suivi des différents états",
          "Intégration des paiements adaptés au marché ouest-africain",
          "Suivi de livraison et des commandes",
          "Architecture KMP / Compose Multiplatform avec SQLDelight, Koin et MVI",
        ],
      },
      {
        num: "04",
        title: "API REST & sécurité",
        content:
          "L'API REST centralise la logique métier et expose les données aux différentes interfaces du système.",
        bullets: [
          "Authentification et sécurisation avec 2FA email / SMS",
          "API Keys, JWT, refresh tokens et Rate limiting",
          "Gestion des utilisateurs, rôles et permissions",
          "Catalogue, variantes, commandes, stocks et entrepôts",
          "Intégration des services de paiement",
          "Données de livraison et suivi logistique",
          "Validation des données et contrôle des accès",
        ],
      },
      {
        num: "05",
        title: "CRM / Back-office",
        content:
          "Le CRM regroupe les outils nécessaires au pilotage quotidien des opérations commerciales, logistiques et administratives.",
        bullets: [
          "Administration : utilisateurs, rôles, permissions et opérations internes",
          "Catalogue & commandes : produits, variantes, attributs, commandes et suivi",
          "Paiements & logistique : transactions, livraisons et opérations logistiques",
          "Marketing : campagnes commerciales et promotions",
          "Centralisation des outils de pilotage",
        ],
      },
      {
        num: "06",
        title: "Contraintes métier & marché",
        content:
          "Le produit est construit autour de problématiques concrètes du commerce en Afrique de l'Ouest, notamment la disponibilité des moyens de paiement, la logistique et l'importation.",
        bullets: [
          "Prise en charge de produits disponibles immédiatement",
          "Gestion de produits sous commande et importés",
          "Logique de livraison et suivi des commandes",
          "Adaptation des moyens de paiement aux réalités du marché régional",
          "Architecture conçue pour permettre l'évolution vers de nouveaux marchés",
        ],
      },
      {
        num: "07",
        title: "Résultat & impact",
        content:
          "CanjiX est maintenu en production comme produit entrepreneurial personnel et avait dépassé 700 utilisateurs depuis avril 2026.",
        bullets: [
          "Produit réel avec utilisateurs actifs",
          "Écosystème couvrant mobile, backend, web et opérations internes",
          "Architecture conçue pour évoluer indépendamment par composant",
          "Expérience concrète de la conception jusqu'au déploiement et à la maintenance",
        ],
        quote:
          "CanjiX constitue aujourd'hui la démonstration la plus complète de ma capacité à construire et maintenir un produit logiciel de bout en bout.",
      },
    ],
  },

  {
    slug: "rs-business",
    title: "RS Business",
    subtitle:
      "Application Android de gestion des produits, stocks et ventes pour une boutique",
    type: "Développement Mobile",
    sector: "Retail · Gestion commerciale",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Inventory"],
    year: "2024",
    role: "Stagiaire · Développeur Android",
    scope: "Conception · Développement Mobile · Gestion commerciale",
    description:
      "RS Business est une application mobile conçue pour centraliser les opérations quotidiennes d'une boutique à Lomé : produits, stocks et ventes. Le projet a servi à structurer une base métier pouvant évoluer vers des fonctionnalités plus avancées de gestion commerciale.",
    vision:
      "Transformer les opérations quotidiennes d'une boutique en un système mobile simple, structuré et évolutif.",
    thumbnail: "/images/projects/rs-business/01.png",
    gallery: [
      "/images/projects/rs-business/01.png",
      "/images/projects/rs-business/02.png",
      "/images/projects/rs-business/03.png",
    ],
    tools: [
      "Kotlin",
      "Android",
      "Jetpack Compose",
      "SQLite",
      "Room",
      "Coroutines",
      "MVVM",
    ],
    metrics: [
      { label: "Type de projet", value: "Projet de stage" },
      { label: "Client", value: "Boutique RS Business" },
      { label: "Lieu", value: "Lomé, Togo" },
      { label: "Année", value: "2024" },
      { label: "Rôle", value: "Développeur Android" },
    ],
    sections: [
      {
        num: "01",
        title: "Contexte & problématique",
        content:
          "La boutique avait besoin d'une application permettant de centraliser le suivi des produits, des stocks et des ventes afin d'améliorer la visibilité sur les opérations quotidiennes.",
        bullets: [
          "Centraliser les informations produits",
          "Suivre les quantités disponibles",
          "Enregistrer les ventes",
          "Préparer une base évolutive pour de futures fonctions de gestion",
        ],
      },
      {
        num: "02",
        title: "Mon rôle & responsabilités",
        content:
          "J'ai conçu et développé l'application Android en structurant les écrans et la logique métier autour des besoins opérationnels de la boutique.",
        bullets: [
          "Création et consultation des produits",
          "Gestion et suivi des stocks",
          "Enregistrement et suivi des ventes",
          "Structuration de la logique métier",
          "Mise en place d'une architecture MVVM",
          "Persistance locale avec SQLite / Room",
        ],
      },
      {
        num: "03",
        title: "Architecture & technologies",
        content:
          "L'application repose sur une architecture Android moderne adaptée à une utilisation quotidienne en boutique.",
        bullets: [
          "Kotlin pour le développement",
          "Jetpack Compose pour l'interface",
          "Room / SQLite pour la persistance locale",
          "Coroutines pour les traitements asynchrones",
          "MVVM pour séparer présentation et logique métier",
        ],
      },
      {
        num: "04",
        title: "Valeur apportée",
        content:
          "Le projet a fourni une base mobile simple pour centraliser les opérations de la boutique tout en préparant l'évolution vers un système de gestion commerciale plus complet.",
        bullets: [
          "Meilleure visibilité sur les produits et stocks",
          "Centralisation des ventes",
          "Base technique maintenable et extensible",
          "Expérience pratique de développement d'une application métier Android",
        ],
      },
    ],
  },
];