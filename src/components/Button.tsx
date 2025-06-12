import { Text } from "./Text";

export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#C4C3BE] bg-white px-[20px] py-[12px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:scale-102"
      onClick={onClick}
    >
      <Text className="text-[14px] font-[350] text-[#141413]">{text}</Text>
    </div>
  );
};
