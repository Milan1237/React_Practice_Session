import { useId } from "react";
import React from "react";

function Select({
    options,
    label, 
    className,
    ...props
} , ref) {

    const id = useId();

    return (  
        <div className="w-full">
            <label htmlFor={id}>{label && label}</label>
            <select id={id}
             {...props}
             className={`${className}`}
              ref={ref}
            >
                {
                    options?.map((option)=>
                        <option value={option} key={option}>{option}</option>
                    )
                }
            </select>
        </div>
    );
}

export default  React.forwardRef(Select);