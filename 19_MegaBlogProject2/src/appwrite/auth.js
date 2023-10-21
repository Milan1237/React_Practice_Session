import configData from '../conf/conf'
import { Client, Account, ID } from "appwrite"
import { useNavigate } from "react-router-dom"

export default class Service {
    client;
    account;

    constructor() {
        this.client = new Client()
            .setEndpoint(configData.appwriteUrl)
            .setProject(String(configData.projectId));

        this.account = new Account(this.client);
    }

    createAccount = async ({ name, email, password }) => {
        try {
            const newUser = await this.account.create(Date.now(), email, password, name);
            if (newUser) {
                return await this.login({ email, password });
            }
            else {
                console.log("Invalid login");
            }
        } catch (error) {
            console.log("got an error while creating a account", error);
        }
        return null
    }

    login = async ({ email, password }) => {
        try {
            const user = await this.account.createEmailSession(email, password);
            if (user) {
                return true;
            }

        } catch (error) {
            console.log("got an error while loggin in", error);
        }
        return null;

    }

    getCurrentAccount = async () => {
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("got an error while finding the user", error);
        }
        return null ;
    }

    //write the logout logic then move ahead
}