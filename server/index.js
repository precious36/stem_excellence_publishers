import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link, NavLink } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "icon",
  type: "image/jpeg",
  href: "/stem-logo.jpeg"
}, {
  rel: "shortcut icon",
  type: "image/jpeg",
  href: "/stem-logo.jpeg"
}, {
  rel: "apple-touch-icon",
  href: "/stem-logo.jpeg"
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800;900&family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const featuredBooks = [
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 1",
    image: "/red front.jpg"
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 2",
    image: "/blue front.jpg"
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 3",
    image: "/dark blue front.jpg"
  },
  {
    title: "Chemistry For Malawi",
    subtitle: "Student's Book 4",
    image: "/brown front.jpg"
  }
];
function HomeFeaturedBooksSection() {
  return /* @__PURE__ */ jsx("section", { className: "home-books", children: /* @__PURE__ */ jsxs("div", { className: "site-container", children: [
    /* @__PURE__ */ jsx("div", { className: "home-section-heading", children: /* @__PURE__ */ jsx("span", { children: "Featured Books" }) }),
    /* @__PURE__ */ jsx("div", { className: "home-books-grid", children: featuredBooks.map((book) => /* @__PURE__ */ jsxs("article", { className: "home-book-card", children: [
      /* @__PURE__ */ jsx("div", { className: "home-book-cover", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: book.image,
          alt: `${book.title} ${book.subtitle} cover`,
          className: "home-book-cover-image"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "home-book-subtitle", children: book.subtitle }),
      /* @__PURE__ */ jsx("h3", { className: "home-book-title", children: book.title })
    ] }, book.subtitle)) }),
    /* @__PURE__ */ jsx("div", { className: "home-books-action", children: /* @__PURE__ */ jsx(Link, { className: "ref-btn ref-btn-secondary", to: "/books", children: "Explore all books" }) })
  ] }) });
}
const focusAreas = [
  {
    title: "Students and Self-Learners",
    subtitle: "Clear STEM explanations for independent learning",
    icon: /* @__PURE__ */ jsx(GearIcon, {})
  },
  {
    title: "Teachers and Lecturers",
    subtitle: "Structured resources for classroom and program delivery",
    icon: /* @__PURE__ */ jsx(CalculatorIcon, {})
  },
  {
    title: "Researchers and STEM Programmes",
    subtitle: "Publishing support for outreach and capacity building",
    icon: /* @__PURE__ */ jsx(RocketIcon, {})
  }
];
function HomeFocusAreasSection() {
  return /* @__PURE__ */ jsx("section", { className: "home-focus-strip", children: /* @__PURE__ */ jsx("div", { className: "site-container", children: /* @__PURE__ */ jsx("div", { className: "home-focus-grid", children: focusAreas.map((item, index) => /* @__PURE__ */ jsxs(
    "article",
    {
      className: `home-focus-item ${index < focusAreas.length - 1 ? "with-divider" : ""}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "home-focus-icon", children: item.icon }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { children: item.title }),
          /* @__PURE__ */ jsx("p", { children: item.subtitle })
        ] })
      ]
    },
    item.title
  )) }) }) });
}
function GearIcon() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", "aria-hidden": "true", className: "h-10 w-10", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M30.2 18.4v-4.8l-3.6-.8a10.8 10.8 0 0 0-1.2-2.8l2-3-3.4-3.4-3 2a10.8 10.8 0 0 0-2.8-1.2L17.4 1h-4.8l-.8 3.6a10.8 10.8 0 0 0-2.8 1.2l-3-2L2.6 7l2 3c-.6.9-1 1.9-1.2 2.9L0 13.6v4.8l3.6.8a10.8 10.8 0 0 0 1.2 2.8l-2 3 3.4 3.4 3-2c.9.6 1.9 1 2.8 1.2l.8 3.6h4.8l.8-3.6c1-.2 1.9-.6 2.8-1.2l3 2 3.4-3.4-2-3c.6-.9 1-1.9 1.2-2.8zM15 22.2A6.2 6.2 0 1 1 15 9.8a6.2 6.2 0 0 1 0 12.4z",
        fill: "#0a62b2"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M28.8 28 23 22.8l-2.8 2.8 5 5.7h3.6Z", fill: "#159956" })
  ] });
}
function CalculatorIcon() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 36 36", "aria-hidden": "true", className: "h-10 w-10", children: [
    /* @__PURE__ */ jsx("rect", { x: "4", y: "2", width: "28", height: "32", rx: "4", fill: "#0ba8cf" }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "6", width: "20", height: "6", rx: "2", fill: "#d7f7ff" }),
    [
      [8, 15],
      [15, 15],
      [22, 15],
      [8, 22],
      [15, 22],
      [22, 22],
      [8, 29],
      [15, 29],
      [22, 29]
    ].map(([x, y]) => /* @__PURE__ */ jsx("rect", { x, y, width: "5", height: "5", rx: "1", fill: "#e6fcff" }, `${x}-${y}`))
  ] });
}
function RocketIcon() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 36 36", "aria-hidden": "true", className: "h-10 w-10", children: [
    /* @__PURE__ */ jsx("path", { d: "M21.9 3.4c3.7 1 7.4 4.7 8.4 8.4l-4.6 4.6-8.4-8.4 4.6-4.6Z", fill: "#11a36c" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M17.3 8c-3.2 1.1-6.2 3.1-8.4 5.3l-2.5 2.5 4.2 1.2 4.3 4.3 1.2 4.2 2.5-2.5c2.2-2.2 4.2-5.2 5.3-8.4L17.3 8Z",
        fill: "#2cc991"
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: "18.8", cy: "14.6", r: "2.1", fill: "#dcfff1" }),
    /* @__PURE__ */ jsx("path", { d: "M11.3 23.6 6 29v2h2l5.4-5.3-2.1-2.1Z", fill: "#f3b736" })
  ] });
}
function HomeHeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "home-hero", children: [
    /* @__PURE__ */ jsxs("div", { className: "home-hero-visual", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("div", { className: "home-hero-image home-hero-scientist" }),
      /* @__PURE__ */ jsx("div", { className: "home-hero-image home-hero-engineer" }),
      /* @__PURE__ */ jsx("div", { className: "home-hero-image home-hero-scientist" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "home-hero-overlay" }),
    /* @__PURE__ */ jsxs("div", { className: "site-container home-hero-content", children: [
      /* @__PURE__ */ jsx("h1", { children: "Advancing STEM Education Through Open Access Publishing" }),
      /* @__PURE__ */ jsx("p", { className: "home-hero-lead", children: "STEM Excellence Publishers is a mission-driven publishing platform dedicated to expanding high-quality STEM learning materials for Africa and the wider Global South. We publish, support, and distribute STEM books and educational resources with a strong emphasis on clarity, relevance, affordability, and accessibility - including open-access pathways where authors and partners choose free public distribution." }),
      /* @__PURE__ */ jsxs("div", { className: "home-hero-actions", children: [
        /* @__PURE__ */ jsx(Link, { className: "ref-btn ref-btn-secondary", to: "/books", children: "Explore our books" }),
        /* @__PURE__ */ jsx(Link, { className: "ref-btn ref-btn-primary", to: "/for-authors", children: "Submit a manuscript" }),
        /* @__PURE__ */ jsx(Link, { className: "ref-btn ref-btn-ghost", to: "/contact", children: "Partner with us" })
      ] })
    ] })
  ] });
}
const identityTags = [
  "Independent STEM publisher",
  "Academic rigor and readability",
  "Africa and Global South focus"
];
const valueTags = [
  "STEM-first focus",
  "Clarity obsession",
  "Flexible publishing models",
  "Open-access pathways"
];
function HomeHighlightsSection() {
  return /* @__PURE__ */ jsx("section", { className: "home-highlights", children: /* @__PURE__ */ jsx("div", { className: "site-container", children: /* @__PURE__ */ jsxs("div", { className: "home-highlights-grid", children: [
    /* @__PURE__ */ jsxs("article", { className: "home-highlight-card", children: [
      /* @__PURE__ */ jsx("h2", { children: "Who we are" }),
      /* @__PURE__ */ jsx("p", { children: "STEM Excellence Publishers is an independent publisher focused on practical, well-written, and locally relevant resources for secondary, university, and early-career STEM learners." }),
      /* @__PURE__ */ jsx("div", { className: "home-highlight-tags", children: identityTags.map((tag) => /* @__PURE__ */ jsx("span", { className: "tag home-highlight-tag", children: tag }, tag)) })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: "home-highlight-card", children: [
      /* @__PURE__ */ jsx("h2", { children: "Why choose us" }),
      /* @__PURE__ */ jsx("p", { children: "We prioritize technically accurate writing, clean design, and locally relevant STEM context while supporting both standard and open-access publishing routes." }),
      /* @__PURE__ */ jsx("div", { className: "home-highlight-tags", children: valueTags.map((tag) => /* @__PURE__ */ jsx("span", { className: "tag home-highlight-tag", children: tag }, tag)) })
    ] })
  ] }) }) });
}
const pillars = [
  {
    code: "MI",
    title: "Our Mission",
    description: "To accelerate STEM learning and innovation by publishing accessible, high-quality educational resources and enabling open-access distribution for wider impact."
  },
  {
    code: "VI",
    title: "Our Vision",
    description: "A world where every learner, regardless of geography or income, can access high-quality STEM knowledge and build skills to solve real societal problems."
  },
  {
    code: "VA",
    title: "Our Values",
    description: "Access and equity, quality and integrity, local relevance, innovation, and community impact guide every project we publish."
  }
];
function HomeFocusPillarsSection() {
  return /* @__PURE__ */ jsx("section", { className: "focus-pillars", children: /* @__PURE__ */ jsxs("div", { className: "site-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "focus-pillars-header", children: [
      /* @__PURE__ */ jsx("h2", { children: "Mission, Vision, Values" }),
      /* @__PURE__ */ jsx("p", { children: "The principles that shape every title and partnership." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "focus-pillars-grid", children: pillars.map((pillar) => /* @__PURE__ */ jsxs("article", { className: "focus-pillar-card", children: [
      /* @__PURE__ */ jsx("span", { className: "focus-pillar-code", children: pillar.code }),
      /* @__PURE__ */ jsx("h3", { children: pillar.title }),
      /* @__PURE__ */ jsx("p", { children: pillar.description })
    ] }, pillar.code)) })
  ] }) });
}
const publishSteps = [
  {
    title: "Step 1 - Define your proposal",
    description: "Start with a clear title, topic area, and target audience so the manuscript goals are explicit from the beginning."
  },
  {
    title: "Step 2 - Share core content",
    description: "Provide a provisional table of contents and a sample chapter (or 10-20 pages), including figures and tables where available."
  },
  {
    title: "Step 3 - Choose a publishing route",
    description: "Tell us whether you prefer open access, a standard release, or a partnership-supported pathway."
  },
  {
    title: "Step 4 - Review to publication",
    description: "We guide development, quality assurance, design, and distribution to move your manuscript into a publish-ready title."
  }
];
function HomePublishStepsSection() {
  return /* @__PURE__ */ jsx("section", { className: "publish-journey-section", children: /* @__PURE__ */ jsxs("div", { className: "site-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "publish-journey-header", children: [
      /* @__PURE__ */ jsx("h2", { children: "Submit a Manuscript" }),
      /* @__PURE__ */ jsx("p", { children: "We welcome STEM manuscripts from early proposals to complete drafts." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "publish-journey-grid", children: publishSteps.map((step) => /* @__PURE__ */ jsxs("article", { className: "publish-journey-card", children: [
      /* @__PURE__ */ jsx("strong", { className: "publish-journey-title", children: step.title }),
      /* @__PURE__ */ jsx("p", { children: step.description })
    ] }, step.title)) })
  ] }) });
}
function SiteFooter({ mode = "full", compactLinks = [] }) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  if (mode === "full") {
    return /* @__PURE__ */ jsx("footer", { className: "site-footer", children: /* @__PURE__ */ jsxs("div", { className: "site-container site-footer-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "site-footer-brand", children: /* @__PURE__ */ jsx("img", { src: "/stem-logo.jpeg", alt: "STEM Excellence Publishers", className: "brand-logo" }) }),
        /* @__PURE__ */ jsx("p", { className: "site-small-text", children: "STEM Excellence Publishers - Open-access and mission-driven publishing for STEM education, capacity-building, and innovation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "site-small-text", children: /* @__PURE__ */ jsx("strong", { className: "site-strong-text", children: "Contact" }) }),
        /* @__PURE__ */ jsxs("p", { className: "site-small-text", children: [
          "Email:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:info@stemexcellencepublishers.com", children: "info@stemexcellencepublishers.com" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "site-small-text", children: [
          "Copyright ",
          year,
          " STEM Excellence Publishers"
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx("footer", { className: "site-footer", children: /* @__PURE__ */ jsxs("div", { className: "site-container site-footer-grid compact", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "site-small-text", children: [
      "Copyright ",
      year,
      " STEM Excellence Publishers"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "site-footer-links", children: compactLinks.map((link, index) => /* @__PURE__ */ jsxs("span", { children: [
      index > 0 ? " | " : "",
      /* @__PURE__ */ jsx(Link, { to: link.to, children: link.label })
    ] }, link.to)) })
  ] }) });
}
const siteNavLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/books", label: "Books" },
  { to: "/for-authors", label: "For Authors" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "FAQs" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return /* @__PURE__ */ jsx("header", { className: "site-header", children: /* @__PURE__ */ jsxs("div", { className: "site-container site-header-inner", children: [
    /* @__PURE__ */ jsx(
      NavLink,
      {
        to: "/",
        end: true,
        "aria-label": "STEM Excellence Publishers Home",
        onClick: () => setMenuOpen(false),
        children: /* @__PURE__ */ jsx("img", { src: "/stem-logo.jpeg", alt: "STEM Excellence Publishers", className: "brand-logo" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "nav-toggle",
        "data-nav-toggle": true,
        "aria-expanded": menuOpen,
        "aria-controls": "site-nav",
        onClick: () => setMenuOpen((current) => !current),
        children: "Menu"
      }
    ),
    /* @__PURE__ */ jsx("nav", { id: "site-nav", className: `site-nav ${menuOpen ? "is-open" : ""}`, children: siteNavLinks.map((link) => /* @__PURE__ */ jsx(
      NavLink,
      {
        to: link.to,
        end: link.end,
        onClick: () => setMenuOpen(false),
        children: link.label
      },
      link.to
    )) })
  ] }) });
}
function SiteLayout({
  children,
  footerMode = "full",
  compactFooterLinks = []
}) {
  return /* @__PURE__ */ jsxs("div", { className: "page-shell min-h-screen w-full", children: [
    /* @__PURE__ */ jsx("a", { className: "skip-link", href: "#main-content", children: "Skip to content" }),
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { id: "main-content", children }),
    /* @__PURE__ */ jsx(SiteFooter, { mode: footerMode, compactLinks: compactFooterLinks })
  ] });
}
function meta$6({}) {
  return [{
    title: "STEM Excellence Publishers | Open Access STEM Publishing"
  }, {
    name: "description",
    content: "Mission-driven STEM publishing platform expanding accessible books and learning resources for Africa and the wider Global South."
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(SiteLayout, {
    footerMode: "full",
    children: [/* @__PURE__ */ jsx(HomeHeroSection, {}), /* @__PURE__ */ jsx(HomeFocusAreasSection, {}), /* @__PURE__ */ jsx(HomeHighlightsSection, {}), /* @__PURE__ */ jsx(HomeFocusPillarsSection, {}), /* @__PURE__ */ jsx(HomeFeaturedBooksSection, {}), /* @__PURE__ */ jsx(HomePublishStepsSection, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function PageIntro({ breadcrumb, title, lead }) {
  const leadParagraphs = Array.isArray(lead) ? lead : [lead];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "breadcrumbs", children: breadcrumb }),
    /* @__PURE__ */ jsxs("section", { className: "page-head", children: [
      /* @__PURE__ */ jsx("h1", { children: title }),
      leadParagraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { className: "lead", children: paragraph }, paragraph))
    ] })
  ] });
}
const highlights = [{
  value: "Independent",
  label: "STEM-focused publisher"
}, {
  value: "Africa + Global South",
  label: "Core impact region"
}, {
  value: "Open Access",
  label: "Supported distribution pathway"
}];
const missionVisionValues = [{
  title: "Our Mission",
  description: "To accelerate STEM learning and innovation by publishing accessible, high-quality educational resources and enabling open-access distribution for wider impact."
}, {
  title: "Our Vision",
  description: "A world where every learner, regardless of geography or income, can access high-quality STEM knowledge and develop skills to solve real societal problems."
}, {
  title: "Our Values",
  description: "These principles guide our publishing model."
}];
const coreValues = ["Access and equity", "Quality and integrity", "Local relevance", "Innovation", "Community impact"];
const founders = [{
  name: "Blessings G. Malimusi",
  role: "Co-Founder",
  image: "/blessings-g-malimusi.jpg"
}, {
  name: "Trust P. Chifunga",
  role: "Co-Founder",
  image: "/trust-p-chifunga.jpg"
}];
const valuePillars = [{
  title: "Access and Equity",
  description: "Knowledge should be reachable, affordable, and inclusive."
}, {
  title: "Quality and Integrity",
  description: "Peer-aware standards, credible references, and clear writing."
}, {
  title: "Local Relevance",
  description: "STEM content linked to real contexts and practical challenges."
}, {
  title: "Innovation",
  description: "Modern tools, digital-first distribution, and adaptable formats."
}, {
  title: "Community Impact",
  description: "Education that builds capability and confidence."
}];
const whoWeServe = ["Students and self-learners", "Teachers and lecturers", "Researchers converting expertise into books", "STEM outreach programmes and NGOs", "Universities, schools, and training centres"];
const whyChooseUs = ["STEM-first focus with strong technical structure", "Clarity-driven writing for teachable and readable content", "Flexible publishing models, including open-access options", "Africa-aware relevance for local contexts and constraints", "Professional print and digital design standards"];
function meta$5({}) {
  return [{
    title: "About | STEM Excellence Publishers"
  }, {
    name: "description",
    content: "Learn about STEM Excellence Publishers, our mission, vision, values, and who we serve."
  }];
}
const about = UNSAFE_withComponentProps(function About() {
  return /* @__PURE__ */ jsx(SiteLayout, {
    compactFooterLinks: [{
      to: "/books",
      label: "Books"
    }, {
      to: "/contact",
      label: "Contact"
    }],
    children: /* @__PURE__ */ jsxs("div", {
      className: "site-container modern-page",
      children: [/* @__PURE__ */ jsx(PageIntro, {
        breadcrumb: "Home / About",
        title: "About STEM Excellence Publishers",
        lead: ["STEM Excellence Publishers is an independent STEM-focused publisher founded to strengthen science, engineering, and technology education through practical, well-written, and locally relevant resources. We work with authors, educators, researchers, and institutions to publish textbooks, revision guides, academic monographs, outreach titles, and professional development materials that support learners from secondary school through university and early-career practice.", "We combine academic rigor with readability: content that is technically correct, clearly explained, and designed to help learners build real competence - not just pass exams."]
      }), /* @__PURE__ */ jsx("section", {
        className: "modern-stat-grid",
        "aria-label": "About highlights",
        children: highlights.map((item) => /* @__PURE__ */ jsxs("article", {
          className: "modern-stat-card",
          children: [/* @__PURE__ */ jsx("p", {
            className: "modern-stat-value",
            children: item.value
          }), /* @__PURE__ */ jsx("p", {
            className: "modern-stat-label",
            children: item.label
          })]
        }, item.label))
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-section",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "modern-section-head",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "modern-section-title",
            children: "Mission, Vision, Values"
          }), /* @__PURE__ */ jsx("p", {
            className: "modern-section-note",
            children: "We combine academic rigor with readability to build real learner competence."
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "modern-grid three",
          children: missionVisionValues.map((item) => /* @__PURE__ */ jsxs("article", {
            className: "modern-card",
            children: [/* @__PURE__ */ jsx("h3", {
              children: item.title
            }), /* @__PURE__ */ jsx("p", {
              children: item.description
            }), item.title === "Our Values" ? /* @__PURE__ */ jsx("ul", {
              className: "modern-list",
              children: coreValues.map((value) => /* @__PURE__ */ jsx("li", {
                children: value
              }, value))
            }) : null]
          }, item.title))
        })]
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-section",
        children: [/* @__PURE__ */ jsx("div", {
          className: "modern-section-head",
          children: /* @__PURE__ */ jsx("h2", {
            className: "modern-section-title",
            children: "Value Pillars"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "modern-grid three",
          children: valuePillars.map((pillar) => /* @__PURE__ */ jsxs("article", {
            className: "modern-card",
            children: [/* @__PURE__ */ jsx("h3", {
              children: pillar.title
            }), /* @__PURE__ */ jsx("p", {
              children: pillar.description
            })]
          }, pillar.title))
        })]
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-grid two modern-section",
        children: [/* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Who We Serve"
          }), /* @__PURE__ */ jsx("ul", {
            className: "modern-list",
            children: whoWeServe.map((group) => /* @__PURE__ */ jsx("li", {
              children: group
            }, group))
          })]
        }), /* @__PURE__ */ jsxs("article", {
          className: "modern-card modern-card-accent",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Why STEM Excellence Publishers"
          }), /* @__PURE__ */ jsx("ul", {
            className: "modern-list",
            children: whyChooseUs.map((reason) => /* @__PURE__ */ jsx("li", {
              children: reason
            }, reason))
          })]
        })]
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-section",
        children: [/* @__PURE__ */ jsx("div", {
          className: "modern-section-head",
          children: /* @__PURE__ */ jsx("h2", {
            className: "modern-section-title",
            children: "About the Founders"
          })
        }), /* @__PURE__ */ jsx("article", {
          className: "modern-card",
          children: /* @__PURE__ */ jsx("p", {
            children: "STEM Excellence Publishers was founded by Blessings G. Malimusi and Trust P. Chifunga, both committed to strengthening STEM learning through high-quality, practical publishing. The founders share a long-term vision: to reduce barriers to STEM education by producing resources that are rigorous, readable, and accessible - and by building partnerships that enable wider distribution across Africa and beyond."
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "modern-grid two modern-section",
          children: founders.map((founder) => /* @__PURE__ */ jsxs("article", {
            className: "modern-card",
            children: [founder.image ? /* @__PURE__ */ jsx("img", {
              src: founder.image,
              alt: founder.name,
              className: "founder-profile-image"
            }) : null, /* @__PURE__ */ jsx("p", {
              className: "modern-kicker",
              children: founder.role
            }), /* @__PURE__ */ jsx("h3", {
              children: founder.name
            })]
          }, founder.name))
        })]
      })]
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const bookCatalogue = [{
  title: "Chemistry For Malawi",
  volume: "Student's Book 1",
  frontImage: "/red front.jpg",
  backImage: "/red back.jpg",
  isbn: "ISBN 978-99960-099-5-2"
}, {
  title: "Chemistry For Malawi",
  volume: "Student's Book 2",
  frontImage: "/blue front.jpg",
  backImage: "/blue back.jpg",
  isbn: "ISBN 978-99960-099-6-9"
}, {
  title: "Chemistry For Malawi",
  volume: "Student's Book 3",
  frontImage: "/dark blue front.jpg",
  backImage: "/dark blue back.jpg",
  isbn: "ISBN 978-99960-099-7-6"
}, {
  title: "Chemistry For Malawi",
  volume: "Student's Book 4",
  frontImage: "/brown front.jpg",
  backImage: "/brown back.jpg",
  isbn: "ISBN 978-99960-082-4-5"
}];
function meta$4({}) {
  return [{
    title: "Books | STEM Excellence Publishers"
  }, {
    name: "description",
    content: "View the STEM Excellence Publishers book catalogue with front and back covers for each title."
  }];
}
const books = UNSAFE_withComponentProps(function Books() {
  return /* @__PURE__ */ jsx(SiteLayout, {
    compactFooterLinks: [{
      to: "/for-authors",
      label: "Submit a manuscript"
    }],
    children: /* @__PURE__ */ jsxs("div", {
      className: "site-container modern-page",
      children: [/* @__PURE__ */ jsx(PageIntro, {
        breadcrumb: "Home / Books",
        title: "Books Catalogue",
        lead: "Browse our catalogue with paired front and back covers for each Chemistry For Malawi title."
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-section",
        children: [/* @__PURE__ */ jsx("div", {
          className: "modern-section-head",
          children: /* @__PURE__ */ jsx("h2", {
            className: "modern-section-title",
            children: "Chemistry For Malawi Series"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "book-catalogue-grid",
          children: bookCatalogue.map((book) => /* @__PURE__ */ jsxs("article", {
            className: "modern-card book-catalogue-card",
            children: [/* @__PURE__ */ jsx("p", {
              className: "modern-kicker",
              children: book.volume
            }), /* @__PURE__ */ jsx("h3", {
              children: book.title
            }), /* @__PURE__ */ jsxs("div", {
              className: "book-cover-pair",
              children: [/* @__PURE__ */ jsxs("figure", {
                className: "book-cover-frame",
                children: [/* @__PURE__ */ jsx("img", {
                  src: book.frontImage,
                  alt: `${book.title} ${book.volume} front cover`,
                  className: "book-cover-image"
                }), /* @__PURE__ */ jsx("figcaption", {
                  children: "Front Cover"
                })]
              }), /* @__PURE__ */ jsxs("figure", {
                className: "book-cover-frame",
                children: [/* @__PURE__ */ jsx("img", {
                  src: book.backImage,
                  alt: `${book.title} ${book.volume} back cover`,
                  className: "book-cover-image"
                }), /* @__PURE__ */ jsx("figcaption", {
                  children: "Back Cover"
                })]
              })]
            }), /* @__PURE__ */ jsx("p", {
              className: "modern-muted",
              children: book.isbn
            })]
          }, book.volume))
        })]
      })]
    })
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: books,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const submissionChecklist = ["Title and topic area", "Target audience (secondary, undergraduate, postgraduate, or professional)", "Provisional table of contents", "Sample chapter (or 10-20 pages)", "Figures and tables, if available", "Preferred publishing route (open access, standard release, or partnership-supported)"];
const editorialProcess = [{
  stage: "1. Initial Screening",
  detail: "Scope, audience, and quality review to confirm fit with our STEM catalogue."
}, {
  stage: "2. Editorial Feedback",
  detail: "Development guidance for structure, clarity, and technical consistency."
}, {
  stage: "3. Quality and Design",
  detail: "Copyediting, references, figures, and layout preparation for publication."
}, {
  stage: "4. Publication and Distribution",
  detail: "Release support, metadata setup, and distribution planning including open-access options."
}];
const publishingScope = [{
  title: "Engineering and Technology",
  focus: "Chemical Engineering, Mechanical Engineering, Civil Engineering, and Electrical/Electronic Engineering."
}, {
  title: "Core Science and Data Disciplines",
  focus: "Chemistry, Physics, Mathematics, and Data Science resources for structured learning pathways."
}, {
  title: "Computing, Modelling, and Simulation",
  focus: "Computer programming for STEM, including Python, modelling, simulation, and applied computational thinking."
}, {
  title: "Energy and Process Systems",
  focus: "Renewable energy systems, hydrogen technologies, and process systems engineering for practical implementation."
}, {
  title: "Education and Outreach Titles",
  focus: "Books for schools, youth programmes, STEM clubs, and outreach initiatives designed for broad accessibility."
}, {
  title: "Professional and Early-Career Guides",
  focus: "Research-informed books and training guides that support transitions from learning to technical practice."
}];
function meta$3({}) {
  return [{
    title: "For Authors | STEM Excellence Publishers"
  }, {
    name: "description",
    content: "Submission requirements and publishing process for STEM authors."
  }];
}
const forAuthors = UNSAFE_withComponentProps(function ForAuthors() {
  return /* @__PURE__ */ jsx(SiteLayout, {
    compactFooterLinks: [{
      to: "/contact",
      label: "Contact"
    }],
    children: /* @__PURE__ */ jsxs("div", {
      className: "site-container modern-page",
      children: [/* @__PURE__ */ jsx(PageIntro, {
        breadcrumb: "Home / For Authors",
        title: "Submit a Manuscript",
        lead: "We welcome STEM manuscripts at different stages, from early proposals to complete drafts."
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-grid two",
        children: [/* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Submission Checklist"
          }), /* @__PURE__ */ jsx("ul", {
            className: "modern-list",
            children: submissionChecklist.map((item) => /* @__PURE__ */ jsx("li", {
              children: item
            }, item))
          }), /* @__PURE__ */ jsxs("div", {
            className: "modern-chip-row",
            children: [/* @__PURE__ */ jsx("span", {
              className: "modern-chip",
              children: "Early proposal or full draft"
            }), /* @__PURE__ */ jsx("span", {
              className: "modern-chip",
              children: "STEM-focused scope"
            }), /* @__PURE__ */ jsx("span", {
              className: "modern-chip",
              children: "Clear educational purpose"
            })]
          })]
        }), /* @__PURE__ */ jsxs("article", {
          className: "modern-card modern-card-accent",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "How to Submit"
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Send your manuscript package to", " ", /* @__PURE__ */ jsx("a", {
              href: "mailto:submissions@stemexcellencepublishers.com",
              children: "submissions@stemexcellencepublishers.com"
            }), "."]
          }), /* @__PURE__ */ jsxs("ul", {
            className: "modern-list",
            children: [/* @__PURE__ */ jsxs("li", {
              children: ["Use the subject format", " ", /* @__PURE__ */ jsx("strong", {
                className: "site-strong-text",
                children: "Submission | Title | Field"
              }), "."]
            }), /* @__PURE__ */ jsx("li", {
              children: "Include your intended audience and educational objective."
            }), /* @__PURE__ */ jsx("li", {
              children: "State your preferred publishing route (open access, standard, or supported)."
            })]
          })]
        })]
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-section",
        children: [/* @__PURE__ */ jsx("div", {
          className: "modern-section-head",
          children: /* @__PURE__ */ jsx("h2", {
            className: "modern-section-title",
            children: "Publishing Scope"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "modern-grid two",
          children: publishingScope.map((item) => /* @__PURE__ */ jsxs("article", {
            className: "modern-card",
            children: [/* @__PURE__ */ jsx("h3", {
              children: item.title
            }), /* @__PURE__ */ jsx("p", {
              children: item.focus
            })]
          }, item.title))
        })]
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-section",
        children: [/* @__PURE__ */ jsx("div", {
          className: "modern-section-head",
          children: /* @__PURE__ */ jsx("h2", {
            className: "modern-section-title",
            children: "Editorial Process"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "modern-grid two",
          children: editorialProcess.map((item) => /* @__PURE__ */ jsxs("article", {
            className: "modern-card",
            children: [/* @__PURE__ */ jsx("p", {
              className: "modern-kicker",
              children: item.stage
            }), /* @__PURE__ */ jsx("p", {
              children: item.detail
            })]
          }, item.stage))
        })]
      })]
    })
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: forAuthors,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const servicePackages = [{
  name: "1) Manuscript Development Support",
  summary: "Proposal review, planning support, and chapter-by-chapter development for clear STEM learning outcomes.",
  outputs: ["Audience and structure planning", "Development guidance by chapter", "Clarity checks for equations, units, and terminology"]
}, {
  name: "2) Editing and Quality Assurance",
  summary: "Copyediting and scientific consistency review to prepare technically strong and readable manuscripts.",
  outputs: ["Grammar, structure, and accuracy editing", "Reference and citation consistency", "Figure/table polishing and optional peer-review coordination"]
}, {
  name: "3) Typesetting and Book Design",
  summary: "Professional print and eBook layout for equation-rich engineering and science content.",
  outputs: ["LaTeX and Word-to-publication workflows", "Layout for STEM notation and technical diagrams", "Cover, spine, and back-cover design"]
}, {
  name: "4) Publishing and Distribution",
  summary: "Publication setup, metadata preparation, and release support across print and digital channels.",
  outputs: ["ISBN support and metadata preparation", "Print-ready export and eBook release", "Open-access publishing options where supported"]
}, {
  name: "5) Educational Partnerships",
  summary: "Publishing collaborations with schools, universities, NGOs, and STEM programmes.",
  outputs: ["Bulk distribution planning", "Co-branded educational campaigns", "Sponsored titles for free learner access where funding allows"]
}, {
  name: "6) Author Branding and Visibility",
  summary: "Support for discoverability and communication around your published STEM title.",
  outputs: ["Author profile and book landing pages", "Launch announcements and promotional assets", "Guidance on research-to-book conversion and endorsements"]
}];
const partnershipSupport = ["Free or subsidised educational distribution", "Sponsored open-access titles", "Curriculum-aligned publishing initiatives", "STEM reading programmes and community libraries", "Author development workshops and writing support"];
function meta$2({}) {
  return [{
    title: "Services | STEM Excellence Publishers"
  }, {
    name: "description",
    content: "Full publishing support including manuscript development, QA, design, distribution, and educational partnerships."
  }];
}
const services = UNSAFE_withComponentProps(function Services() {
  return /* @__PURE__ */ jsx(SiteLayout, {
    compactFooterLinks: [{
      to: "/contact",
      label: "Request a quote"
    }],
    children: /* @__PURE__ */ jsxs("div", {
      className: "site-container modern-page",
      children: [/* @__PURE__ */ jsx(PageIntro, {
        breadcrumb: "Home / Services",
        title: "Our Services",
        lead: "We support authors and institutions across the full publishing journey, from proposal planning to print and digital distribution."
      }), /* @__PURE__ */ jsx("section", {
        className: "modern-grid three",
        children: servicePackages.map((service) => /* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: service.name
          }), /* @__PURE__ */ jsx("p", {
            children: service.summary
          }), /* @__PURE__ */ jsx("ul", {
            className: "modern-list",
            children: service.outputs.map((output) => /* @__PURE__ */ jsx("li", {
              children: output
            }, output))
          })]
        }, service.name))
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-grid two modern-section",
        children: [/* @__PURE__ */ jsxs("article", {
          className: "modern-card modern-card-accent",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Open Access and Free Distribution"
          }), /* @__PURE__ */ jsxs("ul", {
            className: "modern-list",
            children: [/* @__PURE__ */ jsx("li", {
              children: "Open-access pathways are available to increase educational reach."
            }), /* @__PURE__ */ jsx("li", {
              children: "Selected titles are distributed free of charge under author and partner agreements."
            }), /* @__PURE__ */ jsx("li", {
              children: "Priority is given to underserved communities and learner-access programmes."
            }), /* @__PURE__ */ jsx("li", {
              children: "Mobile-friendly formats and trusted download channels are prioritized."
            })]
          })]
        }), /* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Partnership Support Areas"
          }), /* @__PURE__ */ jsx("ul", {
            className: "modern-list",
            children: partnershipSupport.map((item) => /* @__PURE__ */ jsx("li", {
              children: item
            }, item))
          })]
        })]
      })]
    })
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: services,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const faqs = [{
  question: "Do you only publish textbooks?",
  answer: "No. We publish textbooks, revision guides, STEM outreach titles, academic monographs, and practical professional guides."
}, {
  question: "Do you support open-access publishing?",
  answer: "Yes. Selected titles can be released free of charge when authors or partners choose open distribution, or where sponsorship supports open access."
}, {
  question: "Do you accept first-time authors?",
  answer: "Yes. We support both experienced and first-time authors, especially when technical content is strong and the educational purpose is clear."
}];
const partnershipAreas = ["Free or subsidised educational distribution", "Sponsored open-access titles", "Curriculum-aligned publishing initiatives", "STEM reading programmes and community libraries", "Author development workshops and writing support"];
function meta$1({}) {
  return [{
    title: "FAQs | STEM Excellence Publishers"
  }, {
    name: "description",
    content: "Frequently asked questions and partnership support areas."
  }];
}
const blog = UNSAFE_withComponentProps(function Blog() {
  return /* @__PURE__ */ jsx(SiteLayout, {
    compactFooterLinks: [{
      to: "/for-authors",
      label: "Submit"
    }],
    children: /* @__PURE__ */ jsxs("div", {
      className: "site-container modern-page",
      children: [/* @__PURE__ */ jsx(PageIntro, {
        breadcrumb: "Home / FAQs",
        title: "Frequently Asked Questions",
        lead: "Answers to common questions about publishing models, submissions, and author support."
      }), /* @__PURE__ */ jsx("section", {
        className: "modern-grid three",
        children: faqs.map((faq) => /* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: faq.question
          }), /* @__PURE__ */ jsx("p", {
            children: faq.answer
          })]
        }, faq.question))
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-grid two modern-section",
        children: [/* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Partner With Us"
          }), /* @__PURE__ */ jsx("p", {
            children: "We partner with schools, universities, NGOs, and STEM programmes to expand access to quality learning resources."
          }), /* @__PURE__ */ jsx("ul", {
            className: "modern-list",
            children: partnershipAreas.map((area) => /* @__PURE__ */ jsx("li", {
              children: area
            }, area))
          })]
        }), /* @__PURE__ */ jsxs("article", {
          className: "modern-card modern-card-accent",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Need More Information?"
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Send your questions to", " ", /* @__PURE__ */ jsx("a", {
              href: "mailto:info@stemexcellencepublishers.com",
              children: "info@stemexcellencepublishers.com"
            }), " ", "and we will guide you on submissions, services, or partnership pathways."]
          })]
        })]
      })]
    })
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: blog,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "Contact | STEM Excellence Publishers"
  }, {
    name: "description",
    content: "Contact STEM Excellence Publishers for enquiries, manuscripts, and partnerships."
  }];
}
const contact = UNSAFE_withComponentProps(function Contact() {
  return /* @__PURE__ */ jsx(SiteLayout, {
    compactFooterLinks: [{
      to: "/for-authors",
      label: "For Authors"
    }],
    children: /* @__PURE__ */ jsxs("div", {
      className: "site-container modern-page",
      children: [/* @__PURE__ */ jsx(PageIntro, {
        breadcrumb: "Home / Contact",
        title: "Contact",
        lead: "Reach the editorial team for enquiries, manuscript support, and educational partnerships."
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-grid two",
        children: [/* @__PURE__ */ jsxs("article", {
          className: "modern-card modern-card-accent",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Contact Channels"
          }), /* @__PURE__ */ jsxs("p", {
            children: ["General enquiries:", " ", /* @__PURE__ */ jsx("a", {
              href: "mailto:info@stemexcellencepublishers.com",
              children: "info@stemexcellencepublishers.com"
            })]
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Manuscript submissions:", " ", /* @__PURE__ */ jsx("a", {
              href: "mailto:submissions@stemexcellencepublishers.com",
              children: "submissions@stemexcellencepublishers.com"
            })]
          }), /* @__PURE__ */ jsxs("ul", {
            className: "modern-list",
            children: [/* @__PURE__ */ jsx("li", {
              children: "Editorial enquiries and manuscript guidance"
            }), /* @__PURE__ */ jsx("li", {
              children: "Open-access and distribution pathway questions"
            }), /* @__PURE__ */ jsx("li", {
              children: "Institutional, NGO, and STEM programme partnerships"
            })]
          })]
        }), /* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Send a Message"
          }), /* @__PURE__ */ jsxs("form", {
            className: "modern-form",
            action: "mailto:info@stemexcellencepublishers.com",
            method: "post",
            encType: "text/plain",
            children: [/* @__PURE__ */ jsxs("label", {
              className: "modern-field",
              children: [/* @__PURE__ */ jsx("span", {
                children: "Full name"
              }), /* @__PURE__ */ jsx("input", {
                className: "modern-input",
                type: "text",
                name: "name",
                required: true
              })]
            }), /* @__PURE__ */ jsxs("label", {
              className: "modern-field",
              children: [/* @__PURE__ */ jsx("span", {
                children: "Email address"
              }), /* @__PURE__ */ jsx("input", {
                className: "modern-input",
                type: "email",
                name: "email",
                required: true
              })]
            }), /* @__PURE__ */ jsxs("label", {
              className: "modern-field",
              children: [/* @__PURE__ */ jsx("span", {
                children: "Subject"
              }), /* @__PURE__ */ jsx("input", {
                className: "modern-input",
                type: "text",
                name: "subject",
                required: true
              })]
            }), /* @__PURE__ */ jsxs("label", {
              className: "modern-field",
              children: [/* @__PURE__ */ jsx("span", {
                children: "Message"
              }), /* @__PURE__ */ jsx("textarea", {
                className: "modern-textarea",
                name: "message",
                required: true
              })]
            }), /* @__PURE__ */ jsx("button", {
              className: "modern-submit",
              type: "submit",
              children: "Open Email Draft"
            })]
          }), /* @__PURE__ */ jsx("p", {
            className: "modern-footnote",
            children: "Submitting this form opens your default email application with your message details."
          })]
        })]
      }), /* @__PURE__ */ jsxs("section", {
        className: "modern-grid two modern-section",
        children: [/* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Partnership Priorities"
          }), /* @__PURE__ */ jsxs("ul", {
            className: "modern-list",
            children: [/* @__PURE__ */ jsx("li", {
              children: "Free or subsidised distribution for learners"
            }), /* @__PURE__ */ jsx("li", {
              children: "Sponsored open-access STEM titles"
            }), /* @__PURE__ */ jsx("li", {
              children: "Curriculum-aligned resource development"
            }), /* @__PURE__ */ jsx("li", {
              children: "Community libraries and STEM reading programmes"
            })]
          })]
        }), /* @__PURE__ */ jsxs("article", {
          className: "modern-card",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Submission Reminder"
          }), /* @__PURE__ */ jsx("p", {
            children: "Manuscripts can be submitted at proposal or draft stage. Include:"
          }), /* @__PURE__ */ jsxs("ul", {
            className: "modern-list",
            children: [/* @__PURE__ */ jsx("li", {
              children: "Title"
            }), /* @__PURE__ */ jsx("li", {
              children: "Target audience"
            }), /* @__PURE__ */ jsx("li", {
              children: "Provisional table of contents"
            }), /* @__PURE__ */ jsx("li", {
              children: "Sample chapter"
            }), /* @__PURE__ */ jsx("li", {
              children: "Preferred publishing route"
            })]
          })]
        })]
      })]
    })
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-bCxqR2Rw.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-gNf6zzMj.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js"], "css": ["/assets/root-C8py2jGB.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Bb8xDqwr.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js", "/assets/site-layout-BACk9OXX.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-BeZ7JQvv.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js", "/assets/page-intro-DvHFSf8v.js", "/assets/site-layout-BACk9OXX.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/books": { "id": "routes/books", "parentId": "root", "path": "books", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/books-CNW-cvlg.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js", "/assets/page-intro-DvHFSf8v.js", "/assets/site-layout-BACk9OXX.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/for-authors": { "id": "routes/for-authors", "parentId": "root", "path": "for-authors", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/for-authors-p99S4lAZ.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js", "/assets/page-intro-DvHFSf8v.js", "/assets/site-layout-BACk9OXX.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/services": { "id": "routes/services", "parentId": "root", "path": "services", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/services-N-HnG7T1.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js", "/assets/page-intro-DvHFSf8v.js", "/assets/site-layout-BACk9OXX.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/blog-URNoOK17.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js", "/assets/page-intro-DvHFSf8v.js", "/assets/site-layout-BACk9OXX.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/contact-DErxu-GM.js", "imports": ["/assets/chunk-EPOLDU6W-Hvs9Ewie.js", "/assets/page-intro-DvHFSf8v.js", "/assets/site-layout-BACk9OXX.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-14bad21a.js", "version": "14bad21a", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "unstable_trailingSlashAwareDataRequests": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/books": {
    id: "routes/books",
    parentId: "root",
    path: "books",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/for-authors": {
    id: "routes/for-authors",
    parentId: "root",
    path: "for-authors",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
