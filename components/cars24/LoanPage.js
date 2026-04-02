"use client";

import { loanPageData } from "@/data/cars24/pages";
import { siteData } from "@/data/cars24/site";
import {
  AppBanner,
  ContactCardGrid,
  DocumentGroups,
  FAQSection,
  HeroSection,
  LoanCalculatorCard,
  LogoGrid,
  Navbar,
  SiteFooter,
  TextListGrid,
  TextStepGrid,
  TopBar,
} from "@/components/cars24/ui";

export default function LoanPage() {
  return (
    <>
      <TopBar site={siteData} />
      <Navbar site={siteData} />

      <main>
        <HeroSection data={loanPageData.hero} shortcuts={siteData.heroShortcuts} />

        <TextListGrid
          eyebrow="Car loans, managed end-to-end"
          title="Car loans, managed end-to-end"
          items={loanPageData.highlights}
          columns={4}
        />

        <section className="section-space pt-0">
          <div className="site-container">
            <LoanCalculatorCard calculator={loanPageData.calculator} />
          </div>
        </section>

        <LogoGrid
          eyebrow="Lending partners"
          title="Our lending partners in the UAE"
          description="Representative lenders surfaced in the Cars24 UAE loan journey."
          items={siteData.lendingPartners}
        />

        <TextStepGrid
          eyebrow="Journey"
          title="Your loan journey, step by step"
          description="A simplified flow from choosing the car to final approval and registration."
          steps={loanPageData.journey}
          columns={3}
        />

        <section className="section-space">
          <div className="site-container">
            <div className="mb-6">
              <p className="eyebrow">Documents needed</p>
              <h2 className="section-title title-balance">Documents needed for your car loan application</h2>
              <p className="section-copy">
                Documents can vary across finance partners for banking and non-banking
                customers, but these are the core categories commonly requested.
              </p>
            </div>
            <DocumentGroups items={loanPageData.documents} />
          </div>
        </section>

        <AppBanner data={siteData.appBanner} />

        <ContactCardGrid
          eyebrow="Need help with your car loan?"
          title="Need help with your car loan?"
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
              description:
                "16th floor, Millennium Place Hotel, First Al Khail St, Barsha Heights, Dubai, UAE",
              href: "https://share.google/r8ybLeGMS8GGPReYi",
              external: true,
            },
          ]}
        />

        <FAQSection
          eyebrow="Loan FAQs"
          title="Frequently asked questions"
          description="Answers to the most common used-car loan questions in the UAE."
          items={loanPageData.faqs}
        />
      </main>

      <SiteFooter site={siteData} />
    </>
  );
}
