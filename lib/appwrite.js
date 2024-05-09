import {Account, Avatars, Client, Databases, ID, Query, Storage} from 'react-native-appwrite';
import uuid from 'react-native-uuid';

export const appWriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.derrick.amelia',
    projectId: '6631e8560010b85d966b',
    databaseId: '6631eab10000b8e69e1a',
    userCollectionId: '6631eaec00231356f6a2',
    historyCollectionId: '6631eaff001f40840d70',
    storageId: '6631eb71002ac79d53ac'
};

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(appWriteConfig.endpoint) // Your AppWrite Endpoint
    .setProject(appWriteConfig.projectId) // Your project ID
    .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);


// Register user
export async function createUser(email, password ) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(email);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                avatar: avatarUrl,
            }
        );
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}

//Update user
export async function updateUser(docId, full_name, profile_image, phone_number, gender, dob ) {
    try {

        const response =  await databases.updateDocument(
            appWriteConfig.databaseId, // databaseId
            appWriteConfig.userCollectionId, // collectionId
            docId, // documentId
            {
                full_name,
                profile_image,
                phone_number,
                gender,
                dob},
        );

        if (!response) throw Error;

        return response;
    } catch (error) {
        throw new Error(error);
    }
}

// Sign In
export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;
    } catch (error) {
        throw new Error(error);
    }
}

// Get Current User
export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}


// Storing file
export async function storeFile(file){
    const fileId = `${uuid.v4()}`;
    const blob = {name: file.uri.split("/").pop(), type: file.type, size: file.fileSize, uri: file.uri}

    try{
        const response = storage.createFile(
            appWriteConfig.storageId,
            fileId,
            blob,
        );
        return response;
    } catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
}

// Sign Out
export async function signOut() {
    try {
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        throw new Error(error);
    }
}