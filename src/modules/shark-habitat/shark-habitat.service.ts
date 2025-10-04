// src/shark-habitat/shark-habitat.service.ts
import { Injectable } from '@nestjs/common';
import { MlPredictorService } from './ml-predictor.service';

export interface HabitatPrediction {
    latitude: number;
    longitude: number;
    probability: number;
    timestamp: Date;
}

export interface PredictionRequest {
    north: number;
    south: number;
    east: number;
    west: number;
    resolution?: number;
}

@Injectable()
export class SharkHabitatService {
    constructor(private mlPredictor: MlPredictorService) { }

    async predictHabitat(request: PredictionRequest): Promise<HabitatPrediction[]> {
        const resolution = request.resolution || 15;
        const predictions: HabitatPrediction[] = [];

        const lats = this.linspace(request.south, request.north, resolution);
        const lons = this.linspace(request.west, request.east, resolution);

        for (const lat of lats) {
            for (const lon of lons) {
                const probability = await this.mlPredictor.predictHabitat(lat, lon);

                if (probability > 0.3) {
                    predictions.push({
                        latitude: lat,
                        longitude: lon,
                        probability,
                        timestamp: new Date(),
                    });
                }
            }
        }

        return predictions.sort((a, b) => b.probability - a.probability);
    }

    async getHotspots(threshold: number = 0.7): Promise<HabitatPrediction[]> {
        const request: PredictionRequest = {
            north: 45.0,
            south: 25.0,
            west: -80.0,
            east: -60.0,
            resolution: 20,
        };

        const predictions = await this.predictHabitat(request);
        return predictions.filter(p => p.probability > threshold);
    }

    private linspace(start: number, stop: number, num: number): number[] {
        const step = (stop - start) / (num - 1);
        return Array.from({ length: num }, (_, i) => start + step * i);
    }
}