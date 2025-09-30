import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { IngestionService } from './ingestion.service';

@Injectable()
export class IngestionCron {
    private logger = new Logger(IngestionCron.name);
    constructor(private ingestion: IngestionService) { }

    @Cron('0 0 * * *') // daily
    async discoverNewData() {
        this.logger.log('🔭 Checking for new NASA data...');
        const { data } = await axios.get('https://nasa-api.fake/data/latest');
        if (data?.fileUrl) {
            await this.ingestion.registerDataset({
                source: 'PACE',
                type: 'chlorophyll',
                fileUrl: data.fileUrl,
            });
            this.logger.log(`✅ New dataset registered: ${data.fileUrl}`);
        }
    }
}
