import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY,Value_converter } from '../Data'
import moment from 'moment'
function Feed({category}) {
    const [data,setdata]=useState([])
    async function fetchdata(){
        const res=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        const store=await fetch(res)
        const finalres=await store.json()
        console.log(finalres.items)
        setdata(finalres.items)
    }
    useEffect(()=>{
            fetchdata()
    },[category])
  return (
    <div className='  feed grid grid-cols-4 gap-x-3 gap-y-4  '>
        {data.map((ele,index)=>{
            return(
                <Link to={`video/${ele.snippet.categoryId}/${ele.id}`} className='card'>
                <img className='rounded-[5px] w-[100%]' src={ele.snippet.thumbnails.medium.url} alt="" />
                <h3 className='text-[16px] font-medium text-[#000] m-[5px]'>{ele.snippet.title}</h3>
                <h4 className='text-[14px] font-medium text-[#555] mt-[6px] mb-[6px]'>{ele.snippet.channelTitle}</h4>
                <p className='text-[14px]'>{Value_converter(ele.statistics.viewCount)} views &bull; {moment(ele.snippet.publishedAt).fromNow()}</p>
               </Link>
           
            ) 
        })}
       
    </div>
    
  )
}

export default Feed