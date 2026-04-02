"use client";

import { homePageData } from "@/data/cars24/home";
import { siteData } from "@/data/cars24/site";
import {
  AppBanner,
  BrandGrid,
  CarGrid,
  ContactCardGrid,
  FAQSection,
  FeatureGrid,
  HeroSection,
  LongTextBlock,
  LogoGrid,
  Navbar,
  SiteFooter,
  TextStepGrid,
  TopBar,
  VisualLinkGrid,
} from "@/components/cars24/ui";

function toFeatureItems(items) {
  return items.map((item) => ({
    title: item.title,
    description: item.description,
    image: item.image,
    href: item.href,
    external: item.external,
  }));
}

export default function HomePage() {
  return (
    <>
      <TopBar site={siteData} />
      <Navbar site={siteData} />

      <main>
        <HeroSection data={homePageData.hero} shortcuts={siteData.heroShortcuts} />

        <FeatureGrid
          eyebrow="Home"
          title="A simple way to buy, sell and trade-in"
          description="Everything a buyer or seller needs, arranged in one unified Cars24-style flow."
          items={toFeatureItems(homePageData.quickHighlights)}
        />

        <BrandGrid
          brands={siteData.brandTiles}
          title="Browse used cars by brands"
          id="brand-grid"
        />

        <CarGrid
          eyebrow="Luxury picks"
          title="Luxury picks at dream prices"
          action={{ label: "View all", href: "/buy-used-cars-dubai" }}
          cars={homePageData.luxuryCars}
        />

        <VisualLinkGrid
          eyebrow="Matched to your needs"
          title="Used cars, matched to your needs"
          action={{ label: "View all", href: "/buy-used-cars-dubai" }}
          items={homePageData.matchedNeeds}
        />

        <VisualLinkGrid
          eyebrow="Offers"
          title="Offers you can't resist"
          items={homePageData.offerBanners}
        />

        <CarGrid
          eyebrow="New arrivals"
          title="New arrivals - cars for sale"
          description="Fresh used car listings inspired by Cars24 Dubai inventory."
          action={{ label: "View all", href: "/buy-used-cars-dubai" }}
          cars={homePageData.newArrivals}
          id="inventory"
        />

        <TextStepGrid
          eyebrow="Sell your car"
          title="Selling your car, made straightforward"
          description="From valuation to payment, the process stays guided and transparent."
          steps={homePageData.sellSteps}
          columns={3}
        />

        <VisualLinkGrid
          eyebrow="Body type"
          title="Used cars by body type"
          action={{ label: "View all", href: "/buy-used-cars-dubai" }}
          items={homePageData.bodyTypes}
        />

        <LogoGrid
          eyebrow="Partners"
          title="Our lending partners"
          description="Finance brands commonly surfaced across the Cars24 UAE experience."
          items={siteData.lendingPartners}
        />

        <FeatureGrid
          eyebrow="Why choose Cars24?"
          title="Why choose Cars24?"
          description="Inspected cars, clear pricing, and support across purchase, finance, and servicing."
          items={homePageData.whyChoose}
          columns={4}
        />

        <TextStepGrid
          eyebrow="How it works"
          title="How to buy a car from Cars24?"
          description="A simple, secure path to your next car."
          steps={homePageData.buySteps}
          columns={2}
        />

        <AppBanner data={siteData.appBanner} />

        <ContactCardGrid
          eyebrow="Need help in buying a car?"
          title="Need help in buying a car?"
          items={homePageData.helpCards}
        />

        <FAQSection
          eyebrow="Frequently asked questions"
          title="Frequently asked questions"
          description="Can't find what you're looking for? Our team is here to help."
          items={homePageData.faqs}
        />

        <LongTextBlock
          title={homePageData.article.title}
          description={homePageData.article.description}
          link={homePageData.article.link}
          linkLabel={homePageData.article.linkLabel}
        />
      </main>

      <SiteFooter site={siteData} />
    </>
  );
}
