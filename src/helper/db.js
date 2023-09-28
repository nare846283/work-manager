import { User } from "@/models/user";
import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work-manager",
        });

        console.log("db connected...");
        // console.log(connection);

        // const uuser = new User({
        //     name:"test name",
        //     email:"test@gmail.com",
        //     password:"testpassword",
        //     about:"this is testing"
        // });

        // await uuser.save();

        console.log("user is created");

    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    }
};

