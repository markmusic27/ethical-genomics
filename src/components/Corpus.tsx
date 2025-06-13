import { useState, useEffect } from "react";
import { Text } from "./Text";
import type { Block } from "~/types/game";
import { getBlockById } from "~/data/blocks";
import { CorpusBlock } from "./CorpusBlock";
import DecisionBlock from "./DecisionBlock";
import Image from "next/image";

// Add CSS animation styles
const arrowAnimation = `
@keyframes arrowFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.arrow-animate {
  animation: arrowFadeIn 0.5s ease-out forwards;
}
`;

export const Corpus = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  // Controls fade-out animation for decision blocks
  const [isAnimating, setIsAnimating] = useState(false);
  // Temporarily stores the block selected while the animation plays
  const [pendingBlock, setPendingBlock] = useState<Block | null>(null);

  useEffect(() => {
    const initialBlock = getBlockById(0);
    if (initialBlock) {
      setBlocks([initialBlock]);
    }
  }, []);

  // After any update to blocks (except the first render), smoothly scroll to the bottom of the page
  useEffect(() => {
    if (blocks.length > 1) {
      // Use next tick to ensure DOM has rendered new content
      const id = requestAnimationFrame(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });

      return () => cancelAnimationFrame(id);
    }
  }, [blocks]);

  // When a user selects a decision, play a fade-out animation before
  // appending the selected block to the corpus path.
  const handleDecisionSelect = (block: Block) => {
    // Trigger fade-out and stash the chosen block
    setIsAnimating(true);
    setPendingBlock(block);
  };

  // After the fade-out animation completes, append the chosen block
  useEffect(() => {
    if (isAnimating && pendingBlock) {
      const timeout = setTimeout(() => {
        setBlocks((prev) => [...prev, pendingBlock]);
        setIsAnimating(false);
        setPendingBlock(null);
      }, 300); // Keep this duration in sync with the CSS transition below

      return () => clearTimeout(timeout);
    }
  }, [isAnimating, pendingBlock]);

  const renderDecisionBlocks = () => {
    if (blocks.length === 0) return null;

    // Get the most recent block in the path
    const currentBlock = blocks[blocks.length - 1];
    if (!currentBlock || currentBlock.pointers.length === 0) return null;

    const pointerCount = currentBlock.pointers.length;

    const containerClass = `flex flex-row gap-[12px] transition-all duration-500 ${
      isAnimating
        ? "opacity-0 translate-y-4 pointer-events-none"
        : "opacity-100 translate-y-0"
    }`;

    return (
      <div className={containerClass}>
        {currentBlock.pointers.map((id, idx) => {
          const childBlock = getBlockById(id);
          if (!childBlock) return null;
          // If there is only one decision, pass opt = -1 so the child can handle single-option state.
          const optValue = pointerCount === 1 ? -1 : idx;
          return (
            <DecisionBlock
              key={id}
              block={childBlock}
              opt={optValue}
              onSelect={handleDecisionSelect}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {blocks.length <= 0 ? (
        <div className="flex h-screen items-center justify-center">
          <Text className="text-center text-[#A8A29E]">Loading...</Text>
        </div>
      ) : (
        <div className="relative mx-auto w-[615px]">
          <div className="h-[100px]" />
          <div>
            {blocks.map((block, idx) => (
              <div key={block.id}>
                <CorpusBlock block={block} />
                {idx !== blocks.length - 1 && (
                  <div className="flex h-[100px] items-center justify-center">
                    <style>{arrowAnimation}</style>
                    <Image
                      src="/images/arrow.svg"
                      alt="Arrow icon"
                      width={80}
                      height={80}
                      className="arrow-animate h-[40px] w-[40px]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="h-[60px]" />
          {renderDecisionBlocks()}
          <div className="h-[150px]" />
        </div>
      )}
    </div>
  );
};
