"use client";

import { useEffect, useState } from "react";
import { Text } from "~/components/Text";
import { DesktopView } from "~/components/DesktopView";

export default function HomePage() {
  const [isTooSmall, setIsTooSmall] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsTooSmall(window.innerWidth < 750);
    };

    // Check on mount
    checkWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {isTooSmall ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <Text className="text-center text-lg font-bold">
            View on desktop or larger screen.
          </Text>
        </div>
      ) : (
        <DesktopView />
      )}
    </main>
  );
}
