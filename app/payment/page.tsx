import Image from "next/image";


export default function Payment() {
  return (
    <main>
      <div>
        {/* <header className="text-gray-200 bg-navy mt-0 font-poppins fixed w-screen z-50">
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
        </footer> */}
      </div>
    </main>
  );
}