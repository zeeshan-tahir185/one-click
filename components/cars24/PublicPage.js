"use client";

import { siteData } from "@/data/cars24/site";
import { Navbar, PrimaryButton, SiteFooter, TopBar } from "@/components/cars24/ui";

export default function PublicPage({ eyebrow, title, description, actions = [] }) {
  return (
    <>
      <TopBar site={siteData} />
      <Navbar site={siteData} />
      <main className="section-space">
        <div className="site-container">
          <div className="hero-surface soft-card mx-auto max-w-4xl px-6 py-12 text-center sm:px-10 sm:py-16">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {description}
            </p>
            {actions.length ? (
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {actions.map((action) => (
                  <PrimaryButton
                    key={action.label}
                    href={action.href}
                    label={action.label}
                    variant={action.variant}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <SiteFooter site={siteData} />
    </>
  );
}
