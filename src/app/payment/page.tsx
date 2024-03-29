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


export default function Payment() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="font-poppins">
      <div>
        {/* bg-<header className="inset-x-0 top-0 z-50 text-gray-200 navglass mt-0 font-poppins fixed w-screen">
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
        <div className="m-4">
            <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
                <header className="flex flex-col justify-center items-center">
                <div
                    className="relative"
                    x-show="card === 'front'"
                    x-transition:enter="transition ease-out duration-300"
                    x-transition:enter-start="opacity-0 transform scale-90"
                    x-transition:enter-end="opacity-100 transform scale-100"
                >
                    <Image className="w-full h-auto" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png" alt="front credit card"></Image>
                    <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                    <p className="number mb-5 sm:text-xl" x-text="cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'"></p>
                    <div className="flex flex-row justify-between">
                        <p x-text="cardholder !== '' ? cardholder : 'Card holder'"></p>
                        <div className="">
                        <span x-text="expired.month"></span>
                        <span x-show="expired.month !== ''">/</span>
                        <span x-text="expired.year"></span>
                        </div>
                    </div>
                    </div>
                </div>
                <div
                    className="relative"
                    x-show="card === 'back'"
                    x-transition:enter="transition ease-out duration-300"
                    x-transition:enter-start="opacity-0 transform scale-90"
                    x-transition:enter-end="opacity-100 transform scale-100"
                >
                    <Image className="w-full h-auto" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png" alt=""></Image>
                    <div
                    className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12"
                    >
                    <div className="border border-white w-16 h-9 flex justify-center items-center">
                        <p x-text="securityCode !== '' ? securityCode : 'code'"></p>
                    </div>
                    </div>
                </div>
                <ul className="flex">
                    <li className="mx-2">
                    <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
                    </li>
                    <li className="mx-2">
                    <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
                    </li>
                    <li className="ml-5">
                    <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
                    </li>
                </ul>
                </header>
                <main className="mt-4 p-4">
                <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
                <div className="">
                    <div className="my-3">
                    <input
                        type="text"
                        className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        placeholder="Card holder"
                        // maxlength="22"
                        x-model="cardholder"
                    />
                    </div>
                    <div className="my-3">
                    <input
                        type="text"
                        className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        placeholder="Card number"
                        x-model="cardNumber"
                        x-on:keydown="format()"
                        x-on:keyup="isValid()"
                        // maxlength="19"
                    />
                    </div>
                    <div className="my-3 flex flex-col">
                    <div className="mb-2">
                        <label className="text-gray-700">Expired</label>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <select
                        name=""
                        id=""
                        className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        x-model="expired.month"
                        >
                        <option value="" selected disabled>MM</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        </select>
                        <select
                        name=""
                        id=""
                        className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        x-model="expired.year"
                        >
                        <option value="" selected disabled>YY</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        </select>
                        <input
                        type="text"
                        className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        placeholder="Security code"
                        // maxlength="3"
                        x-model="securityCode"
                        x-on:focus="card = 'back'"
                        x-on:blur="card = 'front'"
                        />
                    </div>
                    </div>
                </div>
                </main>
                <footer className="mt-6 p-4">
                <button className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors" x-bind:disabled="!isValid"
                x-on:click="onSubmit()"
                >
                    Pay now
                </button>
                </footer>
            </div>
            </div>
        <footer className="bg-navy mb-0 text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
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
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
            <div className="border-t border-gray-400/100 pt-4">
              <p className="text-sm leading-5 text-gray-300 mt-4">&copy; 2024 Quix, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer> */}
      </div>
    </main>
  );
}