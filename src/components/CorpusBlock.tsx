import type { Block } from "~/types/game";
import { Text } from "./Text";
import Image from "next/image";
import { useState, useEffect } from "react";

export const CorpusBlock = ({ block }: { block: Block }) => {
  const [showContext, setShowContext] = useState(false);

  // Local state to trigger mount animation
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay ensures the transition is picked up by the browser
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`flex transform flex-col transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="mb-[12px] flex flex-row items-center gap-[24px]">
        <Text className="text-[16px] font-[400] text-[#171717]">
          {block.title}
        </Text>
        {block.context && (
          <div className="rounded-full bg-white p-2">
            <Image
              src="/images/quote.svg"
              alt="Quote decoration"
              width={20}
              height={20}
              className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
                showContext ? "rotate-180" : ""
              }`}
              onClick={() => setShowContext(!showContext)}
            />
          </div>
        )}
      </div>
      <div
        className={`mb-[12px] grid transition-all duration-300 ease-in-out ${
          showContext
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-[8px] rounded-[6px] border-[1px] border-[#D5D5D5] p-[12px]">
            <Text className="text-[14px] font-[400] text-[#171717]">
              Framework Analysis
            </Text>
            <Text className="text-[14px] font-[350] text-[#424242]">
              {block.context}
            </Text>
          </div>
        </div>
      </div>
      <Text
        isSerif
        className="text-[18px] leading-10 font-[300] text-[#404040]"
      >
        {block.description}
      </Text>
      <Text
        isSerif
        className="mt-[24px] text-[18px] leading-10 font-[300] text-[#404040]"
      >
        {block.question}
      </Text>
    </div>
  );
};
