import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/about";



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
    description: "These principles guide our publishing model.",
  },
];

const coreValues = [
  "Access and equity",
  "Quality and integrity",
  "Local relevance",
  "Innovation",
  "Community impact",
];

const founders = [
  {
    name: "Blessings G. Malimusi",
    role: "Co-Founder",
    image: "/blessings-g-malimusi.jpg",
    linkedin: "https://www.linkedin.com/in/blessings-malimusi-aa4393212/",
    facebook: "https://web.facebook.com/blessings.malimusi",
  },
  {
    name: "Trust P. Chifunga",
    role: "Co-Founder",
    image: "/trust-p-chifunga.jpg",
    linkedin: "https://www.linkedin.com/in/trust-chifunga-2635bb163/",
    facebook: "https://web.facebook.com/em.trust.5",
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
          lead={[
            "STEM Excellence Publishers is an independent STEM-focused publisher founded to strengthen science, engineering, and technology education through practical, well-written, and locally relevant resources. We work with authors, educators, researchers, and institutions to publish textbooks, revision guides, academic monographs, outreach titles, and professional development materials that support learners from secondary school through university and early-career practice.",
            "We combine academic rigor with readability: content that is technically correct, clearly explained, and designed to help learners build real competence - not just pass exams.",
          ]}
        />

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">About the Founders</h2>
          </div>
          <article className="modern-card">
            <p>
              STEM Excellence Publishers was founded by Blessings G. Malimusi and Trust P.
              Chifunga, both committed to strengthening STEM learning through high-quality,
              practical publishing. The founders share a long-term vision: to reduce barriers to
              STEM education by producing resources that are rigorous, readable, and accessible -
              and by building partnerships that enable wider distribution across Africa and beyond.
            </p>
          </article>

          <div className="modern-grid two modern-section">
            {founders.map((founder) => (
              <article key={founder.name} className="modern-card">
                {founder.image ? (
                  <img src={founder.image} alt={founder.name} className="founder-profile-image" />
                ) : null}
                <p className="modern-kicker">{founder.role}</p>
                <h3>{founder.name}</h3>
                <div className="founder-social-links" aria-label={`${founder.name} social links`}>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founder-social-link"
                  >
                    <span className="founder-social-icon" aria-hidden="true">
                      <LinkedInIcon />
                    </span>
                    LinkedIn
                  </a>
                  <a
                    href={founder.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founder-social-link"
                  >
                    <span className="founder-social-icon" aria-hidden="true">
                      <FacebookIcon />
                    </span>
                    Facebook
                  </a>
                </div>
              </article>
            ))}
          </div>
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
                {item.title === "Our Values" ? (
                  <ul className="modern-list">
                    {coreValues.map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                ) : null}
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

      </div>
    </SiteLayout>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" className="h-4 w-4">
      <path
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.84-2.06 3.79-2.06C21.3 8.58 22 10.9 22 14.02V21h-4v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V21h-4V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" className="h-4 w-4">
      <path
        d="M13.5 8.5V6.9c0-.76.5-.9.86-.9h2.13V2.5h-2.93C10.48 2.5 9 4.4 9 7.1v1.4H6.5v3.6H9V21h4.5v-8.9h2.68l.4-3.6H13.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
