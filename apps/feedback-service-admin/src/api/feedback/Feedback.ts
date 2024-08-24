import { User } from "../user/User";

export type Feedback = {
  category?: "Option1" | null;
  createdAt: Date;
  dateSubmitted: Date | null;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
