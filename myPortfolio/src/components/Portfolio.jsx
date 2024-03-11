import React from "react";
import youtube from '../assets/project/youtube.png'
import weatherapp from '../assets/project/weatherapp.png'
import sugar_Cosmatics from '../assets/project/sugar_Cosmatics.png'
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src:youtube,
      Demo:'https://https-youtube-india.netlify.app/',
      code:'https://github.com/abhishek021999/Project/tree/main/Youtube_Clone'
    },
    {
      id: 2,
      src:weatherapp,
      Demo:'https://weather-app-abhi-india.netlify.app/',
      code:'https://github.com/abhishek021999/Project/tree/main/WeatherApp-Abhi'
    },
    {
      id: 3,
      src:sugar_Cosmatics,
      Demo:'https://65e41a9f7dacf14af3f978dc--poetic-choux-fefb10.netlify.app/',
      code:'https://github.com/abhishek021999/Sugar-Cosmatic-Clone'
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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,Demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-[180px] w-full"
              />
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
