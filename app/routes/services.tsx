import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/services";

const servicePackages = [
  {
    name: "1) Manuscript Development Support",
    summary:
      "Proposal review, planning support, and chapter-by-chapter development for clear STEM learning outcomes.",
    outputs: [
      "Audience and structure planning",
      "Development guidance by chapter",
      "Clarity checks for equations, units, and terminology",
    ],
  },
  {
    name: "2) Editing and Quality Assurance",
    summary:
      "Copyediting and scientific consistency review to prepare technically strong and readable manuscripts.",
    outputs: [
      "Grammar, structure, and accuracy editing",
      "Reference and citation consistency",
      "Figure/table polishing and optional peer-review coordination",
    ],
  },
  {
    name: "3) Typesetting and Book Design",
    summary:
      "Professional print and eBook layout for equation-rich engineering and science content.",
    outputs: [
      "LaTeX and Word-to-publication workflows",
      "Layout for STEM notation and technical diagrams",
      "Cover, spine, and back-cover design",
    ],
  },
  {
    name: "4) Publishing and Distribution",
    summary:
      "Publication setup, metadata preparation, and release support across print and digital channels.",
    outputs: [
      "ISBN support and metadata preparation",
      "Print-ready export and eBook release",
      "Open-access publishing options where supported",
    ],
  },
  {
    name: "5) Educational Partnerships",
    summary:
      "Publishing collaborations with schools, universities, NGOs, and STEM programmes.",
    outputs: [
      "Bulk distribution planning",
      "Co-branded educational campaigns",
      "Sponsored titles for free learner access where funding allows",
    ],
  },
  {
    name: "6) Author Branding and Visibility",
    summary:
      "Support for discoverability and communication around your published STEM title.",
    outputs: [
      "Author profile and book landing pages",
      "Launch announcements and promotional assets",
      "Guidance on research-to-book conversion and endorsements",
    ],
  },
];

const partnershipSupport = [
  "Free or subsidised educational distribution",
  "Sponsored open-access titles",
  "Curriculum-aligned publishing initiatives",
  "STEM reading programmes and community libraries",
  "Author development workshops and writing support",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services | STEM Excellence Publishers" },
    {
      name: "description",
      content:
        "Full publishing support including manuscript development, QA, design, distribution, and educational partnerships.",
    },
  ];
}

export default function Services() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/contact", label: "Request a quote" }]}>
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / Services"
          title="Our Services"
          lead="We support authors and institutions across the full publishing journey, from proposal planning to print and digital distribution."
        />

        <section className="modern-grid three">
          {servicePackages.map((service) => (
            <article key={service.name} className="modern-card">
              <h2>{service.name}</h2>
              <p>{service.summary}</p>
              <ul className="modern-list">
                {service.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="modern-grid two modern-section">
          <article className="modern-card modern-card-accent">
            <h2>Open Access and Free Distribution</h2>
            <ul className="modern-list">
              <li>Open-access pathways are available to increase educational reach.</li>
              <li>
                Selected titles are distributed free of charge under author and partner agreements.
              </li>
              <li>
                Priority is given to underserved communities and learner-access programmes.
              </li>
              <li>Mobile-friendly formats and trusted download channels are prioritized.</li>
            </ul>
          </article>

          <article className="modern-card">
            <h2>Partnership Support Areas</h2>
            <ul className="modern-list">
              {partnershipSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </SiteLayout>
  );
}
