"use client"

import Image from "next/image";
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '/features', image: '/features.png' },
  { name: 'About', href: '/about', image: '/about.png' },
  { name: 'Billing', href: '/billing', image: '/billing.png' },
]

const includedFeatures = [
  '1000 Credits monthly',
  'Server priority access, leading to an overall faster and enhanced performance',
  'Early access to new updates, bug patches, and features',
]


const Billing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [clicked, setClicked] = useState(false);

  const toggleTrue = () => {
    setClicked(true); // Update the state when the button is clicked
    console.log(clicked)
  };

  const toggleFalse = () => {
    setClicked(false); // Update the state when the button is clicked
    console.log(clicked)
  };

  return (
    <main className="font-poppins">
      <div>
        bg-<header className="inset-x-0 top-0 z-50 text-gray-200 navglass mt-0 font-poppins fixed w-screen">
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
        <section className="text-gray-200 font-poppins overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <div className="mx-auto max-w-2xl text-center mt-10 mb-5">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Billing</h2>
                    {/* <p className="mt-2 text-lg leading-8 text-gray-200">Quix features affordable pricing, specifically highlighting a bundle of Credits that is included in both the Plus and Premium plans. Credits are an in-app currency that allow you to utilize the feature to access documents and videos related to the entered topic; after you have used the provided 100 Credits, you will still have the ability to access the testing feature of Quix, but you will no longer have the ability to access related documents and videos.</p> */}
                  </div>
                  {/* <h1 className="sm:text-4xl text-3xl font-medium font-poppins mb-2 text-gray-300">Billing</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Quix features affordable pricing, specifically highlighting a bundle of Credits that is included in both the Plus and Premium plans. Credits are an in-app currency that allow you to utilize the testing feature of Quix; after you have used the provided 100 Credits, you will need to switch to either the Plus or the Premium plan.</p> */}
                  <div className="flex mx-auto border-2 border-link rounded-lg overflow-hidden mt-3 -mb-10">
                      <button className={`${clicked ? '' : 'bg-link'} py-1 px-4 text-gray-200 focus:outline-none`} onClick={toggleFalse}>Monthly</button>
                      <button className={`${clicked ? 'bg-link' : ''} py-1 px-4 text-gray-200 focus:outline-none`} onClick={toggleTrue}>Annually</button>
                  </div>
                </div>
                <div className={`${clicked ? 'hidden' : 'block'} flex flex-wrap -m-4`}>
                  <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-xl border-2 border-gray-300 flex flex-col relative overflow-hidden bg-navy">
                    <h2 className="text-sm tracking-widest font-poppins mb-1 font-semibold">BASIC</h2>
                    <h1 className="text-5xl text-gray-300 pb-4 mb-4 border-b border-gray-200 leading-none font-semibold tracking-tight">Free</h1>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Limited access to customized quizzes and documents
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to AI with capabilities of GPT-3.5 Turbo
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to videos meticulously chosen to reinforce comprehension
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Ability to redo missed quiz questions once
                    </p>
                    <p className="flex items-center text-gray-200 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to AI approved public notes pages
                    </p>
                    <a className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 font-semibold rounded-md transition-colors duration-200" href="/signin">Login
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-xl border-2 border-link flex flex-col relative overflow-hidden bg-navy">
                    <span className="bg-link text-gray-200 px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                    <h2 className="text-sm tracking-widest font-poppins mb-1 font-bold">PLUS</h2>
                    <h1 className="text-5xl text-gray-300 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span className="font-bold tracking-tight">$9.99</span>
                        <span className="text-lg ml-1 font-semibold text-gray-200">/mo</span>
                    </h1>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Up to 40x access to customized quizzes and documents
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to AI with capabilities of GPT-4o and GPT-4 Turbo
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to websites to bolster and correct user understanding
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Ability to redo missed questions unlimited times
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Key terms highlighted + interactive quizzes for key terms in notes pages
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Tailored sorting algorithms for quizzes by score, question complexity, and user understanding
                    </p>
                    <p className="flex items-center text-gray-200 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>All the features in Basic
                    </p>
                    <a className="flex items-center mt-auto text-gray-200 bg-link border-0 py-2 px-4 w-full focus:outline-none hover:bg-link_hover font-semibold rounded-md transition-colors duration-200" href="/payment">Get Plus
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-xl border-2 border-gray-300 flex flex-col relative overflow-hidden bg-navy">
                    <h2 className="text-sm tracking-widest font-poppins mb-1 font-bold">PREMIUM</h2>
                    <h1 className="text-5xl text-gray-300 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span className="font-bold tracking-tight">$14.99</span>
                        <span className="text-lg ml-1 font-semibold text-gray-200">/mo</span>
                    </h1>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Up to 80x access to customized quizzes and documents
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to AI with capabilities of Whisper V3
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited interactive audio mechanism in real time to discuss errors and further improvement
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Comprehensive sorting algorithm for quizzes, considering the importance of several factors
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Early access to new updates, bug patches, and features
                    </p>
                    <p className="flex items-center text-gray-200 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>All the features in Plus
                    </p>
                    <a className="flex items-center mt-auto text-gray-200 bg-emerald-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-emerald-700 font-semibold rounded-md transition-colors duration-200" href="/payment">Get Premium
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                  </div>
                </div>
                <div className={`${clicked ? 'block' : 'hidden'} flex flex-wrap -m-4`}>
                  <div className="mx-auto max-w-2xl rounded-2xl ring-1 ring-gray-200 bg-navy lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      {/* <h3 className="text-2xl font-bold tracking-widest text-gray-300">Premium Annual</h3> */}
                      <h1 className="text-3xl text-gray-300 leading-none flex items-center">
                        <span className="font-bold tracking-tight">Premium Annual</span>
                        {/* <span className="font-bold tracking-tight">Premium Annual</span> */}
                        {/* <span className="text-lg ml-3 font-semibold text-gray-200">Discount</span> */}
                      </h1>
                      <p className="mt-6 text-base leading-7 text-gray-200">The Premium Annual plan includes all the perks and features of the premium plan at an annual subscription rate, featuring a 17% discount.</p>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-lg font-semibold leading-6 text-indigo-400">What&apos;s included</h4>
                        <div className="h-px flex-auto bg-gray-200" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-0 text-sm leading-6 text-gray-200 sm:grid-cols-2 sm:gap-0"
                      >
                        {includedFeatures.map((feature) => (
                          <li key={feature} className="flex gap-x-3 text-base">
                            <span className="w-4 h-4 inline-flex items-center justify-center bg-emerald-600 text-gray-200 rounded-full flex-shrink-0 mt-1">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                  <path d="M20 6L9 17l-5-5"></path>
                              </svg>
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="rounded-2xl bg-gray-300 py-10 text-center ring-1 ring-inset ring-gray-700/5 lg:flex lg:flex-col lg:justify-center lg:py-[5.5rem]">
                        <div className="mx-auto max-w-xs px-8">
                          <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <span className="text-5xl font-bold tracking-tight text-gray-900">$149.99</span>
                            <span className="text-xl font-semibold leading-6 tracking-wide text-gray-600">/yr</span>
                          </p>
                          <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="text-lg mt-1 font-bold tracking-tight text-gray-700 sm:text-xl">17% Discount</h2>
                          </div>
                          <a className="flex items-center mt-10 text-gray-200 bg-emerald-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-emerald-700 font-semibold rounded-md transition-colors duration-200" href="/payment">Get Premium Annual</a>
                          <p className="mt-6 text-xs leading-5 text-gray-600">Subscriptions are non-refundable. Terms and conditions apply.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
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

export default Billing;