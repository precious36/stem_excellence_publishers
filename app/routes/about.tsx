import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/about";

const highlights = [
  { value: "Open Access", label: "Publishing model" },
  { value: "STEM-First", label: "Editorial focus" },
  { value: "Practice Ready", label: "Learning outcomes" },
];

const principles = [
  {
    title: "Clarity and Structure",
    description:
      "Each manuscript is edited for readability, strong chapter flow, and clear instructional outcomes.",
  },
  {
    title: "Ethical Publishing",
    description:
      "We apply transparent editorial standards on attribution, originality, and responsible scientific communication.",
  },
  {
    title: "Practical Relevance",
    description:
      "Priority is given to books and guides that can be taught, implemented, and reused in real learning contexts.",
  },
];

const founders = [
  {
    name: "Blessings G. Malimusi",
    role: "Co-founder | Editorial and Learning Design",
    summary:
      "Leads content quality, instructional structure, and alignment of books with STEM learning pathways.",
    strengths: ["Curriculum design", "Applied modelling", "Technical editing"],
  },
  {
    name: "Trust Chifunga",
    role: "Co-founder | Publishing Strategy and Operations",
    summary:
      "Leads publishing operations, author support, and strategic partnerships for sustainable dissemination.",
    strengths: ["Editorial operations", "Outreach", "Publishing strategy"],
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | STEM Excellence Publishers" },
    {
      name: "description",
      content:
        "Learn about the mission, values, and founders of STEM Excellence Publishers.",
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
          lead="STEM Excellence Publishers advances STEM education through open-access books and practical research-informed learning resources."
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
            <h2 className="modern-section-title">Editorial Principles</h2>
            <p className="modern-section-note">
              Every project is reviewed for quality, relevance, and educational impact.
            </p>
          </div>

          <div className="modern-grid three">
            {principles.map((principle) => (
              <article key={principle.title} className="modern-card">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">Founding Team</h2>
          </div>

          <div className="modern-grid two">
            {founders.map((founder) => (
              <article key={founder.name} className="modern-card">
                <p className="modern-kicker">{founder.role}</p>
                <h3>{founder.name}</h3>
                <p>{founder.summary}</p>
                <div className="modern-chip-row">
                  {founder.strengths.map((strength) => (
                    <span key={strength} className="modern-chip">
                      {strength}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
