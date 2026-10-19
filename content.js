/* Central portfolio content. Edit these facts; build.mjs renders the deployable HTML. */
window.PORTFOLIO = {
  profile: {
    name: "Harshit Srivastava",
    role: "Mobile Engineer",
    description: "Mobile engineer with 1.5+ years of hands-on experience building and shipping Flutter apps across Android and iOS, now extending that experience into native Android with Kotlin.",
    url: "https://subsavage.github.io/"
  },
  links: {
    github: "https://github.com/subsavage",
    linkedin: "https://linkedin.com/in/harshit-srivast-ava",
    email: "harshitproff4@gmail.com",
    resume: "./assets/Harshit-Srivastava-Resume.pdf"
  },
  proof: [
    { index: "01", value: "40K+", label: "Lafetch downloads by departure", context: "Product total" },
    { index: "02", value: "300K+", label: "PARK+ monthly active users", context: "Product scale during my tenure" },
    { index: "03", value: "₹0 → ~₹1L", label: "Lafetch trailing-30-day revenue", context: "Pre-revenue at joining; around ₹1 lakh near departure" }
  ],
  experience: [
    {
      company: "ConceptDash", role: "Mobile App Developer", dates: "Jul 2026 — Present", current: true,
      domain: "Part-time contract · Pharmacy ERP in development",
      summary: "Sole Flutter engineer on a greenfield pharmacy ERP for inventory, sales and purchase workflows, with an integrated order portal.",
      points: [
        "Established a modular Flutter/GetX app foundation.",
        "Building offline-first workflows with queued synchronization, visible failure states and retry handling.",
        "Implementing camera-based invoice capture with image compression and validation.",
        "Coordinating REST API contracts and edge cases with the founding engineering team.",
      ],
      tech: ["Flutter", "Dart", "GetX", "REST APIs"],
      note: "Product details are limited due to NDA."
    },
    {
      company: "Lafetch", role: "Mobile App Developer", dates: "Mar 2026 — Jul 2026",
      domain: "Consumer commerce · Android and iOS",
      summary: "As the sole Flutter engineer across Android and iOS, I built LF Swipe, Studio, cart and checkout features. By departure, the product had 2K+ daily active users.",
      points: [
        "Built LF Swipe, Studio, cart and checkout features on a modular GetX codebase.",
        "Profiled low-end devices and removed unnecessary widget rebuilds to improve responsiveness.",
        "Coordinated API edge cases with backend and managed Android/iOS releases, including signing, staged rollouts, crash monitoring and store listings."
      ],
      tech: ["Flutter", "Dart", "GetX", "REST APIs", "Android", "iOS"],
      productLinks: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.lafetch.customer&hl=en_IN" },
        { label: "App Store", url: "https://apps.apple.com/in/app/lafetch-fetch-your-fashion/id6739497338" }
      ]
    },
    {
      company: "PARK+", role: "SDE Intern", dates: "Jul 2025 — Feb 2026",
      domain: "Consumer ecommerce · PWA-to-Flutter transition",
      summary: "Contributed to PARK+’s ecommerce experience during its PWA-to-Flutter transition, at a product scale of 300K+ monthly active users.",
      points: [
        "Built and shipped listing, cart and checkout flows in small, tested increments within an Agile/Scrum team.",
        "Implemented optimistic UI updates to reduce perceived latency on key conversion screens.",
        "Coordinated API behavior and edge cases with backend and QA."
      ],
      tech: ["Flutter", "B2C ecommerce", "Agile / Scrum"],
      productLinks: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ovunque.parkwheels&hl=en_IN" },
        { label: "App Store", url: "https://apps.apple.com/in/app/park-fastag-challan-app/id1244749178" }
      ]
    },
    {
      company: "SocialRise.AI", role: "Software Engineer Intern", dates: "Nov 2023 — Mar 2024",
      domain: "Cross-platform mobile UI",
      points: [
        "Built reusable Flutter components for Android and iOS and translated Figma designs into pixel-accurate screens.",
        "Reduced unnecessary widget rebuilds to improve scroll and tap responsiveness."
      ],
      tech: ["Flutter", "Dart", "Figma"]
    },
    {
      company: "Mudslide Creators Hub", role: "Flutter Developer", dates: "Jul 2023 — Nov 2023",
      domain: "App launch · Sole developer",
      points: [
        "Built a Flutter app from scratch and shipped it on Google Play in three months, maintaining a modular codebase and validating release builds."
      ],
      tech: ["Flutter", "Dart", "Clean Architecture"]
    }
  ],
  direction: ["Flutter", "Kotlin", "Jetpack Compose", "Android platform APIs"],
  projects: [
    {
      title: "ThoughtOn", kind: "SHIPPED · SOCIAL APP", index: "01",
      description: "A real-time social app built end-to-end, with authentication, a live feed and post creation. Firebase Auth and Firestore listeners sync changes across devices.",
      tags: ["Flutter", "Firebase Auth", "Firestore"],
      detail: "Designed Firestore collections for low-latency reads while limiting redundant listener triggers."
    }
  ],
  skills: [
    { category: "Mobile", items: ["Flutter", "Dart", "Android", "iOS", "Play Console", "App Store Connect"] },
    { category: "Architecture & APIs", items: ["Clean Architecture", "MVVM", "GetX", "Provider", "REST API integration and contract coordination"] },
    { category: "Data & delivery", items: ["Firebase", "Firestore", "PostgreSQL", "Git", "GitHub", "Postman"] },
    { category: "Languages", items: ["Dart", "JavaScript", "Python", "C++", "Go", "Java"] },
    { category: "Developing depth", items: ["Kotlin", "Jetpack Compose", "Android platform APIs"] }
  ]
};
