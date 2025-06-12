"use client";

import { Text } from "~/components/Text";
import { useEffect, useRef, useState } from "react";
import { Corpus } from "~/components/Corpus";
import { GradientOut } from "~/components/GradientOut";
import { Button } from "~/components/Button";

export default function GameplayPage() {
  const corpusRef = useRef<HTMLDivElement | null>(null);
  const [corpusHeight, setCorpusHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (corpusRef.current) {
        setCorpusHeight(corpusRef.current.offsetHeight);
      }
    };

    // Measure on mount
    updateHeight();

    // Re-measure on window resize
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Wrap Corpus with a measuring container */}
      <div ref={corpusRef}>
        <Corpus />
      </div>

      <GradientOut />

      {/* Sticky height display */}
      <div className="fixed right-0 bottom-0 left-0 flex justify-center pb-[24px]">
        <Button
          text="Back to Home"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </div>
    </main>
  );
}
