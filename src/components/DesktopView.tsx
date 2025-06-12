import { Sidebar } from "./Sidebar";
import { Text } from "./Text";

export const DesktopView = () => {
  return (
    <div className="relative h-screen">
      <div className="relative mx-auto h-[3000px] w-[600px] bg-red-500" />
      <Sidebar />
    </div>
  );
};
