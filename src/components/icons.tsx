/** Inline SVG icon set. Stroke uses currentColor so the accent applies via text color. */

type IconProps = { className?: string };

const wrap = (path: React.ReactNode) =>
  function Icon({ className }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden
      >
        {path}
      </svg>
    );
  };

export const PillarIcons = {
  // FIND YOU — search / visibility
  find: wrap(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>,
  ),
  // LIKE YOU — trust / heart
  like: wrap(
    <path d="M12 20s-7-4.35-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.65 12 20 12 20z" />,
  ),
  // CHOOSE YOU — selected / check badge
  choose: wrap(
    <>
      <path d="M9 11.5l2 2 4.5-4.5" />
      <path d="M12 3l2.5 1.8 3 .2.2 3L19.5 13l-1.8 2.5-.2 3-3 .2L12 21l-2.5-1.8-3-.2-.2-3L4.5 13l1.8-2.5.2-3 3-.2z" />
    </>,
  ),
} as const;

export const ArrowRight = wrap(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ChevronDown = wrap(<path d="m6 9 6 6 6-6" />);
export const PlayIcon = wrap(<path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />);
export const MenuIcon = wrap(<path d="M3 6h18M3 12h18M3 18h18" />);
export const CloseIcon = wrap(<path d="M6 6l12 12M18 6 6 18" />);
export const CheckIcon = wrap(<path d="M20 6 9 17l-5-5" />);
export const MicIcon = wrap(
  <>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </>,
);
export const CalendarIcon = wrap(
  <>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </>,
);
export const BookIcon = wrap(
  <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2zM18 19H6" />,
);
export const MailIcon = wrap(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>,
);
export const VideoIcon = wrap(
  <>
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="m16 10 5-3v10l-5-3z" />
  </>,
);
export const GlobeIcon = wrap(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </>,
);
export const PenIcon = wrap(<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />);
