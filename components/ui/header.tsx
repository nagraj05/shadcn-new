"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const segment = pathname?.split("/").filter(Boolean).pop() ?? "";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-4">
        <Link
          href="/"
          className="group flex items-center gap-1.5 text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="text-xs font-medium">Back</span>
        </Link>

        {segment && (
          <>
            <span className="text-zinc-800 select-none">/</span>
            <span className="text-xs font-semibold text-zinc-300 tracking-wide truncate">
              {segment}
            </span>
          </>
        )}
      </div>
    </header>
  );
}
