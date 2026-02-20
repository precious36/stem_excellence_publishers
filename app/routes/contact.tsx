import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Contact STEM Excellence Publishers for enquiries, submissions, and partnerships.",
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
          lead="Reach the editorial team for general enquiries, manuscript submissions, and publishing partnerships."
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
              <li>Editorial enquiries and collaboration requests</li>
              <li>Author support and submission guidance</li>
              <li>Institutional and program partnerships</li>
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
      </div>
    </SiteLayout>
  );
}
