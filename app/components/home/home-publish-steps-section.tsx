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
    <section className="publish-journey-section">
      <div className="site-container">
        <div className="publish-journey-header">
          <h2>Publish with us</h2>
          <p>A simple path for authors.</p>
        </div>

        <div className="publish-journey-grid">
          {publishSteps.map((step) => (
            <article key={step.title} className="publish-journey-card">
              <strong className="publish-journey-title">{step.title}</strong>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
