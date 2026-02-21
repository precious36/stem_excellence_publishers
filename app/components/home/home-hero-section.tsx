import { Link } from "react-router";

export function HomeHeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero-visual" aria-hidden="true">
        <div className="home-hero-image home-hero-scientist" />
        <div className="home-hero-image home-hero-engineer" />
        <div className="home-hero-image home-hero-slider-two" />
        <div className="home-hero-image home-hero-slider-three" />
        <div className="home-hero-image home-hero-scientist" />
      </div>
      <div className="home-hero-overlay" />
      <div className="site-container home-hero-content">
        <h1>Advancing STEM Education And Research Through Open Access Publishing</h1>
        <p className="home-hero-lead">
          STEM Excellence Publishers is a mission-driven publishing platform dedicated to expanding
          high-quality STEM learning materials for Africa and the wider Global South. We publish,
          support, and distribute STEM books and educational resources with a strong emphasis on
          clarity, relevance, affordability, and accessibility - including open-access pathways
          where authors and partners choose free public distribution.
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
