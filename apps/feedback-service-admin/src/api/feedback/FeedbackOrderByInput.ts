import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  dateSubmitted?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
