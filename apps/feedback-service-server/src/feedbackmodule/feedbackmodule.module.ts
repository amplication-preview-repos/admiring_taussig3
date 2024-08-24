import { Module } from "@nestjs/common";
import { FeedbackModuleService } from "./feedbackmodule.service";
import { FeedbackModuleController } from "./feedbackmodule.controller";
import { FeedbackModuleResolver } from "./feedbackmodule.resolver";

@Module({
  controllers: [FeedbackModuleController],
  providers: [FeedbackModuleService, FeedbackModuleResolver],
  exports: [FeedbackModuleService],
})
export class FeedbackModuleModule {}
