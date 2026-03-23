import { MatrixRain } from "@/components/ui/matrix-rain"

export default function MatrixPage() {
    return (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <MatrixRain />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-4xl font-bold text-foreground tracking-wider">
                    Neo World
                </h1>
            </div>
        </div>
    )
}