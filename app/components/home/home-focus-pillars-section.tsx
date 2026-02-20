const pillars = [
  {
    code: "MI",
    title: "Our Mission",
    description:
      "To accelerate STEM learning and innovation by publishing accessible, high-quality educational resources and enabling open-access distribution for wider impact.",
  },
  {
    code: "VI",
    title: "Our Vision",
    description:
      "A world where every learner, regardless of geography or income, can access high-quality STEM knowledge and build skills to solve real societal problems.",
  },
  {
    code: "VA",
    title: "Our Values",
    description:
      "Access and equity, quality and integrity, local relevance, innovation, and community impact guide every project we publish.",
  },
];

export function HomeFocusPillarsSection() {
  return (
    <section className="focus-pillars">
      <div className="site-container">
        <div className="focus-pillars-header">
          <h2>Mission, Vision, Values</h2>
          <p>The principles that shape every title and partnership.</p>
        </div>

        <div className="focus-pillars-grid">
          {pillars.map((pillar) => (
            <article key={pillar.code} className="focus-pillar-card">
              <span className="focus-pillar-code">{pillar.code}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
