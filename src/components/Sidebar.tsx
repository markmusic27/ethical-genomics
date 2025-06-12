import { Text } from "./Text";
import { SidebarItem } from "./SidebarItem";

const SIDEBAR_WIDTH = 200;

export const Sidebar = () => {
  return (
    <div
      className="fixed top-[128px] flex flex-col items-end"
      style={{
        width: `${SIDEBAR_WIDTH}px`,
        left: `calc(50% - 364px - ${SIDEBAR_WIDTH}px)`,
      }}
    >
      <div
        className="h-[48px] w-[48px] rounded-full border border-[#C4C3BE] bg-cover bg-center"
        style={{ backgroundImage: "url('images/pfp.png')" }}
      />
      <div className="h-[48px]" />
      <SidebarItem
        text="Reflection"
        onClick={() => {
          // Add your click handler here
          console.log("Reflection clicked");
        }}
      />
      <SidebarItem
        text="Bibliography"
        onClick={() => {
          // Add your click handler here
          console.log("Reflection clicked");
        }}
      />
      <SidebarItem
        text="Gameplay"
        onClick={() => {
          window.location.href = "/gameplay";
        }}
      />
    </div>
  );
};
