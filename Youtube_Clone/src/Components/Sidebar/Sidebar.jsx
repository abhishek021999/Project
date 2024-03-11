import React from 'react'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import './Sidebar.css'
function Sidebar({sidebar,category,setcategory}) {
  return (
    <div className={` sidebar ${sidebar?"":'w-[4%]'} w-[45%] h-[100%]  px-[1%] pt-[20px]`}>
        <div className='short-cut-links'>
            <div onClick={()=>setcategory(0)} className={`side-link ${category===0?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className={`w-[20px] mx-[20px]`} src={home} alt="" />
                <p className={`${sidebar ?"":'hidden'}`}>Home</p>
            </div>
            <div onClick={()=>setcategory(20)} className={`side-link ${category===20?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className='w-[20px] mx-[20px]' src={game_icon} alt="" />
                <p  className={`${sidebar ?"":'hidden'}`}>Gameing</p>
            </div>
            <div onClick={()=>setcategory(2)} className={`side-link ${category===2?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className='w-[20px] mx-[20px]' src={automobiles} alt="" />
                <p  className={`${sidebar ?"":'hidden'}`}>Automobile</p>
            </div>
            <div onClick={()=>setcategory(17)} className={`side-link ${category===17?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className='w-[20px] mx-[20px]' src={sports} alt="" />
                <p  className={`${sidebar ?"":'hidden'}`}>Sports</p>
            </div>
            <div onClick={()=>setcategory(24)} className={`side-link ${category===24?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className='w-[20px] mx-[20px]' src={entertainment} alt="" />
                <p  className={`${sidebar ?"":'hidden'}`}>Entertainment</p>
            </div>
            <div onClick={()=>setcategory(28)} className={`side-link ${category===28?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className='w-[20px] mx-[20px]' src={tech} alt="" />
                <p  className={`${sidebar ?"":'hidden'}`}>Tech</p>
            </div>
            <div onClick={()=>setcategory(10)} className={`side-link ${category===10?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className='w-[20px] mx-[20px]' src={music} alt="" />
                <p  className={`${sidebar ?"":'hidden'}`}>Music</p>
            </div>
            <div onClick={()=>setcategory(22)} className={`side-link ${category===22?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className='w-[20px] mx-[20px]' src={blogs} alt="" />
                <p  className={`${sidebar ?"":'hidden'}`}>Blogs</p>
            </div>
            <div onClick={()=>setcategory(25)} className={`side-link ${category===25?'active':""} flex items-center mb-[20px] w-fit flex-wrap cursor-pointer`}>
                <img className='w-[20px] mx-[20px]' src={news} alt="" />
                <p  className={`${sidebar ?"":'hidden'}`}>News</p>
            </div>
            <hr className={`${sidebar ?"":'w-[50%] mb-[25px]'}h-[1px] w-[85%]`} />
        </div>
        <div className='subsribe-list'>
                <h3 className={` ${sidebar?"":'hidden'} text-[16px] text-[#5a5a5a]`}>Subcribed</h3>
                <div className='side-link flex mt-4 cursor-pointer'>
                    <img className='w-[25px] rounded-full mx-[20px]' src={jack} alt="" />
                    <p  className={`${sidebar ?"":'hidden'}`}>Jack</p>
                </div>
                <div className='side-link flex mt-4 cursor-pointer'>
                    <img className='w-[25px] rounded-full mx-[20px]' src={simon} alt="" />
                    <p  className={`${sidebar ?"":'hidden'}`}>Simon</p>
                </div>
                <div className='side-link flex mt-4 cursor-pointer'>
                    <img className='w-[25px] rounded-full mx-[20px]' src={tom} alt="" />
                    <p  className={`${sidebar ?"":'hidden'}`}>Tom</p>
                </div>
                <div className='side-link flex mt-4 cursor-pointer'>
                    <img className='w-[25px] rounded-full mx-[20px]' src={megan} alt="" />
                    <p  className={`${sidebar ?"":'hidden'}`}>Megan</p>
                </div>
                <div className='side-link flex mt-4 cursor-pointer'>
                    <img className='w-[25px] rounded-full mx-[20px]' src={cameron} alt="" />
                    <p  className={`${sidebar ?"":'hidden'}`}>Cameron</p>
                </div>
        </div>
    </div>
  )
}

export default Sidebar