"use client";

// Import necessary modules
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12">
        
        <div className="col-span-7 place-self-start justify-items-end translate-y-[50px]">
          <h1 className="text-white text-[100px] mt-[240px] ml-[300px] font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Hello, I&apos;m{" "}
            </span>
            <div className="py-5 text-white">
              <TypeAnimation 
                sequence={[
                  'Developer',
                  1000,
                  'Fullstack',
                  1000,
                  'UX/UI Designer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>

          <div>
            <Link href="#about" passHref>
              <button className="group relative px-6 py-3 w-60 h-[70px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white ml-[300px] mt-10 text-2xl font-bold overflow-hidden">
                <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500">
                  About me
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
              </button>
            </Link>

            <Link href="#projects" passHref>
              <button className="group relative px-6 py-3 w-60 h-[70px] rounded-full bg-transparent text-white ml-[50px] mt-6 md:mt-10 text-2xl font-bold border-4 border-white overflow-hidden hover:shadow-lg hover:bg-white hover:border-purple-500 transition duration-300 ease-in-out">
                <span className="relative z-10 text-white bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500">
                  View Work
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mr-14 lg:mt-0">
          <div className="rounded-full bg-white bg-opacity-10 w-[500px] h-[500px] mt-[300px] relative">
            <Image
              src="/images/heroimage.png"
              alt="Description of the image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-110 transition-transform "
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
