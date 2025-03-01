import React from 'react'
import PagesWrapper from '@/components/PagesWrapper'


function AboutPage() {
  return (
    <PagesWrapper>
    <div className="w-full mx-auto text-left space-y-4 md:w-11/12 xl:w-9/12 md:text-center">
    <div className='flex flex-col gap-4'>
      <h1 className="text-xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
        <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
        What is IntelliSlide-AI?
        </span>
      </h1>
      <blockquote className="flex flex-col items-center p-4">
          <p className="max-w-4xl text-md font-normal dark:text-slate-200 text-gray-800 text-center md:text-xl lg:text-2xl">IntelliSlide-AI is an AI-powered presentation generator that instantly creates structured PowerPoint presentations based on any topic. Whether you are a student, business professional, educator, or researcher, IntelliSlide-AI simplifies your workflow by generating high-quality, editable slides in multiple languages.
          </p>
      </blockquote>
    </div>
    <div className='flex flex-col gap-4'>
      <h1 className="text-xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
        <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
        Why IntelliSlide-AI? 
        </span>
      </h1>
      <blockquote className="flex flex-col items-center p-4">
          <p className="max-w-4xl text-md font-normal dark:text-slate-200 text-gray-800 text-center md:text-xl lg:text-2xl">Traditional slide creation is time-consuming and repetitive. IntelliSlide-AI automates the process using cutting-edge AI, providing well-structured content and ready-to-use slides within seconds. With support for multiple languages, it is the perfect tool for global teams and multilingual audiences.
          </p>
      </blockquote>
    </div>
    <div className='flex flex-col gap-4'>
      <h1 className="text-xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
        <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
        Who is it for? 
        </span>
      </h1>
      <blockquote className="flex flex-col items-center p-4">
          <div className="max-w-4xl text-md font-normal dark:text-slate-200 text-gray-800 text-center md:text-xl lg:text-2xl">
            <ul className='flex flex-col gap-1'>
              <li>✅ Business Professionals – Deliver impactful presentations with minimal effort.</li>
              <li>✅ Students & Educators – Quickly generate slides for lectures, projects, and research.</li>
              <li>✅ Content Creators – Save time structuring ideas and focus on storytelling.</li>
              <li>✅ Anyone – Anyone who needs a quick, professional, and editable presentation!</li>
              <li>✅ Global Teams – Create presentations in multiple languages for international collaboration.</li>
            </ul>
          </div>
      </blockquote>
    </div>
    </div>

    </PagesWrapper>
  )
}

export default AboutPage
