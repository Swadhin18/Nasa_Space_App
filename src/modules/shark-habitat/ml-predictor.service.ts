// src/shark-habitat/ml-predictor.service.ts
import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';
import * as path from 'path';

@Injectable()
export class MlPredictorService {
    private readonly pythonScriptPath = path.join(process.cwd(), 'ml-predictor', 'predict.py');

    async predictHabitat(lat: number, lon: number): Promise<number> {
        const options = {
            mode: 'text' as const,
            pythonPath: 'python3',
            scriptPath: path.join(process.cwd(), 'ml-predictor'),
            args: [lat.toString(), lon.toString()],
            pythonOptions: ['-u'],
        };

        try {
            const results = await PythonShell.run('predict.py', options);
            return parseFloat(results[0]);
        } catch (error) {
            console.error('ML Prediction failed, using fallback:', error);
            return this.fallbackPrediction(lat, lon);
        }
    }

    private fallbackPrediction(lat: number, lon: number): number {
        // Your Colab logic as fallback
        const gulfStream = 0.8 * Math.exp(-Math.pow((lat - 35), 2) / 15) * (lon > -75 ? 1 : 0.3);
        const eddy1 = 0.7 * Math.exp(-(Math.pow((lon + 72), 2) + Math.pow((lat - 38), 2)) / 25);
        const eddy2 = 0.6 * Math.exp(-(Math.pow((lon + 68), 2) + Math.pow((lat - 32), 2)) / 20);

        const habitat = gulfStream + eddy1 + eddy2;
        return Math.max(0, Math.min(1, habitat));
    }
}