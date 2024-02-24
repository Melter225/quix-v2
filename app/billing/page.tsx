"use client";

import Image from "next/image";
import React, { useState } from 'react';


const Billing = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked); // Update the state when the button is clicked
    console.log(clicked)
  };

  return (
    <main>
      <div>
        <header className="text-gray-200 bg-navy mt-0 font-poppins fixed w-screen z-50">
            <div className="container mx-auto flex-wrap p-5 flex-col md:flex-row items-center hidden md:flex">
                <p className="flex font-medium items-center text-gray-200 mb-4 md:mb-0">
                    <Image src="/QuixLogo.png" alt="Logo" width={32} height={29}></Image>
                    <a className="ml-3 text-xl text-gray-300 cursor-pointer" href="/">Quix</a>
                </p>
                
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-200 flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/features">Features</a>
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/about">About</a>
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/billing">Billing</a>
                </nav>
                <a className="inline-flex items-center border-2 border-gray-200 hover:bg-gray-400 hover:text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-4 mr-8 md:mt-0 cursor-pointer transition-colors duration-500" href="/signin">Login</a>
                <a className="inline-flex items-center border-2 border-gray-200 bg-gray-400 text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-4 mr-8 md:mt-0 cursor-pointer transition-colors duration-300" href="/signup">Signup</a>
            </div>

            <div id="container" className="flex-wrap py-5 flex-row items-center md:hidden w-screen bg-primary">
                <div className="flex items-center w-full text-gray-300">
                    <Image src="/QuixLogo.png" alt="Logo" className="ml-8" width={32} height={29}></Image>
                    <a className="ml-3 text-xl text-gray-300 cursor-pointer" href="/">Quix</a>
                    <div className="ml-auto mr-8">
                      <a className="inline-flex items-center border-2 border-gray-200 hover:bg-gray-400 hover:text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-0 md:mt-0 cursor-pointer transition-colors duration-500 mr-8" href="/signin">Login</a>
                      <a className="inline-flex items-center border-2 border-gray-200 bg-gray-400 text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-0 md:mt-0 cursor-pointer transition-colors duration-300 mr-2" href="/signup">Signup</a>
                    </div>
                </div>
            </div>
        </header>
        <section className="text-gray-200 font-poppins overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-4xl text-3xl font-medium font-poppins mb-2 text-gray-300">Billing</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Quix features affordable pricing, specifically highlighting a bundle of Credits that is included in both the Plus and Premium plans. Credits are an in-app currency that allow you to utilize the testing feature of Quix; after you have used the provided 100 Credits, you will need to switch to either the Plus or the Premium plan.</p>
                  <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                      <button className={`${clicked ? '' : 'bg-indigo-500'} py-1 px-4 text-gray-200 focus:outline-none`} onClick={toggle}>Monthly</button>
                      <button className={`${clicked ? 'bg-indigo-500' : ''} py-1 px-4 text-gray-200 focus:outline-none`} onClick={toggle}>Annually</button>
                  </div>
                </div>
                <div className={`${clicked ? 'hidden' : 'block'} flex flex-wrap -m-4`}>
                  <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-navy">
                    <h2 className="text-sm tracking-widest font-poppins mb-1 font-medium">BASIC</h2>
                    <h1 className="text-5xl text-gray-300 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>100 Credits
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to a cutting-edge dashboard that displays upcoming tests
                    </p>
                    <p className="flex items-center text-gray-200 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to a login mechanism that uses Schoology data to provide an effective test preparation experience
                    </p>
                    <a className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded transition-colors duration-200" href="/signin">Login
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-navy">
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                    <h2 className="text-sm tracking-widest font-poppins mb-1 font-medium">PLUS</h2>
                    <h1 className="text-5xl text-gray-300 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$9.99</span>
                        <span className="text-lg ml-1 font-normal text-gray-200">/mo</span>
                    </h1>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>500 Credits monthly
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to a cutting-edge dashboard that displays upcoming tests
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to additional dashboard features such as listing the priority of tests and displaying average test scores
                    </p>
                    <p className="flex items-center text-gray-200 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to a login mechanism that uses Schoology data to provide an effective test preparation experience
                    </p>
                    <a className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded transition-colors duration-200" href="/payment">Get Plus
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-navy">
                    <h2 className="text-sm tracking-widest font-poppins mb-1 font-medium">PREMIUM</h2>
                    <h1 className="text-5xl text-gray-300 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$14.99</span>
                        <span className="text-lg ml-1 font-normal text-gray-200">/mo</span>
                    </h1>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>1000 Credits monthly
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Server priority access, leading to an overall faster and enhanced performance
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Early access to new updates, bug patches, and features
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to a cutting-edge dashboard that displays upcoming tests
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to additional dashboard features such as listing the priority of tests and displaying average test scores
                    </p>
                    <p className="flex items-center text-gray-200 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to a login mechanism that uses Schoology data to provide an effective test preparation experience
                    </p>
                    <a className="flex items-center mt-auto text-white bg-emerald-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-emerald-700 rounded transition-colors duration-200" href="/payment">Get Premium
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                </div>
                </div>
                <div className={`${clicked ? 'block' : 'hidden'} flex flex-wrap -m-4`}>
                  <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-navy">
                    <h2 className="text-sm tracking-widest font-poppins mb-1 font-medium">BASIC</h2>
                    <h1 className="text-5xl text-gray-300 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>100 Credits
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to a cutting-edge dashboard that displays upcoming tests
                    </p>
                    <p className="flex items-center text-gray-200 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to a login mechanism that uses Schoology data to provide an effective test preparation experience
                    </p>
                    <a className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded transition-colors duration-200" href="/signin">Login
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <footer className="bg-navy mb-0 text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <p className="flex font-medium items-center md:justify-start justify-center text-gray-200">
                <Image src="/QuixLogo.png" alt="Logo" width={32} height={29}></Image>
                <a className="ml-3 text-xl cursor-pointer" href="/">Quix</a>
              </p>
              <p className="mt-4 text-base w-full text-gray-200">Pioneering Tomorrow&apos;s Education</p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">QUIX</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/about">About</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/billing">Billing</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/contact">Contact</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">LEGAL</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/termsofservice">Terms of Service</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/privacypolicy">Privacy Policy</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">FEATURES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/personalization">Personalization</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/interactivity">Interactivity</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/performance">Performance Insights</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/partnerships">Partnerships</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/ai">Quix AI</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-navydark">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-200 text-sm text-center sm:text-left">© 2024 Quix —
                <a href="https://twitter.com/melter225" rel="noopener noreferrer" className="text-gray-200 ml-1 hover:text-gray-300 cursor-pointer" target="_blank">@melter225</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-200">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Billing;