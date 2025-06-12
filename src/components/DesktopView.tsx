import { Body } from "./Body";
import { Sidebar } from "./Sidebar";

export const DesktopView = () => {
  return (
    <div className="relative h-screen">
      <Body />
      <Sidebar />
    </div>
  );
};
