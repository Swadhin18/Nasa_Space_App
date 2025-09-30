import { Injectable, HttpServer } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';


@Injectable()
export class MLService {
    constructor(
        private prisma: PrismaService,
        private http: HttpServer
    ) { }

    // 🔍 Model metadata get
    async getActiveModel(name: string) {
        return await this.prisma.mLModel.findFirst({
            where: { name, status: 'active' },
        });
    }

    // 🤖 Prediction call
    async runPrediction(modelName: string, payload: any) {
        const model = await this.getActiveModel(modelName);
        if (!model) throw new Error('Model not found or inactive');

        const { data } = await this.http.post(model.endpointUrl, payload);
        return data;
    }

    // 🔄 Retrain trigger
    async triggerRetrain(modelName: string) {
        const model = await this.getActiveModel(modelName);
        if (!model) throw new Error('Model not found or inactive');

        const { data } = await this.http.post(`${model.endpointUrl}/retrain`);

        return data;
    }
}
