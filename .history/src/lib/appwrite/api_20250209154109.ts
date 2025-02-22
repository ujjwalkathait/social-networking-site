import { INewUser } from "@/types";
import { iD }


export async function createUSerAccount(user: INewUser) {
    try {
        const newAccount = await account.create()
    } catch (error) {
        console.log(error);
        return error;
    }
}