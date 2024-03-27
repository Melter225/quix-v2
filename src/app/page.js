"use client"

import React from 'react';
import Image from "next/image";
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Card from './card';
import './testimonials.css'

const navigation = [
  { name: 'Features', href: '/features', image: '/features.png' },
  { name: 'About', href: '/about', image: '/about.png' },
  { name: 'Billing', href: '/billing', image: '/billing.png' },
]

const Card_list = [
    {
        image_src: '/testimonial.jpg',
        heading: 'Krich Exe',
        username: 'krichexe',
        sub_text:
            "Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
    },
    {
        image_src: '/testimonial.jpg',
        heading: 'Krich Exe',
        username: 'krichexe',
        sub_text:
            "Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
    },
    {
        image_src: '/testimonial.jpg',
        heading: 'Krich Exe',
        username: 'krichexe',
        sub_text:
            "Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
    },
    {
        image_src: '/testimonial.jpg',
        heading: 'Krich Exe',
        username: 'krichexe',
        sub_text:
            "Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
    },
    {
        image_src: '/testimonial.jpg',
        heading: 'Krich Exe',
        username: 'krichexe',
        sub_text:
            "Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
    },
    {
        image_src: '/testimonial.jpg',
        heading: 'Krich Exe',
        username: 'krichexe',
        sub_text:
            "Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
    },
    {
        image_src: '/testimonial.jpg',
        heading: 'Krich Exe',
        username: 'krichexe',
        sub_text:
            "Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
    },
    {
        image_src: '/testimonial.jpg',
        heading: 'Krich Exe',
        username: 'krichexe',
        sub_text:
            "Discovering cypress has been a game-changer for my business. As a small business owner, I'm constantly looking for ways  ",
    },
];

