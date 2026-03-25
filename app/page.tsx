"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, ArrowUpRight, Layers, ThumbsUp, ThumbsDown, AlertTriangle } from "lucide-react";

type LibraryStatus = "useful" | "not-useful" | "not-maintained";

interface Library {
  name: string;
  status?: LibraryStatus;
}

const SECTIONS: Library[] = [
  { name: "8bitcn", status: "useful" },
  { name: "8starlabs-ui", status: "useful" },
  { name: "abstract", status:"not-useful" },
  { name: "abui", status:"useful" },
  { name: "aceternity", status: "useful" },
  { name: "aevr", status:"not-useful" },
  { name: "agents-ui", status: "not-useful" },
  { name: "shadcraft", status:"useful" },
  { name: "ai-blocks", status:"not-maintained" },
  { name: "ai-elements", status:"useful" },
  { name: "algolia", status:"useful" },
  { name: "aliimam", status: "not-maintained" },
  { name: "animate-ui", status: "useful" },
  { name: "animbits", status:"not-useful" },
  { name: "arc", status:"not-useful" },
  { name: "asanshay", status:"useful" },
  { name: "assistant-ui", status:"useful" },
  { name: "auth0", status:"not-useful" },
  { name: "basecn", status:"useful" },
  { name: "baselayer", status:"useful" },
  { name: "beste-ui", status:"not-useful" },
  { name: "better-upload", status:"useful" },
  { name: "billingsdk", status:"useful" },
  { name: "blocks-so", status:"useful" },
  { name: "boldkit", status:"useful" },
  { name: "bundui", status:"not-useful" },
  { name: "cardcn", status:"not-useful" },
  { name: "clerk", status:"useful" },
  { name: "chamaac", status:"useful" },
  { name: "coss", status:"useful" },
  { name: "commercn", status:"useful" },
  { name: "componentry", status:"useful" },
  { name: "creative-tim", status:"useful" },
  { name: "cult-ui", status: "useful" },
  { name: "darx", status:"not-useful" },
  { name: "diceui", status:"useful" },
  { name: "doras-ui", status:"not-useful" },
  { name: "dsikeres1", status:"useful" },
  { name: "effered", status:"useful" },
  { name: "einui", status:"useful" },
  { name: "eldoraui", status:"useful" },
  { name: "elements", status:"useful" },
  { name: "elevenlabs-ui", status:"useful" },
  { name: "emerald-ui", status:"useful" },
  { name: "fab-ui", status: "useful" },
  { name: "fluid", status:"useful" },
  { name: "flx", status:"useful" },
  { name: "fonttrio", status:"useful" },
  { name: "forge-ui", status:"useful" },
  { name: "formcn", status:"useful" },
  { name: "gaia", status:"useful" },
  { name: "gamifykit", status:"useful" },
  { name: "gammaui", status:"useful" },
  { name: "gc-solid", status:"not-useful" },
  { name: "glass-ui", status:"useful" },
  { name: "gooseui", status:"useful" },
  { name: "ha-components", status:"not-useful" },
  { name: "headcodecms", status:"not-useful" },
  { name: "heroicons-animated", status:"useful" },
  { name: "hextaui", status: "useful" },
  { name: "iconiq", status:"useful" },
  { name: "icons-animated", status:"useful" },
  { name: "inferencesh", status:"useful" },
  { name: "intentui", status:"useful" },
  { name: "jalco", status:"useful" },
  { name: "jolyui", status:"useful" },
  { name: "joyco", status:"useful" },
  { name: "kanpeki", status: "not-maintained" },
  { name: "kapwa" },
  { name: "kibo-ui" },
  { name: "kokonutui", status: "useful" },
  { name: "launchui" },
  { name: "lens-blocks" },
  { name: "limeplay" },
  { name: "lmscn" },
  { name: "lucide-animated" },
  { name: "lumiui" },
  { name: "lytenyte" },
  { name: "magicui", status: "useful" },
  { name: "manifest" },
  { name: "mapcn" },
  { name: "moleculeui" },
  { name: "motion-primitives", status: "useful" },
  { name: "mui-treasury", status: "not-maintained" },
  { name: "ncdai" },
  { name: "neobrutalism" },
  { name: "nessra-ui" },
  { name: "nexus-elements" },
  { name: "nexus-ui" },
  { name: "nteract" },
  { name: "nuqs" },
  { name: "odysseyui" },
  { name: "openstatus" },
  { name: "optics" },
  { name: "oui" },
  { name: "pacekit" },
  { name: "pacekit-gsap" },
  { name: "paletteui" },
  { name: "pastecn" },
  { name: "paykit-sdk" },
  { name: "phucbm" },
  { name: "pixelact-ui" },
  { name: "plate", status: "useful" },
  { name: "prompt-kit", status: "useful" },
  { name: "prosekit" },
  { name: "pulkitxm" },
  { name: "pureui" },
  { name: "react-aria", status: "useful" },
  { name: "react-bits", status: "useful" },
  { name: "react-easy-modals" },
  { name: "react-slot" },
  { name: "rescript-shadcn" },
  { name: "retroui" },
  { name: "reui" },
  { name: "roiui" },
  { name: "sabraman" },
  { name: "satoriui" },
  { name: "scrollxui" },
  { name: "shadcn-dashboard" },
  { name: "shadcn-editor" },
  { name: "shadcn-map" },
  { name: "shadcn-space" },
  { name: "shadcn-studio" },
  { name: "shadcnblocks", status: "useful" },
  { name: "shadcndesign" },
  { name: "shadcnhooks" },
  { name: "shadcnmaps" },
  { name: "shadcnstore" },
  { name: "shadcnui-blocks" },
  { name: "shadcnuikit" },
  { name: "skiper-ui" },
  { name: "slide-cn" },
  { name: "smoothui" },
  { name: "solaceui" },
  { name: "sona-ui" },
  { name: "soundcn" },
  { name: "spectrumui" },
  { name: "spell" },
  { name: "square-ui" },
  { name: "supabase" },
  { name: "svgl" },
  { name: "systaliko-ui" },
  { name: "tailark" },
  { name: "tailwind-admin" },
  { name: "tailwind-builder" },
  { name: "taki" },
  { name: "terrae" },
  { name: "thegridcn" },
  { name: "tokenui" },
  { name: "tool-ui" },
  { name: "tour" },
  { name: "typedora-ui" },
  { name: "ui-layouts" },
  { name: "uicapsule" },
  { name: "uitripled" },
  { name: "unlumen-ui" },
  { name: "uselayouts" },
  { name: "utilcn" },
  { name: "w3-kit" },
  { name: "wandry-ui" },
  { name: "waves-cn" },
  { name: "wds" },
  { name: "wiggle-ui" },
  { name: "zippystarter" },
];

