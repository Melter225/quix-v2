import React from 'react';
import Image from "next/image";

export default function Card({image_src, heading, username, sub_text}) {
    return (
        <div>
            <div className="p-4 z-50 w-dvw md:w-96">
                <div className="flex rounded-2xl h-full bg-darknavy border-gray-300 border-[2px] flex-col text-gray-200">
                    <div className="flex items-center mb-3 p-8">
                        <div className="w-18 h-18 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                            <Image src={image_src} alt="profile" width={85} height={85} />
                        </div>
                        <div>
                            <h2 className="text-base font-poppins font-semibold">
                                {heading}
                            </h2>
                            <h5 className="text-xs italic font-semibold">@{username}</h5>
                        </div>
                    </div>
                    <div className="flex-grow bg-[#0B0E0F] mt-[-1rem] px-8 py-6 rounded-b-2xl">
                        <p className="leading-relaxed text-sm">
                            {sub_text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}