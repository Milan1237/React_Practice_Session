import { Client , Databases , Storage , ID, Query } from "appwrite";
import configData from "../conf/conf"
class config{
    client;
    database;
    bucket ;
    constructor(){
        this.client = new Client()
        .setEndpoint(configData.appwriteUrl)
        .setProject(configData.projectId);

        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    createPost = async ({UserId , Content , FeaturedImage , Title ,Status , Slug})=>{
        try {
            return await this.database.createDocument(configData.dataBaseId , configData.collectionId , Slug , {
                UserId,
                Content , 
                Title ,
                FeaturedImage,
                Status
            })  ; 
        } catch (error) {
            console.log("find an error while creating a post" , error);
        }
        return null ;
    }

    updatePost = async ({ Content , FeaturedImage , Title ,Status , Slug})=>{
        try {
            return await this.database.updateDocument(configData.dataBaseId , configData.collectionId , Slug , {
                Title , 
                Content , 
                FeaturedImage ,
                Status ,
            })
            
        } catch (error) {
            console.log("got an error while updating the post " , error);
        }
    }

    deletePost = async ({Slug})=>{
        try {
            await this.database.deleteDocument(configData.dataBaseId, configData.collectionId , Slug);
            return true ;
            
        } catch (error) {
            console.log("got an error while deleting the post" , error);
        }
        return null ;
    }

    getPost = async ({Slug})=>{
        try {
            return await this.database.getDocument(configData.dataBaseId , configData.collectionId , Slug) ;
        } catch (error) {
            console.log("got an error getting the post " , error);
        }
        return null ;
    }

    getPosts = async (queries = [Query.equal('Status' , 'active')])=>{
        try {
            return await this.database.listDocuments(configData.dataBaseId , configData.collectionId , queries);
        } catch (error) {
            console.log("got error while getting all the post");
        }
        return null ;
    }

    // all the function related to files

    uploadFile = async (file)=>{
        try {
           return await this.bucket.createFile(configData.bucketId, ID.unique , file);
            
        } catch (error) {
            console.log("got an error while uploading the file  " , error);
            return false ;
        }
    }

    deleteFile = async (fileId)=>{
        try {
            await this.bucket.deleteFile(configData.bucketId , fileId);
            return true ;
            
        } catch (error) {
            console.log('got an error while deleting the file')
            return false ;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.bucketId, fileId);
    }
    
}