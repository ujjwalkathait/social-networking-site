import { INewUser } from "@/types";
import { Avatars, ID } from 'appwrite';
import { account, avatars } from "./config";


export async function createUSerAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        );

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user)

        return newAccount;
    } catch (error) {
        console.log(error);
        return error;
    }
}