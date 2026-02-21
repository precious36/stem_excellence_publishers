import { HomeFeaturedBooksSection } from "../components/home/home-featured-books-section";
import { HomeFocusAreasSection } from "../components/home/home-focus-areas-section";
import { HomeHeroSection } from "../components/home/home-hero-section";
import { HomeHighlightsSection } from "../components/home/home-highlights-section";
import { HomeFocusPillarsSection } from "../components/home/home-focus-pillars-section";
import { HomePublishStepsSection } from "../components/home/home-publish-steps-section";
import { HomeSalesGrowthSection } from "../components/home/home-sales-growth-section";
import { HomeSuccessStoriesSection } from "../components/home/home-success-stories-section";
import { SiteLayout } from "../components/site/site-layout";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "STEM Excellence Publishers | Open Access STEM Publishing" },
    {
      name: "description",
      content:
        "Mission-driven STEM publishing platform expanding accessible books and learning resources for Africa and the wider Global South.",
    },
  ];
}

export default function Home() {
  return (
    <SiteLayout footerMode="full">
      <HomeHeroSection />
      <HomeFocusAreasSection />
      <HomeHighlightsSection />
      <HomeFocusPillarsSection />
      <HomeFeaturedBooksSection />
      <HomeSalesGrowthSection />
      <HomeSuccessStoriesSection />
      <HomePublishStepsSection />
    </SiteLayout>
  );
}
