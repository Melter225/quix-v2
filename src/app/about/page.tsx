"use client"

import Image from "next/image";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '/features', image: '/features.png' },
  { name: 'About', href: '/about', image: '/about.png' },
  { name: 'Billing', href: '/billing', image: '/billing.png' },
]


export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="font-poppins">
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
        <section className="text-gray-200 font-poppins">
            <div className="container px-5 py-24 mx-auto">
                <br></br>
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-200 mb-8" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed text-lg">At Quix, we believe that education is the cornerstone of progress and empowerment. Our mission is to cultivate a brighter future by providing accessible and innovative learning opportunities to all. We strive to bridge gaps in education, empowering individuals of all ages and backgrounds to reach their full potential. Through dedication, passion, and creativity, we aim to inspire lifelong learners and shape tomorrow&apos;s leaders. Together, we&apos;re building a world where knowledge knows no bounds and every individual has the opportunity to thrive. Together, we embark on a journey of endless possibilities.</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                <h2 className="text-gray-300 font-medium font-poppins tracking-wider text-sm">ROHAN MAHAPATRA</h2>
                <p className="text-gray-200">Founder</p>
                </div>
            </div>
        </section>
        <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium font-poppins mb-2 text-white">My Journey</h1>
                <div className="h-1 w-16 bg-indigo-500 rounded mt-4"></div>
            </div>
        <p className="lg:w-4/4 w-full mt-5 leading-relaxed text-gray-200 text-opacity-95">Quix began as a passion project in September 2023 when I believed I could create a project that integrated with Schoology and AI to help me prepare for my tests. As my friend saw me programming, he suggested the name &quot;Quix&quot;. I created branding for it, including a logo and social media accounts before continuing its development. A few months later, in late October, I had completed the base for the login mechanism and the studying mechanism. Enthusiastic, I introduced the project to my school, who supported me. Continuing to flesh out the project, I believed it was near completion by January 2024. I bought the temporary domain &quot;quixedu.com&quot; to use for testing purposes. However, the UI was unprofessional to say the least. Additionally, the bulk of the project was in HTML, CSS, and JavaScript, languages that are typically not used in deployment. By February 2024, I had begun to completely rework the UI using Next.js and Tailwind CSS. At the time, I was also pivoting on the idea of Quix as an app; to make it more widely accessible, it no longer paired with a specific educational website, but was a standalone app. Quix can additionally now be used to learn more information about a topic. By March 2024, I had completed the final UI and was beginning to incorporate the logic I had already programmed in Flask and JavaScript. By May, Quix was completed and was being advertised on the social media accounts I had already created for it, leading to the Quix you know and love today.</p>
            </div>
        </div>
        <section className="text-gray-200 font-poppins mb-10">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium font-poppins mb-2 text-white">Accomplishments</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 border-opacity-75 p-6 rounded-lg">
                    <h2 className="text-xl text-gray-300 font-medium font-poppins mb-2">Prototype</h2>
                    <p className="leading-relaxed text-base">Successfully created a prototype of the Quix platform, showcasing its key features and functionality. This achievement lays the foundation for further development and refinement.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 border-opacity-75 p-6 rounded-lg">
                    <h2 className="text-xl text-gray-300 font-medium font-poppins mb-2">Development</h2>
                    <p className="leading-relaxed text-base">Designed both the user interface and backend infrastructure for the Quix platform, ensuring a seamless and efficient learning experience. This achievement encompasses the visual appeal and technical robustness of the platform.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 border-opacity-75 p-6 rounded-lg">
                    <h2 className="text-xl text-gray-300 font-medium font-poppins mb-2">Deployment</h2>
                    <p className="leading-relaxed text-base">Completed the official deployment of the Quix platform, making it accessible to users. This achievement marks a significant milestone in bringing the platform to life and launching it for public use.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-gray-300 font-medium font-poppins mb-2 md:w-2/5">Attributions</h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="leading-relaxed text-base">We&apos;re excited to showcase an array of icons across Quix, each meticulously curated to enhance your engagement. These icons, crafted by talented designers including <a className="text-indigo-400" href="https://www.flaticon.com/free-icons/credit-card" title="credit card icons">Freepik</a>, <a className="text-indigo-400" href="https://www.flaticon.com/free-icons/upward-arrow" title="upward arrow icons">BW Designer</a>, <a className="text-indigo-400" href="https://www.flaticon.com/free-icons/repeat" title="repeat icons">th studio</a>, <a className="text-indigo-400" href="https://www.flaticon.com/free-icons/about" title="about icons">Ilham Fitrotul Hayat</a>, <a className="text-indigo-400" href="https://www.flaticon.com/free-icons/settings" title="settings icons">srip</a>, and <a className="text-indigo-400" href="https://www.flaticon.com/free-icons/login" title="login icons">berkahicon</a> are integral to our platform&apos;s visual identity and functionality. By incorporating their work, we aim to create a visually rich and intuitive experience for our users. From navigating our interface to exploring our features, these icons play a crucial role in simplifying tasks and elevating user interactions. We extend our heartfelt gratitude to all the creators whose artistry enriches the Quix experience.</p>
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