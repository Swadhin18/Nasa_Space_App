import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { IngestionService } from './ingestion.service';
import { RegisterDatasetDto } from './dto/register-dataset.dto';
import { ProcessResultDto } from './dto/process-result.dto';
import { JwtAuthGuard } from '@/auth/guards/jwt.guard';
import { ApiKeyGuard } from '@/auth/guards/apikey.guard';

@Controller('api/v1/ingestion')
export class IngestionController {
    constructor(private readonly ingestionService: IngestionService) { }

    @UseGuards(JwtAuthGuard)
    @Post('register')
    register(@Body() dto: RegisterDatasetDto) {
        return this.ingestionService.registerDataset(dto);
    }

    @Get('datasets')
    list() {
        return this.ingestionService.listDatasets();
    }

    @UseGuards(ApiKeyGuard)
    @Post('process')
    processResult(@Body() dto: ProcessResultDto) {
        return this.ingestionService.saveProcessResult(dto);
    }
}
