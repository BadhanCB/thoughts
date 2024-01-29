import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/prismaConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const page = searchParams.get("page");
        const cat = searchParams.get("cat");
        const postPerPage = 4;
        const skip = postPerPage * (page - 1);

        const query = {
            take: postPerPage,
            skip: skip,
            where: {
                ...(cat !== 'undefined' && { catSlug: cat }),
            },
        };

        // console.log(query);

        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where: query.where}),
        ]);

        // posts = await prisma.post.findMany({
        //     take: postPerPage,
        //     skip: skip,
        // });

        return new NextResponse(JSON.stringify({ posts, count }), {
            status: 200,
        });
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

        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email },
        });

        return new NextResponse(JSON.stringify(post, { status: 201 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(
            { message: "something went wrong" },
            { status: 500 }
        );
    }
};
