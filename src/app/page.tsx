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


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main>
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
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image className="lg:w-2/6 md:w-2/5 sm:w-[46.66%] mb-10 object-cover object-center justify-end rounded" alt="HeroImage" src="/QuixImg.png" width={720} height={600}></Image>
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="font-poppins text-3xl font-bold tracking-tight mb-5 sm:text-5xl text-gray-300">Quix: The Future of Education</h1>
              <p className="mb-8 leading-relaxed">Picture this: <br></br><br></br> You&apos;re a student, staring at a pile of textbooks and notes, feeling overwhelmed by the looming tests. You&apos;ve tried every study method in the book, from late-night cram sessions to endless scrolling through online resources, but nothing seems to stick.<br></br><br></br></p> <h3 className="text-2xl font-semibold">Introducing Quix - your academic ally in the digital age</h3> <p><br></br> With Quix, say goodbye to the days of frantic cramming and endless resource hunting. Our sleek interface, built with a Flask backend, Next.js, and Tailwind CSS, puts the power of preparation at your fingertips. Quix transforms your browser into a digital classroom, where every click brings you one step closer to academic success.<br></br><br></br>And it&apos;s not just for students. Whether you&apos;re a lifelong learner or an adult seeking to explore new topics, Quix seamlessly adapts to your needs, making it a versatile tool for anyone on a quest for knowledge.</p>
              <br></br>
              <br></br>
              <div className="flex justify-center">
              <a className="inline-flex text-white bg-gradient-to-r bg-sky-700 shadow-lg shadow-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-sky-700 transition-colors duration-200 rounded-2xl text-lg cursor-pointer" href="/signup">Get Started</a>
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h2 className="text-base font-semibold tracking-wider leading-7 text-indigo-500 mb-3">TESTIMONIALS</h2>
                <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-3">Unlock Your Potential</h2>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                {/* <p className="mt-2 text-lg leading-8 w-[110%] ml-[-5%] text-gray-200">Discover how Quix can transform your learning experience and propel you towards success. With its user-friendly interface and comprehensive features, Quix makes learning efficient, effective, and enjoyable for learners of all ages.</p> */}
              </div>
              {/* <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium font-poppins mb-2 text-gray-300">Unlock Your Potential</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div> */}
              <p className="lg:w-1/2 text-lg w-full leading-8 text-gray-200">Discover how Quix can transform your learning experience and propel you towards success. With its user-friendly interface and comprehensive features, Quix makes learning efficient, effective, and enjoyable for learners of all ages.</p>
            </div>
            <section className="text-gray-600">
              <div className="container px-5 py-0 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-gray-200 p-8 border-gray-700 border-4 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-600 mb-4" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6 font-bold tracking-tight">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90&apos;s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                      <a className="inline-flex items-center">
                        <Image alt="testimonial" src="/repeat.png" width={30} height={30} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></Image>
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="font-bold tracking-tight text-gray-700">Holden Caulfield</span>
                          <span className="text-gray-600 text-sm font-semibold">UI DEVELOPER</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-gray-200 p-8 border-gray-700 border-4 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-600 mb-4" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6 font-bold tracking-tight">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90&apos;s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                      <a className="inline-flex items-center">
                        <Image alt="testimonial" src="/repeat.png" width={30} height={30} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></Image>
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="font-poppins font-bold tracking-tight text-gray-700">Alper Kamu</span>
                          <span className="text-gray-600 text-sm font-semibold">DESIGNER</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-gray-200 p-8 border-gray-700 border-4 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-600 mb-4" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-6 font-bold tracking-tight">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90&apos;s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                      <a className="inline-flex items-center">
                        <Image alt="testimonial" src="/repeat.png" width={30} height={30} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></Image>
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="font-poppins font-bold tracking-tight text-gray-700">Holden Caulfield</span>
                          <span className="text-gray-600 text-sm font-semibold">UI DEVELOPER</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
          </div>
        </section>
        <section className="text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <div className="mx-auto max-w-2xl text-center mt-10 mb-5">
                <h2 className="text-base font-semibold tracking-wider leading-7 text-indigo-500 mb-3">FEATURES</h2>
                <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-3">Empowering Tools</h2>
                <p className="mt-2 text-lg leading-8 w-[110%] ml-[-5%] text-gray-200">Discover the suite of innovative features that make Quix the ultimate study companion. From intuitive design to advanced functionality, Quix is tailored to enhance every aspect of your learning journey.</p>
              </div>
              {/* <h1 className="sm:text-3xl text-2xl font-medium font-poppins text-gray-300 mb-4">Empowering Tools</h1>
              <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-500s">Discover the suite of innovative features that make Quix the ultimate study companion. From intuitive design to advanced functionality, Quix is tailored to enhance every aspect of your learning journey.</p> */}
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg> */}
                  <Image src="/puzzle.png" alt="unique puzzle" width={35} height={35}></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-medium mb-3">Personalized Learning Paths</h2>
                  <p className="leading-relaxed text-base">Tailor your study journey with personalized learning paths that adapt to your strengths and weaknesses. Quix&apos;s intelligent algorithms analyze your progress and recommend targeted resources to optimize learning outcomes.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer hover:text-indigo-600" href="/personalization">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg> */}
                  <Image src="/repeat.png" alt="feedback loop" width={38} height={38}></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-medium mb-3">Interactive Study Guides</h2>
                  <p className="leading-relaxed text-base">Dive into comprehensive study guides curated by experts in various subjects. Interactive elements and multimedia resources ensure engaging and effective learning experiences.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer hover:text-indigo-600" href="/interactivity">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M3 15L9 9L15 15L21 9M21 9L27 15M27 15L33 9M33 9L39 15"></path>
                  </svg> */}
                  <Image src="/economy.png" alt="upward graph" width={46} height={46}></Image>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-medium mb-3">Real-time Performance Insights</h2>
                  <p className="leading-relaxed text-base">Stay on top of your academic goals with real-time progress tracking. Visualize your achievements, track study time, and monitor quiz scores to identify areas for improvement and celebrate successes.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer hover:text-indigo-600" href="/performance">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        </section>
        <div className="max-w-screen-xl mx-auto px-5 min-h-sceen">
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
            <a className="inline-flex text-white bg-gradient-to-r bg-sky-700 shadow-lg shadow-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-sky-700 transition-colors duration-200 rounded-2xl text-lg cursor-pointer" href="/signup">Get Started</a>
          </div>
        </div>
        <footer className="bg-navy mb-0 text-gray-200 font-poppins">
          <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
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