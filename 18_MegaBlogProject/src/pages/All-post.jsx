import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../Components/index";
import Service from '../appwrite/config'
function Allposts() {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        Service.getPosts().then((posts)=>{
            posts ? setPosts(posts.documents) : null;
        })

       
    }, []);
    return (
        <div className="py-8">
            <Container>

                <div className="flex flex-wrap">
                    {
                        posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                {console.log(post)};
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>

            </Container>
        </div>
    );
}

export default Allposts;