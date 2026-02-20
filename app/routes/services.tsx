import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/services";

const servicePackages = [
  {
    name: "Editing and Proofreading",
    summary:
      "Language refinement, structure alignment, and technical consistency checks for STEM manuscripts.",
    outputs: ["Clarity edits", "Consistency pass", "Final proof"],
  },
  {
    name: "Formatting and Layout",
    summary:
      "Template alignment, clean typesetting, and production-ready structure across chapters and references.",
    outputs: ["Template setup", "Citation styling", "Print-ready files"],
  },
  {
    name: "Metadata and Launch Support",
    summary:
      "Metadata preparation and release support to improve discoverability and catalogue quality.",
    outputs: ["Metadata pack", "Catalogue entry", "Release checklist"],
  },
];

const serviceUseCases = [
  "Preparing a manuscript for first publication",
  "Converting draft content into a teaching-ready book",
  "Standardizing references and chapter structure before release",
];

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
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / Services"
          title="Services"
          lead="Professional publishing support for authors and institutions preparing high-quality STEM content."
        />

        <section className="modern-grid three">
          {servicePackages.map((service) => (
            <article key={service.name} className="modern-card">
              <h2>{service.name}</h2>
              <p>{service.summary}</p>
              <div className="modern-chip-row">
                {service.outputs.map((output) => (
                  <span key={output} className="modern-chip">
                    {output}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="modern-grid two modern-section">
          <article className="modern-card modern-card-accent">
            <h2>Request a Service Package</h2>
            <p>
              Email your manuscript scope and timeline to{" "}
              <a href="mailto:info@stemexcellencepublishers.com">
                info@stemexcellencepublishers.com
              </a>{" "}
              for a tailored support plan.
            </p>
          </article>

          <article className="modern-card">
            <h2>Best Use Cases</h2>
            <ul className="modern-list">
              {serviceUseCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </SiteLayout>
  );
}
