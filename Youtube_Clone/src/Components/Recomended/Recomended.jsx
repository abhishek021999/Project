import React, { useState,useEffect } from 'react'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY, Value_converter } from '../Data'
import { Link } from 'react-router-dom'
function Recomended({categoryId}) {
    const [apidata,setapidata]=useState([])
    async function fetchdata(){
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`)
        const final=await res.json()
        setapidata(final.items)
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className='Recomended basis-[30%]'>
        {apidata.map((ele,index)=>{
            return(
                <Link to={`/video/${ele.snippet.categoryId}/${ele.id}`} key={index} className='video-list flex justify-between mb-[8px]'>
                <img className='basis-[49%] w-[50%]' src={ele.snippet.thumbnails.medium.url} alt="" />
                <div className='video-info basis-[49%]'>
                    <h4 className='text-[13px] mb-[5px]'>{ele.snippet.title}</h4>
                    <p className='title'>{ele.snippet.channelTitle}</p>
                    <p>{Value_converter(ele.statistics.viewCount) } views</p>
                </div>
            </Link>
            )
        })}
       
        
    </div>
  )
}

export default Recomended