import { Text } from "./Text";

export const Content = ({ header, body }: { header: string; body: string }) => {
  return (
    <div className="flex flex-col gap-[28px]">
      <Text className="text-[16px] font-[400] text-[#171717]">{header}</Text>
      <Text isSerif className="text-[18px] leading-10 text-[#404040]">
        {body}
      </Text>
    </div>
  );
};
