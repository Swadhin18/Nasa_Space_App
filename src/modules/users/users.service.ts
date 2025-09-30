import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async createUser(email: string, password: string, role: string) {
        const existing = await this.prisma.user.findUnique({ where: { email } });
        if (existing) throw new ConflictException('Email already registered');
        const saltRounds = Number(process.env.BCRYPT_SALT || 10);
        const hashed = await bcrypt.hash(password, saltRounds);
        return this.prisma.user.create({
            data: { email, password: hashed, role: role || 'PUBLIC' },
            select: { id: true, email: true, role: true, createdAt: true }
        });
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async findById(id: number) {
        const u = await this.prisma.user.findUnique({ where: { id } });
        if (!u) throw new NotFoundException('User not found');
        return u;
    }
}
