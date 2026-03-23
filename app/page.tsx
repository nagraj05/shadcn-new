
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ButtonInfo = [
  {
    id:1,
    name:"Animate UI",
    href:"/animate-ui"
  },
  {
    id:2,
    name:"UI",
    href:"/ui"
  }
]


export default function Home() {
  return (
    <div className="flex flex-1 gap-10 justify-center items-center flex-col bg-zinc-50 font-sans dark:bg-black">
        {ButtonInfo.map((button) => (
          <Button key={button.id} variant={"outline"} asChild>
            <Link href={button.href}>
              {button.name}
            </Link>
          </Button>
        ))}
    </div>
  );
}
