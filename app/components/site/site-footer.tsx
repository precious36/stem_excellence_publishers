import { Link } from "react-router";

type FooterLink = {
  to: string;
  label: string;
};

type SiteFooterProps = {
  mode?: "full" | "compact";
  compactLinks?: FooterLink[];
};

export function SiteFooter({ mode = "compact", compactLinks = [] }: SiteFooterProps) {
  const year = new Date().getFullYear();

  if (mode === "full") {
    return (
      <footer className="site-footer">
        <div className="site-container site-footer-grid">
          <div>
            <div className="site-footer-brand">
              <img src="/stem-logo.jpeg" alt="STEM Excellence Publishers" className="brand-logo" />
            </div>
            <p className="site-small-text">
              Founded by Blessings G. Malimusi and Trust Chifunga. Open-access STEM publishing for
              education and research impact.
            </p>
          </div>
          <div>
            <p className="site-small-text">
              <strong className="site-strong-text">Contact</strong>
            </p>
            <p className="site-small-text">
              Email:{" "}
              <a href="mailto:info@stemexcellencepublishers.com">
                info@stemexcellencepublishers.com
              </a>
            </p>
            <p className="site-small-text">Copyright {year} STEM Excellence Publishers</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="site-container site-footer-grid compact">
        <div>
          <p className="site-small-text">Copyright {year} STEM Excellence Publishers</p>
        </div>
        <div className="site-footer-links">
          {compactLinks.map((link, index) => (
            <span key={link.to}>
              {index > 0 ? " | " : ""}
              <Link to={link.to}>{link.label}</Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
