import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: any) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug: slug },
      include: { user: true },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
