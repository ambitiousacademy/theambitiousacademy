import Image from 'next/image'
import React from 'react'

const Agendaof = () => {
  return (
    <div>
        
<div className="bg-white dark:bg-gray-800 overflow-hidden relative">
    <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                Want to be millionaire ?
            </span>
            <span className="block text-indigo-500">
                It&#x27;s today or never.
            </span>
        </h2>
        <p className="text-xl mt-4 text-gray-400">
            I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>
    <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block" alt="h"/>
</div>

    </div>
  )
}

export default Agendaof