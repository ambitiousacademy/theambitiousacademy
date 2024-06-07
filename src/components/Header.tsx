"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function HeaderSection() {
    return (
        <>
            {/* <section className="pb-20 m-10">
                <div className="container px-4 mx-auto pt-12">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                            <span className="font-semibold text-xs text-blue-400">Lorem ipsum dolor sit.</span>
                            <h2 className="mt-8 mb-6 lg:mb-12 text-4xl lg:text-5xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iste perspiciatis?</h2>
                            <div className="max-w-lg mb-6 lg:mb-12">
                                <p className="text-xl text-gray-500">Build a well-presented brand that everyone will love. Take care to develop resources continually and integrity them with previous projects.</p>
                            </div>
                            <div className="flex flex-wrap"><a className="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-red-400 hover:bg-red-300 text-white rounded transition duration-200" href="#">Sign In</a><a className="inline-block px-6 py-4 mb-3 text-sm font-medium leading-normal hover:text-gray-700 rounded border" href="#">Sign Up</a></div>
                        </div>
                        <div className="relative w-full md:w-1/2 px-4">
                            <img className="hidden lg:block lg:absolute top-0 right-0 z-10 lg:mt-28" src="https://shuffle.dev/zeus-assets/icons/dots/yellow-dot-right-shield.svg" alt=""/>
                                <img className="relative" src="https://shuffle.dev/zeus-assets/images/z-picture.png" alt=""/>
                                    <img className="hidden lg:block lg:absolute bottom-0 lg:left-0 lg:ml-6 lg:mb-20" src="https://shuffle.dev/zeus-assets/icons/dots/blue-dot-left-bars.svg" alt=""/>
                                    </div>
                                </div>
                        </div>
                    </section> */}
                    <Carousel infiniteLoop={true} autoFocus={true} autoPlay={true}>
                <div>
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
                </>
                )
}