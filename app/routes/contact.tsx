import type { FormEvent } from "react";

import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Contact information and placeholder enquiry form for STEM Excellence Publishers.",
    },
  ];
}

function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  window.alert("Form is a placeholder for now.");
}

export default function Contact() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/for-authors", label: "For Authors" }]}>
      <div className="site-container">
        <PageIntro
          breadcrumb="Home / Contact"
          title="Contact"
          lead="This form is local-only for now. During deployment, this can be connected to Netlify Forms."
        />

        <section className="section">
          <div className="grid-2">
            <article className="content-card">
              <h2>General enquiries</h2>
              <p>
                Email:{" "}
                <a href="mailto:info@stemexcellencepublishers.com">
                  info@stemexcellencepublishers.com
                </a>{" "}
                (placeholder)
              </p>
              <p>
                Submissions:{" "}
                <a href="mailto:submissions@stemexcellencepublishers.com">
                  submissions@stemexcellencepublishers.com
                </a>{" "}
                (placeholder)
              </p>
              <div className="tagrow">
                <span className="tag">Response time</span>
                <span className="tag">Support</span>
              </div>
            </article>

            <article className="content-card">
              <h2>Message</h2>
              <form className="form-grid" onSubmit={onSubmit}>
                <input className="form-input" type="text" name="name" placeholder="Your name" required />
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
                <input
                  className="form-input"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Your message"
                  required
                />
                <button className="ref-btn ref-btn-primary form-submit" type="submit">
                  Send message
                </button>
              </form>
            </article>
          </div>

          <div className="notice-box">
            If you want Netlify Forms next, this page can be wired without adding a backend.
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
