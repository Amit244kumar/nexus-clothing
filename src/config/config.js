const conf={
    rezorpayIDKey:String(import.meta.env.VITE_REZORPAY_ID_KEY),
    rezorpaySecretKey:String(import.meta.env.VITE_REZORPAY_SECRET_KEY),
    appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteAddToCartCollectionId:String(import.meta.env.VITE_APPWRITE_ADD_TO_CART_COLLECTION_ID),
    appwriteOrderedItemsCollectionId:String(import.meta.env.VITE_APPWRITE_ORDERED_ITEMS_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf