import mongoose from "mongoose";
import type { User } from "./userTypes.js";

const usetrSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    bio: { type: String },
    skillsTeach: { type: [String] },
    skillsLearn: { type: [String] },
    refreshToken: { type: String },
}, { timestamps: true });

export default mongoose.model<User>("User", usetrSchema);