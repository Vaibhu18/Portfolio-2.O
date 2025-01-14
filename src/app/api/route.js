import { NextResponse } from "next/server";
import userModel from "@/userSchema";
import { dbConnection } from "@/lib/dbConfig";


export const POST = async (request) => {
    await dbConnection();
    const data = await request.json();

    const user = await new userModel(data).save()
    console.log(user);

    return NextResponse.json(data);
}