const focusAreas = [
  {
    title: "Students and Self-Learners",
    subtitle: "Clear STEM explanations for independent learning",
    icon: <GearIcon />,
  },
  {
    title: "Teachers and Lecturers",
    subtitle: "Structured resources for classroom and program delivery",
    icon: <CalculatorIcon />,
  },
  {
    title: "Researchers and STEM Programmes",
    subtitle: "Publishing support for outreach and capacity building",
    icon: <RocketIcon />,
  },
];

export function HomeFocusAreasSection() {
  return (
    <section className="home-focus-strip">
      <div className="site-container">
        <div className="home-focus-grid">
          {focusAreas.map((item, index) => (
            <article
              key={item.title}
              className={`home-focus-item ${index < focusAreas.length - 1 ? "with-divider" : ""}`}
            >
              <div className="home-focus-icon">{item.icon}</div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-10 w-10">
      <path
        d="M30.2 18.4v-4.8l-3.6-.8a10.8 10.8 0 0 0-1.2-2.8l2-3-3.4-3.4-3 2a10.8 10.8 0 0 0-2.8-1.2L17.4 1h-4.8l-.8 3.6a10.8 10.8 0 0 0-2.8 1.2l-3-2L2.6 7l2 3c-.6.9-1 1.9-1.2 2.9L0 13.6v4.8l3.6.8a10.8 10.8 0 0 0 1.2 2.8l-2 3 3.4 3.4 3-2c.9.6 1.9 1 2.8 1.2l.8 3.6h4.8l.8-3.6c1-.2 1.9-.6 2.8-1.2l3 2 3.4-3.4-2-3c.6-.9 1-1.9 1.2-2.8zM15 22.2A6.2 6.2 0 1 1 15 9.8a6.2 6.2 0 0 1 0 12.4z"
        fill="#0a62b2"
      />
      <path d="M28.8 28 23 22.8l-2.8 2.8 5 5.7h3.6Z" fill="#c61f37" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" className="h-10 w-10">
      <rect x="4" y="2" width="28" height="32" rx="4" fill="#0b5ca7" />
      <rect x="8" y="6" width="20" height="6" rx="2" fill="#e8f1ff" />
      {[
        [8, 15],
        [15, 15],
        [22, 15],
        [8, 22],
        [15, 22],
        [22, 22],
        [8, 29],
        [15, 29],
        [22, 29],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="5" height="5" rx="1" fill="#f4f8ff" />
      ))}
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" className="h-10 w-10">
      <path d="M21.9 3.4c3.7 1 7.4 4.7 8.4 8.4l-4.6 4.6-8.4-8.4 4.6-4.6Z" fill="#c61f37" />
      <path
        d="M17.3 8c-3.2 1.1-6.2 3.1-8.4 5.3l-2.5 2.5 4.2 1.2 4.3 4.3 1.2 4.2 2.5-2.5c2.2-2.2 4.2-5.2 5.3-8.4L17.3 8Z"
        fill="#0a62b2"
      />
      <circle cx="18.8" cy="14.6" r="2.1" fill="#f5f9ff" />
      <path d="M11.3 23.6 6 29v2h2l5.4-5.3-2.1-2.1Z" fill="#a1132a" />
    </svg>
  );
}
