import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const email = "im.mou935@gmail.com";

  const user = await prisma.user.update({
    where: { email },
    data: {
      role: "ADMIN",
    },
  });

  return NextResponse.json({
    success: true,
    user,
  });
}
