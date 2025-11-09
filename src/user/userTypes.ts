export interface User {
    _id: string;
    fullName: string;
    email: string;
    password: string;
    profileImage?: string;
    bio?: string;
    skillsTeach?: string[];
    skillsLearn?: string[];
    refreshToken: string;
}