"use client";

import { sellPageData } from "@/data/cars24/pages";
import { siteData } from "@/data/cars24/site";
import {
  AppBanner,
  BrandGrid,
  ContactCardGrid,
  FAQSection,
  FeatureGrid,
  HeroSection,
  Navbar,
  SiteFooter,
  TestimonialGrid,
  TextListGrid,
  TopBar,
  VisualLinkGrid,
} from "@/components/cars24/ui";

export default function SellPage() {
  return (
    <>
      <TopBar site={siteData} />
      <Navbar site={siteData} />

      <main>
        <HeroSection data={sellPageData.hero} shortcuts={siteData.heroShortcuts} />

        <BrandGrid
          brands={siteData.brandTiles}
          title="Select your car brand for best deal"
          id="sell-brand-grid"
        />

        <FeatureGrid
          eyebrow="Why sell with Cars24?"
          title="Why sell your car with Cars24?"
          description="Cars24 finds the best way to sell your car with less effort and more clarity."
          items={sellPageData.whySell}
          columns={4}
        />

        <VisualLinkGrid
          eyebrow="Sell your car your way"
          title="Explore the best way to sell any car with us"
          items={sellPageData.sellWays.map((item) => ({
            ...item,
            href: "#sell-process",
          }))}
        />

        <TextListGrid
          eyebrow="Tools that help you sell, faster"
          title="Tools that help you sell, faster"
          description="Cars24 surfaces listing boosts and merchandising tools to improve visibility."
          items={sellPageData.sellerTools}
          columns={3}
        />

        <TestimonialGrid
          eyebrow="Customer stories"
          title="What sellers say about Cars24"
          items={sellPageData.testimonials}
        />

        <ContactCardGrid
          eyebrow="Need help selling a car?"
          title="Need help selling a car?"
          items={[
            {
              title: "Call us",
              description: "You can reach us at 8001110900 from 7:00 AM - 6:00 PM",
              href: "tel:8001110900",
            },
            {
              title: "Email us",
              description: "Need help? Write to us at care.uae@cars24.com",
              href: "mailto:care.uae@cars24.com",
            },
            {
              title: "Visit us",
              description: "16th floor, Millennium Place Hotel, First Al Khail St, Barsha Heights, Dubai",
              href: "https://share.google/r8ybLeGMS8GGPReYi",
              external: true,
            },
          ]}
        />

        <FAQSection
          eyebrow="Selling process"
          title="Frequently asked questions"
          description="Questions commonly asked by people selling cars through Cars24 UAE."
          items={sellPageData.faqs}
        />

        <AppBanner data={siteData.appBanner} />
      </main>

      <SiteFooter site={siteData} />
    </>
  );
}
