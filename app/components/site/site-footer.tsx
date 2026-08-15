import { Link } from "react-router";

type FooterLink = {
  to: string;
  label: string;
};

type SiteFooterProps = {
  mode?: "full" | "compact";
  compactLinks?: FooterLink[];
};

function FooterCredits() {
  const year = new Date().getFullYear();

  return (
    <div className="site-footer-bottom">
      <p className="site-small-text">Copyright {year} STEM Excellence Publishers</p>
      <p className="site-small-text">Developed by MCT Technologies</p>
    </div>
  );
}

export function SiteFooter({ mode = "full", compactLinks = [] }: SiteFooterProps) {
  if (mode === "full") {
    return (
      <footer className="site-footer">
        <div className="site-container">
          <div className="site-footer-grid">
            <div>
              <div className="site-footer-brand">
                <img src="/stem-logo.jpeg" alt="STEM Excellence Publishers" className="brand-logo" />
              </div>
              <p className="site-small-text">
                STEM Excellence Publishers - Open-access and mission-driven publishing for STEM
                education, capacity-building, and innovation.
              </p>
            </div>
            <div>
              <p className="site-small-text">
                <strong className="site-strong-text">Contact</strong>
              </p>
              <p className="site-small-text">
                Email:{" "}
                <a href="mailto:info@stemexcellencepublishers.com">
                  stemexcellencepublishersmw@gmail.com
                </a>
              </p>
            </div>
          </div>
          <FooterCredits />
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="site-container">
        {compactLinks.length > 0 && (
          <div className="site-footer-links compact">
            {compactLinks.map((link, index) => (
              <span key={link.to}>
                {index > 0 ? " | " : ""}
                <Link to={link.to}>{link.label}</Link>
              </span>
            ))}
          </div>
        )}
        <FooterCredits />
      </div>
    </footer>
  );
}
