import { Link } from "react-router";

export function HomeHeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero-visual">
        <div className="home-hero-image home-hero-scientist" />
        <div className="home-hero-image home-hero-engineer" />
      </div>
      <div className="home-hero-overlay" />
      <div className="site-container home-hero-content">
        <h1>Advancing STEM Education Through Open Access Publishing</h1>
        <p className="home-hero-subtitle">
          Mission-driven publishing for Africa and the wider Global South.
        </p>
        <p className="home-hero-lead">
          STEM Excellence Publishers publishes, supports, and distributes high-quality STEM books
          and educational resources with clarity, relevance, affordability, and accessible open
          distribution pathways.
        </p>
        <div className="home-hero-actions">
          <Link className="ref-btn ref-btn-secondary" to="/books">
            Explore our books
          </Link>
          <Link className="ref-btn ref-btn-primary" to="/for-authors">
            Submit a manuscript
          </Link>
          <Link className="ref-btn ref-btn-ghost" to="/contact">
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
