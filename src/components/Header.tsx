"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { NAV_LINKS, PRIMARY_CTA, MSM_CTA, SITE } from "@/lib/site";
import { Button } from "@/components/Button";
import { MenuIcon, CloseIcon, ChevronDown } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when the slide-over is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-paper-300/10 bg-ink-900/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[var(--container-site)] items-center justify-between px-5 sm:h-20 sm:px-8"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-paper-50 sm:text-xl"
        >
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            "children" in link ? (
              <div key={link.href} className="group relative">
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium text-paper-300 transition-colors hover:text-paper-50",
                    pathname.startsWith(link.href) && "text-paper-50",
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-[15rem] rounded-xl border border-paper-300/10 bg-ink-800 p-2 shadow-2xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-paper-300 transition-colors hover:bg-ink-700 hover:text-paper-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "link-underline text-sm font-medium text-paper-300 transition-colors hover:text-paper-50",
                  pathname.startsWith(link.href) && "text-paper-50",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
          <Button
            href={MSM_CTA.href}
            variant="ghost"
            size="md"
            analyticsEvent="book_msm_click"
            analyticsProps={{ location: "header" }}
          >
            {MSM_CTA.label}
          </Button>
          <Button
            href={PRIMARY_CTA.href}
            size="md"
            analyticsEvent="book_naren_click"
            analyticsProps={{ location: "header" }}
          >
            {PRIMARY_CTA.label}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            href={PRIMARY_CTA.href}
            size="md"
            className="!px-4 !py-2 text-xs"
            analyticsEvent="book_naren_click"
            analyticsProps={{ location: "header-mobile" }}
          >
            {PRIMARY_CTA.label}
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="rounded-md p-2 text-paper-50 hover:text-accent-300"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-over */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink-900/80 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={cn(
            "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-ink-800 px-6 py-6 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-semibold">{SITE.name}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-md p-2 text-paper-50 hover:text-accent-300"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-2 py-3 text-lg font-medium text-paper-50 hover:bg-ink-700"
                >
                  {link.label}
                </Link>
                {"children" in link && (
                  <div className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-paper-300/15 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg px-2 py-2 text-sm text-paper-300 hover:bg-ink-700 hover:text-paper-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Button
              href={PRIMARY_CTA.href}
              size="lg"
              className="w-full"
              analyticsEvent="book_naren_click"
              analyticsProps={{ location: "mobile-menu" }}
            >
              {PRIMARY_CTA.longLabel}
            </Button>
            <Button
              href={MSM_CTA.href}
              variant="ghost"
              size="lg"
              className="w-full"
              analyticsEvent="book_msm_click"
              analyticsProps={{ location: "mobile-menu" }}
            >
              {MSM_CTA.longLabel}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
