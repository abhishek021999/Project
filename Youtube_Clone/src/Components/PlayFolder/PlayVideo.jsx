import React, { useEffect } from 'react'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { useState } from 'react'
import { API_KEY, Value_converter } from '../Data'
import moment from 'moment';
import { useParams } from 'react-router-dom'
function PlayVideo() {
    const [apidata,setapidata]=useState(null)
    const [chenneldata,setchanneldata]=useState(null)
    const [commentdata,setcommentdata]=useState([])
    const {videoId}=useParams()
    async function fetchdata(){
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
        const final=await res.json()
        setapidata(final.items[0])
    }
    async function fetchchenneldata(){
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`)
        const final=await res.json()
        setchanneldata(final.items[0])
        const res1=await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`)
        const final1=await res1.json()
        setcommentdata(final1.items)
    }
    useEffect(()=>{
        fetchdata()
    },[videoId])
    useEffect(()=>{
        fetchchenneldata()
    },[apidata])
  return (
    <div className='play-video basis-[69%]'>
        {/* <video className='w-[100%]' src={video1} controls autoPlay muted></video> */}
        <iframe className='w-[100%] h-[37vw]'  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3 className='mt-[10px] font-medium text-[22px]'>{apidata?apidata.snippet.title:'Title here'}</h3>
        <div className='video-info flex items-center justify-between flex-wrap  text-[14px] text-[#5a5a5a]'>
            <p>{apidata?Value_converter(apidata.statistics.viewCount):'16k'} views &bull;</p>
            <div className='flex'>
                <span className='inline-flex items-center ml-[15px]  '><img className='w-[20px] mx-[8px]' src={like} alt="" />{apidata?Value_converter(apidata.statistics.likeCount):0}</span>
                <span className='inline-flex items-center ml-[15px]  '><img className='w-[20px] mx-[8px]' src={dislike} alt="" />{apidata?Value_converter(apidata.statistics.dislikeCount):0}</span>
                <span className='inline-flex items-center ml-[15px]  '><img className='w-[20px] mx-[8px]' src={share} alt="" />share</span>
                <span className='inline-flex items-center ml-[15px]  '><img className='w-[20px] mx-[8px]' src={save} alt="" />save</span>
            </div>
        </div>
        <hr className='h-[1px] bg-[#ccc] mt-[10px] mb-[10px]' />
        <div className='Publisher flex items-center mt-[20px]'>
            <img className='w-[40px] rounded-full mx-[15px]' src={chenneldata?chenneldata.snippet.thumbnails.default.url:""} alt="" />
            <div className='flex-1 leading-[18px]'>
                <p className='text-[#000] font-bold text-[18px]'>{apidata?apidata.snippet.channelTitle:"no ser"}</p>
                <span className='text-[13px] text-[#5a5a5a]'>{chenneldata?Value_converter(chenneldata.statistics.subscriberCount):""} Subscriber</span>
            </div>
            <button className='bg-[red] text-[#fff] pt-[8px] pb-[8px] px-[30px] border-[0] outline-0 rounded-[4px] cursor-pointer'>Subscribe</button>
        </div>
        <div className='video-des pl-[55px] mt-[15px] mb-[15px]'>
            <p className='text-[14px] mb-[5px] text-[#5a5a5a]'>{apidata?apidata.snippet.description.slice(0,250):"Description here"}</p>
            <hr />
            <h4 className='text-[14px] text-[#5a5a5a] mt-[15px]'>{apidata?Value_converter(apidata.statistics.commentCount):"null"} comments</h4>
            {commentdata.map((ele,index)=>{
                return(
                    <div key={index} className='comments flex items-start mt-[20px] mb-[20px]'>
                    <img className='w-[35px] rounded-full mr-[15px]' src={ele.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                
                <div>
                    <h3 className='text-[14px] mb-[2px] font-bold'>{ele.snippet.topLevelComment.snippet.authorDisplayName} <span className='text-[12px] text-[#5a5a5a] font-medium ml-[8px]'>2 Days ago</span></h3>
                    <p>{ele.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className='comment-action flex items-center text-[15px] mt-[8px] mb-[8]'>
                        <img className='rounded-[0] w-[20px] mr-[5px]' src={like} alt="" />
                        <span className='mr-[20px] text-[#5a5a5a]'>{Value_converter(ele.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img className='rounded-[0] w-[20px] mr-[5px]' src={dislike} alt="" />
                        <span className='mr-[20px] text-[#5a5a5a]'>5</span>
                    </div>
                </div>
                
              
                </div>
                )
            })}
            
            </div>
           
        </div>
    
  )
}

export default PlayVideo