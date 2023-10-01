import React from "react";
import { useLoaderData } from "react-router-dom";

export async function follower(){
    let a = await fetch(`https://api.github.com/users/hiteshchoudhary`);
    let b = await a.json();
    // console.log(b.followers);
    let follower = b.followers ;
    return follower ;
}

export default function Github(){
    let follower = useLoaderData();
    return(
        <>
        <div className=" bg-gray-700 flex w-full justify-center ">
            <h2 className=" text-white my-5 mx-10">Follower</h2>
            <h2 className=" text-white my-5">{follower}</h2>
        </div>
        </>
    )

}
