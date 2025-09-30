import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../users/dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() dto: LoginDto) {
        const user = await this.authService.validateUser(dto.email, dto.password);
        if (!user) throw new Error('Invalid credentials');
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    me(@Request() req: any) {
        return req.user; // populated by JwtStrategy validate
    }
}
