import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/blog";

const faqs = [
  {
    question: "Do you only publish textbooks?",
    answer:
      "No. We publish textbooks, revision guides, STEM outreach titles, academic monographs, and practical professional guides.",
  },
  {
    question: "Do you support open-access publishing?",
    answer:
      "Yes. Selected titles can be released free of charge when authors or partners choose open distribution, or where sponsorship supports open access.",
  },
  {
    question: "Do you accept first-time authors?",
    answer:
      "Yes. We support both experienced and first-time authors, especially when technical content is strong and the educational purpose is clear.",
  },
];

const partnershipAreas = [
  "Free or subsidised educational distribution",
  "Sponsored open-access titles",
  "Curriculum-aligned publishing initiatives",
  "STEM reading programmes and community libraries",
  "Author development workshops and writing support",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQs | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Frequently asked questions and partnership support areas.",
    },
  ];
}

export default function Blog() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/for-authors", label: "Submit" }]}>
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / FAQs"
          title="Frequently Asked Questions"
          lead="Answers to common questions about publishing models, submissions, and author support."
        />

        <section className="modern-grid three">
          {faqs.map((faq) => (
            <article key={faq.question} className="modern-card">
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </section>

        <section className="modern-grid two modern-section">
          <article className="modern-card">
            <h2>Partner With Us</h2>
            <p>
              We partner with schools, universities, NGOs, and STEM programmes to expand access to
              quality learning resources.
            </p>
            <ul className="modern-list">
              {partnershipAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </article>

          <article className="modern-card modern-card-accent">
            <h2>Need More Information?</h2>
            <p>
              Send your questions to{" "}
              <a href="mailto:info@stemexcellencepublishers.com">
                info@stemexcellencepublishers.com
              </a>{" "}
              and we will guide you on submissions, services, or partnership pathways.
            </p>
          </article>
        </section>
      </div>
    </SiteLayout>
  );
}
