import { forwardRef } from "react"
import React  from 'react'

const Input =forwardRef(({
    classname="",
    type="text",
    placeHolder="",
    onchange=undefined,
    ...props
},ref)=>{

   return (
    <div className="w-full p-4">
        <input type={type}
          ref={ref}
          placeholder={placeHolder}
         className={`${classname} text-gray-950` }
         required
         onChange={onchange}
         {...props} />
    </div>
   ) 
})

export default Input