import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ApiKeysModule } from './modules/api-keys/api-keys.module';
import { SharkHabitatModule } from './modules/shark-habitat/shark-habitat.module';
import { MlModule } from './ml/ml.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        UsersModule,
        AuthModule,
        ApiKeysModule,
        SharkHabitatModule,
        MlModule,
    ],
})
export class AppModule { }
