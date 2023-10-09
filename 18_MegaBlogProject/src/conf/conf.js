const conf ={
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),

    databseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    projectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    bucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID), 

    collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}
export default conf ;