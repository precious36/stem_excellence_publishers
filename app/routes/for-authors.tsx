import { HomePublishStepsSection } from "../components/home/home-publish-steps-section";
import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/for-authors";

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
      <div className="site-container">
        <PageIntro
          breadcrumb="Home / For Authors"
          title="For Authors"
          lead="Use this page to define submission requirements and your editorial process."
        />

        <section className="section">
          <div className="grid-2">
            <article className="content-card">
              <h2>Submission checklist</h2>
              <p>
                Include: title page, abstract, keywords, chapters or sections, references, figure
                captions (if any), and a short author bio.
              </p>
              <div className="tagrow">
                <span className="tag">Word / LaTeX</span>
                <span className="tag">Citation style</span>
                <span className="tag">Ethics</span>
              </div>
            </article>

            <article className="content-card">
              <h2>How to submit</h2>
              <p>
                Email your manuscript and cover note to{" "}
                <a href="mailto:submissions@stemexcellencepublishers.com">
                  submissions@stemexcellencepublishers.com
                </a>{" "}
                (placeholder).
              </p>
              <p>
                In the subject line, use{" "}
                <strong className="site-strong-text">Submission - [Title] - [Category]</strong>.
              </p>
            </article>
          </div>

          <div className="notice-box">
            Next: templates buttons (Word/LaTeX) and a simple submission form can be added here.
          </div>
        </section>
      </div>
      <HomePublishStepsSection />
    </SiteLayout>
  );
}
