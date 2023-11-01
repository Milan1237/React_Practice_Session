import React , {useCallback , useEffect} from "react";
import {set, useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import {Button , Input , RTE , Select} from "./index"
import  Service  from "../appwrite/config";
import { useSelector } from "react-redux";

function PostForm({post}) {
    const {register , control , handleSubmit , watch , setValue, getValues } = useForm({
        defaultValues:{
            Title :  post?.Title || "" , 
            slug: post?.slug || "" , 
            Content: post?.Content || "",
            status : post?.status || ""
         }
        
    })
  
    const navigate = useNavigate();
    const userData = useSelector(state => state.userData);

    async function submit(data){
        if(post){
            const file = data.image[0]? await Service.uploadFile(data.image[0]) : null ;
            if(file){
                await Service.deleteFile(post.featuredImage);
            }
            const dbPost = await Service.updatePost(post.$id , {...data , featuredImage: file ? file.$id : undefined});
            navigate(`/posts/${post.slug}`)
        }

        else{
            const file = data.image[0]? await Service.uploadFile(data.image[0]) : null ;
            if(file){
                const fileId = file.$id;
                data.featuredImage = fileId ;
            }
            const dbPost = await Service.createPost({...data , userId: userData.$id});
            navigate(`/posts/${data.slug}`)
        }

    }

    const slugTransform = useCallback((value)=>{
            if(value && typeof value === "string"){
                return value.trim()
                .toLowerCase()
                .replace(/ /g, "-");
            }
            return "";

    } , [])

    useEffect(()=>{
        const subscription = watch((value ,{name})=>{
            if(name === "Title"){
                setValue("slug" , slugTransform(value.Title), {shouldValidate:true});
            }
        }); 

        return ()=>{
            subscription.unsubscribe();
        }
    } , [watch , slugTransform , setValue])

    return ( 
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("Title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="Content" control={control} defaultValue={getValues("Content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={Service.getFilePreview(post.featuredImage)}
                            alt={post.Title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
     );
}

export default PostForm;