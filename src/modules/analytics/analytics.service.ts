import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
// import { subMonths } from 'date-fns';

@Injectable()
export class AnalyticsService {
    constructor(private prisma: PrismaService) { }

    async generateHotspots() {
        const last30Days = subMonths(new Date(), 1);

        // উদাহরণ: গত ৩০ দিনের মধ্যে কোন অঞ্চলগুলোতে বেশি shark দেখা গেছে
        const hotspots = await this.prisma.sharkTracking.groupBy({
            by: ['latitude', 'longitude'],
            where: { timestamp: { gte: last30Days } },
            _count: { id: true },
            _avg: { temperature: true, chlorophyll: true },
        });

        const data = hotspots.map((h: { latitude: number; longitude: number; _count: { id: any; }; _avg: { temperature: any; chlorophyll: any; }; }) => ({
            region: `Grid-${h.latitude.toFixed(2)}-${h.longitude.toFixed(2)}`,
            latitude: h.latitude,
            longitude: h.longitude,
            count: h._count.id,
            avgTemp: h._avg.temperature,
            avgChl: h._avg.chlorophyll,
            startTime: last30Days,
            endTime: new Date(),
        }));

        await this.prisma.sharkHotspot.createMany({ data });
        return data;
    }

    async getSeasonalStats(season: string) {
        return this.prisma.sharkSeasonalStats.findFirst({ where: { season } });
    }
}
function subMonths(arg0: Date, arg1: number) {
    throw new Error('Function not implemented.');
}

