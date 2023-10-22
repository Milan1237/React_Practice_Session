# Mega Blog Project

## Introduction
    In this project I have tried to build a function rich project. This blog post application can create a blog and and let user update the blog. I have used appwrite as **BAAS** to save and update the content.


## Table of Content
- [Installation](#Installation)

- [Back End](#BackEnd)




## Installation
- [react-hook-form](https://react-hook-form.com/get-started)

- [appwrite](https://appwrite.io/docs/tooling/command-line/installation)

- [tinymce@latest](https://www.tiny.cloud/docs/tinymce/6/upgrading/)

- [react-router-dom](https://reactrouter.com/en/main/start/tutorial)

- [@reduxjs/toolkit & react-redux](https://redux-toolkit.js.org/introduction/getting-started)

- [tailwindcss](https://tailwindcss.com/docs/guides/vite)

- [html-react-parser](https://www.npmjs.com/package/html-react-parser)

## BackEnd 

**Introduction** : 
We have used _appwrite_ as a backend server.

**Naming Convention**:
     All the name attributes at the  backend servers starts with capital word then small word. Suppose we are using 'FeaturedImage': as we can see the there are two words combination. So the first word of the every word will be Capital . In our case 'F' and 'I' will be capital

**Database Attributes :**
Title: title of the blog

Content: content of the blog

UserId: the id of the user who has written the blog

Status: wheather the user wants to show his/her blog to make public.

FeaturedImage: the main picture of the blog

**Database Details / Database essentials :**
You can access all the environment variable from configData object from `./src/conf/conf.js`;
the configData comprised of these properties:
```javascript
    appwriteUrl: 
    dataBaseId: 
    collectionId:
    bucketId:
```

**Authentication Database Service :**

We have design four function related to Authentication Service. And the functions are:
1. createAccount({name , email , password}); takes a object which includes 'name' , 'email' , 'password' and returns the user after loggin in the new created user.

2. login({email , password}) and returns the user from the database if correct inputs are given. And it will return a null if the the login process is wrong.

3. logout() this function logs out the current user from the currently logged in device . 

4. getCurrentUser() this function returns the currently logged in user in the present device. If no user is present then it returns null 






