import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthOrApiKeyGuard } from '../common/guards/auth-or-apikey.guard';

@Controller('ml')
export class MlIntegrationController {
    // GET /ml/data -> returns prepared dataset sample (JSON/CSV link)
    @UseGuards(AuthOrApiKeyGuard)
    @Get('data')
    getData() {
        // TODO: return dataset or signed S3 URL or streaming CSV
        return { message: 'dataset endpoint placeholder' };
    }

    // POST /ml/predictions -> models can POST predictions here (protected by api-key)
    @UseGuards(AuthOrApiKeyGuard)
    @Post('predictions')
    receivePrediction(@Body() body: any) {
        // TODO: validate and persist predictions
        return { received: true };
    }
}
