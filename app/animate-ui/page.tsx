"use client"

import { useState } from "react";
import { AvatarGroup, AvatarGroupTooltip } from "@/components/animate-ui/components/animate/avatar-group";
import { SlidingNumber } from "@/components/animate-ui/primitives/texts/sliding-number";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { LayoutGrid, Hash } from "lucide-react";

const AVATARS = [
  {
    src: 'https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg',
    fallback: 'SK',
    tooltip: 'Skyleen',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
    fallback: 'CN',
    tooltip: 'Shadcn',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
    fallback: 'AW',
    tooltip: 'Adam Wathan',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg',
    fallback: 'GR',
    tooltip: 'Guillermo Rauch',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg',
    fallback: 'JH',
    tooltip: 'Jhey',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1927474594102784000/Al0g-I6o_400x400.jpg',
    fallback: 'DH',
    tooltip: 'David Haz',
  },
];

const COMPONENTS = [
  {
    id: "avatar-group",
    name: "Avatar Group",
    description: "An animated avatar group with overlapping user images.",
    icon: LayoutGrid,
    demo: () => (
      <AvatarGroup className="h-16 -space-x-4">
        {AVATARS.map((avatar, index) => (
          <Avatar key={index} className="size-16 border-4 border-background">
            <AvatarImage src={avatar.src} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
            <AvatarGroupTooltip>{avatar.tooltip}</AvatarGroupTooltip>
          </Avatar>
        ))}
      </AvatarGroup>
    ),
  },
  {
    id: "sliding-number",
    name: "Sliding Number",
    description: "An animated number component that slides from top to bottom.",
    icon: Hash,
    demo: () => <SlidingNumber number={9000} className="text-6xl font-black" />,
  },
];

export default function AnimateUIPage() {
  const [selectedComponent, setSelectedComponent] = useState<(typeof COMPONENTS)[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-50">
      
      {/* Top Header */}
      <header className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center sticky top-0 bg-white/50 dark:bg-black/50 backdrop-blur-xl z-10">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              ← Back
            </Link>
          </Button>
          <h1 className="text-xl font-bold tracking-tight">Animate UI Gallery</h1>
        </div>
        <div className="flex gap-2">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">Live Components</span>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPONENTS.map((component) => (
            <div 
              key={component.id}
              className="group relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedComponent(component)}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="size-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <component.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{component.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {component.description}
                </p>
                <div className="mt-6 flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Open Preview →
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Component Detail Sheet */}
      <Sheet open={!!selectedComponent} onOpenChange={(open) => !open && setSelectedComponent(null)}>
        <SheetContent side="right" className="sm:max-w-2xl w-full border-l border-zinc-200 dark:border-zinc-800 p-0 overflow-hidden flex flex-col">
          {selectedComponent && (
            <>
              <SheetHeader className="p-8 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
                <div className="flex items-center gap-4 mb-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <selectedComponent.icon className="size-5 text-primary" />
                    </div>
                    <div>
                        <SheetTitle className="text-2xl font-bold">{selectedComponent.name}</SheetTitle>
                        <SheetDescription className="text-zinc-500 dark:text-zinc-400">
                          Interactive demonstration and preview
                        </SheetDescription>
                    </div>
                </div>
              </SheetHeader>
              
              <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center bg-zinc-100/30 dark:bg-zinc-900/10">
                <div className="p-12 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 shadow-inner w-full flex items-center justify-center min-h-[400px]">
                   <selectedComponent.demo />
                </div>
              </div>

              <div className="p-8 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Component Info</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {selectedComponent.description} This component is part of the Animate UI collection, designed for high-performance animations and seamless integration with Tailwind CSS and Motion.
                    </p>
                    <div className="mt-4 flex gap-3">
                        <Button className="flex-1" size="lg">Documentation</Button>
                        <Button variant="outline" className="flex-1" size="lg" onClick={() => setSelectedComponent(null)}>Close</Button>
                    </div>
                  </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <footer className="p-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500">
        Built with Animate UI, Motion and Tailwind CSS
      </footer>
    </div>
  );
}