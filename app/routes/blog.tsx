import { PageIntro } from "../components/site/page-intro";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/blog";

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
      <div className="site-container">
        <PageIntro
          breadcrumb="Home / Blog"
          title="Blog"
          lead="Announcements, calls for chapters, new releases, and updates."
        />

        <section className="section">
          <div className="grid-2">
            <article className="content-card">
              <strong className="card-title">Post title (placeholder)</strong>
              <p>Short excerpt. Add a simple post system later, or keep this as static pages.</p>
              <div className="tagrow">
                <span className="tag">Announcement</span>
                <span className="tag">2026</span>
              </div>
            </article>

            <article className="content-card">
              <strong className="card-title">Call for submissions (placeholder)</strong>
              <p>Short excerpt. Replace with real dates and categories when ready.</p>
              <div className="tagrow">
                <span className="tag">Call</span>
                <span className="tag">Books</span>
              </div>
            </article>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
