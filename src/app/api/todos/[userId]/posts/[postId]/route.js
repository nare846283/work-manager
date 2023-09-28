import { NextResponse } from "next/server";


export function GET(request, {params}){
    const { userId, postId } = params;
    console.log("usesr id", userId);
    console.log("posts id ", postId);

    return NextResponse.json(params)
}