export interface Block {
  id: number;
  title: string;
  action_text: string;
  description: string;
  question: string;
  pointers: number[];
  context: string;
}
