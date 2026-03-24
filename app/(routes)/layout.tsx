import { Header } from "@/components/ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-mono selection:bg-zinc-700">
      <Header />
      {children}
    </div>
  );
}
