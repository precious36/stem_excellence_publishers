export type SiteNavLink = {
  to: string;
  label: string;
  end?: boolean;
};

export const siteNavLinks: SiteNavLink[] = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/books", label: "Books" },
  { to: "/for-authors", label: "For Authors" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];
