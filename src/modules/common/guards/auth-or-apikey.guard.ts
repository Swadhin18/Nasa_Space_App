import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AuthOrApiKeyGuard implements CanActivate {
    constructor(private jwtService: JwtService, private prisma: PrismaService) { }

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        // 1) API Key present?
        const apiKey = req.headers['x-api-key'] || req.query['api_key'];
        if (apiKey) {
            const rec = await this.prisma.apiKey.findUnique({ where: { key: String(apiKey) }, include: { user: true } });
            if (!rec || rec.revoked) return false;
            req.user = { id: rec.user.id, email: rec.user.email, role: rec.user.role, apiKey: true };
            return true;
        }
        // 2) JWT present?
        const auth = req.headers['authorization'];
        if (!auth) return false;
        const token = auth.split(' ')[1];
        try {
            const payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            const user = await this.prisma.user.findUnique({ where: { id: Number(payload.sub) } });
            if (!user) return false;
            req.user = { id: user.id, email: user.email, role: user.role };
            return true;
        } catch (e) {
            return false;
        }
    }
}
