// run with: npx ts-node prisma/seed-admin.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@spaceapps.local';
    const pw = 'AdminPass123!';
    const salt = Number(process.env.BCRYPT_SALT || 10);
    const hash = await bcrypt.hash(pw, salt);

    await prisma.user.upsert({
        where: { email },
        update: { password: hash, role: 'ADMIN' },
        create: { email, password: hash, role: 'ADMIN' },
    });

    console.log('Admin seeded:', email);
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
