import { Link } from "react-router";

const founders = [
  {
    name: "Blessings G. Malimusi",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Trust Chifunga",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  },
];

export function HomeFoundersSection() {
  return (
    <section className="home-founders">
      <div className="site-container">
        <div className="home-founders-grid">
          <div className="home-founders-list">
            <h2>Meet the Founders</h2>
            <ul>
              {founders.map((founder) => (
                <li key={founder.name}>{founder.name}</li>
              ))}
            </ul>
          </div>

          <div className="home-founder-images">
            {founders.map((founder) => (
              <figure key={founder.name} className="home-founder-card">
                <img src={founder.image} alt={founder.name} className="founder-image" />
              </figure>
            ))}
          </div>

          <aside className="home-publish-panel">
            <h2>Publish With Us</h2>
            <p>Share Your Research with the World</p>
            <Link to="/for-authors" className="ref-btn ref-btn-secondary">
              Get Started
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
