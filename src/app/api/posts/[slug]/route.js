import prisma from "@/utils/prismaConnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    try {
        const { slug } = params;

        const post = await prisma.post.update({
            where: { ...(slug && { slug }) },
            data: {views: { increment: 1 }},
            include: {
                user: true,
            },
        });

        // const post = await prisma.post.findUnique({
        //     where: { ...(slug && { slug }) },
        //     include: {
        //         user: true,
        //     },
        // });
        
        // const post = await prisma.post.findUnique({
        //     where: { slug }
        // });

        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(error, { status: 404 });
    }
};
