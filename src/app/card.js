import React from 'react';
import Image from "next/image";

export default function Card({image_src, heading, username, sub_text}) {
    return (
        <div>
            <div className="p-4 z-50 w-dvw md:w-96">
                <div className="flex rounded-lg h-full bg-[#0c0816] border-[0.4px] border-[#4f4f4f] p-8 flex-col text-[#c9c9c9]">
                    <div className="flex items-center mb-3">
                        <div className="w-18 h-18 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                            <Image src={image_src} alt="profile" width={50} height={50} />
                        </div>
                        <div>
                            <h2 className="text-md title-font font-medium">
                                {heading}
                            </h2>
                            <h5 className="text-xs italic">@{username}</h5>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="leading-relaxed text-sm">
                            {sub_text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}