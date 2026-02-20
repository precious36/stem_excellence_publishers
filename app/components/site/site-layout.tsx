import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteLayoutProps = {
  children: ReactNode;
  footerMode?: "full" | "compact";
  compactFooterLinks?: { to: string; label: string }[];
};

export function SiteLayout({
  children,
  footerMode = "full",
  compactFooterLinks = [],
}: SiteLayoutProps) {
  return (
    <div className="page-shell min-h-screen w-full">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter mode={footerMode} compactLinks={compactFooterLinks} />
    </div>
  );
}
