import React from 'react'

const Card = ({colorData}) => {
  return (
    <>
    
<div >
<a class="flex m-2 flex-col items-center bg-white border border-gray-200 
 max-w-xl hover:bg-gray-100 dark:border-black" 
 style={{ 
    boxShadow: "rgb(0, 0, 0, 0.24) 0px 3px 8px",
  }}
 >
<div
  style={{ backgroundColor: colorData.color, width: "100%", height:"150px" }}
></div>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{colorData.color}</h5>
        <p
        style={{ color: colorData.color, }}
        class="mb-3 font-normal text-left text-sm">{colorData.name.toUpperCase()}</p>
    </div>
</a>
</div>

    </>
  )
}

export default Card