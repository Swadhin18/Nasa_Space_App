import { Controller, Get } from '@nestjs/common';
import { MlService } from './ml.service';

@Controller('api/ml')
export class MlController {
    constructor(private readonly mlService: MlService) { }

    @Get('data-visualization')
    async getVisualizationData() {
        return await this.mlService.getVisualizationData();
    }
}
