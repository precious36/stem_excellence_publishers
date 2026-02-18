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
        <h1>Advancing STEM Education in Africa</h1>
        <p>Open-Access Publishing for a Brighter Future</p>
        <div className="home-hero-actions">
          <Link className="ref-btn ref-btn-secondary" to="/books">
            Browse Books
          </Link>
          <Link className="ref-btn ref-btn-primary" to="/for-authors">
            Submit a Manuscript
          </Link>
        </div>
      </div>
    </section>
  );
}
