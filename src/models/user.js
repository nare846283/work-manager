import mongoose, { Schema } from "mongoose";

const UserSachema = new Schema({
    name: String,
    email: {
        type: String,
        unique:true,
        required: true,
    },
    password: {
        type: String,
        require: [true, "Password Required !!"],
    },
    about: String,
    profileURL: String,
});

export const User = mongoose.models.users || mongoose.model("users", UserSachema);