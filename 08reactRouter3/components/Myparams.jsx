import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



export default function Myparams(){
    let {userId} = useParams();
    return(
        <>
        <div className=" bg-gray-700 flex w-full justify-center ">
            <h2 className=" text-white my-5 mx-10">users</h2>
            <h2 className=" text-white my-5">{userId}</h2>
        </div>
        </>
    )

}
