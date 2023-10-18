const config = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_DATABASE_ID),
    appwriteCollectionId: String(process.env.NEXT_PUBLIC_COLLECTION_ID ),
};

export default config;