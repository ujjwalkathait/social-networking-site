import { INewUser } from "@/types";
import { ID } from 'appwrite';
import { account } from "./config";


export async function createUSerAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        );

        if(!newAccount) 

        return newAccount;
    } catch (error) {
        console.log(error);
        return error;
    }
}