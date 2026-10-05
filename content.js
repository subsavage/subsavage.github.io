/* Edit this file to update portfolio facts and add project case studies. */
window.PORTFOLIO = {
  links: {
    github: "https://github.com/subsavage",
    linkedin: "https://linkedin.com/in/harshit-srivast-ava",
    email: "mailto:harshitproff4@gmail.com",
    resume: "./assets/Harshit-Srivastava-Resume.pdf"
  },
  metrics: [
    { value: "2+ years", label: "Building mobile products" },
    { value: "300k+", label: "PARK+ ecommerce experience · product scale" },
    { value: "₹0 → ~₹1L", label: "Lafetch 30-day revenue trajectory" },
    { value: "Flutter → Android", label: "Expanding platform depth" }
  ],
  experience: [
    {
      company: "Concept Dash", role: "Mobile App Developer", dates: "Jul 2026 — Present", current: true, domain: "Greenfield pharmacy ERP · 0 → 1", signal: "0 → 1", signalLabel: "greenfield product engineering",
      summary: "Sole Flutter engineer building an inventory, sales and purchase platform with an integrated order portal. Own architecture, development, QA and release across Android and iOS.",
      points: ["Designed a modular clean-architecture codebase with GetX for independent feature development and testability.", "Building offline-first workflows with queued synchronization and failure/retry handling for core inventory operations.", "Working through camera and invoice capture with image compression and validation.", "Own signing, versioning, staged rollouts, crash monitoring and store submissions; work directly with the founding team on REST API contracts."] ,
      tech: "Flutter · Dart · GetX · Clean Architecture · REST API design",
      note: "Selected implementation details are intentionally omitted due to NDA."
    },
    {
      company: "Lafetch", role: "Mobile App Developer", dates: "Mar 2026 — Jul 2026", domain: "Consumer commerce · early commercial traction", signal: "₹0 → ~₹1L", signalLabel: "product revenue in the preceding 30 days by departure",
      summary: "Joined at a pre-revenue stage and contributed as the product moved toward commercial traction. The revenue figure describes the product, not individual attribution.",
      points: ["As sole Flutter engineer, owned end-to-end delivery across Android and iOS; the product reached 40K+ downloads and 2K+ daily active users.", "Built revenue-facing LF Swipe, Studio, cart and checkout features from spec through store release on a modular GetX codebase.", "Profiled low-end devices to remove unnecessary widget rebuilds; negotiated API edge cases and managed signing, staged rollouts and crash monitoring."],
      tech: "Flutter · Dart · GetX · REST APIs · Android · iOS",
      productLinks: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.lafetch.customer&hl=en_IN" }, { label: "App Store", url: "https://apps.apple.com/in/iphone/search?term=lafetch" }]
    },
    {
      company: "PARK+", role: "SDE Intern", dates: "Jul 2025 — Feb 2026", domain: "Production consumer commerce", signal: "300k+", signalLabel: "monthly active users across the product",
      summary: "Contributed to PARK+’s ecommerce experience during its PWA-to-Flutter transition. The 300k+ MAU figure is product scale, not users personally acquired.",
      points: ["Built product listing, cart and checkout flows, shipping core revenue-path features in small, tested increments.", "Implemented optimistic UI updates to reduce perceived latency on slow connections across key conversion screens.", "Worked with backend and QA to agree API behavior and edge cases before release, catching integration issues early."],
      tech: "Flutter · B2C ecommerce · Agile / Scrum",
      productLinks: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ovunque.parkwheels&hl=en_IN" }, { label: "App Store", url: "https://apps.apple.com/in/app/park-fastag-challan-app/id1244749178" }]
    },
    {
      company: "SocialRise.AI", role: "Software Engineer Intern", dates: "Nov 2023 — Mar 2024", domain: "Cross-platform mobile UI",
      points: ["Built reusable Flutter components for Android and iOS and translated Figma designs into pixel-accurate screens.", "Reduced unnecessary widget rebuilds to improve scroll and tap responsiveness."], tech: "Flutter · Dart · Figma"
    },
    {
      company: "Mudslide Creators Hub", role: "Flutter Developer", dates: "Jul 2023 — Nov 2023", domain: "App launch · sole developer",
      points: ["Took a Flutter app from scratch to Google Play Store in three months, maintaining a modular clean-architecture codebase and validating release builds."], tech: "Flutter · Dart · Clean Architecture · Google Play"
    }
  ],
  pathway: ["Flutter", "Kotlin", "Jetpack Compose", "Android APIs", "Sensors / BLE / Native integration"],
  projects: [
    { title: "ThoughtOn", kind: "SHIPPED · SOCIAL APP", index: "01", description: "A real-time social app built end-to-end, with authentication, a live feed and post creation. Firestore listeners sync updates across devices.", tags: ["Flutter", "Firebase Auth", "Firestore"], details: "Designed Firestore collections for low-latency reads while limiting redundant listener triggers." },
    { title: "ConceptDash ERP", kind: "IN PROGRESS · GREENFIELD", index: "02", description: "Greenfield pharmacy ERP for inventory, sales and purchase management, with an integrated order portal. Architecture and releases owned end-to-end.", tags: ["Flutter", "GetX", "REST APIs"], details: "Selected implementation details are intentionally omitted due to NDA." }
  ],
  skills: [
    { category: "Mobile", items: "Flutter · Dart · Android · iOS · App Store Connect · Play Console" },
    { category: "Architecture", items: "MVVM · Clean Architecture · GetX · Provider · REST API design & governance" },
    { category: "Backend & data", items: "Firebase · PostgreSQL · Node.js · FastAPI" },
    { category: "Languages & tools", items: "Dart · JavaScript · Python · C++ · Go · Java · Git · GitHub · Postman · Linux / Ubuntu" },
    { category: "Developing depth", items: "Kotlin · Jetpack Compose · Android platform APIs" }
  ]
};





