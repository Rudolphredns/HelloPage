import React from 'react';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className='w-auto h-[600px] mt-[200px] bg-opacity-70'>
      <h1 className='text-white text-4xl font-bold text-center'>
        Experience
      </h1>
      
      <div className="flex justify-center mt-20 space-x-10">
        {/* Example circle with text below */}
        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/python.png"  // Replace with your image path
              alt="Python Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">80%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>Python</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/html.png"  
              alt="HTML Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">90%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>HTML</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/css.png"  
              alt="CSS Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">85%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>CSS</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/js.png"  
              alt="JavaScript Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">75%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>JavaScript</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/ts.png"  // Replace with your image path
              alt="TypeScript Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">70%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>TypeScript</h1>
        </div>
      </div>

      <div className="flex justify-center mt-20 space-x-10">
        {/* Additional circles with text below */}
        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/react.png"  // Replace with your image path
              alt="React Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">80%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>React</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/next.png"  // Replace with your image path
              alt="Next.js Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">90%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>Next.js</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/java.png"  // Replace with your image path
              alt="Java Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">65%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>Java</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/canva.png"  // Replace with your image path
              alt="Canva Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">100%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>Canva</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] bg-[#15161a] rounded-full overflow-hidden group">
            <Image
              src="/icon/figma.png"  // Replace with your image path
              alt="Figma Icon"
              layout="fill"
              className="rounded-full transition-opacity duration-300  group-hover:opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">90%</span>
            </div>
          </div>
          <h1 className='text-white font-bold mt-2'>Figma</h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
