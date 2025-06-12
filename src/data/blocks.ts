import { type Block } from "~/types/game";

export const blocks: Block[] = [
  {
    id: 0,
    action_text: "Take the pill",
    title: "A Dose of Uncertainty",
    question:
      "Should she trust the system and take the medication, or wait and seek alternatives, risking her mental health in the meantime?",
    description:
      "María, a 22-year-old student from Nicaragua, has been prescribed a psychiatric medication developed and tested primarily on populations unlike hers. Her doctor assures her it's effective, but María is aware that medications not designed with her genetic background in mind can lead to unpredictable side effects—or no benefits at all.",
    pointers: [1, 2, 3],
    context:
      "Poor robots. All around the internet are little CAPTCHA checkboxes designed to keep them out. That terrible tickmark—“I am not a robot”—has caused many a positronic tear.",
  },
  {
    id: 1,
    action_text: "Take the pill",
    title: "A Dose of Uncertainty",
    question:
      "Should she trust the system and take the medication, or wait and seek alternatives, risking her mental health in the meantime?",
    description:
      "María, a 22-year-old student from Nicaragua, has been prescribed a psychiatric medication developed and tested primarily on populations unlike hers. Her doctor assures her it's effective, but María is aware that medications not designed with her genetic background in mind can lead to unpredictable side effects—or no benefits at all.",
    pointers: [],
    context:
      "Poor robots. All around the internet are little CAPTCHA checkboxes designed to keep them out. That terrible tickmark—“I am not a robot”—has caused many a positronic tear.",
  },
  {
    id: 2,
    action_text: "Go to hospital",
    title: "A Dose of Uncertainty",
    question:
      "Should she trust the system and take the medication, or wait and seek alternatives, risking her mental health in the meantime?",
    description:
      "María, a 22-year-old student from Nicaragua, has been prescribed a psychiatric medication developed and tested primarily on populations unlike hers. Her doctor assures her it's effective, but María is aware that medications not designed with her genetic background in mind can lead to unpredictable side effects—or no benefits at all.",
    pointers: [],
    context:
      "Poor robots. All around the internet are little CAPTCHA checkboxes designed to keep them out. That terrible tickmark—“I am not a robot”—has caused many a positronic tear.",
  },
];

// Helper function to get a block by ID
export const getBlockById = (id: number): Block | undefined => {
  return blocks.find((block) => block.id === id);
};
