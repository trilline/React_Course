import { User } from "./User";
//modèle mess
export type Message = {
    id: string; 
    content: string; 
    sender: User; 
    timestamp: Date;
    isAutoGenerated: boolean; 
  };

