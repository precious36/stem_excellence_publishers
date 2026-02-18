import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Optional publishing services including editing, formatting, and metadata support.",
    },
  ];
}

export default function Services() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/contact", label: "Request a quote" }]}>
      <div className="site-container">
        <PageIntro
          breadcrumb="Home / Services"
          title="Services"
          lead="Optional services you can offer alongside publishing."
        />

        <section className="section">
          <div className="grid-3">
            <article className="content-card">
              <strong className="card-title">Editing & proofreading</strong>
              <p>Language clarity, structure, and consistency for STEM manuscripts.</p>
            </article>

            <article className="content-card">
              <strong className="card-title">Formatting & templates</strong>
              <p>Word/LaTeX setup, citation styles, and clean layout for publishing.</p>
            </article>

            <article className="content-card">
              <strong className="card-title">Cover + metadata</strong>
              <p>Cover design support, ISBN/barcode assistance, and web-ready metadata.</p>
            </article>
          </div>

          <div className="notice-box">
            Later this can include a quote request form and pricing tiers.
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
