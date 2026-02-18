import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/about";

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
        { to: "/contact", label: "Contact" },
        { to: "/for-authors", label: "For Authors" },
      ]}
    >
      <div className="site-container">
        <PageIntro
          breadcrumb="Home / About"
          title="About"
          lead="STEM Excellence Publishers is a publishing initiative created by Blessings G. Malimusi and Trust Chifunga to expand access to practical STEM learning resources and research outputs."
        />

        <section className="section">
          <div className="grid-2">
            <article className="content-card">
              <h2>Mission</h2>
              <p>
                To publish accessible, high-quality STEM resources that support learners,
                educators, and practitioners, with a strong emphasis on reproducibility and
                open-source modelling where appropriate.
              </p>
            </article>

            <article className="content-card">
              <h2>Values</h2>
              <p>
                Clarity in writing, ethical publishing, inclusive education, and practical impact.
                We prioritize materials that can be taught, implemented, and reused in real
                settings.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-title split">
            <h2>Founders</h2>
            <p>Replace placeholders with final bios later.</p>
          </div>

          <div className="grid-2">
            <article className="content-card">
              <strong className="card-title">Blessings G. Malimusi</strong>
              <p>Co-founder | Editor | STEM publishing and modelling-focused content development.</p>
              <div className="tagrow">
                <span className="tag">Publishing</span>
                <span className="tag">Modelling</span>
                <span className="tag">Education</span>
              </div>
            </article>

            <article className="content-card">
              <strong className="card-title">Trust Chifunga</strong>
              <p>Co-founder | Editorial development | Strategic publishing operations.</p>
              <div className="tagrow">
                <span className="tag">Editorial</span>
                <span className="tag">Outreach</span>
                <span className="tag">Strategy</span>
              </div>
            </article>
          </div>

          <div className="notice-box">
            Tip: next we can add profile photos, a small timeline, and a section on why open
            source tools matter.
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
