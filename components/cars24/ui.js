"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

function isExternal(href = "") {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function SmartLink({ href = "#", children, className, external, ...props }) {
  const useExternal = external ?? isExternal(href);

  if (useExternal) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}

export function SectionIntro({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="section-title title-balance">{title}</h2> : null}
        {description ? <p className="section-copy">{description}</p> : null}
      </div>
      {action ? (
        <SmartLink
          href={action.href}
          external={action.external}
          className="inline-flex items-center text-sm font-semibold text-[#0f3cc9] transition hover:text-[#082582]"
        >
          {action.label} <span className="ml-1">→</span>
        </SmartLink>
      ) : null}
    </div>
  );
}

export function PrimaryButton({ href, label, variant = "primary", className = "" }) {
  const shared = variant === "secondary" ? "btn-secondary" : "btn-primary";
  return (
    <SmartLink href={href} className={`${shared} ${className}`.trim()}>
      {label}
    </SmartLink>
  );
}

export function PillTabs({ items, activeIndex = 0 }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <span key={item} className={`pill ${index === activeIndex ? "pill-active" : ""}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function TopBar({ site }) {
  return (
    <div className="bg-[#082582] text-white">
      <div className="site-container flex min-h-10 flex-wrap items-center justify-between gap-3 py-2 text-sm">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/10 px-3 py-1 font-medium">{site.topBar.city}</span>
          <SmartLink href={site.topBar.phoneHref} className="font-semibold text-white">
            Call us {site.topBar.phone}
          </SmartLink>
        </div>
        <SmartLink href={site.topBar.loginHref} className="font-semibold text-white/90 hover:text-white">
          Login
        </SmartLink>
      </div>
    </div>
  );
}

export function Navbar({ site }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="site-container flex min-h-20 items-center justify-between gap-6 py-4">
        <SmartLink href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-28 sm:h-9 sm:w-32">
            <Image src={site.logo.src} alt={site.logo.alt} fill className="object-contain object-left" priority />
          </div>
        </SmartLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {site.navLinks.map((link) => (
            <SmartLink
              key={link.label}
              href={link.href}
              external={link.external}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {link.label}
            </SmartLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <PrimaryButton href="/buy-used-cars-dubai" label="Browse cars" />
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="site-container flex flex-col gap-3 py-4">
            {site.navLinks.map((link) => (
              <SmartLink
                key={link.label}
                href={link.href}
                external={link.external}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {link.label}
              </SmartLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter({ site }) {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="site-container grid gap-10 py-14 lg:grid-cols-[1.4fr_2fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8fb2ff]">{site.footer.eyebrow}</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">{site.footer.title}</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-400">{site.footer.madeWith}</p>
          <p className="max-w-xl text-sm leading-7 text-slate-400">{site.footer.office}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {site.footer.links.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{group.title}</h3>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <SmartLink
                    key={item.label}
                    href={item.href}
                    external={item.external}
                    className="block text-sm text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </SmartLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container py-5 text-sm text-slate-500">{site.footer.copyright}</div>
      </div>
    </footer>
  );
}

export function HeroSection({ data, shortcuts }) {
  return (
    <section className="section-space">
      <div className="site-container">
        <div className="hero-surface soft-card overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10 xl:p-14">
            <div className="flex flex-col justify-center">
              {data.eyebrow ? <p className="eyebrow">{data.eyebrow}</p> : null}
              <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {data.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{data.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {data.actions?.map((action) => (
                  <PrimaryButton
                    key={action.label}
                    href={action.href}
                    label={action.label}
                    variant={action.variant}
                  />
                ))}
              </div>

              {shortcuts?.length ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {shortcuts.map((item) => (
                    <SmartLink
                      key={item.label}
                      href={item.href}
                      className="pill transition hover:border-[#0f3cc9] hover:text-[#0f3cc9]"
                    >
                      {item.label}
                    </SmartLink>
                  ))}
                </div>
              ) : null}

              {data.stats?.length ? (
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {data.stats.map((stat) => (
                    <div key={stat.label} className="soft-card-sm px-5 py-4">
                      <div className="text-2xl font-black text-slate-950">{stat.value}</div>
                      <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-slate-100 sm:min-h-[420px]">
              <Image src={data.image} alt={data.title} fill priority className="object-cover" />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                  Cars24 inspired experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandGrid({ brands, title, id }) {
  return (
    <section id={id} className="section-space pt-0">
      <div className="site-container">
        {title ? <SectionIntro eyebrow="Brands" title={title} /> : null}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {brands.map((brand) => (
            <SmartLink
              key={brand.name}
              href={brand.href}
              external={brand.external}
              className="soft-card-sm group flex flex-col items-center justify-center gap-4 px-4 py-6 text-center transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-14 w-full">
                {brand.image ? (
                  <Image src={brand.image} alt={brand.name} fill className="object-contain" />
                ) : (
                  <div className="flex h-full items-center justify-center rounded-2xl bg-slate-100 text-2xl font-black text-slate-700">
                    {brand.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="text-sm font-semibold text-slate-900">{brand.name}</div>
              {brand.range ? <div className="text-xs text-slate-500">{brand.range}</div> : null}
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({ items, columns = 4, title, eyebrow, description, action, id }) {
  const gridClass =
    columns === 2
      ? "lg:grid-cols-2"
      : columns === 3
        ? "lg:grid-cols-3"
        : "sm:grid-cols-2 xl:grid-cols-4";

  return (
    <section id={id} className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} action={action} />
        <div className={`mt-8 grid gap-5 ${gridClass}`}>
          {items.map((item) => (
            <div key={item.title} className="blue-glow soft-card-sm overflow-hidden px-5 py-6">
              {item.image ? (
                <div className="relative mb-5 h-14 w-14 overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              ) : null}
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              {item.href ? (
                <SmartLink
                  href={item.href}
                  external={item.external}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#0f3cc9]"
                >
                  Explore <span className="ml-1">→</span>
                </SmartLink>
              ) : null}
              {item.details ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#0f3cc9]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CarCard({ car }) {
  return (
    <SmartLink
      href={car.href}
      external={car.external}
      className="soft-card-sm overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <Image src={car.image} alt={`${car.year} ${car.name}`} fill className="object-cover transition duration-500 hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {car.tag}
        </div>
      </div>
      <div className="p-5">
        <div className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">{car.year}</div>
        <h3 className="mt-2 text-xl font-black text-slate-950">{car.name}</h3>
        <p className="mt-1 text-sm font-medium text-slate-600">{car.variant}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
          <div className="rounded-2xl bg-slate-50 px-3 py-2">{car.km}</div>
          <div className="rounded-2xl bg-slate-50 px-3 py-2">{car.spec}</div>
          <div className="rounded-2xl bg-slate-50 px-3 py-2">{car.highlight}</div>
          <div className="rounded-2xl bg-slate-50 px-3 py-2">{car.location}</div>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm text-slate-500">Price</div>
            <div className="text-2xl font-black text-slate-950">AED {car.price}</div>
            <div className="mt-1 text-xs font-medium text-[#0f3cc9]">{car.emi}</div>
          </div>
          <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
            View
          </span>
        </div>
      </div>
    </SmartLink>
  );
}

export function CarGrid({ title, eyebrow, description, action, cars, id }) {
  return (
    <section id={id} className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} action={action} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {cars.map((car) => (
            <CarCard key={`${car.year}-${car.name}-${car.price}`} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisualLinkGrid({ items, title, eyebrow, description, action }) {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} action={action} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <SmartLink
              key={item.title}
              href={item.href}
              external={item.external}
              className="soft-card-sm group overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
            >
              {item.image ? (
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
              ) : null}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                {item.description ? <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p> : null}
              </div>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TextStepGrid({ title, eyebrow, description, steps, columns = 3, id }) {
  const gridClass = columns === 2 ? "lg:grid-cols-2" : columns === 4 ? "xl:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section id={id} className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <div className={`mt-8 grid gap-5 ${gridClass}`}>
          {steps.map((step, index) => (
            <div key={step.title ?? step} className="soft-card-sm px-5 py-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f3cc9] text-lg font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-slate-950">{step.title ?? step}</h3>
              {step.description ? <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LogoGrid({ title, eyebrow, description, items, id }) {
  return (
    <section id={id} className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.name} className="soft-card-sm flex items-center justify-center px-6 py-8">
              <div className="relative h-12 w-full">
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AppBanner({ data }) {
  return (
    <section className="section-space">
      <div className="site-container">
        <div className="soft-card relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src={data.backgroundImage} alt={data.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-slate-950/55" />
          </div>
          <div className="relative grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div className="flex flex-col justify-center">
              <p className="eyebrow !text-[#8fb2ff]">Cars24 app</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">{data.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">{data.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                {data.badges.map((badge) => (
                  <div key={badge.label} className="relative h-14 w-40 overflow-hidden rounded-2xl bg-white/90 p-3">
                    <Image src={badge.image} alt={badge.label} fill className="object-contain p-3" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px]">
              <Image src={data.mockup} alt="Cars24 app mockup" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCardGrid({ title, eyebrow, description, items }) {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <SmartLink
              key={item.title}
              href={item.href}
              external={item.external}
              className="soft-card-sm blue-glow block px-6 py-7"
            >
              <div className="text-lg font-bold text-slate-950">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ title, eyebrow, description, items }) {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 space-y-4">
          {items.map((item, index) => (
            <details key={item.question} className="soft-card-sm px-6 py-5" open={index === 0}>
              <summary className="cursor-pointer text-lg font-bold text-slate-950">{item.question}</summary>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LongTextBlock({ title, description, link, linkLabel }) {
  return (
    <section className="section-space pt-0">
      <div className="site-container">
        <div className="soft-card-sm px-6 py-8 sm:px-8">
          <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">{title}</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{description}</p>
          {link ? (
            <SmartLink href={link} external className="mt-5 inline-flex items-center text-sm font-semibold text-[#0f3cc9]">
              {linkLabel || "Read more"} <span className="ml-1">→</span>
            </SmartLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function BudgetFilters({ filters }) {
  return (
    <div className="soft-card-sm grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-5">
      {filters.map((filter) => (
        <div key={filter} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{filter}</div>
          <div className="mt-2 text-sm font-medium text-slate-700">Interactive filter placeholder</div>
        </div>
      ))}
    </div>
  );
}

export function LoanCalculatorCard({ calculator }) {
  const fields = useMemo(
    () => [
      {
        label: "Monthly salary",
        min: calculator.salaryRange[0],
        max: calculator.salaryRange[1],
      },
      {
        label: "Current EMIs",
        min: calculator.emiRange[0],
        max: calculator.emiRange[1],
      },
      {
        label: "Total card limit",
        min: calculator.cardRange[0],
        max: calculator.cardRange[1],
      },
    ],
    [calculator],
  );

  return (
    <div id="loan-calculator" className="soft-card overflow-hidden">
      <div className="grid gap-6 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <div className="blue-glow rounded-[2rem] p-6">
          <p className="eyebrow">Trusted by 10,000+ customers</p>
          <h3 className="mt-3 text-3xl font-black text-slate-950">Max EMI</h3>
          <div className="mt-2 text-4xl font-black text-[#0f3cc9]">{calculator.maxEmi}</div>
          <p className="mt-6 text-sm font-medium text-slate-600">{calculator.interestRate}</p>
          <p className="mt-2 text-sm font-medium text-slate-600">{calculator.tenure}</p>
          <PrimaryButton href="/buy-used-cars-dubai" label="Browse eligible cars" className="mt-8" />
        </div>

        <div className="grid gap-4">
          {fields.map((field) => (
            <div key={field.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-900">{field.label}</span>
                <span className="text-xs font-medium text-slate-500">
                  {field.min} - {field.max}
                </span>
              </div>
              <div className="mt-5 h-2 rounded-full bg-slate-200">
                <div className="h-2 w-1/2 rounded-full bg-[#0f3cc9]" />
              </div>
            </div>
          ))}
          <p className="text-sm leading-7 text-slate-500">{calculator.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}

export function DocumentGroups({ items }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((group) => (
        <div key={group.title} className="soft-card-sm px-6 py-6">
          <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#0f3cc9]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function TextListGrid({ items, columns = 3, title, eyebrow, description }) {
  const gridClass = columns === 2 ? "lg:grid-cols-2" : columns === 4 ? "xl:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <div className={`mt-8 grid gap-4 ${gridClass}`}>
          {items.map((item) => (
            <div key={item} className="soft-card-sm px-5 py-5 text-sm font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialGrid({ items, title, eyebrow, description }) {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="soft-card-sm blue-glow px-6 py-7">
              <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#0f3cc9]">{item.name}</div>
              <p className="text-sm leading-8 text-slate-600">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
