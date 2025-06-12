import type { Block } from "~/types/game";
import { Text } from "./Text";

const DecisionBlock = ({ block, opt }: { block: Block; opt: number }) => {
  return (
    <div
      className="transition:scale flex h-[350px] w-full cursor-pointer flex-col rounded-[6px] bg-cover bg-center p-[12px] duration-200 hover:scale-101"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 90%), url('/game/${block.id}.png')`,
      }}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <Text className="text-[14px] text-white">
          {opt === -1 ? "Click to continue" : "Option " + (opt + 1)}
        </Text>
        <Text className="text-[18px] font-[350] text-white opacity-80">
          {block.action_text}
        </Text>
      </div>
    </div>
  );
};

export default DecisionBlock;
