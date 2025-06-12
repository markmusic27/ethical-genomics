import { useState, useEffect } from "react";
import { Text } from "./Text";
import type { Block } from "~/types/game";
import { blocks, getBlockById } from "~/data/blocks";
import { CorpusBlock } from "./CorpusBlock";

export const Corpus = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const initialBlock = getBlockById(0);
    if (initialBlock) {
      setBlocks([initialBlock]);
    }
  }, []);

  return (
    <div>
      {blocks.length <= 0 ? (
        <div className="flex h-screen items-center justify-center">
          <Text className="text-center text-[#A8A29E]">Loading...</Text>
        </div>
      ) : (
        <div className="relative mx-auto h-[3000px] w-[615px]">
          <div className="h-[128px]" />
          <CorpusBlock block={blocks[0]!} />
        </div>
      )}
    </div>
  );
};