export default function Home() {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none; 
                scrollbarWidth: none;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="font-poppins">
      <div>
        {/* <header className="text-gray-200 bg-navy mt-0 font-poppins fixed w-screen z-50">
            <div className="container mx-auto flex-wrap p-5 flex-col md:flex-row items-center justify-center hidden md:flex w-full">
                <a className="flex font-medium items-center text-gray-200 mb-4 md:mb-0" href="/">
                    <Image src="/QuixLogo.png" alt="Logo" width={96} height={51}></Image>
                </a>
                
                <nav className="w-[45%] md:border-gray-200 flex flex-wrap items-center text-base font-semibold justify-center">
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/features">Features</a>
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/about">About</a>
                    <a className="mr-5 hover:text-gray-300 cursor-pointer" href="/billing">Billing</a>
                </nav>
                <a className="inline-flex items-center border-2 border-gray-200 hover:bg-gray-400 hover:text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-4 mr-8 md:mt-0 cursor-pointer transition-colors duration-500" href="/signin">Login</a>
                <a className="inline-flex items-center border-2 border-gray-200 bg-gray-400 text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-8 focus:outline-none rounded-3xl text-lg mt-4 md:mt-0 cursor-pointer transition-colors duration-300" href="/signup">Signup</a>
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
        </header> */}
        <header className="inset-x-0 top-0 z-50 text-gray-200 bg-navy mt-0 font-poppins fixed w-screen">
          <nav className="flex items-center justify-between p-5 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Quix</span>
                <Image
                  src="/QuixLogo.png"
                  width={96}
                  height={51}
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 mr-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-gray-200 hover:text-gray-300">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-2">
              {/* <a href="/" className="text-lg font-semibold leading-6 text-gray-200">
                Log in <span aria-hidden="true">&rarr;</span>
              </a> */}
              <a className="inline-flex items-center border-2 border-gray-200 hover:bg-gray-400 hover:text-gray-800 hover:text-[1.17rem] hover:shadow-lg hover:shadow-blue-900 py-2 px-7 font-semibold focus:outline-none rounded-[1.3rem] text-lg mt-0 md:mt-0 cursor-pointer transition-colors duration-500 mr-2" href="/signin">
                Login <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto overflow-x-hidden bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between bg-gray-200 w-[114%] ml-[-7.1%] mt-[-7.1%] py-5 px-4">
                <a href="#" className="-m-1.5 p-1.5 cursor-default">
                <span className="sr-only">Quix</span>
                  <Image
                    src="/QuixLogo.png"
                    width={96}
                    height={51}
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-red-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-7 flow-root">
                <div className="-my-6 divide-y divide-gray-600/100">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-200 flex items-center"
                      >
                        <Image width={30} height={30} src={item.image} alt="icon"></Image>
                        <span className="ml-[0.6rem]">{item.name}</span>
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/signin"
                      className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-200 flex items-center"
                    >
                      <Image width={30} height={30} src='/login.png' alt="login icon"></Image>
                      <span className="ml-[0.6rem]">Login</span>
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <section className="section-blue-purple text-[#8C8C8C] font-poppins overflow-hidden">
          <svg className="hidden lg:flex absolute -top-32 -left-8" width="503" height="665" viewBox="0 0 503 665" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6" filter="url(#filter0_f_130_929)">
              <ellipse cx="-30.6393" cy="168.066" rx="516.531" ry="21.3606" transform="rotate(42.0877 -30.6393 168.066)" fill="url(#paint0_linear_130_929)"></ellipse>
            </g>
            <defs>
              <filter id="filter0_f_130_929" x="-564.24" y="-328.517" width="1067.2" height="993.167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_130_929"></feGaussianBlur>
              </filter>
              <linearGradient id="paint0_linear_130_929" x1="-547.17" y1="168.066" x2="485.892" y2="168.066" gradientUnits="userSpaceOnUse">
                <stop offset="0.469665" stop-color="#BBA7D5"></stop><stop offset="1" stop-color="#64379D"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg className="hidden lg:flex absolute -top-0 -left-8" width="410" height="837" viewBox="0 0 410 837" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6" filter="url(#filter0_f_130_928)">
              <ellipse cx="-66.2988" cy="391.989" rx="438.892" ry="17.2672" transform="rotate(42.0877 -66.2988 391.989)" fill="url(#paint0_linear_130_928)"></ellipse>
            </g>
            <defs>
              <filter id="filter0_f_130_928" x="-542.219" y="-52.47" width="951.84" height="888.918" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_130_928"></feGaussianBlur>
              </filter>
              <linearGradient id="paint0_linear_130_928" x1="-505.191" y1="391.989" x2="372.593" y2="391.989" gradientUnits="userSpaceOnUse">
                <stop offset="0.600071" stop-color="#A990C9"></stop>
                <stop offset="1" stop-color="#579BFF"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg className="hidden lg:flex absolute inset-x-0 top-20 left-0" width="378" height="464" viewBox="0 0 378 464" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60.0689" cy="228.113" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="156.701" cy="125.118" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="46.5612" cy="436.993" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="148.389" cy="268.542" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="148.389" cy="167.471" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="241.904" cy="381.163" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="192.029" cy="59.6622" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="238.787" cy="0.944925" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="29.9363" cy="357.099" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="120.334" cy="29.8224" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="290.739" cy="147.257" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="293.856" cy="381.163" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="352.044" cy="155.92" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="307.364" cy="46.1861" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="287.622" cy="310.895" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="98.514" cy="265.654" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="98.514" cy="150.145" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="168.131" cy="406.19" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="145.272" cy="322.446" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="8.11616" cy="109.716" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="214.888" cy="462.982" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="230.474" cy="277.205" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="230.474" cy="161.695" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="300.091" cy="417.741" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="355.161" cy="305.119" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="313.599" cy="249.29" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="1.88182" cy="6.72032" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="198.263" cy="302.232" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="198.263" cy="186.723" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
            <ellipse cx="376.981" cy="362.874" rx="1.02" ry="0.944925" fill="#7D94E7"></ellipse>
          </svg>
          <svg className="hidden lg:flex absolute top-6 left-1/3 " width="477" height="279" viewBox="0 0 1077 449" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3" filter="url(#filter0_f_130_899)">
              <ellipse cx="538.5" cy="9.5" rx="238.5" ry="139.5" fill="#5000B5"></ellipse>
            </g>
            <defs>
              <filter id="filter0_f_130_899" x="0" y="-430" width="1077" height="879" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_130_899"></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <svg className="hidden lg:flex absolute top-[5.6rem] right-0 h-dvh" width="440" height="1009" viewBox="0 0 440 1009" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3" filter="url(#filter0_f_130_898)">
              <ellipse cx="439.5" cy="470.5" rx="238.5" ry="139.5" transform="rotate(90 439.5 470.5)" fill="#5000B5"></ellipse>
            </g>
            <defs>
              <filter id="filter0_f_130_898" x="0" y="-68" width="879" height="1077" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_130_898"></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div className="pb-32 lg:pb-2 lg:min-h-dvh flex flex-col px-5 md:px-1 pt-[13rem] md:pt-[13rem] lg:pt-[7rem] lg:justify-center items-center bg-[#030c17]">
            <div className="container mx-auto flex items-start md:items-center justify-center flex-col max-w-screen-md px-4 lg:px-1">
              <div className="bg-gradient-to-r p-[0.12rem] from-[#0500E8] to-[#7000FF] rounded-full">
                <button className="bg-[#1F1F1F] rounded-full py-2 px-5 text-[#C4C1FF] hover:cursor-default font-semibold">Try For Free</button>
              </div>
              <div className="md:text-center w-full">
                <h1 className="md:leading-[64px] text-[#A5A2E8] text-3xl sm:text-5xl font-bold my-8">
                  <span className="bg-gradient-to-r from-[#B6B5CE] via-[#589BFF] to-[#9643FF] inline-block text-transparent bg-clip-text">Quix</span>
                  : The Future of Education
                </h1>
                <p className="mb-8 leading-relaxed text-gray-200"></p><h3 className="text-xl font-semibold text-gray-200">Introducing Quix - your academic ally in the digital age</h3> <p className="text-gray-200 text-sm"><br></br> With Quix, say goodbye to the days of frantic cramming and endless resource hunting. Our sleek interface, built with a Flask backend, Next.js, and Tailwind CSS, puts the power of preparation at your fingertips. Quix transforms your browser into a digital classroom, where every click brings you one step closer to academic success. And it&apos;s not just for students. Quix is a versatile tool catering to lifelong learners and adults hungry for knowledge. Whether you&apos;e seeking to master a subject quickly or simply explore new topics efficiently, Quix adapts seamlessly to your needs. Say hello to a smarter, more efficient way to learn with Quix.</p>
                <br></br>
                <div className="flex md:justify-center py-6">
                  <div className="bg-gradient-to-r p-px from-[#7000FF] via-[#5C79E1] to-[#1205B4] rounded-2xl">
                    <a className="inline-flex text-gray-200 bg-gradient-to-r bg-sky-700 shadow-lg shadow-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-blue-800 transition-colors duration-200 rounded-2xl text-lg cursor-pointer font-semibold" href="/signup">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="text-gray-200 font-poppins">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image className="lg:w-2/6 md:w-[60%] sm:w-[86.66%] mb-10 object-cover object-center justify-end rounded" alt="HeroImage" src="/QuixImage.png" width={720} height={600}></Image>
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="font-poppins text-3xl font-bold tracking-tight mb-5 sm:text-5xl text-gray-300">Quix: The Future of Education</h1>
              <p className="mb-8 leading-relaxed">Picture this: <br></br><br></br> You&apos;re a student, staring at a pile of textbooks and notes, feeling overwhelmed by the looming tests. You&apos;ve tried every study method in the book, from late-night cram sessions to endless scrolling through online resources, but nothing seems to stick.<br></br><br></br></p> <h3 className="text-2xl font-semibold">Introducing Quix - your academic ally in the digital age</h3> <p><br></br> With Quix, say goodbye to the days of frantic cramming and endless resource hunting. Our sleek interface, built with a Flask backend, Next.js, and Tailwind CSS, puts the power of preparation at your fingertips. Quix transforms your browser into a digital classroom, where every click brings you one step closer to academic success.<br></br><br></br>And it&apos;s not just for students. Whether you&apos;re a lifelong learner or an adult seeking to explore new topics, Quix seamlessly adapts to your needs, making it a versatile tool for anyone on a quest for knowledge.</p>
              <br></br>
              <br></br>
              <div className="flex justify-center">
              <a className="inline-flex text-white bg-gradient-to-r bg-sky-700 shadow-lg shadow-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-sky-700 transition-colors duration-200 rounded-2xl text-lg cursor-pointer" href="/signup">Get Started</a> */}
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
              {/* </div>
            </div>
          </div>
        </section> */}
        {/* <section className="text-gray-200 font-poppins">
          <div className="container px-5 pb-24 pt-20 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h2 className="text-base font-semibold tracking-wider leading-7 text-link mb-3">TESTIMONIALS</h2>
                <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-3">Unlock Your Potential</h2>
                <div className="h-1 w-20 bg-link rounded"></div> */}
                {/* <p className="mt-2 text-lg leading-8 w-[110%] ml-[-5%] text-gray-200">Discover how Quix can transform your learning experience and propel you towards success. With its user-friendly interface and comprehensive features, Quix makes learning efficient, effective, and enjoyable for learners of all ages.</p> */}
              {/* </div> */}
              {/* <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium font-poppins mb-2 text-gray-300">Unlock Your Potential</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div> */}
              {/* <p className="lg:w-1/2 text-base w-full leading-8 text-gray-200">Discover how Quix can transform your learning experience and propel you towards success. With its user-friendly interface and comprehensive features, Quix makes learning efficient, effective, and enjoyable for learners of all ages.</p> */}
            {/* </div> */}
              {/* <div className="scroll-container overflow-x-hidden">
                <div className="scroll-content flex space-x-4">
                  <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                      <div className="bg-navy p-6 rounded-lg">
                        <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/QuixLogo.png" width={720} height={600} alt="content"></Image>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium font-poppins">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-300 font-medium font-poppins mb-4">Chichen Itza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                      </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                      <div className="bg-navy p-6 rounded-lg">
                        <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/QuixLogo.png" width={720} height={600} alt="content"></Image>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium font-poppins">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-300 font-medium font-poppins mb-4">Colosseum Roma</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                      </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                      <div className="bg-navy p-6 rounded-lg">
                        <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/QuixLogo.png" width={720} height={600} alt="content"></Image>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium font-poppins">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-300 font-medium font-poppins mb-4">Great Pyramid of Giza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                      </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                      <div className="bg-navy p-6 rounded-lg">
                        <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/QuixLogo.png" width={720} height={600} alt="content"></Image>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium font-poppins">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-300 font-medium font-poppins mb-4">San Francisco</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            {/* </div>
        </section> */}
        <div>
            <section className="section-blue-purple text-gray-200 bg-[#030c17] font-poppins">
                <div className="min-h-dvh pb-28 flex flex-col pt-40 px-5">
                  <div className="flex flex-wrap w-full mb-20 px-8">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h2 className="text-base font-semibold tracking-wider leading-7 text-link mb-3">TESTIMONIALS</h2>
                      <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-3">Unlock Your Potential</h2>
                      <div className="h-1 w-20 bg-link rounded"></div>
                    </div>
                    <p className="lg:w-1/2 text-base w-full leading-8 text-gray-200">Discover how Quix can transform your learning experience and propel you towards success. With its user-friendly interface and comprehensive features, Quix makes learning efficient, effective, and enjoyable for learners of all ages.</p>
                  </div>
                    {/* <div className="container mx-auto flex items-start md:items-center justify-center flex-col max-w-screen-md  px-8 lg:pt-40 md:px-1">
                        <div className="bg-gradient-to-r p-px from-[#0500E8] to-[#7000FF] rounded-full mb-5">
                            <div className="bg-[#1F1F1F] rounded-full py-2 px-8 md:px-6 text-xl ">
                                <span className="bg-gradient-to-r from-[#A5A2E8] to-[#7000FF] font-bold inline-block text-transparent bg-clip-text">
                                    Testimonials
                                </span>
                            </div>
                        </div>
                        <div className="md:text-center w-full">
                            <div className="justify-center flex ">
                                <p className="leading-relaxed mb-8 lg:w-3/5 text-sm md:text-center text-[#817EB5]">
                                    Join thousands of satisfied users who rely
                                    on our platform for their personal and
                                    professional productivity needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div></div> */}
                    <div>
                        <div className="parent-hover">
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <ul className="row-fin flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:cursor-pointer">
                                    {Card_list.map((item, key) => {
                                        return (
                                            <li>
                                                <Card key={key} {...item} />
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ul className="row-fin flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll hover:cursor-pointer">
                                    {Card_list.map((item, key) => {
                                        return (
                                            <li>
                                                <Card key={key} {...item} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="parent-hover2">
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-rev hover:cursor-pointer">
                                    {Card_list.map((item, key) => {
                                        return (
                                            <li>
                                                <Card key={key} {...item} />
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-rev hover:cursor-pointer">
                                    {Card_list.map((item, key) => {
                                        return (
                                            <li>
                                                <Card key={key} {...item} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section className="text-gray-200 font-poppins">
          <div className="container px-5 py-36 mx-auto">
            <div className="text-center mb-20">
              <div className="mx-auto max-w-2xl text-center mt-10 mb-5">
                <h2 className="text-base font-semibold tracking-wider leading-7 text-link mb-3">FEATURES</h2>
                <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-3">Empowering Tools</h2>
                <p className="mt-2 text-base leading-8 w-[110%] ml-[-5%] text-gray-200">Discover the suite of innovative features that make Quix the ultimate study companion. From intuitive design to advanced functionality, Quix is tailored to enhance every aspect of your learning journey.</p>
              </div>
              {/* <h1 className="sm:text-3xl text-2xl font-medium font-poppins text-gray-300 mb-4">Empowering Tools</h1>
              <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-500s">Discover the suite of innovative features that make Quix the ultimate study companion. From intuitive design to advanced functionality, Quix is tailored to enhance every aspect of your learning journey.</p> */}
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-link inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
              <div className="p-4 md:w-[30%] flex flex-col text-center items-center rounded-2xl border-gray-300 border-2 mr-5 bg-cover bg-no-repeat sm:bg-cover md:bg-auto bg-top" style={{backgroundImage: 'url("/FeaturesBG.png")'}}>
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg> */}
                  <Image src="/puzzle.png" alt="unique puzzle" width={35} height={35}></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-semibold mb-3">Personalized Learning Paths</h2>
                  <div className="bg-[#0B0E0F] sm:w-[105%] md:w-[108%] sm:ml-[-2.5%] md:ml-[-4%] sm:h-[85%] md:h-[88%] rounded-b-2xl pt-6 pb-2 px-4">
                    <p className="leading-relaxed text-base">Tailor your study journey with personalized learning paths that adapt to your strengths and weaknesses. Quix&apos;s intelligent algorithms analyze your progress and recommend targeted resources to optimize learning outcomes.</p>
                    <a className="mt-3 text-link inline-flex items-center cursor-pointer hover:text-link_hover transition-colors duration-200" href="/personalization">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-[30%] flex flex-col text-center items-center rounded-2xl border-gray-300 border-2 mr-5 bg-cover bg-no-repeat sm:bg-cover md:bg-auto bg-top" style={{backgroundImage: 'url("/FeaturesBG.png")'}}>
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg> */}
                  <Image src="/repeat.png" alt="feedback loop" width={38} height={38}></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-semibold mb-3">Interactive Study Guides</h2>
                  <div className="bg-[#0B0E0F] sm:w-[105%] md:w-[108%] sm:ml-[-2.5%] md:ml-[-4%] sm:h-[85%] md:h-[88%] rounded-b-2xl pt-6 pb-2 px-4">
                    <p className="leading-relaxed text-base">Dive into comprehensive study guides curated by experts in various subjects. Interactive elements and multimedia resources ensure engaging and effective learning experiences.</p>
                    <a className="mt-3 text-link inline-flex items-center cursor-pointer hover:text-link_hover transition-colors duration-200" href="/personalization">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"> */}
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg> */}
                  {/* <Image src="/repeat.png" alt="feedback loop" width={38} height={38}></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-medium mb-3">Interactive Study Guides</h2>
                  <p className="leading-relaxed text-base">Dive into comprehensive study guides curated by experts in various subjects. Interactive elements and multimedia resources ensure engaging and effective learning experiences.</p>
                  <a className="mt-3 text-link inline-flex items-center cursor-pointer hover:text-link_hover transition-colors duration-200" href="/interactivity">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div> */}
              {/* <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"> */}
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M3 15L9 9L15 15L21 9M21 9L27 15M27 15L33 9M33 9L39 15"></path>
                  </svg> */}
                  {/* <Image src="/economy.png" alt="upward graph" width={46} height={46}></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-medium mb-3">Real-time Performance Insights</h2>
                  <p className="leading-relaxed text-base">Stay on top of your academic goals with real-time progress tracking. Visualize your achievements, track study time, and monitor quiz scores to identify areas for improvement and celebrate successes.</p>
                  <a className="mt-3 text-link inline-flex items-center cursor-pointer hover:text-link_hover transition-colors duration-200" href="/performance">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div> */}
              <div className="p-4 md:w-[30%] flex flex-col text-center items-center rounded-2xl border-gray-300 border-2 bg-cover bg-no-repeat sm:bg-cover md:bg-auto bg-top" style={{backgroundImage: 'url("/FeaturesBG.png")'}}>
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg> */}
                  <Image src="/economy.png" alt="upward graph" width={46} height={46}></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-semibold mb-3">Real-time Performance Insights</h2>
                  <div className="bg-[#0B0E0F] sm:w-[105%] md:w-[108%] sm:ml-[-2.5%] md:ml-[-4%] sm:h-[85%] md:h-[88%] rounded-b-2xl pt-6 pb-2 px-4">
                    <p className="leading-relaxed text-base">Stay on top of your academic goals with real-time progress tracking. Visualize your achievements, track study time, and monitor quiz scores to identify areas for improvement and celebrate successes.</p>
                    <a className="mt-3 text-link inline-flex items-center cursor-pointer hover:text-link_hover transition-colors duration-200" href="/personalization">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        </section>
          <div className="max-w-screen-xl mx-auto px-5 pt-10 min-h-sceen">
            <div className="flex flex-col items-center">
              <div className="mx-auto max-w-2xl text-center mt-10 mb-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-3">FAQs</h2>
                <p className="mt-2 text-lg leading-8 w-[110%] ml-[-5%] text-gray-200">Can’t find the answer you’re looking for? Reach out to our customer support team.</p>
              </div>
            {/* <h2 className="font-bold text-5xl mt-5 tracking-tight">
              FAQ
            </h2>
            <p className="text-neutral-500 text-xl mt-3">
              Frequenty asked questions
            </p> */}
          </div>
          <div className="grid divide-y divide-neutral-200 text-gray-200 max-w-4xl mx-auto mt-8">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What is Quix?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">Quix is an innovative digital platform designed to revolutionize studying and learning. It provides students and learners of all ages with a range of tools and features to enhance their study experience.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How does Quix ensure user privacy and data security?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">Quix prioritizes user privacy and employs security measures to protect user data. We are committed to implementing best practices for data security. Users can trust that we take their privacy seriously and continuously strive to enhance our security protocols. For more information, users can refer to our Privacy Policy.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can Quix be used by adults for learning purposes?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">Yes, Quix is not limited to students and can be utilized by adults who wish to learn about various topics. Its intuitive interface and personalized study features make it suitable for learners of all ages.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What types of study materials are available on Quix?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">Quix offers a wide range of study materials, including practice questions, educational resources, and interactive learning modules across various subjects and disciplines.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How does Quix track learning progress?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">Quix provides users with insights into their learning progress by allowing them to review test results, identify areas for improvement, and track their performance over time through detailed analytics and feedback.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How often is Quix updated?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">Quix is continuously updated and improved by its developers to enhance user experience, introduce new features, and address any issues or feedback from users. Updates are rolled out regularly to ensure that Quix remains cutting-edge and effective in supporting learning objectives.</p>
              </details>
            </div>
            <div className="py-5 mb-12">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Does Quix offer a free plan?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">Quix does offer a free plan, but it includes a limited amount of Credits, and once you run out of them, you will have to switch to a paid plan such as the Plus, Premium, and Premium Annual plans.</p>
              </details>
            </div>
            {/* <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Do you offer any discounts or promotions?</span>
                  <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                      </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">
                  We may offer discounts or promotions from time to time. To stay up-to-date on the latest
                  deals and special offers, you can sign up for the company&apos;s newsletter or follow it on social media.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group mb-12">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How do we compare to other similar services?</span>
                  <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                      </span>
                </summary>
                <p className="text-neutral-300 mt-3 group-open:animate-fadeIn">
                  This platform is a highly reliable and feature-rich service that offers a wide range
                  of tools and functionality. It is competitively priced and offers a variety of billing options to
                  suit different needs and budgets.
                </p>
              </details> */}
            {/* </div> */}
          </div>
          <div className="flex justify-center mb-16">
            <div className="bg-gradient-to-r p-px from-[#7000FF] via-[#5C79E1] to-[#1205B4] rounded-2xl">
              <a className="inline-flex text-gray-200 bg-gradient-to-r bg-sky-700 shadow-lg shadow-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-blue-800 transition-colors duration-200 rounded-2xl text-lg cursor-pointer font-semibold" href="/signup">Get Started</a>
            </div>
          </div>
        </div>
        {/* <footer className="bg-navy font-poppins" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">Footer</h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-20 lg:px-8 lg:pt-28">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-5">
                <Image src="/QuixLogo.png" alt="Company name" width={96} height={51}></Image>
                <p className="text-base leading-6 text-gray-300">Pioneering Tomorrow&apos;s Education</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 ml-[4.5rem]">
                <div className="md:grid md:grid-cols-2 md:gap-8 w-full">
                  <div>
                    <h3 className="text-lg tracking-wide font-semibold leading-6 text-gray-300">Solutions</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Marketing</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Analytics</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Commerce</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Insights</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-lg tracking-wide font-semibold leading-6 text-gray-300">Support</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Pricing</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Documentation</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Guides</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">API Status</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-lg tracking-wide font-semibold leading-6 text-gray-300">Company</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">About</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Blog</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Jobs</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Press</a>
                      </li>
                      <li>
                        <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-300">Partners</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/100 pt-8 sm:mt-20 lg:mt-24">
              <p className="text-sm leading-5 text-gray-300">&copy; 2020 Your Company, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer> */}
        <footer className="bg-navy mb-0 text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            {/* <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <p className="flex font-medium items-center md:justify-start justify-center text-gray-200">
                <Image src="/QuixLogo.png" alt="Logo" width={32} height={29}></Image>
                <a className="ml-3 text-xl cursor-pointer" href="/">Quix</a>
              </p>
              <p className="mt-4 text-base w-full text-gray-200">Pioneering Tomorrow&apos;s Education</p>
            </div> */}
            <div className="space-y-4">
              <Image src="/QuixLogo.png" alt="Company name" width={96} height={51}></Image>
              <p className="text-base leading-6 text-gray-300">Pioneering Tomorrow&apos;s Education</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <span className="sr-only">X</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-[10rem] -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h3 className="text-lg tracking-wide font-semibold leading-6 text-gray-300">Quix</h3>
                <ul role="list" className="mt-6 space-y-4 mb-16">
                  <li>
                    <a href="/about" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">About</a>
                  </li>
                  <li>
                    <a href="/billing" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Billing</a>
                  </li>
                  <li>
                    <a href="/contact" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Contact</a>
                  </li>
                </ul>
              </div>
              {/* <div className="lg:w-1/3 md:w-1/2 w-full px-4">
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
              </div> */}
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h3 className="text-lg tracking-wide font-semibold leading-6 text-gray-300">Legal</h3>
                <ul role="list" className="mt-6 space-y-4 mb-16">
                  <li>
                    <a href="/termsofservice" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Terms of Service</a>
                  </li>
                  <li>
                    <a href="/privacypolicy" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-300 tracking-widest text-sm mb-3">LEGAL</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/termsofservice">Terms of Service</a>
                  </li>
                  <li>
                    <a className="text-gray-200 cursor-pointer hover:text-gray-300" href="/privacypolicy">Privacy Policy</a>
                  </li>
                </nav>
              </div> */}
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h3 className="text-lg tracking-wide font-semibold leading-6 text-gray-300">Features</h3>
                <ul role="list" className="mt-6 space-y-4 mb-16">
                  <li>
                    <a href="/personalization" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Personalization</a>
                  </li>
                  <li>
                    <a href="/interactivity" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Interactivity</a>
                  </li>
                  <li>
                    <a href="/performance" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Performance Insights</a>
                  </li>
                  <li>
                    <a href="/partnerships" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Partnerships</a>
                  </li>
                  <li>
                    <a href="/ai" className="text-base cursor-pointer leading-6 text-gray-200 hover:text-gray-300">Quix AI</a>
                  </li>
                </ul>
              </div>
              {/* <div className="lg:w-1/3 md:w-1/2 w-full px-4">
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
              </div> */}
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
            <div className="border-t border-gray-400/100 pt-4">
              <p className="text-sm leading-5 text-gray-300 mt-4">&copy; 2024 Quix, Inc. All rights reserved.</p>
            </div>
          </div>
          {/* <div className="bg-navydark">
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
          </div> */}
        </footer>
      </div>
    </main>
  );
}