const ACCENTS = [
  "from-sky-500/20 to-sky-500/5 border-sky-500/20 hover:border-sky-400/60",
  "from-violet-500/20 to-violet-500/5 border-violet-500/20 hover:border-violet-400/60",
  "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-400/60",
  "from-amber-500/20 to-amber-500/5 border-amber-500/20 hover:border-amber-400/60",
  "from-rose-500/20 to-rose-500/5 border-rose-500/20 hover:border-rose-400/60",
  "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 hover:border-cyan-400/60",
  "from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/20 hover:border-fuchsia-400/60",
  "from-orange-500/20 to-orange-500/5 border-orange-500/20 hover:border-orange-400/60",
];

const DOT_COLORS = [
  "bg-sky-400", "bg-violet-400", "bg-emerald-400", "bg-amber-400",
  "bg-rose-400", "bg-cyan-400", "bg-fuchsia-400", "bg-orange-400",
];

const STATUS_CONFIG: Record<LibraryStatus, { icon: React.ElementType; color: string; label: string }> = {
  "useful":         { icon: ThumbsUp,      color: "text-emerald-400", label: "Useful" },
  "not-useful":     { icon: ThumbsDown,    color: "text-rose-400",    label: "Not useful" },
  "not-maintained": { icon: AlertTriangle, color: "text-amber-400",   label: "Not maintained" },
};

function StatusBadge({ status }: { status: LibraryStatus }) {
  const { icon: Icon, color, label } = STATUS_CONFIG[status];
  return (
    <div className="relative group/tip">
      <Icon className={`size-3 ${color} fill-current opacity-80`} />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 whitespace-nowrap opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
        {label}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-800" />
      </div>
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => SECTIONS.filter((s) => s.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-mono selection:bg-zinc-700">
      {/* ── Grid background ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Glow blobs ── */}
      <div className="fixed top-[-20%] left-[10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* ── Header ── */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-9 rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Layers className="size-4 text-white" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              shadcn — component registry
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-4">
            Shadcn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">
              Registry
            </span>
          </h1>
          <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
            {SECTIONS.length} component libraries, all in one place. Click any card to explore — or come back when it&apos;s ready.
          </p>

          {/* ── Legend ── */}
          <div className="flex items-center gap-4 mt-5">
            {(Object.entries(STATUS_CONFIG) as [LibraryStatus, typeof STATUS_CONFIG[LibraryStatus]][]).map(([key, { icon: Icon, color, label }]) => (
              <div key={key} className="flex items-center gap-1.5">
                <Icon className={`size-3 ${color} fill-current`} />
                <span className="text-[10px] text-zinc-600">{label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ── Search ── */}
        <div className="relative mb-10 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-600" />
          <input
            type="text"
            placeholder="Search libraries…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 transition-colors"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 tabular-nums">
            {filtered.length}/{SECTIONS.length}
          </span>
        </div>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-zinc-600 text-sm">
            No libraries match &ldquo;{query}&rdquo;
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filtered.map(({ name, status }, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              const dot = DOT_COLORS[i % DOT_COLORS.length];
              return (
                <Link
                  key={name}
                  href={`/${name}`}
                  className={`
                    group relative flex flex-col justify-between p-4 rounded-2xl
                    bg-gradient-to-br ${accent}
                    border backdrop-blur-sm
                    transition-all duration-300
                    hover:scale-[1.03] hover:shadow-xl hover:shadow-black/30
                  `}
                >
                  {/* top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`size-2 rounded-full ${dot} opacity-70 group-hover:opacity-100 transition-opacity`} />
                    {status ? (
                      <StatusBadge status={status} />
                    ) : (
                      <ArrowUpRight className="size-3.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                    )}
                  </div>

                  {/* name */}
                  <span className="text-[11px] font-semibold text-zinc-300 group-hover:text-white transition-colors leading-snug break-all uppercase">
                    {name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}

        {/* ── Footer ── */}
        <footer className="mt-20 pt-8 border-t border-zinc-900 text-[10px] text-zinc-700 flex items-center justify-between">
          <span>shadcn · {SECTIONS.length} libraries</span>
          <span>Next.js · TypeScript · Tailwind</span>
        </footer>
      </div>
    </div>
  );
}