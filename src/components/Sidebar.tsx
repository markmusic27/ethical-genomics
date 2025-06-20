import { Text } from "./Text";
import { SidebarItem } from "./SidebarItem";

const SIDEBAR_WIDTH = 200;

export const Sidebar = () => {
  const scrollToReflection = () => {
    const reflectionElement = document.querySelector(
      '[data-section="reflection"]',
    );
    if (reflectionElement) {
      reflectionElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToBibliography = () => {
    const bibliographyElement = document.querySelector(
      '[data-section="bibliography"]',
    );
    if (bibliographyElement) {
      bibliographyElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed top-[128px] flex flex-col items-end"
      style={{
        width: `${SIDEBAR_WIDTH}px`,
        left: `calc(50% - 364px - ${SIDEBAR_WIDTH}px)`,
      }}
    >
      <div
        className="h-[48px] w-[48px] transform cursor-pointer rounded-full border border-[#C4C3BE] bg-cover bg-center transition-transform duration-300 hover:-rotate-15"
        style={{ backgroundImage: "url('images/pfp.png')" }}
        onClick={() => {
          window.location.href =
            "https://github.com/markmusic27/ethical-genomics";
        }}
      />
      <div className="h-[48px]" />
      <SidebarItem text="Reflection" onClick={scrollToReflection} />
      <SidebarItem text="Bibliography" onClick={scrollToBibliography} />
      <SidebarItem
        text="Gameplay"
        onClick={() => {
          window.location.href = "/gameplay";
        }}
      />
    </div>
  );
};
