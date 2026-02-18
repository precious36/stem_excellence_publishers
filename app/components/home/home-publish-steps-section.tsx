import { Link } from "react-router";

const publishSteps = [
  {
    title: "Step 1 - Prepare",
    description:
      "Use our manuscript checklist and templates to align formatting, references, and structure.",
  },
  {
    title: "Step 2 - Submit",
    description:
      "Send your manuscript with a short cover note and your preferred publishing route.",
  },
  {
    title: "Step 3 - Review",
    description:
      "Editorial screening and quality checks for clarity, ethics, and audience fit.",
  },
  {
    title: "Step 4 - Publish",
    description:
      "We release and promote your work with citation-ready metadata and a clean landing page.",
  },
];

export function HomePublishStepsSection() {
  return (
    <section className="section">
      <div className="site-container">
        <div className="section-title split">
          <h2>Publish with us</h2>
          <p>A simple path for authors.</p>
        </div>

        <div className="grid-2">
          {publishSteps.map((step) => (
            <article key={step.title} className="content-card">
              <strong className="card-title">{step.title}</strong>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="action-row">
          <Link className="ref-btn ref-btn-primary" to="/for-authors">
            Go to author guidelines
          </Link>
        </div>
      </div>
    </section>
  );
}
