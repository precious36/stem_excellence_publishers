import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/for-authors";

const submissionChecklist = [
  "Complete manuscript file (Word or LaTeX export)",
  "Title page, abstract, and keywords",
  "References in a consistent citation style",
  "Figure and table captions with source attribution",
  "Short author biography and affiliation details",
];

const editorialProcess = [
  {
    stage: "1. Initial Screening",
    detail: "Scope and quality review to confirm fit with the catalogue.",
  },
  {
    stage: "2. Editorial Feedback",
    detail: "Structure, language, and technical consistency review with revision notes.",
  },
  {
    stage: "3. Production",
    detail: "Final formatting, metadata setup, and publication readiness checks.",
  },
  {
    stage: "4. Publication",
    detail: "Release and indexing preparation for discovery and educational reuse.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Authors | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Submission requirements and editorial process for authors.",
    },
  ];
}

export default function ForAuthors() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/contact", label: "Contact" }]}>
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / For Authors"
          title="For Authors"
          lead="Submit manuscripts that are practical, well-structured, and ready for editorial review."
        />

        <section className="modern-grid two">
          <article className="modern-card">
            <h2>Submission Checklist</h2>
            <ul className="modern-list">
              {submissionChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="modern-chip-row">
              <span className="modern-chip">Word / LaTeX</span>
              <span className="modern-chip">Citation consistency</span>
              <span className="modern-chip">Publishing ethics</span>
            </div>
          </article>

          <article className="modern-card modern-card-accent">
            <h2>How to Submit</h2>
            <p>
              Send your manuscript package to{" "}
              <a href="mailto:submissions@stemexcellencepublishers.com">
                submissions@stemexcellencepublishers.com
              </a>
              .
            </p>
            <p>
              Use the subject format{" "}
              <strong className="site-strong-text">Submission | Title | Discipline</strong>.
            </p>
            <p>Include a short cover note stating the intended audience and book objective.</p>
          </article>
        </section>

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">Editorial Process</h2>
          </div>
          <div className="modern-grid two">
            {editorialProcess.map((item) => (
              <article key={item.stage} className="modern-card">
                <p className="modern-kicker">{item.stage}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
