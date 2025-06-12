"use client";

import { Text } from "~/components/Text";
import { Button } from "~/components/Button";

export default function GameplayPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative mx-auto h-[3000px] w-[600px] bg-red-500"></div>

      {/* Sticky button container */}
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
