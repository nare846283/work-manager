import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";


connectDb();


export async function GET(request){
 let users = [];

try {
    users = await User.find().select("-password");
} catch (error) {
    console.log(error);
    return NextResponse.json({
        message: "failed to get users",
        success: false,
    });
}

 return NextResponse.json(users);
}

export async function POST(request) {

    // fetch user detail from request

    const {name,email,password,about,profileURL} = await request.json();

    // create user object with user model

   const user = new User({name,email,password,about,profileURL});

  try {
    // save the object to database
    const createdUser = await user.save();

    const response = NextResponse.json(user,{
    status: 201,
  });

  return response;

  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message: "failed to create user !!"
    });
  }

    // const body = request.body;
    // console.log(body);
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);

    

    // return NextResponse.json({
    //     "message": "posting user data",
    // });
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