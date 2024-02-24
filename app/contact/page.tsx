import Image from "next/image";


export default function Contact() {
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
        <section className="text-gray-200 font-poppins relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium font-poppins mb-4 text-gray-300">Contact</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Have questions, feedback, or need support? Get in touch with us!</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-200">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-600 bg-opacity-40 rounded border border-gray-400 focus:border-blue-500 focus:bg-gray-800 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    </div>
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-200">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-40 rounded border border-gray-400 focus:border-blue-500 focus:bg-gray-800 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label className="leading-7 text-sm text-gray-200">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-600 bg-opacity-40 rounded border border-gray-400 focus:border-blue-500 focus:bg-gray-800 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-emerald-600 transition duration-300 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-700 rounded-lg text-lg">Submit</button>
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-blue-400 cursor-pointer" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwdTZzNQPDKVNNJHlGPQXSjBwssqHVtKnbLdjCCzRkTJPDsQbNmcsRWLFRxzDHLGKMhVV">community.quix@gmail.com</a>
                    <br></br>
                    <br></br>
                    {/* <p className="leading-normal my-5">49 Smith St.
                        <br></br>
                        Saint Cloud, MN 56301
                    </p> */}
                    <span className="inline-flex">
                        <a className="text-gray-200">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        </a>
                        <a className="ml-4 text-gray-200">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                        </a>
                        <a className="ml-4 text-gray-200">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                        </a>
                        <a className="ml-4 text-gray-200">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        </a>
                    </span>
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