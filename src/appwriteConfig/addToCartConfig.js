import conf from "../config/config";
import { Client,ID,Databases,Query } from "appwrite";

class Service{
    client=new Client()
    Databases
    constructor(){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteProjectId);
        this.Databases=new Databases(this.client)
    }
    async add_item({title,description,price,rating,imageUrl,quantity,userId}){
        
        try {
            return await this.Databases.createDocument(conf.appwriteDatabaseId,conf.appwriteAddToCartCollectionId,ID.unique(),
                { 
                    title,
                    description,
                    price,
                    rating,
                    imageUrl,
                    quantity,
                    userId,
                }
            )
        } catch (error) {
            throw error 
        }

    }
    async update_item(item_id,{title,description,price,rating,imageId,quantity,userId}){
        try {
            return await this.Databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteAddToCartCollectionId,item_id,{
                title,
                description,
                price,
                rating,
                imageId,
                quantity,
                userId
            })
        } catch (error) {
            throw error
        }
    }
    async detele_item(item_id){
        try {
            await this.Databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteAddToCartCollectionId,item_id)
            return true
        } catch (error) {
            console.log("Appwrite service :: detelePost :: error" ,error)
        }
        return false
    }
    async get_item(item_id){
        try {
            return this.Databases.getDocument(conf.appwriteDatabaseId,conf.appwriteAddToCartCollectionId,item_id)
        } catch (error) {
            console.log("Appwrite service :: getPost :: error" ,error)
        }
        return false
    }
    async get_items(user_id){
      const Queries=[Query.equal('userId',user_id)]
      try {
        return await this.Databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteAddToCartCollectionId,Queries); 
      } catch (error) {
        console.log("Appwrite service :: getPosts :: error" ,error)
      }
      return false
    }
}

const service=new Service()
export default service