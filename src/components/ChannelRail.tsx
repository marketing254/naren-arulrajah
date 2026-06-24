import { brandIcon } from "@/components/brand-icons";
import { videoChannels } from "@/content/videos";

/** Follow/subscribe chips for every social/video channel. */
export function ChannelRail() {
  return (
    <div className="flex flex-wrap gap-3">
      {videoChannels.map((c) => {
        const Icon = brandIcon[c.label];
        return (
          <a
            key={c.label}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-paper-300/20 px-4 py-2 text-sm text-paper-300 transition-colors hover:border-accent-300 hover:text-accent-300"
          >
            {Icon ? (
              <span className="text-paper-300 group-hover:text-accent-300">
                {Icon({ className: "h-4 w-4" })}
              </span>
            ) : null}
            <span className="font-medium">{c.label}</span>
            <span className="text-muted-500">{c.handle}</span>
          </a>
        );
      })}
    </div>
  );
}
