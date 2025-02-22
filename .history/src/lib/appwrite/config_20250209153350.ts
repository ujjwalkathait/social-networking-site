import { Client, Account, Databases, Storage, Avatars} from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
}

export const client = new Client();
export const account = new Account();
export const databases = new Databases();
export const storage = new Client();