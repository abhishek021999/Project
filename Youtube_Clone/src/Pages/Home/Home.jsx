import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import { useState } from 'react'
export default function Home({sidebar}) {
  const [category,setcategory]=useState(0)
  return (
    <div className='flex '>
    <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
    <div className={` pb-[20px]${sidebar?"":'px-1'} mt-2 px-5`}>
      <Feed category={category}/>
    </div>
    </div>
  )
}
