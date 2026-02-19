const pillars = [
  {
    code: "ET",
    title: "Engineering & Technology",
    description:
      "Applied resources for chemical, mechanical, electrical, and process engineering education and practice.",
  },
  {
    code: "MC",
    title: "Math & Computing",
    description:
      "Problem-driven materials coding, modelling, numerical methods, data analysis, and scientific computing.",
  },
  {
    code: "SO",
    title: "Science & Outreach",
    description:
      "Accessible science communication and outreach materials to inspire and support the next generation.",
  },
];

export function HomeFocusPillarsSection() {
  return (
    <section className="focus-pillars">
      <div className="site-container">
        <div className="focus-pillars-header">
          <h2>Focus areas</h2>
          <p>Three pillars to keep the site simple and scalable.</p>
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
