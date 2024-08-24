import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  category?: "Option1" | null;
  dateSubmitted?: Date | null;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
