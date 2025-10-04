// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
//     app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }));
//     await app.listen(process.env.PORT || 3000);
//     console.log(`Server started on port ${process.env.PORT || 3000}`);
// }
// bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // ✅ Enable CORS for React frontend
    app.enableCors({
        origin: 'http://localhost:5173', // তোমার React app চলার port
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });

    // ✅ Enable global validation pipe
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }));

    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log(`🚀 Server started on port ${PORT}`);
}
bootstrap();

