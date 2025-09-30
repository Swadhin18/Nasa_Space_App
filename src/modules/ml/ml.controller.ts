import { Controller, Post, Body, Param } from '@nestjs/common';
import { MLService } from './ml.service';

@Controller('ml')
export class MLController {
    constructor(private mlService: MLService) { }

    // 🤖 Prediction endpoint
    @Post(':modelName/predict')
    async predict(
        @Param('modelName') modelName: string,
        @Body() payload: any
    ) {
        return await this.mlService.runPrediction(modelName, payload);
    }

    // 🔄 Retrain endpoint
    @Post(':modelName/retrain')
    async retrain(@Param('modelName') modelName: string) {
        return await this.mlService.triggerRetrain(modelName);
    }
}
