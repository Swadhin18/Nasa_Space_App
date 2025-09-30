import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ApiKeysService } from '../api-keys.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    constructor(private keysService: ApiKeysService) { }

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const key = req.headers['x-api-key'] || req.query['api_key'];
        if (!key) return false;
        const user = await this.keysService.validateKey(String(key));
        if (!user) return false;
        req.user = { id: user.id, email: user.email, role: user.role, apiKey: true };
        return true;
    }
}
