import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/about";

const highlights = [
  { value: "Independent", label: "STEM-focused publisher" },
  { value: "Africa + Global South", label: "Core impact region" },
  { value: "Open Access", label: "Supported distribution pathway" },
];

const missionVisionValues = [
  {
    title: "Our Mission",
    description:
      "To accelerate STEM learning and innovation by publishing accessible, high-quality educational resources and enabling open-access distribution for wider impact.",
  },
  {
    title: "Our Vision",
    description:
      "A world where every learner, regardless of geography or income, can access high-quality STEM knowledge and develop skills to solve real societal problems.",
  },
  {
    title: "Our Values",
    description:
      "Access and equity, quality and integrity, local relevance, innovation, and community impact guide our publishing model.",
  },
];

const founders = [
  {
    name: "Blessings G. Malimusi",
    role: "Co-Founder",
    image: "/blessings-g-malimusi.jpg",
    summary:
      "Committed to strengthening STEM learning through practical, high-quality publishing and long-term educational partnerships.",
  },
  {
    name: "Trust P. Chifunga",
    role: "Co-Founder",
    image: "/trust-p-chifunga.jpg",
    summary:
      "Focused on expanding access to rigorous and readable STEM resources across Africa and beyond.",
  },
];

const valuePillars = [
  {
    title: "Access and Equity",
    description: "Knowledge should be reachable, affordable, and inclusive.",
  },
  {
    title: "Quality and Integrity",
    description: "Peer-aware standards, credible references, and clear writing.",
  },
  {
    title: "Local Relevance",
    description: "STEM content linked to real contexts and practical challenges.",
  },
  {
    title: "Innovation",
    description: "Modern tools, digital-first distribution, and adaptable formats.",
  },
  {
    title: "Community Impact",
    description: "Education that builds capability and confidence.",
  },
];

const whoWeServe = [
  "Students and self-learners",
  "Teachers and lecturers",
  "Researchers converting expertise into books",
  "STEM outreach programmes and NGOs",
  "Universities, schools, and training centres",
];

const whyChooseUs = [
  "STEM-first focus with strong technical structure",
  "Clarity-driven writing for teachable and readable content",
  "Flexible publishing models, including open-access options",
  "Africa-aware relevance for local contexts and constraints",
  "Professional print and digital design standards",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | STEM Excellence Publishers" },
    {
      name: "description",
      content:
        "Learn about STEM Excellence Publishers, our mission, vision, values, and who we serve.",
    },
  ];
}

export default function About() {
  return (
    <SiteLayout
      compactFooterLinks={[
        { to: "/books", label: "Books" },
        { to: "/contact", label: "Contact" },
      ]}
    >
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / About"
          title="About STEM Excellence Publishers"
          lead="STEM Excellence Publishers is an independent STEM-focused publisher founded to strengthen science, engineering, and technology education through practical, well-written, and locally relevant resources."
        />

        <section className="modern-stat-grid" aria-label="About highlights">
          {highlights.map((item) => (
            <article key={item.label} className="modern-stat-card">
              <p className="modern-stat-value">{item.value}</p>
              <p className="modern-stat-label">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">Mission, Vision, Values</h2>
            <p className="modern-section-note">
              We combine academic rigor with readability to build real learner competence.
            </p>
          </div>

          <div className="modern-grid three">
            {missionVisionValues.map((item) => (
              <article key={item.title} className="modern-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">Value Pillars</h2>
          </div>

          <div className="modern-grid three">
            {valuePillars.map((pillar) => (
              <article key={pillar.title} className="modern-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="modern-grid two modern-section">
          <article className="modern-card">
            <h2>Who We Serve</h2>
            <ul className="modern-list">
              {whoWeServe.map((group) => (
                <li key={group}>{group}</li>
              ))}
            </ul>
          </article>

          <article className="modern-card modern-card-accent">
            <h2>Why STEM Excellence Publishers</h2>
            <ul className="modern-list">
              {whyChooseUs.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">About the Founders</h2>
          </div>

          <div className="modern-grid two">
            {founders.map((founder) => (
              <article key={founder.name} className="modern-card">
                {founder.image ? (
                  <img src={founder.image} alt={founder.name} className="founder-profile-image" />
                ) : null}
                <p className="modern-kicker">{founder.role}</p>
                <h3>{founder.name}</h3>
                <p>{founder.summary}</p>
              </article>
            ))}
          </div>
          <p className="modern-footnote">
            Detailed founder biographies will be published from the back-cover profiles of our
            books.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
