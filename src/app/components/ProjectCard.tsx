import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description }) => {
    return (
      <Link href="https://google.com" passHref>
        <div className="mb-8 bg-[#1f1f1f] rounded-3xl shadow-2xl overflow-hidden 
        transform transition-all hover:scale-105 
        duration-700 
        hover:shadow-lg relative block md:w-[1/2]">
          
          <div
            className="h-[150px] bg-cover bg-center relative rounded-t-3xl"
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 flex items-center justify-center transition-opacity duration-500 hover:opacity-100 rounded-t-3xl"
            >
              <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                
              </div>
            </div>
          </div>
          <div className="p-4 md:p-6 relative z-10 bg-gradient-to-r from-purple-500  to-red-500 rounded-b-3xl shadow-lg">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-200 text-sm">{description}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-3xl"></div>
        </div>
      </Link>
    );
  }
  

export default ProjectCard;
