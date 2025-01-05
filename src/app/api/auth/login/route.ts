import { EncryptionService } from "@/services/encryption.service";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  try {
    var body = await req.json();
    const { email, password } = body;
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    });
    if (user && EncryptionService.encrypt(password) == user.password) {
      return NextResponse.json(
        { error: "Sucessfully Loggedin" },
        { status: 200 }
      );
    }
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
