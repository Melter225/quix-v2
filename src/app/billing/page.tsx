"use client"

import Image from "next/image";
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Billing', href: '/billing' },
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
    <main>
      <div>
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
                <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-200 hover:text-gray-300">
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
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between bg-gray-200 w-[114%] ml-[-7.1%] mt-[-7.1%] py-4 px-4">
                <a href="/" className="-m-1.5 p-1.5">
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
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/signin"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-200"
                    >
                      Login
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-3">Billing</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-200">Quix features affordable pricing, specifically highlighting a bundle of Credits that is included in both the Plus and Premium plans. Credits are an in-app currency that allow you to utilize the testing feature of Quix; after you have used the provided 100 Credits, you will need to switch to either the Plus or the Premium plan.</p>
                  </div>
                  {/* <h1 className="sm:text-4xl text-3xl font-medium font-poppins mb-2 text-gray-300">Billing</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Quix features affordable pricing, specifically highlighting a bundle of Credits that is included in both the Plus and Premium plans. Credits are an in-app currency that allow you to utilize the testing feature of Quix; after you have used the provided 100 Credits, you will need to switch to either the Plus or the Premium plan.</p> */}
                  <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                      <button className={`${clicked ? '' : 'bg-indigo-500'} py-1 px-4 text-gray-200 focus:outline-none`} onClick={toggleFalse}>Monthly</button>
                      <button className={`${clicked ? 'bg-indigo-500' : ''} py-1 px-4 text-gray-200 focus:outline-none`} onClick={toggleTrue}>Annually</button>
                  </div>
                </div>
                <div className={`${clicked ? 'hidden' : 'block'} flex flex-wrap -m-4`}>
                  <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-2xl border-2 border-gray-300 flex flex-col relative overflow-hidden bg-navy">
                    <h2 className="text-sm tracking-widest font-poppins mb-1 font-semibold">BASIC</h2>
                    <h1 className="text-5xl text-gray-300 pb-4 mb-4 border-b border-gray-200 leading-none font-bold tracking-tight">Free</h1>
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
                    <a className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 font-semibold rounded-md transition-colors duration-200" href="/signin">Login
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-2xl border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-navy">
                    <span className="bg-indigo-500 text-gray-200 px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
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
                        </span>500 Credits monthly
                    </p>
                    <p className="flex items-center text-gray-200 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to additional dashboard features such as listing the priority of tests and displaying average test scores
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
                    <a className="flex items-center mt-auto text-gray-200 bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 font-semibold rounded-md transition-colors duration-200" href="/payment">Get Plus
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-2xl border-2 border-gray-300 flex flex-col relative overflow-hidden bg-navy">
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
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-600 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Access to additional dashboard features such as listing the priority of tests and displaying average test scores
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
                    <a className="flex items-center mt-auto text-gray-200 bg-emerald-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-emerald-700 font-semibold rounded-md transition-colors duration-200" href="/payment">Get Premium
                    </a>
                    <p className="text-xs text-gray-200 mt-3">Subscriptions are non-refundable. Terms and conditions apply.</p>
                    </div>
                  </div>
                </div>
                <div className={`${clicked ? 'block' : 'hidden'} flex flex-wrap -m-4`}>
                  <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 bg-navy lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      <h3 className="text-2xl font-bold tracking-widest text-gray-300">Premium Annual</h3>
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