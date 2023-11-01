import conf from '../conf/conf';
import { Client, Account, ID, } from "appwrite";

export  class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.projectId);

        this.account = new  Account(this.client)
    }

    async createAccount({name , password , email}){
        try {
           const newUser =  await this.account.create(ID.unique() , email , password , name);
           if(newUser){
            return await this.logIn({password , email});
           }
           else{
             console.log('got error in creating account')
           }
           //calling login 
        }
        catch (error) {
            console.error('got error in creating account' , error);
        }
    }

    async logIn({email , password}){
        try {
            return await this.account.createEmailSession(email,password);

        } 
        catch (error) {
            console.error('got error while log in ' , error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log('got an error in getCurrentUser', error);
        }

        return null ;
    }

    async logOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error('got error in logOut function' , error);
        }
    }
    

}

const authService = new AuthService
export default authService ;

