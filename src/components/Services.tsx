import React from 'react'

const Services = () => {
    return (
        <div>
            <div className="mb-24 bg-gray-100">
                <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                    <div className="max-w-3xl mb-10 lg:mb-14">
                        <h2 className="text-gray-700 font-semibold text-2xl md:text-4xl md:leading-tight">Our Services</h2>
                        <p className="mt-1 text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus deserunt fuga fugiat excepturi voluptas ad quam magni eius sit.</p>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
                        <div className='text-2xl'>
                            <div className="p-2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Test Series</span>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Webinars</span>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Study Material</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block mb-24 md:mb-0">
                            <img className="rounded-xl" src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services