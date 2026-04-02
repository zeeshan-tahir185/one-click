"use client";

import { buyPageData } from "@/data/cars24/pages";
import { homePageData } from "@/data/cars24/home";
import { siteData } from "@/data/cars24/site";
import {
  AppBanner,
  BrandGrid,
  BudgetFilters,
  CarGrid,
  FAQSection,
  FeatureGrid,
  HeroSection,
  Navbar,
  SiteFooter,
  TopBar,
} from "@/components/cars24/ui";

export default function BuyPage() {
  return (
    <>
      <TopBar site={siteData} />
      <Navbar site={siteData} />

      <main>
        <HeroSection data={buyPageData.hero} shortcuts={siteData.heroShortcuts} />

        <section className="section-space pt-0">
          <div className="site-container">
            <div className="mb-6">
              <p className="eyebrow">Inventory filters</p>
              <h2 className="section-title title-balance">1600 used cars in Dubai</h2>
              <p className="section-copy">{buyPageData.seoIntro}</p>
            </div>
            <BudgetFilters filters={buyPageData.filters} />
          </div>
        </section>

        <BrandGrid brands={siteData.brandTiles} title="Used car for sale by make" id="buy-brand-grid" />

        <FeatureGrid
          eyebrow="Top brands"
          title="List of top brands in Dubai"
          description="Popular brands and sample price ranges inspired by the Cars24 listing page."
          items={buyPageData.topBrands.map((brand) => ({
            title: brand.name,
            description: brand.range,
            href: brand.href,
            external: true,
          }))}
          columns={3}
        />

        <CarGrid
          eyebrow="Featured inventory"
          title="Cars you can browse right now"
          description="A curated slice of the live Cars24-inspired inventory cards."
          cars={homePageData.newArrivals}
          id="inventory"
        />

        <CarGrid
          eyebrow="Luxury inventory"
          title="Premium and luxury used cars"
          description="Higher-value Cars24-style inventory with finance-ready pricing cues."
          cars={homePageData.luxuryCars}
        />

        <FAQSection
          eyebrow="Buying questions"
          title={buyPageData.faqTitle}
          items={buyPageData.faqs}
        />

        <AppBanner data={siteData.appBanner} />
      </main>

      <SiteFooter site={siteData} />
    </>
  );
}
