import { Text } from "./Text";

export const Body = () => {
  return (
    <div className="relative mx-auto h-[3000px] w-[600px]">
      <div className="h-[128px]" />
      <Text className="text-left text-[20px] font-[500] text-[#000000]">
        Ethics in Psychiatric Genomics Funding in Latin America
      </Text>
      <div className="h-[4px]" />
      <Text className="text-left text-[20px] font-[500] text-[#A8A29E]">
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
    </div>
  );
};
