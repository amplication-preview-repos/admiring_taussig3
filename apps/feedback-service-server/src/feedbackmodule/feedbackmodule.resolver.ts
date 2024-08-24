import * as graphql from "@nestjs/graphql";
import { FeedbackCreateDto } from "../feedbackModule/FeedbackCreateDto";
import { FeedbackOutputDto } from "../feedbackModule/FeedbackOutputDto";
import { FeedbackUpdateDto } from "../feedbackModule/FeedbackUpdateDto";
import { FeedbackModuleService } from "./feedbackmodule.service";

export class FeedbackModuleResolver {
  constructor(protected readonly service: FeedbackModuleService) {}

  @graphql.Mutation(() => FeedbackOutputDto)
  async CreateFeedback(
    @graphql.Args()
    args: FeedbackCreateDto
  ): Promise<FeedbackOutputDto> {
    return this.service.CreateFeedback(args);
  }

  @graphql.Mutation(() => String)
  async DeleteFeedback(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.DeleteFeedback(args);
  }

  @graphql.Query(() => FeedbackOutputDto)
  async GetFeedbackById(
    @graphql.Args("args")
    args: string
  ): Promise<FeedbackOutputDto> {
    return this.service.GetFeedbackById(args);
  }

  @graphql.Query(() => [FeedbackOutputDto])
  async ListFeedbacks(
    @graphql.Args("args")
    args: string[]
  ): Promise<FeedbackOutputDto[]> {
    return this.service.ListFeedbacks(args);
  }

  @graphql.Mutation(() => FeedbackOutputDto)
  async UpdateFeedback(
    @graphql.Args()
    args: FeedbackUpdateDto
  ): Promise<FeedbackOutputDto> {
    return this.service.UpdateFeedback(args);
  }
}
