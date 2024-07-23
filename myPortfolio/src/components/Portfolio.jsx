import React from "react";
import youtube from '../assets/project/youtube.png'
import weatherapp from '../assets/project/weatherapp.png'
import sugar_Cosmatics from '../assets/project/sugar_Cosmatics.png'
import kfc from '../assets/kfc.png'
import sephora from '../assets/sephora.png'
const Portfolio = () => {
  const portfolios = [
    {
      id:1,
      src:kfc,
      Demo:"https://kfc-website.vercel.app/",
      code:"https://github.com/abhishek021999/KFC_Website/tree/main/Kfc",
      title:"KFC chicken restaurant Clone",
      description:"A responsive KFC clone built with React and Tailwind CSS, featuring cloud data storage on Glitch. It includes data filtering functionality for sorting menu items, ensuring a seamless user experience and dynamic UI updates across all devices.",
      teckstack:"React,Tailwind,chakra UI,"
    },
    {
      id:2,
      src:sephora,
      Demo:"https://sephora-clone-e-commerce.netlify.app/",
      code:"https://github.com/abhishek021999/Sephora-Clone",
      title:"A Sephora cosmetics clone",
      description:"A Sephora cosmetics clone built with JavaScript, HTML, and CSS. It features add to cart, search, filter, and sort functionalities, providing an intuitive and seamless shopping experience with dynamic product management and interactive user interface.",
      teckstack:"Javacript,CSS,HTML"
    },
    {
      id: 3,
      src:youtube,
      Demo:'https://https-youtube-india.netlify.app/',
      code:'https://github.com/abhishek021999/Project/tree/main/Youtube_Clone',
      title:"Youtube Clone",
      description:"A YouTube clone built with dynamic functionalities using the YouTube API. It features data filtering, providing a seamless video browsing experience. Users can search, sort, and filter videos, ensuring an interactive and engaging interface similar to YouTube.",
      teckstack:"React,Tailwind",
      
    },
    {
      id: 4,
      src:weatherapp,
      Demo:'https://weather-app-abhi-india.netlify.app/',
      code:'https://github.com/abhishek021999/Project/tree/main/WeatherApp-Abhi',
      title:"Weather APP Clone",
      description:"A weather API clone with real-time updates, built with search functionality. It displays wind status, humidity, visibility, air pressure, date, and time, providing comprehensive weather information. Users can effortlessly search and receive accurate, up-to-date weather data instantly.",
      teckstack:"React,Tailwind,material UI,React-Icons",
    },
    {
      id: 5,
      src:sugar_Cosmatics,
      Demo:'https://65e41a9f7dacf14af3f978dc--poetic-choux-fefb10.netlify.app/',
      code:'https://github.com/abhishek021999/Sugar-Cosmatic-Clone',
      title:"A Sugar Cosmetics clone",
      description:"A Sugar Cosmetics clone website with functionalities to fetch product data, and includes sign-in and sign-up pages. Built using react it utilizes local storage for user data management, providing a seamless and dynamic user experience.",
      teckstack:"React,CSS,chakra UI,react-Icon",
    },
    // {
    //   id: 4,
    //   src:heroImage,
    // },
    // {
    //   id: 5,
    //   src: heroImage,
    // },
    // {
    //   id: 6,
    //   src: heroImage,
    // },
  ];
 

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pt-[80px] pb-[50px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,Demo,code,description,title,teckstack }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-[180px] w-full"
              />
              <div className="p-4">
              <p className="font-bold text-lg text-center">{title}</p>
              <p className="text-gray-300 pt-5">{description}</p>
              <p className="pt-5"><span className="text-red-500 font-bold">Teck Stack:   </span><span className="font-bold text-sm">{teckstack}</span></p>
              </div>
              <div className="flex items-center justify-center">
                <button onClick={()=>window.open(Demo)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={()=>window.open(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
