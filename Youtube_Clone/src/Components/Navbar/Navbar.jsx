import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../Data'
function Navbar({setsidebar}) {
  const [search,setsearch]=useState('')
  const [searchResult, setSearchResult]=useState(null)
  async function fetchdata(){
    const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${API_KEY}`)
    const final=await res.json()
    setSearchResult(final.items[0].id)
    console.log(final.items[0].id)
  }
  useEffect(() => {
    if (search.trim() !== '') {
      fetchdata();
    } else {
      setSearchResult(null);
    }
  }, [search]);
  const handleSearch = (e) => {
    e.preventDefault();
    fetchdata();
  };

  return (
    <nav className='w-100 h-12  flex  items-center justify-between shadow-md sticky   '>
        <div className='Nav-left-flex-div flex items-center px-5 gap-5 '> 
            <img className='w-10 h-5 cursor-pointer' onClick={()=>setsidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
            <Link to="/"><img className='w-17 h-7 cursor-pointer' src={logo} alt="" /></Link>
        </div>
       
        <div className='input_div flex  items-center border w-[30%] h-[80%] rounded-3xl px-5   '>
          
            <input onChange={(e)=>setsearch(e.target.value)} className="w-[95%] h-[80%] focus:outline-none" type="text" placeholder='search' />
            <button><img className='w-5 h-4 cursor-pointer' src={search_icon} alt="" /></button>
            
        </div>
        
       
        <div className='Nav-right-flex-div flex gap-3 items-center px-5' >
            <img className='w-7 h-5 cursor-pointer' src={upload_icon} alt="" />
            <img className='w-7 h-5 cursor-pointer' src={more_icon} alt="" />
            <img className='w-7 h-5 cursor-pointer' src={notification_icon} alt="" />
            <img className='w-9 h-9 cursor-pointer rounded-full' src={profile_icon} alt="" />
        </div>
    </nav>
  )
}

export default Navbar