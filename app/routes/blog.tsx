import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/blog";

const updateStreams = [
  {
    title: "Editorial Notices",
    detail: "Policy updates, submission windows, and decisions affecting authors and partners.",
  },
  {
    title: "Calls for Manuscripts",
    detail: "Focused calls by discipline, level, and publication timeline.",
  },
  {
    title: "Release Announcements",
    detail: "New title launches, catalogue additions, and featured teaching resources.",
  },
];

const focusTopics = [
  "Mathematics education",
  "Engineering learning resources",
  "Computing and data literacy",
  "Open educational publishing",
  "STEM curriculum development",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | STEM Excellence Publishers" },
    {
      name: "description",
      content: "Announcements, calls for chapters, releases, and updates.",
    },
  ];
}

export default function Blog() {
  return (
    <SiteLayout compactFooterLinks={[{ to: "/for-authors", label: "Submit" }]}>
      <div className="site-container modern-page">
        <PageIntro
          breadcrumb="Home / Blog"
          title="Editorial Updates"
          lead="This section publishes official announcements, calls for manuscripts, and release updates."
        />

        <section className="modern-grid three">
          {updateStreams.map((stream) => (
            <article key={stream.title} className="modern-card">
              <h2>{stream.title}</h2>
              <p>{stream.detail}</p>
            </article>
          ))}
        </section>

        <section className="modern-grid two modern-section">
          <article className="modern-card">
            <h2>Topics We Cover</h2>
            <div className="modern-chip-row">
              {focusTopics.map((topic) => (
                <span key={topic} className="modern-chip">
                  {topic}
                </span>
              ))}
            </div>
          </article>

          <article className="modern-card modern-card-accent">
            <h2>Receive Updates</h2>
            <p>
              Send a request to{" "}
              <a href="mailto:info@stemexcellencepublishers.com">
                info@stemexcellencepublishers.com
              </a>{" "}
              to receive key editorial notices and publication calls.
            </p>
          </article>
        </section>
      </div>
    </SiteLayout>
  );
}
