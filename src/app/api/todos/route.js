import { NextResponse } from "next/server";

export function GET(request){
 const users = [
    {
        name:"durgesh tiwari",
        phone:"8462835255",
        course:"java"
    },
    {
        name:"Narendra ahirwar",
        phone:"8462835255",
        course:"nextjs"
    },
    {
        name:"Harsh tiwari",
        phone:"8462835255",
        course:"cpp"
    },
 ];

 return NextResponse.json(users);
}

export function POST(){

}

export function DELETE(request){
    console.log("deleted api called");
    return NextResponse.json({
        massage: "deleted !!",
        status:true,
    },
    { status: 201, statusText: "hey changed text" }
    );
}

export function PUT(){

}