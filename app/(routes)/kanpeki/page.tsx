"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Construction } from "lucide-react";

export default function ComingSoonPage() {
  const pathname = usePathname();
  const segment = pathname?.split("/").filter(Boolean).pop() ?? "this page";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-mono flex flex-col items-center justify-center px-6 selection:bg-zinc-700">
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[140px] pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col items-center text-center max-w-md gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="size-20 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-2xl">
          <Construction className="size-9 text-amber-400" strokeWidth={1.5} />
        </div>
        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            {segment}
          </p>
          <h1 className="text-4xl font-black tracking-tighter text-white">
            Coming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-400">
              Soon
            </span>
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed">
            This section is still being built. Check back later.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800 relative overflow-hidden rounded-full">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-violet-500 to-sky-400 rounded-full animate-pulse" />
        </div>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 text-sm text-zinc-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Registry
        </Link>
      </div>
    </div>
  );
}
