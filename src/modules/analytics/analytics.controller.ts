import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
    constructor(private analyticsService: AnalyticsService) { }

    // 🔥 Hotspot GeoJSON
    @Get('hotspots')
    async getHotspots() {
        return await this.analyticsService.generateHotspots();
    }

    // 📊 Seasonal stats
    @Get('seasonal-stats')
    async getStats(@Query('season') season: string) {
        return await this.analyticsService.getSeasonalStats(season);
    }
}
