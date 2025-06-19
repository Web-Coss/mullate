import { prisma } from "src/libs/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    const { userId, password } = await req.json();

    const user = await prisma.user.findUnique({
        where: { userId },
    });

    if (!user) {
        return NextResponse.json({ message: "존재하지 않는 아이디입니다." }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return NextResponse.json({ message: "비밀번호가 틀렸습니다." }, { status: 401 });
    }

    const accessToken = jwt.sign(
        { id: user.id, userId: user.userId },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET!,
        { expiresIn: "7d" }
    );

    return NextResponse.json(
        {
            message: "로그인 성공",
            accessToken,
            refreshToken,
        },
        { status: 200 }
    );
}