import { Text } from "./Text";

interface BibliographyEntryProps {
  citation: string;
  annotation: string;
}

export const BibliographyEntry = ({
  citation,
  annotation,
}: BibliographyEntryProps) => {
  return (
    <div className="relative">
      <div className="ml-[2em]">
        <Text
          isSerif
          className="-ml-[2em] text-[18px] leading-10 font-[300] text-[#404040]"
        >
          {citation}
        </Text>
        <div className="h-[18px] w-[1px]" />
        <Text
          isSerif
          className="text-[18px] leading-10 font-[300] text-[#404040]"
        >
          {annotation}
        </Text>
      </div>
    </div>
  );
};
