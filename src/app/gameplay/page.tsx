"use client";

import { Text } from "~/components/Text";
import { Button } from "~/components/Button";

export default function GameplayPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative mx-auto w-[600px]">
        <div className="h-[128px]" />
        <Text className="text-left text-[20px] font-[400] text-[#000000]">
          Gameplay
        </Text>
        <div className="h-[40px]" />
        <div className="flex justify-center">
          <Button
            text="Back to Home"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </div>
      </div>
    </main>
  );
}
