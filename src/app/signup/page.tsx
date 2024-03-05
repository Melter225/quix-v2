import Image from "next/image";


export default function Signup() {
  return (
    <main className="font-poppins">
      <div>
        <div className="h-screen md:flex font-poppins">
          <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
            <div className="mt-12 text-center">
              <h1 className="text-gray-300 font-bold text-5xl relative z-10">Quix</h1>
              <br></br>
              <p className="flex items-center text-gray-200 mb-2 text-xl font-semibold justify-center relative z-10">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-gray-200 rounded-full flex-shrink-0 text">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  </span>Study with tailored practice questions, videos, and documents
              </p>
              <p className="flex items-center text-gray-200 mb-2 text-xl font-semibold justify-center relative z-10">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  </span>Utilize optimized effeciency across affordable plans
              </p>
              <p className="flex items-center text-gray-200 mb-2 text-xl font-semibold justify-center relative z-10">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-gray-200 rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  </span>Leverage the power of highly trained artificial intelligence
              </p>
            </div>
            <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-0"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-0"></div>
            <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-0"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-0"></div>
          </div>
          <div className="flex md:w-1/2 justify-center py-10 items-center">
            <form className="bg-gray-300 rounded-xl w-[69%] shadow-gray-800 shadow-lg">
              <div className="w-full text-center">
                <h1 className="text-gray-700 font-bold text-4xl mb-1 mt-12">Create an account</h1>
                <p className="text-xl font-normal text-gray-800 mb-7">Please chose your credentials</p>
              </div>
              <div className="flex items-center border-2 py-3 pl-5 pr-11 rounded-xl mb-4 w-[80%] ml-[10%] border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800" type="text" name="" id="" placeholder="Email" />
              </div>
              <div className="flex items-center border-2 py-3 pl-5 pr-11 rounded-xl mb-4 w-[80%] ml-[10%] border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
                <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800" type="text" name="" id="" placeholder="Username" />
              </div>
              <div className="flex items-center border-2 py-3 pl-5 pr-11 rounded-xl mb-2 w-[80%] ml-[10%] border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd" />
                </svg>
                <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800" type="password" name="" id="" placeholder="Password" />
              </div>
              <a type="submit" className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" href="/signin">Sign up</a>
              <div className="w-full flex text-center justify-center mt-2">
                <p className="text-gray-800 text-[1.1rem] mr-1">Already have an account?</p>
                <a className="text-indigo-500 hover:text-indigo-600 cursor-pointer text-[1.1rem] mb-12" href="/signin">Sign in</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}