import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/books";

const catalogueTracks = [
  {
    title: "STEM Foundations Series",
    audience: "Secondary to first-year tertiary learners",
    focus: "Concept-first books that bridge mathematics, science, and real-world problem solving.",
  },
  {
    title: "Applied Engineering Guides",
    audience: "Technical colleges and undergraduate programs",
    focus:
      "Practice-driven references with worked examples, design workflows, and implementation notes.",
  },
  {
    title: "Computing and Data Skills",
    audience: "Beginner to intermediate digital learners",
    focus:
      "Hands-on introductions to coding, data analysis, and computational thinking for STEM contexts.",
  },
];

const publicationStandards = [
  "ISBN-ready bibliographic metadata",
  "Structured chapter abstracts and keywords",
  "Consistent citation and reference formatting",
  "Teaching-friendly visuals and figure captions",
];

const releaseSteps = [
  {
    title: "Manuscript Review",
    detail: "Editorial screening for fit, quality, and audience alignment.",
  },
  {
    title: "Production",
    detail: "Copyediting, layout standardization, and metadata preparation.",
  },
  {
    title: "Catalogue Launch",
    detail: "Public release with listing details and discoverability support.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Books | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Explore catalogue tracks and publication standards at STEM Excellence Publishers.",
    },
  ];
}

export default function Books() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/for-authors", label: "Submit a manuscript" }]}>
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / Books"
          title="Books & Catalogue"
          lead="Explore the catalogue tracks and standards used to prepare every title for learning impact and citation readiness."
        />

        <section className="modern-grid two">
          <article className="modern-card">
            <h2>Catalogue Tracks</h2>
            <div className="modern-stack">
              {catalogueTracks.map((track) => (
                <article key={track.title} className="modern-mini-card">
                  <h3>{track.title}</h3>
                  <p className="modern-muted">{track.audience}</p>
                  <p>{track.focus}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="modern-card modern-card-accent">
            <h2>Publication Standards</h2>
            <ul className="modern-list">
              {publicationStandards.map((standard) => (
                <li key={standard}>{standard}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="modern-section">
          <div className="modern-section-head">
            <h2 className="modern-section-title">Release Workflow</h2>
          </div>
          <div className="modern-grid three">
            {releaseSteps.map((step) => (
              <article key={step.title} className="modern-card">
                <p className="modern-kicker">{step.title}</p>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
