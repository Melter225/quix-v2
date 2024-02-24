import Image from "next/image";


export default function Home() {
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
        <section className="text-gray-200 font-poppins">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image className="lg:w-2/6 md:w-3 w-5 mb-10 object-cover object-center justify-end rounded" alt="HeroImage" src="/QuixImg.png" width={720} height={600}></Image>
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="font-poppins sm:text-4xl text-3xl mb-4 font-medium text-gray-300">Quix: The Future of Education</h1>
              <p className="mb-8 leading-relaxed">Picture this: <br></br><br></br> You're a student, staring at a pile of textbooks and notes, feeling overwhelmed by the looming tests. You've tried every study method in the book, from late-night cram sessions to endless scrolling through online resources, but nothing seems to stick. <br></br><br></br><br></br></p> <h3 className="text-xl font-medium">Introducing Quix - your academic ally in the digital age.</h3> <p><br></br> With Quix, say goodbye to the days of frantic cramming and endless resource hunting. Our sleek interface, built with a Flask backend, Next.js, and Tailwind CSS, puts the power of preparation at your fingertips. Quix transforms your browser into a digital classroom, where every click brings you one step closer to academic success.</p>
              <br></br>
              <br></br>
              <div className="flex justify-center">
              <a className="inline-flex text-white bg-gradient-to-r bg-sky-700 shadow-lg shadow-sky-800 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-sky-700 transition-colors duration-200 rounded-xl text-lg cursor-pointer" href="/signin">Get Started</a>
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium font-poppins mb-2 text-gray-300">Unlock Your Potential</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-200">Discover how Quix can revolutionize your study routine and propel you toward academic success. With its intuitive design and array of features, Quix streamlines studying, making it both efficient and enjoyable.</p>
            </div>
            <div className="scroll-container overflow-x-hidden">
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
            </div>
          </div>
        </section>
        <section className="text-gray-200 font-poppins">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium font-poppins text-gray-300 mb-4">Empowering Tools</h1>
              <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-500s">Discover the suite of innovative features that make Quix the ultimate study companion. From intuitive design to advanced functionality, Quix is tailored to enhance every aspect of your learning journey.</p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-xl font-poppins font-medium mb-3">Personalized Learning Paths</h2>
                  <p className="leading-relaxed text-base">Tailor your study journey with personalized learning paths that adapt to your strengths and weaknesses. Quix's intelligent algorithms analyze your progress and recommend targeted resources to optimize learning outcomes.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer hover:text-indigo-600" href="/personalization">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
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
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
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
            <div className="flex justify-center">
              <a className="inline-flex text-white bg-gradient-to-r bg-sky-700 shadow-lg shadow-sky-800 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-sky-700 transition-colors duration-200 rounded-xl text-lg cursor-pointer" href="/about">Get Started</a>
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
              <p className="mt-4 text-base w-full text-gray-200">Pioneering Tomorrow's Education</p>
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