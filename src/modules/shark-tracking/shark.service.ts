import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { QuerySharksDto } from './dto/query-sharks.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SharkService {
    constructor(private prisma: PrismaService) { }

    async registerShark(dto: CreateTagDto) {
        return this.prisma.shark.create({ data: dto });
    }

    async addTrackingData(tagId: string, data: any[]) {
        const shark = await this.prisma.shark.findUnique({ where: { tagId } });
        if (!shark) throw new NotFoundException('Shark not found');

        return this.prisma.trackingData.createMany({
            data: data.map(d => ({
                sharkId: shark.id,
                lat: d.lat,
                lon: d.lon,
                timestamp: new Date(d.timestamp),
                depth: d.depth,
                temperature: d.temperature,
                chlorophyll: d.chlorophyll,
                sst: d.sst,
            })),
        });
    }

    async querySharks(query: QuerySharksDto) {
        return this.prisma.shark.findMany({
            where: {
                species: query.species,
                trackingData: {
                    some: {
                        timestamp: {
                            gte: query.from ? new Date(query.from) : undefined,
                            lte: query.to ? new Date(query.to) : undefined,
                        },
                    },
                },
            },
            include: { trackingData: true },
        });
    }

    async getSharkTrack(tagId: string) {
        const shark = await this.prisma.shark.findUnique({
            where: { tagId },
            include: { trackingData: true },
        });
        if (!shark) throw new NotFoundException('Shark not found');
        return shark;
    }
}
