import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { RegisterDatasetDto } from './dto/register-dataset.dto';
import { ProcessResultDto } from './dto/process-result.dto';

@Injectable()
export class IngestionService {
    constructor(private prisma: PrismaService) { }

    async registerDataset(dto: RegisterDatasetDto) {
        const dataset = await this.prisma.dataset.create({
            data: {
                source: dto.source,
                type: dto.type,
                fileUrl: dto.fileUrl,
            },
        });

        await this.prisma.ingestionJob.create({
            data: { datasetId: dataset.id },
        });

        return dataset;
    }

    async listDatasets() {
        return this.prisma.dataset.findMany({ orderBy: { createdAt: 'desc' } });
    }

    async saveProcessResult(dto: ProcessResultDto) {
        const dataset = await this.prisma.dataset.findUnique({
            where: { id: dto.datasetId },
        });
        if (!dataset) throw new NotFoundException('Dataset not found');

        await this.prisma.observation.createMany({
            data: dto.observations.map(o => ({
                datasetId: dto.datasetId,
                lat: o.lat,
                lon: o.lon,
                chlorophyll: o.chlorophyll,
                sst: o.sst,
                eddyStrength: o.eddyStrength,
                timestamp: new Date(o.timestamp),
            })),
        });

        await this.prisma.dataset.update({
            where: { id: dto.datasetId },
            data: { status: 'COMPLETED' },
        });

        return { message: 'Processed data saved successfully' };
    }
}
