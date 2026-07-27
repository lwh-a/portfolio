import type { ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  width?: number;
  height?: number;
}

export function FlipCard({ front, back, width = 160, height = 160 }: FlipCardProps) {
  return (
    <div style={{ perspective: "1000px", width, height }}>
      <div
        className="group relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border bg-white transition-transform duration-500 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
          {front}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 text-center text-white transition-transform duration-500 [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}