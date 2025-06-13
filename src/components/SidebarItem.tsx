import { Text } from "./Text";

interface SidebarItemProps {
  text: string;
  onClick?: () => void;
}

export const SidebarItem = ({ text, onClick }: SidebarItemProps) => {
  return (
    <button
      className="w-full cursor-pointer pb-[4px] text-right"
      onClick={onClick}
    >
      <Text className="text-[16px] text-[#A8A29E] transition-colors duration-200 hover:text-[#6B6968]">
        {text}
      </Text>
    </button>
  );
};
