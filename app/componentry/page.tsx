import DitherPrismHero from "@/components/ui/dither-prism-hero";
import { GithubCalendar } from "@/components/ui/github-calendar";

export default function Home() {
  return (
    <div className="flex items-center justify-center  gap-5 flex-1">
      <div className="p-5">
        <GithubCalendar username="nagraj05" />
      </div>
      <DitherPrismHero
        title1="Experience"
        title2="The Future"
        color1="#0f0f23"
        color2="#6366f1"
        color3="#ec4899"
        speed={1}
        ditherIntensity={0.15}
        prismIntensity={0.5}
        particleCount={50}
        showParticles
      />
    </div>
  );
}
