import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/for-authors";

const submissionChecklist = [
  "Title and topic area",
  "Target audience (secondary, undergraduate, postgraduate, or professional)",
  "Provisional table of contents",
  "Sample chapter (or 10-20 pages)",
  "Figures and tables, if available",
  "Preferred publishing route (open access, standard release, or partnership-supported)",
];

const editorialProcess = [
  {
    stage: "1. Initial Screening",
    detail: "Scope, audience, and quality review to confirm fit with our STEM catalogue.",
  },
  {
    stage: "2. Editorial Feedback",
    detail: "Development guidance for structure, clarity, and technical consistency.",
  },
  {
    stage: "3. Quality and Design",
    detail: "Copyediting, references, figures, and layout preparation for publication.",
  },
  {
    stage: "4. Publication and Distribution",
    detail: "Release support, metadata setup, and distribution planning including open-access options.",
  },
];

const publishingScope = [
  {
    title: "Engineering and Technology",
    focus:
      "Chemical Engineering, Mechanical Engineering, Civil Engineering, and Electrical/Electronic Engineering.",
  },
  {
    title: "Core Science and Data Disciplines",
    focus:
      "Chemistry, Physics, Mathematics, and Data Science resources for structured learning pathways.",
  },
  {
    title: "Computing, Modelling, and Simulation",
    focus:
      "Computer programming for STEM, including Python, modelling, simulation, and applied computational thinking.",
  },
  {
    title: "Energy and Process Systems",
    focus:
      "Renewable energy systems, hydrogen technologies, and process systems engineering for practical implementation.",
  },
  {
    title: "Education and Outreach Titles",
    focus:
      "Books for schools, youth programmes, STEM clubs, and outreach initiatives designed for broad accessibility.",
  },
  {
    title: "Professional and Early-Career Guides",
    focus:
      "Research-informed books and training guides that support transitions from learning to technical practice.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "For Authors | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Submission requirements and publishing process for STEM authors.",
    },
  ];
}

export default function ForAuthors() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/contact", label: "Contact" }]}>
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / For Authors"
          title="Submit a Manuscript"
          lead="We welcome STEM manuscripts at different stages, from early proposals to complete drafts."
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
              <span className="modern-chip">Early proposal or full draft</span>
              <span className="modern-chip">STEM-focused scope</span>
              <span className="modern-chip">Clear educational purpose</span>
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
              Use the subject format <strong className="site-strong-text">Submission | Title | Field</strong>.
            </p>
            <p>
              Include a short cover note with the intended audience, educational objective, and
              preferred publishing route.
            </p>
          </article>
        </section>

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">Publishing Scope</h2>
          </div>
          <div className="modern-grid two">
            {publishingScope.map((item) => (
              <article key={item.title} className="modern-card">
                <h3>{item.title}</h3>
                <p>{item.focus}</p>
              </article>
            ))}
          </div>
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
