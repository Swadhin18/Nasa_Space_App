import { Module } from '@nestjs/common';
import { SharkController } from './shark.controller';
import { SharkService } from './shark.service';

@Module({
    controllers: [SharkController],
    providers: [SharkService],
    exports: [SharkService],
})
export class SharkModule { }
