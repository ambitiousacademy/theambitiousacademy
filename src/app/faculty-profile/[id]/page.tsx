"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from "next/navigation";

interface ProfileData {
    _id: string;
    name: string;
    title: string;
    image: string;
    aboutMe: string;
    skills: string[];
    socialLinks: {
        linkedin: string;
        youtube: string;
        facebook: string;
        instagram: string;
        twitter: string;
    };
    // Add other fields as needed
}

export default function ProfileData(){
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const params = useParams();
    const profileId = params.id as string;


    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_GETFACULTYDATA}?profileId=${profileId}`); // Fixed the template literal syntax
                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }
                const data = await response.json();
                console.log(response);
                setProfileData(data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, [profileId]); // Added profileId as a dependency to useEffect


    if (!profileData) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={profileData.image}
                                        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                                        alt="Profile"
                                    />
                                    <h1 className="text-xl font-bold">{profileData.name}</h1>
                                    <p className="text-gray-700">{profileData.title}</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="#" className="py-2 px-4 rounded">
                                            Contact : email@email.com
                                        </a>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                    <ul>
                                        {profileData.skills.map((skill, index) => (
                                            <li key={index} className="mb-2">
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">About Me</h2>
                                <p className="text-gray-700">{profileData.aboutMe}</p>

                                <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
                                <div className="flex justify-center items-center gap-6 my-6">
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit LinkedIn"
                                        href={profileData.socialLinks.linkedin}
                                        target="_blank"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                            <path
                                                fill="currentColor"
                                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit YouTube"
                                        href={profileData.socialLinks.youtube}
                                        target="_blank"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                                            <path
                                                fill="currentColor"
                                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit Facebook"
                                        href={profileData.socialLinks.facebook}
                                        target="_blank"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                                            <path
                                                fill="currentColor"
                                                d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit Instagram"
                                        href={profileData.socialLinks.instagram}
                                        target="_blank"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                            <path
                                                fill="currentColor"
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S287.7 319.5 287.7 255.9 236.4 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.8-1.7 67.6-9.9 93.9-36.1 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zm-42.2 278.8c-7.6 19.7-21.6 34.8-41.2 42.3-12.5 4.8-41.5 6.7-58.6 6.7s-46.1-2-58.6-6.7c-19.6-7.6-33.6-22.6-41.2-42.3-4.8-12.5-6.7-41.5-6.7-58.6s2-46.1 6.7-58.6c7.6-19.7 21.6-34.8 41.2-42.3 12.5-4.8 41.5-6.7 58.6-6.7s46.1 2 58.6 6.7c19.6 7.6 33.6 22.6 41.2 42.3 4.8 12.5 6.7 41.5 6.7 58.6s-2 46.1-6.7 58.6zm-103.9-138.7c-23.3 0-42.2-18.9-42.2-42.2s18.9-42.2 42.2-42.2 42.2 18.9 42.2 42.2-18.9 42.2-42.2 42.2z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="text-gray-700 hover:text-orange-600"
                                        aria-label="Visit Twitter"
                                        href={profileData.socialLinks.twitter}
                                        target="_blank"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6">
                                            <path
                                                fill="currentColor"
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.677-17.219-161.139-47.106 8.447.974 16.427 1.299 25.406 1.299 49.129 0 94.336-16.427 130.543-44.741-46.162-.975-84.681-31.215-98.258-72.837 6.498.974 12.997 1.624 19.82 1.624 9.421 0 18.842-1.299 27.822-3.573-48.457-9.747-84.356-52.215-84.356-103.645v-1.299c13.32 7.798 28.969 12.672 45.268 13.32-26.754-17.218-44.741-46.813-44.741-80.277 0-17.543 4.548-33.542 12.672-47.432 45.593 55.292 114.026 91.763 190.565 95.937-1.624-7.798-2.273-15.27-2.273-23.415 0-56.916 46.813-103.97 104.62-103.97 30.896 0 58.125 12.346 77.764 32.311 24.672-4.548 47.758-13.32 68.844-25.405-8.096 25.405-25.404 46.813-48.782 60.704 22.358-2.597 43.116-8.096 62.103-16.1-14.296 21.054-32.934 39.042-54.342 53.582z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}