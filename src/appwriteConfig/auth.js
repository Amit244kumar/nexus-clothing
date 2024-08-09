import { Client,Account,ID } from "appwrite";
import conf from "../config/config";

export class AuthService{
    Client= new Client
    account;
    constructor(){
        this.Client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteProjectId)
        this.account= new Account(this.Client)
    }
    async createAccount({email, password, name})
    {
        try {
            const userAccount= await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                return this.login({email,password})
            }
            else{
                return userAccount
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async login({email, password}) {
    
        try {
          return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser()
    {
        try {
             return await this.account.get()  
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error); 
        }
        return null
    }
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }   

}

const authService=new AuthService()

export default authService