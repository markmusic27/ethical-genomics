import { Text } from "./Text";
import { Button } from "./Button";
import { Content } from "./Content";

export const Body = () => {
  return (
    <div className="relative mx-auto w-[600px]">
      <div className="h-[128px]" />
      <Text className="text-left text-[20px] font-[400] text-[#171717]">
        Ethics in Psychiatric Genomics Funding in Latin America
      </Text>
      <div className="h-[4px]" />
      <Text className="text-left text-[20px] font-[400] text-[#A8A29E]">
        Justice in Biotechnologies Final Project
      </Text>
      <div className="h-[40px]" />
      <div className="aspect-video w-full overflow-hidden rounded-[6px]">
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          src="/video/tutorial.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-[24px]" />
      <div className="flex justify-center">
        <Button
          text="Start Gameplay"
          onClick={() => {
            window.location.href = "/gameplay";
          }}
        />
      </div>
      <div className="h-[48px]" />
      <Content
        header="Thesis"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="h-[48px]" />
      <Content
        header="Reflection"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="h-[48px]" />
      <Content
        header="Annotated Bibliography"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="h-[256px]" />
    </div>
  );
};
