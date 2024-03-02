import Image from "next/image";


export default function Signin() {
  return (
    <main>
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
                <h1 className="text-gray-700 font-bold text-4xl mb-1 mt-12">Welcome Back</h1>
                <p className="text-xl font-normal text-gray-800 mb-7">Please enter your credentials</p>
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
              <div className="w-full flex text-center justify-center mt-4">
                <input type="checkbox" className="mr-1"></input>
                <p className="text-gray-800 text-base mr-12">Remember Me</p>
                <a className="text-indigo-500 hover:text-indigo-600 cursor-pointer text-base" href="/reset">Forgot Password?</a>
              </div>
              <div className="relative flex items-center justify-center w-[80%] ml-[10%] mt-6 border border-t border-gray-700">
                <div className="absolute px-3 text-gray-800 bg-gray-300">Or</div>
              </div>
              <div className="flex mt-4 gap-x-2 w-[80%] ml-[10%]">
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-2 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p className="ml-3">Continue with Google</p>
                </button>
                {/* <button className="flex items-center justify-center w-full p-2 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </button>
                <button className="flex items-center justify-center w-full p-2 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                  </svg>
                </button> */}
              </div>
              <a type="submit" className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" href="/login">Login</a>
              {/* <div className="w-full flex justify-center items-center mt-3">
                <div className="border-b-2 border-gray-800 w-[40%] mr-2"></div>
                <p className="text-gray-800 w-[6%]">Or</p>
                <div className="border-b-2 border-gray-800 w-[40%] ml-2"></div>
              </div> */}
              <div className="w-full flex text-center justify-center mt-2">
                <p className="text-gray-800 text-[1.1rem] mr-1">Don&apos;t have an account?</p>
                <a className="text-indigo-500 hover:text-indigo-600 cursor-pointer text-[1.1rem] mb-12" href="/signup">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}