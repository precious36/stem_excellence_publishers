const identityTags = [
  "Independent STEM publisher",
  "Academic rigor and readability",
  "Africa and Global South focus",
  "Curriculum-aware content design",
];
const valueTags = [
  "STEM-first focus",
  "Clarity obsession",
  "Flexible publishing models",
  "Open-access pathways",
  "Author development support",
  "Institution and NGO partnerships",
];

export function HomeHighlightsSection() {
  return (
    <section className="home-highlights">
      <div className="site-container">
        <div className="home-highlights-grid">
          <article className="home-highlight-card">
            <h2>Who we are</h2>
            <p>
              STEM Excellence Publishers is an independent publisher focused on practical,
              well-written, and locally relevant resources for secondary, university, and
              early-career STEM learners.
            </p>
            <p>
              We work with teachers, researchers, and institutions to translate strong technical
              knowledge into books that are structured for real classroom use, self-study, and
              long-term STEM capacity building across Malawi and the wider region.
            </p>
            <div className="home-highlight-tags">
              {identityTags.map((tag) => (
                <span key={tag} className="tag home-highlight-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="home-highlight-card">
            <h2>Why choose us</h2>
            <p>
              We prioritize technically accurate writing, clean design, and locally relevant STEM
              context while supporting both standard and open-access publishing routes.
            </p>
            <p>
              Our publishing process combines editorial guidance, quality checks, and practical
              design standards so each title is easier to teach, easier to learn from, and better
              suited to real educational constraints.
            </p>
            <div className="home-highlight-tags">
              {valueTags.map((tag) => (
                <span key={tag} className="tag home-highlight-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
