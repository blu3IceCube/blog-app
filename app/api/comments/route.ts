import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

// get all comments
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

//create comments
export const POST = async (req: Request) => {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "Not authenticated!" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user?.email },
    });

    return NextResponse.json(comment, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
