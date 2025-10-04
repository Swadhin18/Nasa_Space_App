// src/shark-habitat/shark-habitat.module.ts
import { Module } from '@nestjs/common';
import { SharkHabitatService } from './shark-habitat.service';
import { SharkHabitatController } from './shark-habitat.controller';
import { MlPredictorService } from './ml-predictor.service';

@Module({
    controllers: [SharkHabitatController],
    providers: [SharkHabitatService, MlPredictorService],
    exports: [SharkHabitatService],
})
export class SharkHabitatModule { }