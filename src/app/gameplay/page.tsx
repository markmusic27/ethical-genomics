"use client";

import { Text } from "~/components/Text";
import { useEffect, useRef, useState } from "react";
import { Corpus } from "~/components/Corpus";
import { GradientOut } from "~/components/GradientOut";
import { Button } from "~/components/Button";

export default function GameplayPage() {
  return (
    <main className="min-h-screen bg-white">
      <Corpus />

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
