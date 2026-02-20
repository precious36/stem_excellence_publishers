const publishSteps = [
  {
    title: "Step 1 - Define your proposal",
    description:
      "Start with a clear title, topic area, and target audience so the manuscript goals are explicit from the beginning.",
  },
  {
    title: "Step 2 - Share core content",
    description:
      "Provide a provisional table of contents and a sample chapter (or 10-20 pages), including figures and tables where available.",
  },
  {
    title: "Step 3 - Choose a publishing route",
    description:
      "Tell us whether you prefer open access, a standard release, or a partnership-supported pathway.",
  },
  {
    title: "Step 4 - Review to publication",
    description:
      "We guide development, quality assurance, design, and distribution to move your manuscript into a publish-ready title.",
  },
];

export function HomePublishStepsSection() {
  return (
    <section className="publish-journey-section">
      <div className="site-container">
        <div className="publish-journey-header">
          <h2>Submit a Manuscript</h2>
          <p>We welcome STEM manuscripts from early proposals to complete drafts.</p>
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
