import { useState, useEffect } from "react";
import { Text } from "./Text";
import type { Block } from "~/types/game";
import { getBlockById } from "~/data/blocks";
import { CorpusBlock } from "./CorpusBlock";
import DecisionBlock from "./DecisionBlock";

export const Corpus = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

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

  // When a user selects a decision, append the corresponding block to the corpus path
  const handleDecisionSelect = (block: Block) => {
    setBlocks((prev) => [...prev, block]);
  };

  const renderDecisionBlocks = () => {
    if (blocks.length === 0) return null;

    // Get the most recent block in the path
    const currentBlock = blocks[blocks.length - 1];
    if (!currentBlock || currentBlock.pointers.length === 0) return null;

    const pointerCount = currentBlock.pointers.length;

    return (
      <div className="flex flex-row gap-[12px]">
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
          <div className="h-[120px]" />
          <div>
            {blocks.map((block, idx) => (
              <div key={block.id}>
                <CorpusBlock block={block} />
                {idx !== blocks.length - 1 && <div className="h-[48px]" />}
              </div>
            ))}
          </div>
          <div className="h-[48px]" />
          {renderDecisionBlocks()}
          <div className="h-[100px]" />
        </div>
      )}
    </div>
  );
};
