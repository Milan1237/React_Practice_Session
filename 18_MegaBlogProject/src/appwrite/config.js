import conf from '../conf/conf';
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

class Service {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.projectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.bucket);
    }

    async createPost({ title, content, slug, status, featuredImage , userId }) {
        try {
            return await this.databases.createDocument(conf.databseId, conf.collectionId, slug, {
                 title, 
                 content, 
                 status,
                 featuredImage,
                 userId 
                });
        } catch (error) {
            console.log('got error in creating a post ', error);
        }
    }

    async updatePost(slug,{ title, content,  status, featuredImage  }){
        try {
            return await this.databases.updateDocument(conf.databseId , conf.collectionId , slug , {
                title , 
                content , 
                featuredImage , 
                status , 
                
            })
            
        } catch (error) {
            console.log('error in updating the post ');
        }
    }

    async deletePost (slug){
        try {
            await this.databases.deleteDocument(conf.databseId , conf.collectionId , slug) ;
            return true ;
        } catch (error) {
            console.log('find an error in deleting the post' , error);
            return false ; 
        }
    }

    async getPost (slug){
        try {
            return await  this.databases.getDocument(conf.databseId , 
                conf.collectionId , 
                slug );
        } catch (error) {
            console.log('find an error finding the error');
        }
    }

    async getPosts ( queries = [Query.equal('status' , 'Active')]){
        try {

           return await this.databases.listDocuments(conf.databseId , conf.collectionId , queries);
            
        } catch (error) {
            console.log('got error finding the posts ' , error);
        }
    }

    //Services related to upload

    async uploadFile(file){
        try {
           return await this.bucket.createFile(conf.bucketId , ID.unique() ,file);
        } catch (error) {
            console.log('got error uploading the file' , error);
            return false ;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.bucketId , fileId);
            return true ;
        } catch (error) {
            console.log('got an error while deleting file' , fileId);
            return false ;
        }
    }

     getFilePreview(fileId){
        try {
             this.bucket.getFilePreview(conf.bucketId , fileId);
            return true ;
        } catch (error) {
            console.log('got an error while get file preview' , fileId);
            return false ;
        }
    }

}
const service = new Service();
export default service