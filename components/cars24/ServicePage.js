"use client";

import { servicePageData } from "@/data/cars24/pages";
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
  TextStepGrid,
  TopBar,
} from "@/components/cars24/ui";

export default function ServicePage() {
  return (
    <>
      <TopBar site={siteData} />
      <Navbar site={siteData} />

      <main>
        <HeroSection data={servicePageData.hero} shortcuts={siteData.heroShortcuts} />

        <BrandGrid
          brands={siteData.brandTiles}
          title="Choose your car brand to select service"
          id="service-brand-grid"
        />

        <FeatureGrid
          eyebrow="Service packages"
          title="Choose one that fits your need"
          description="Certified technicians delivering quality car servicing in Dubai."
          items={servicePageData.serviceTypes}
          columns={2}
          id="service-types"
        />

        <TextStepGrid
          eyebrow="How it works"
          title="Get your car serviced in a few easy steps"
          description="A guided servicing flow inspired by the Cars24 UAE journey."
          steps={servicePageData.steps}
          columns={3}
        />

        <FeatureGrid
          eyebrow="Thoughtful servicing"
          title="Thoughtful servicing, end to end"
          description="Service support designed around convenience, quality, and communication."
          items={servicePageData.features}
          columns={3}
        />

        <AppBanner data={siteData.appBanner} />

        <ContactCardGrid
          eyebrow="Need help getting your car serviced?"
          title="Need help getting your car serviced?"
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
              description: "Cars24 MRL, Jebel Ali Industrial Area, Dubai",
              href: "https://www.cars24.ae/car-servicing/",
              external: true,
            },
          ]}
        />

        <FAQSection
          eyebrow="Servicing FAQs"
          title="Frequently asked questions"
          description="Quick answers about service frequency, packages, timing, and value."
          items={servicePageData.faqs}
        />
      </main>

      <SiteFooter site={siteData} />
    </>
  );
}
