import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FeedbackModuleService } from "./feedbackmodule.service";
import { FeedbackUpdateDto } from "../feedbackModule/FeedbackUpdateDto";
import { FeedbackOutputDto } from "../feedbackModule/FeedbackOutputDto";

@swagger.ApiTags("feedbackModules")
@common.Controller("feedbackModules")
export class FeedbackModuleController {
  constructor(protected readonly service: FeedbackModuleService) {}

  @common.Post("/feedback")
  @swagger.ApiOkResponse({
    type: FeedbackOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateFeedback(
    @common.Body()
    body: FeedbackUpdateDto
  ): Promise<FeedbackOutputDto> {
        return this.service.CreateFeedback(body);
      }

  @common.Delete("/feedback/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteFeedback(
    @common.Body()
    body: FeedbackUpdateDto
  ): Promise<string> {
        return this.service.DeleteFeedback(body);
      }

  @common.Get("/feedback/:id")
  @swagger.ApiOkResponse({
    type: FeedbackOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFeedbackById(
    @common.Body()
    body: FeedbackUpdateDto
  ): Promise<FeedbackOutputDto> {
        return this.service.GetFeedbackById(body);
      }

  @common.Get("/feedbacks")
  @swagger.ApiOkResponse({
    type: FeedbackOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListFeedbacks(
    @common.Body()
    body: FeedbackUpdateDto
  ): Promise<FeedbackOutputDto[]> {
        return this.service.ListFeedbacks(body);
      }

  @common.Put("/feedback/:id")
  @swagger.ApiOkResponse({
    type: FeedbackOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateFeedback(
    @common.Body()
    body: FeedbackUpdateDto
  ): Promise<FeedbackOutputDto> {
        return this.service.UpdateFeedback(body);
      }
}
