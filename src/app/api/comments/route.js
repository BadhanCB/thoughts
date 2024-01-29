import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/prismaConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const postSlug = searchParams.get("postSlug");

        const comments = await prisma.comment.findMany({
            where: { ...(postSlug && { postSlug }) },
            include: {
                user: true,
            },
        });

        return new NextResponse(JSON.stringify(comments, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(
            { message: "something went wrong" },
            { status: 500 }
        );
    }
};

export const POST = async (req) => {
    try {
        const session = await getAuthSession();

        if (!session) {
            return new NextResponse(
                { message: "Not Authenticated" },
                { status: 401 }
            );
        }

        const body = await req.json();
        // console.log(body);
        // console.log(session.user.email);

        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email },
        });

        return new NextResponse(comment, { status: 201 });
        // return new NextResponse({message: 'Comment Posted'}, {status: 201});
    } catch (error) {
        console.log(error);
        return new NextResponse(
            { message: "something went wrong" },
            { status: 500 }
        );
    }
};
