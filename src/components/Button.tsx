"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";

type Variant = "primary" | "ghost" | "link";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-ink-900 hover:bg-accent-600 shadow-[0_10px_30px_-10px_rgba(201,162,75,0.6)]",
  ghost:
    "border border-paper-300/30 text-paper-50 hover:border-accent-300 hover:text-accent-300 bg-transparent",
  link: "text-accent-300 hover:text-accent-500 rounded-none link-underline px-0",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Fire an analytics event on click (e.g. the Book Naren or MSM CTA). */
  analyticsEvent?: "book_naren_click" | "book_msm_click";
  analyticsProps?: Record<string, unknown>;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type AsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: never;
};

export function Button(props: AsLink | AsButton) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    analyticsEvent,
    analyticsProps,
  } = props;

  const classes = cn(
    base,
    variants[variant],
    variant !== "link" && sizes[size],
    className,
  );

  const handleTrack = () => {
    if (analyticsEvent) track(analyticsEvent, analyticsProps);
  };

  if ("href" in props && props.href !== undefined) {
    const external = props.external;
    if (external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={handleTrack}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={handleTrack}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={() => {
        handleTrack();
        props.onClick?.();
      }}
      className={classes}
    >
      {children}
    </button>
  );
}
