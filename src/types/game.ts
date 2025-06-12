export interface Block {
  id: number;
  title: string;
  description: string;
  children: Decision[];
  connection: string;
}

export interface Decision {
  pointer: number;
  image: string;
  text: string;
}
