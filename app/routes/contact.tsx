import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Contact STEM Excellence Publishers for enquiries, manuscripts, and partnerships.",
    },
  ];
}

export default function Contact() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/for-authors", label: "For Authors" }]}>
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / Contact"
          title="Contact"
          lead="Reach the editorial team for enquiries, manuscript support, and educational partnerships."
        />

        <section className="modern-grid two">
          <article className="modern-card modern-card-accent">
            <h2>Contact Channels</h2>
            <p>
              General enquiries:{" "}
              <a href="mailto:info@stemexcellencepublishers.com">
                info@stemexcellencepublishers.com
              </a>
            </p>
            <p>
              Manuscript submissions:{" "}
              <a href="mailto:submissions@stemexcellencepublishers.com">
                submissions@stemexcellencepublishers.com
              </a>
            </p>
            <ul className="modern-list">
              <li>Editorial enquiries and manuscript guidance</li>
              <li>Open-access and distribution pathway questions</li>
              <li>Institutional, NGO, and STEM programme partnerships</li>
            </ul>
          </article>

          <article className="modern-card">
            <h2>Send a Message</h2>
            <form
              className="modern-form"
              action="mailto:info@stemexcellencepublishers.com"
              method="post"
              encType="text/plain"
            >
              <label className="modern-field">
                <span>Full name</span>
                <input className="modern-input" type="text" name="name" required />
              </label>
              <label className="modern-field">
                <span>Email address</span>
                <input className="modern-input" type="email" name="email" required />
              </label>
              <label className="modern-field">
                <span>Subject</span>
                <input className="modern-input" type="text" name="subject" required />
              </label>
              <label className="modern-field">
                <span>Message</span>
                <textarea className="modern-textarea" name="message" required />
              </label>
              <button className="modern-submit" type="submit">
                Open Email Draft
              </button>
            </form>
            <p className="modern-footnote">
              Submitting this form opens your default email application with your message details.
            </p>
          </article>
        </section>

        <section className="modern-grid two modern-section">
          <article className="modern-card">
            <h2>Partnership Priorities</h2>
            <ul className="modern-list">
              <li>Free or subsidised distribution for learners</li>
              <li>Sponsored open-access STEM titles</li>
              <li>Curriculum-aligned resource development</li>
              <li>Community libraries and STEM reading programmes</li>
            </ul>
          </article>

          <article className="modern-card">
            <h2>Submission Reminder</h2>
            <p>
              Manuscripts can be submitted at proposal or draft stage. Include:
            </p>
            <ul className="modern-list">
              <li>Title</li>
              <li>Target audience</li>
              <li>Provisional table of contents</li>
              <li>Sample chapter</li>
              <li>Preferred publishing route</li>
            </ul>
          </article>
        </section>
      </div>
    </SiteLayout>
  );
}
