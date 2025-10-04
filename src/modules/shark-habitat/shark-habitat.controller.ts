// src/shark-habitat/shark-habitat.controller.ts
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { SharkHabitatService, HabitatPrediction, PredictionRequest } from './shark-habitat.service';

@Controller('shark-habitat')
export class SharkHabitatController {
    constructor(private readonly sharkHabitatService: SharkHabitatService) { }

    @Post('predict')
    async predictHabitat(@Body() request: PredictionRequest): Promise<HabitatPrediction[]> {
        return this.sharkHabitatService.predictHabitat(request);
    }

    @Get('predict')
    async predictHabitatGet(
        @Query('north') north: number,
        @Query('south') south: number,
        @Query('east') east: number,
        @Query('west') west: number,
        @Query('resolution') resolution?: number,
    ): Promise<HabitatPrediction[]> {
        const request: PredictionRequest = { north, south, east, west, resolution };
        return this.sharkHabitatService.predictHabitat(request);
    }

    @Get('hotspots')
    async getHotspots(@Query('threshold') threshold = 0.7): Promise<HabitatPrediction[]> {
        return this.sharkHabitatService.getHotspots(threshold);
    }

    @Get('health')
    async healthCheck() {
        // Test prediction to verify ML model is working
        const testPrediction = await this.sharkHabitatService.predictHabitat({
            north: 35.1,
            south: 34.9,
            east: -70.1,
            west: -70.3,
            resolution: 2,
        });

        return {
            status: 'healthy',
            model: 'shark_habitat_ml',
            testPrediction: testPrediction.length > 0 ? 'working' : 'no_data',
            timestamp: new Date(),
        };
    }
}