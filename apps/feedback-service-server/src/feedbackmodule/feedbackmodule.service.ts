import { Injectable } from "@nestjs/common";
import { FeedbackCreateDto } from "../feedbackModule/FeedbackCreateDto";
import { FeedbackOutputDto } from "../feedbackModule/FeedbackOutputDto";
import { FeedbackUpdateDto } from "../feedbackModule/FeedbackUpdateDto";

@Injectable()
export class FeedbackModuleService {
  constructor() {}
  async CreateFeedback(args: FeedbackCreateDto): Promise<FeedbackOutputDto> {
    throw new Error("Not implemented");
  }
  async DeleteFeedback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetFeedbackById(args: string): Promise<FeedbackOutputDto> {
    throw new Error("Not implemented");
  }
  async ListFeedbacks(args: string[]): Promise<FeedbackOutputDto[]> {
    throw new Error("Not implemented");
  }
  async UpdateFeedback(args: FeedbackUpdateDto): Promise<FeedbackOutputDto> {
    throw new Error("Not implemented");
  }
}
