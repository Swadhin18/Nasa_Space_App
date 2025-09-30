import { Controller, Post, UseGuards, Request, Get, Param } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api-keys')
export class ApiKeysController {
    constructor(private keysService: ApiKeysService) { }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Request() req: any) {
        const rec = await this.keysService.createKey(req.user.id);
        return { key: rec.key, createdAt: rec.createdAt, id: rec.id };
    }

    @UseGuards(JwtAuthGuard)
    @Post('revoke/:id')
    async revoke(@Param('id') id: string) {
        const rec = await this.keysService.revokeKey(Number(id));
        return { success: true };
    }

    @UseGuards(JwtAuthGuard)
    @Get('my')
    async my(@Request() req: any) {
        return this.keysService.listUserKeys(req.user.id);
    }
}
