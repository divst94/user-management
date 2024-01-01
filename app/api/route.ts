import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, res:NextResponse) {
    try {
        const reqBody = await request.json();
        const { name, email, password } = reqBody;
        console.log(reqBody);

        return NextResponse.json({
            message: "user created successfully",
            success : true,
            reqBody
        },
            { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 })

    }
}