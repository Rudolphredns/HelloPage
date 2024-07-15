"use client";
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return ( 
    <div className='bg-[#0C0C0C] bg-opacity-70 mt-[200px] w-[1200px] h-[600px] self-center rounded-3xl relative'>
      <h1 className='text-white text-3xl font-bold p-10 ml-[73px] h-7'>
        ABOUT
      </h1>

      <div className="flex justify-between">
        <div className="w-[500px] h-[500px] rounded-full bg-transparent relative overflow-hidden">
<<<<<<< HEAD
          <Image
            src="/images/heroimage1.png"
=======
          <img
            src="/images/heroimage.png"
>>>>>>> parent of 3fe28b1 (xxx)
            alt="Description of the image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-110 transition-transform duration-500"
            width={300}
            height={300}
          />
        </div>

        <div className="text-white text-lg space-y-4 mr-[100px] mt-[20px] w-[600px] px-8 py-10">
          <p>
            <span className="text-white font-semibold">Name: </span>
            <span className="text-white ">Phestsuwaphat Thongsuk</span>
          </p>
          <p>
            <span className="text-white font-semibold">Nickname: </span>
            <span className="text-white ">Petch</span>
          </p>
          <p>
            <span className="text-white font-semibold">Age: </span>
            <span className="text-white ">24</span>
          </p>
          <p>
            <span className="text-white font-semibold">Email: </span>
            <span className="text-white ">phestsuwaphat.contact@gmail.com</span>
          </p>
          
          {/* Gradient background with shadow */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-[10px] shadow-md rounded-md mt-6 text-center">
            <div className='py-10'>
              <span className="text-white font-semibold  py-10">EDU</span>
              <span className="text-white font-semibold  py-10">CATION</span>
            </div>
          </div>

          <div className="py-14">
            <p className="text-white">Information Technology and Innovation - Computer Science</p>
            <p className="text-white mt-2">GPA: 3.50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
