"use client"

import Image from "next/image";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Billing', href: '/billing' },
]


export default function Features() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        <section className="text-gray-200 font-poppins">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden">
                    <Image alt="content" className="object-cover object-center h-full w-full" src="/QuixLogo.png" width={1200} height={500}></Image>
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium font-poppins mt-4 text-gray-300 text-lg">Phoebe Caulfield</h2>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                        <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                    </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-base mb-4">At Quix, personalization is at the core of everything we do. We believe in tailoring every aspect of your experience to suit your unique needs and preferences. One of the key ways we achieve this is through our personalized test generation feature. When you interact with Quix, whether it&apos;s to prepare for an exam or to expand your knowledge, our platform dynamically generates questions specifically tailored to the content and description of the test you&apos;re taking. This ensures that each question is relevant and aligned with your study goals, maximizing the effectiveness of your learning experience.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium font-poppins mb-2 text-gray-300">Pitchfork Kickstarter Taxidermy</h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    <Image alt="content" className="object-cover object-center h-full w-full" src="/QuixLogo.png" width={1200} height={250}></Image>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-base text-gray-200">Moreover, Quix offers premium features that further enhance personalization. With our premium subscription, you gain access to advanced features such as viewing your personal test scores and the prioritization of tests based on your performance and study goals. Imagine having a dashboard that not only displays your test scores but also provides insights into which tests require your immediate attention, helping you optimize your study time and focus on areas that need improvement.</p>
                </div>
            </div>
        </section>
        <section className="text-gray-200 font-poppins">
          <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <h1 className="sm:text-3xl text-2xl font-medium font-poppins mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
              <p className="leading-relaxed text-base">But personalization doesn&apos;t stop there. Quix also empowers you to review your tests comprehensively, allowing you to delve into each question to see which ones you answered correctly and which ones you got wrong. This detailed feedback mechanism not only helps reinforce your understanding of the subject matter but also enables targeted learning by identifying areas where you may need additional practice.</p>
            </div>
            <Image alt="content" className="object-cover object-center h-full w-full" src="/QuixLogo.png" width={1200} height={250}></Image>
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