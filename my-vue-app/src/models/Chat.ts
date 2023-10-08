import { Message } from "./Message";
import { User } from "./User";


export type chat = {
    id: number;
    other: User;
    me: User;
    messages: Message[];
  };