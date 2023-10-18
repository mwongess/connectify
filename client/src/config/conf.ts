const env = import.meta.env

const config = {
    appwriteUrl: String(env.VITE_APPWRITE_URL),
    appwriteProjectId: String(env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(env.VITE_DATABASE_ID),
    appwriteCollectionId: String(env.VITE_PUBLIC_COLLECTION_ID ),
};

export default config;