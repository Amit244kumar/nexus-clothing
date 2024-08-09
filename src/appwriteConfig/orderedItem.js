import conf from "../config/config";
import { Client,Databases,Query ,ID} from "appwrite";

class Order{
    client= new Client()
    Databases
    constructor(){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteProjectId)
        this.Databases=new Databases(this.client)
    }
    async add_order({title,image,price,rating,order_id,date,user_id}){
        try {
            return await this.Databases.createDocument(conf.appwriteDatabaseId,conf.appwriteOrderedItemsCollectionId,ID.unique(),
            {
                title,
                image,
                price,
                rating,
                date,
                order_id,
                user_id
            })

        } catch (error) {
            throw error
        }
    }    
    async get_orders(user_id)
    {
        const Queries=[Query.equal('user_id',user_id)]
        try {
            
            return await this.Databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteOrderedItemsCollectionId,Queries)
             
        } catch (error) {
            throw error
        }
    }
}

const orders=new Order()
export default orders