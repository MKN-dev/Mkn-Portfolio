import type { Project, ProjectSection } from "./projects";

/**
 * English overrides for project translatable fields.
 * Keyed by slug. Only text fields are overridden — images, tools, urls stay the same.
 */
export const projectsEn: Record<
  string,
  Partial<
    Omit<Project, "slug" | "thumbnail" | "gallery" | "tools" | "url" | "tags" | "year"> & {
      metrics: { label: string; value: string }[];
      sections: ProjectSection[];
    }
  >
> = {
  monitrack: {
    subtitle:
      "Cross-platform mobile application for managing accounts, transactions and financial operations",
    type: "Mobile Development",
    sector: "Finance · Management",
    role: "Software Engineer · Mobile Developer",
    scope: "Design · Mobile Development · Architecture · Security",
    description:
      "MoniTrack is a cross-platform mobile application designed to centralize customer account management, financial transactions and administrative operations within an organization. The system supports CLIENT, ADMIN and SUPER_ADMIN roles and combines secure authentication, permission management, offline-first operation and data synchronization.",
    vision:
      "Build a reliable and secure business application that remains usable even when connectivity is not guaranteed.",
    metrics: [
      { label: "Project type", value: "Freelance" },
      { label: "Sector", value: "Finance / Management" },
      { label: "Period", value: "02/2026–05/2026" },
      { label: "Role", value: "Software Engineer" },
    ],
    urlLabel: "View project",
    sections: [
      {
        num: "01",
        title: "Context & challenge",
        content:
          "The goal was to provide a mobile application that centralizes customer accounts, transactions, balances and administrative activities in a single interface.",
        bullets: [
          "Manage multiple user roles and permission levels",
          "Secure access to accounts and sensitive operations",
          "Allow data access and updates with or without a network connection",
          "Maintain an actionable history of transactions and user actions",
        ],
        quote:
          "A financial application must remain reliable when connectivity, access rights and operating conditions become complex.",
      },
      {
        num: "02",
        title: "My role & responsibilities",
        content:
          "I designed and developed the cross-platform mobile application together with the mechanisms required for security, local persistence and data synchronization.",
        bullets: [
          "Implemented authentication with Firebase Authentication",
          "Managed CLIENT, ADMIN and SUPER_ADMIN roles",
          "Implemented sessions, sign-out and biometric authentication",
          "Developed user management, account archiving and reactivation",
          "Designed an offline-first architecture with Room and Firestore synchronization",
          "Developed operation history and PDF financial report generation",
        ],
      },
      {
        num: "03",
        title: "Architecture & technical approach",
        content:
          "The application uses a cross-platform architecture based on Kotlin Multiplatform and Compose Multiplatform, with local persistence, remote synchronization and clear separation of responsibilities.",
        subsections: [
          {
            title: "1. Authentication & authorization",
            bullets: [
              "Firebase Authentication for user identity",
              "Role and permission control based on user profile",
              "Biometric authentication on Android/iOS",
            ],
          },
          {
            title: "2. Offline-first & synchronization",
            bullets: [
              "Local persistence of users, transactions and actions",
              "Room as the local source for offline operation",
              "Synchronization with Firebase Firestore",
              "Schema migration management",
            ],
          },
          {
            title: "3. Mobile architecture",
            bullets: [
              "Kotlin Multiplatform for shared business logic",
              "Compose Multiplatform for the user interface",
              "MVI, Coroutines and Koin for application structure and dependency injection",
            ],
          },
        ],
      },
      {
        num: "04",
        title: "Key features",
        content:
          "The product covers the main business flows required for day-to-day operational monitoring.",
        bullets: [
          "Account and administrative profile management",
          "Balance and transaction viewing",
          "History with date-range filtering",
          "Financial reports in PDF format",
          "Native sharing of reports and administrator invitations",
          "Administrative activity and action management",
        ],
      },
      {
        num: "05",
        title: "Outcome & value delivered",
        content:
          "MoniTrack provides a security-focused business mobile foundation designed for continuity of service in environments where network availability may vary.",
        bullets: [
          "Secure access based on each user's role",
          "Continuous access through offline-first operation",
          "Centralized transaction and administrative operation tracking",
          "A technical foundation ready for additional business features",
        ],
      },
    ],
  },

  "procedural-world-lab-launcher": {
    subtitle:
      "Cross-platform desktop launcher for distributing, downloading and installing Unreal Engine products",
    type: "Desktop Development",
    sector: "Game Development · Software Distribution",
    role: "Software Engineer · Desktop Developer",
    scope: "Design · Desktop Development · Web Integration · Systems",
    description:
      "Procedural World Lab is a cross-platform desktop launcher designed to distribute and manage products for Unreal Engine. The application centralizes authentication, the store, downloads, product installation and Unreal Engine project management.",
    vision:
      "Turn a simple launcher into a complete entry point for purchasing, downloading, installing and managing Unreal Engine products.",
    metrics: [
      { label: "Project type", value: "Freelance" },
      { label: "Sector", value: "Game Development" },
      { label: "Period", value: "07/2024–01/2025 · Redesign 07/2026–Present" },
      { label: "Role", value: "Software Engineer" },
    ],
    urlLabel: "View project",
    sections: [
      {
        num: "01",
        title: "Context & challenge",
        content:
          "The project required a launcher capable of connecting a web-based sales platform to a desktop application and providing users with a consistent end-to-end experience.",
        bullets: [
          "Authenticate users directly from the launcher",
          "Allow users to browse and purchase products",
          "Download large files with progress tracking and error handling",
          "Automatically install products into Unreal Engine projects",
          "Discover and manage projects already available on the user's machine",
        ],
        quote:
          "The launcher was designed to remove the manual steps between purchasing a product and using it inside Unreal Engine.",
      },
      {
        num: "02",
        title: "My role & responsibilities",
        content:
          "I contributed to the design and development of the cross-platform launcher while collaborating with backend and frontend teams to maintain consistency between the web and desktop experiences.",
        bullets: [
          "Developed the desktop launcher with Kotlin Multiplatform and Compose Multiplatform",
          "Integrated authentication and account management",
          "Integrated the store through a WebView connected to the sales platform",
          "Developed the download and progress tracking system",
          "Automated product decompression and installation",
          "Detected and organized Unreal Engine projects through .uproject files",
          "Managed the lifecycle of purchased products",
        ],
      },
      {
        num: "03",
        title: "Architecture & systems",
        content:
          "The launcher is structured around clear responsibilities and progressive desktop service integration while preserving a shared cross-platform foundation.",
        subsections: [
          {
            title: "1. Purchase experience",
            bullets: [
              "Browse the product catalog from the launcher",
              "Open the purchase flow through WebView",
              "Manage access to already purchased products",
            ],
          },
          {
            title: "2. Download & installation",
            bullets: [
              "Progress tracking",
              "Error handling and download limit control",
              "Automatic decompression",
              "Installation into user projects",
            ],
          },
          {
            title: "3. Unreal Engine integration",
            bullets: [
              "Automatically scan projects available on the machine",
              "Detect .uproject files",
              "Organize projects and associate installed products",
            ],
          },
        ],
      },
      {
        num: "04",
        title: "Redesign & collaboration",
        content:
          "The 2026 redesign focuses on evolving the desktop experience while maintaining consistency with the existing web platform and services.",
        bullets: [
          "Align the web and desktop experiences",
          "Collaborate with backend and frontend teams",
          "Gradually improve the desktop architecture and services",
          "Maintain a shared Kotlin Multiplatform / Compose Multiplatform foundation",
        ],
      },
      {
        num: "05",
        title: "Value delivered",
        content:
          "The launcher centralizes several steps that were previously separated throughout the user's workflow.",
        bullets: [
          "A single access point for purchased products",
          "Automated downloads and installation",
          "Fewer manual operations for the user",
          "Better continuity between the sales platform and Unreal Engine projects",
        ],
      },
    ],
  },

  canjix: {
    subtitle:
      "Cross-platform e-commerce and marketplace ecosystem for the West African market",
    type: "Product · Mobile · Backend · Web",
    sector: "E-commerce · Marketplace · Logistics",
    role: "Founder · Software Engineer",
    scope:
      "Architecture · Mobile · Backend · Web · CRM · Payments · Logistics",
    description:
      "CanjiX is an entrepreneurial product I designed and developed for the West African market. The ecosystem combines a mobile application, REST API, landing page and CRM / back office to cover product discovery, orders, payments, inventory, delivery and administrative operations.",
    vision:
      "Build an e-commerce platform adapted to the realities of the West African market, with an architecture that can evolve independently across mobile, backend, web and internal operations.",
    metrics: [
      { label: "Project type", value: "Personal entrepreneurial project" },
      { label: "Sector", value: "E-commerce / Marketplace" },
      { label: "Period", value: "2024–Present" },
      { label: "Users", value: "700+ since April 2026" },
      { label: "Role", value: "Founder · Software Engineer" },
    ],
    urlLabel: "View project",
    sections: [
      {
        num: "01",
        title: "Context & challenge",
        content:
          "CanjiX was designed as an e-commerce ecosystem adapted to the West African context, with specific requirements around payments, delivery, imported products and internal operations.",
        bullets: [
          "Allow customers to discover, order and track their purchases",
          "Manage product variants, attributes and availability",
          "Support both immediately available and made-to-order products",
          "Integrate payment methods and delivery flows adapted to the regional market",
          "Centralize commercial, logistics and administrative operations",
        ],
        quote:
          "The product was not meant to be just an online store: it had to cover the operational chain required to run the business.",
      },
      {
        num: "02",
        title: "Overall architecture",
        content:
          "The architecture separates interfaces and responsibilities so they can evolve independently while centralizing business logic in the REST API.",
        subsections: [
          {
            title: "1. Mobile application",
            bullets: [
              "Android / iOS cross-platform application built with Kotlin Multiplatform and Compose Multiplatform",
              "Catalog, variants, cart, orders, payments and delivery tracking",
              "Notifications and mobile integrations",
            ],
          },
          {
            title: "2. REST API",
            bullets: [
              "Central backend built with Spring Boot / Java",
              "User, role, permission, catalog, order, inventory, payment and logistics management",
              "Security, validation and access control",
            ],
          },
          {
            title: "3. Web & CRM",
            bullets: [
              "Next.js / React landing page for acquisition and product presentation",
              "CRM / back office for internal teams and operations",
            ],
          },
        ],
      },
      {
        num: "03",
        title: "Mobile application",
        content:
          "The mobile application is the main customer entry point into the CanjiX ecosystem.",
        bullets: [
          "Authentication synchronized with the REST API",
          "Product catalog, categories, variants and attributes",
          "Management of available and unavailable combinations",
          "Cart with quantities, selected variants and total calculation",
          "Order flow and status tracking",
          "Payment integration adapted to the West African market",
          "Delivery and order tracking",
          "KMP / Compose Multiplatform architecture with SQLDelight, Koin and MVI",
        ],
      },
      {
        num: "04",
        title: "REST API & security",
        content:
          "The REST API centralizes business logic and exposes data to the different interfaces of the system.",
        bullets: [
          "Authentication and security with email / SMS 2FA",
          "API keys, JWT, refresh tokens and rate limiting",
          "User, role and permission management",
          "Catalog, variants, orders, inventory and warehouses",
          "Payment service integration",
          "Delivery data and logistics tracking",
          "Data validation and access control",
        ],
      },
      {
        num: "05",
        title: "CRM / back office",
        content:
          "The CRM brings together the tools required to manage day-to-day commercial, logistics and administrative operations.",
        bullets: [
          "Administration: users, roles, permissions and internal operations",
          "Catalog & orders: products, variants, attributes, orders and processing tracking",
          "Payments & logistics: transactions, deliveries and logistics operations",
          "Marketing: commercial campaigns and promotions",
          "Centralized operational management tools",
        ],
      },
      {
        num: "06",
        title: "Business & market constraints",
        content:
          "The product is built around real-world commerce challenges in West Africa, particularly payment availability, logistics and imports.",
        bullets: [
          "Support for immediately available products",
          "Management of made-to-order and imported products",
          "Delivery logic and order tracking",
          "Payment methods adapted to the regional market",
          "Architecture designed to support expansion into new markets",
        ],
      },
      {
        num: "07",
        title: "Outcome & impact",
        content:
          "CanjiX is maintained in production as a personal entrepreneurial product and has surpassed 700 users since April 2026.",
        bullets: [
          "A real product with active users",
          "An ecosystem covering mobile, backend, web and internal operations",
          "An architecture designed for independent evolution by component",
          "Hands-on experience covering design, development, deployment and maintenance",
        ],
        quote:
          "CanjiX is the strongest demonstration of my ability to build and maintain a software product end to end.",
      },
    ],
  },

  "rs-business": {
    subtitle:
      "Android application for managing products, inventory and sales for a retail store",
    type: "Mobile Development",
    sector: "Retail · Business Management",
    role: "Intern · Android Developer",
    scope: "Design · Mobile Development · Business Management",
    description:
      "RS Business is a mobile application designed to centralize the daily operations of a retail store in Lomé: products, inventory and sales. The project established a business foundation that could later evolve into a more advanced commercial management system.",
    vision:
      "Turn daily store operations into a simple, structured and scalable mobile management system.",
    metrics: [
      { label: "Project type", value: "Internship project" },
      { label: "Client", value: "RS Business Store" },
      { label: "Location", value: "Lomé, Togo" },
      { label: "Year", value: "2024" },
      { label: "Role", value: "Android Developer" },
    ],
    urlLabel: "View project",
    sections: [
      {
        num: "01",
        title: "Context & challenge",
        content:
          "The store needed an application to centralize product, inventory and sales tracking in order to improve visibility into day-to-day operations.",
        bullets: [
          "Centralize product information",
          "Track available quantities",
          "Record sales",
          "Prepare an extensible foundation for future management features",
        ],
      },
      {
        num: "02",
        title: "My role & responsibilities",
        content:
          "I designed and developed the Android application by structuring its screens and business logic around the store's operational needs.",
        bullets: [
          "Product creation and consultation",
          "Inventory management and tracking",
          "Sales recording and tracking",
          "Business logic structuring",
          "Implementation of an MVVM architecture",
          "Local persistence with SQLite / Room",
        ],
      },
      {
        num: "03",
        title: "Architecture & technologies",
        content:
          "The application uses a modern Android architecture adapted to day-to-day retail operations.",
        bullets: [
          "Kotlin for development",
          "Jetpack Compose for the interface",
          "Room / SQLite for local persistence",
          "Coroutines for asynchronous operations",
          "MVVM to separate presentation and business logic",
        ],
      },
      {
        num: "04",
        title: "Value delivered",
        content:
          "The project provided a simple mobile foundation for centralizing store operations while preparing the system for future expansion into more advanced commercial management features.",
        bullets: [
          "Improved visibility into products and inventory",
          "Centralized sales tracking",
          "Maintainable and extensible technical foundation",
          "Practical experience building a business-focused Android application",
        ],
      },
    ],
  },
};