import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('1234', 10);

    await prisma.user.create({
        data: {
            userId: 'test',
            password: hashedPassword,
            name: '홍길동',
        },
    });

    console.log('DB에 추가 완료');
}

main()
    .catch((e) => {
        console.error('에러 발생:', e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });