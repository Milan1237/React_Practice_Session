import React, { useEffect, useState } from "react";
import { Container , PostForm } from "../Components/index";
import { useParams , useNavigate} from "react-router-dom";
import Service from "../appwrite/config";

function EditPost() {
    const [post , setPost] = useState(null);
    const navigate = useNavigate();
    const {slug} = useParams();
    

    useEffect(()=>{
        if(slug){
            Service.getPost(slug).then((post)=>{
                setPost(post);
            })
        }
        else{
            navigate("/");
        }
    },[slug , navigate]);

    
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
    
    
}

export default EditPost;