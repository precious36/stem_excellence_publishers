import { HomeFeaturedBooksSection } from "../components/home/home-featured-books-section";
import { HomeFocusAreasSection } from "../components/home/home-focus-areas-section";
import { HomeFoundersSection } from "../components/home/home-founders-section";
import { HomeHeroSection } from "../components/home/home-hero-section";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "STEM Excellence Publishers | Advancing STEM Education in Africa" },
    {
      name: "description",
      content:
        "Open-access STEM publishing platform featuring books, manuscript submission, and author services.",
    },
  ];
}

export default function Home() {
  return (
    <SiteLayout footerMode="full">
      <HomeHeroSection />
      <HomeFocusAreasSection />
      <HomeFeaturedBooksSection />
      <HomeFoundersSection />
    </SiteLayout>
  );
}
