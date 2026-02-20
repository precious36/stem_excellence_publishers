import { Link } from "react-router";

const founders = [
  {
    name: "Blessings G. Malimusi",
    role: "Co-Founder",
  },
  {
    name: "Trust P. Chifunga",
    role: "Co-Founder",
  },
];

export function HomeFoundersSection() {
  return (
    <section className="home-founders">
      <div className="site-container">
        <div className="home-founders-grid">
          <div className="home-founders-list">
            <h2>About the Founders</h2>
            <p className="home-founders-intro">
              STEM Excellence Publishers was founded by Blessings G. Malimusi and Trust P.
              Chifunga to reduce barriers to quality STEM education through practical and accessible
              publishing.
            </p>
            <ul>
              {founders.map((founder) => (
                <li key={founder.name}>
                  {founder.name}
                  <span>{founder.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-founder-images">
            {founders.map((founder) => (
              <article key={founder.name} className="home-founder-card home-founder-card-text">
                <p className="modern-kicker">{founder.role}</p>
                <h3>{founder.name}</h3>
                <p>
                  Detailed founder profiles will be added from the back-cover biographies of our
                  published titles.
                </p>
              </article>
            ))}
          </div>

          <aside className="home-publish-panel">
            <h2>Partner With Us</h2>
            <p>
              We collaborate with schools, universities, NGOs, and STEM programmes on sponsored
              titles, outreach distribution, and STEM reading initiatives.
            </p>
            <Link to="/contact" className="ref-btn ref-btn-secondary">
              Start a partnership
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
