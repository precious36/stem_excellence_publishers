const publishTags = ["Textbooks", "Lab guides", "Open-source modelling", "Teaching resources"];
const promiseTags = ["Quality control", "Templates", "Fast updates"];

export function HomeHighlightsSection() {
  return (
    <section className="home-highlights">
      <div className="site-container">
        <div className="home-highlights-grid">
          <article className="home-highlight-card">
            <h2>What we publish</h2>
            <p>
              Engineering, computing, mathematics, and science outreach designed to be usable,
              teachable, and reproducible.
            </p>
            <div className="home-highlight-tags">
              {publishTags.map((tag) => (
                <span key={tag} className="tag home-highlight-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="home-highlight-card">
            <h2>Our promise</h2>
            <p>
              Clear formatting, ethical publishing, and practical STEM content that supports
              learners and educators.
            </p>
            <div className="home-highlight-tags">
              {promiseTags.map((tag) => (
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
