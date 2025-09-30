import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as crypto from 'crypto';

@Injectable()
export class ApiKeysService {
    constructor(private prisma: PrismaService) { }

    async createKey(userId: number) {
        const key = crypto.randomBytes(32).toString('hex');
        const rec = await this.prisma.apiKey.create({
            data: { key, userId },
        });
        return rec;
    }

    async revokeKey(keyId: number) {
        return this.prisma.apiKey.update({ where: { id: keyId }, data: { revoked: true } });
    }

    async validateKey(key: string) {
        const rec = await this.prisma.apiKey.findUnique({ where: { key }, include: { user: true } });
        if (!rec || rec.revoked) return null;
        return rec.user;
    }

    async listUserKeys(userId: number) {
        return this.prisma.apiKey.findMany({ where: { userId } });
    }
}
