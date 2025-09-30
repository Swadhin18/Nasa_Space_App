import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SharkService } from './shark.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { QuerySharksDto } from './dto/query-sharks.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiKeyGuard } from '../api-keys/guards/api-key.guard';

@Controller('api/v1/sharks')
export class SharkController {
    constructor(private readonly sharkService: SharkService) { }

    @UseGuards(JwtAuthGuard)
    @Post('register')
    registerShark(@Body() dto: CreateTagDto) {
        return this.sharkService.registerShark(dto);
    }

    @UseGuards(ApiKeyGuard) // ML / IoT device push data
    @Post(':tagId/tracking')
    addTracking(@Param('tagId') tagId: string, @Body() body: any[]) {
        return this.sharkService.addTrackingData(tagId, body);
    }

    @Get()
    querySharks(@Query() query: QuerySharksDto) {
        return this.sharkService.querySharks(query);
    }

    @Get(':tagId')
    getTrack(@Param('tagId') tagId: string) {
        return this.sharkService.getSharkTrack(tagId);
    }
}
