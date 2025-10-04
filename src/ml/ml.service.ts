import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import * as path from 'path';

@Injectable()
export class MlService {
    async getVisualizationData(): Promise<any> {
        return new Promise((resolve, reject) => {
            const scriptPath = path.join(__dirname, 'python', 'data_visualization.py');

            const py = spawn('python', [scriptPath]);

            let dataString = '';

            py.stdout.on('data', (data) => {
                dataString += data.toString();
            });

            py.stderr.on('data', (data) => {
                console.error('Python error:', data.toString());
            });

            py.on('close', (code) => {
                try {
                    const result = JSON.parse(dataString);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        });
    }
}
