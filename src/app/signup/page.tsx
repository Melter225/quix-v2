"use client"

import Image from "next/image";
import { signIn } from 'next-auth/react';
import { useState } from 'react'
import { TypeAnimation } from "react-type-animation"
import { z } from "zod"


const Signup = () => {
  const GoogleOAuth = async () => {
    await signIn('google', {callbackUrl:"/dashboard"}); // This triggers the authentication flow with Google
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(true);
  const [isPhase2, setIsPhase2] = useState(false)
  const [isPhase3, setIsPhase3] = useState(false)
  const [isPhase4, setIsPhase4] = useState(false)

  const emailSchema = z.object({
    email: z.string()
      .min(1, 
        {message: "Please enter an email"})
      .max(50, 
        {message: "Please enter an email with less than fifty characters"}),
    username: z.string()
      .min(1, 
        {message: "Please enter a username"})
      .max(50, 
        {message: "Please enter a username with less than fifty characters"}),
    password: z.string()
      .min(8, 
        {message: "Please enter a password with at least eight characters"})
      .max(50,
        {message: "Please enter a password with less than fifty characters"})
      .refine((value) => /[A-Z]/.test(value), 
        {message: "Please enter a password with at least one uppercase character"})
      .refine((value) => /[^a-zA-Z0-9\s]/.test(value), 
      {message: "Please enter a password with at least one uppercase character"}),
    retype_password: z.string()
        .refine((value, {ctx}) => value === ctx.password, 
        {message: "Please enter a password with at least one uppercase character"}),
    phone: z.string()
      .min(5, 
          {message: "Please enter a phone number with at least five characters"})
      .max(20,
          {message: "Please enter a phone number with less than twenty characters"})
      .refine((value) => !/[a-zA-Z]/.test(value), 
      {message: "Please enter a valid phone number"}),
    verify_phone: z.string()
      .min(6, 
          {message: "Please enter a valid verification code"})
      .max(6,
          {message: "Please enter a valid verification code"})
      .refine((value) => /[0-9]/.test(value), 
      {message: "Please enter a valid verification code"}),
    verify_email: z.string()
      .min(6, 
          {message: "Please enter a valid verification code"})
      .max(6,
          {message: "Please enter a valid verification code"})
      .refine((value) => /[0-9]/.test(value), 
      {message: "Please enter a valid verification code"}),
  })

  let phoneCode: string | number = "";
  let emailCode: string | number = "";

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  

  const passwordEye = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const passwordEye2 = () => {
    setIsPasswordVisible2((prev) => !prev);
  };

  const phase2 = () => {
    setIsPhase2((prev) => true);
  };

  const phase3 = () => {
    setIsPhase3((prev) => true);
  };

  const phase4 = () => {
    if (phoneVerification() == true) {
      setIsPhase4((prev) => true);
    }
  };

  function phoneGeneration() {
    phoneCode = getRandomInt(100000,999999)
    console.log(phoneCode)

    //Send text to phone
  };

  function phoneVerification() {
    const phoneInput = document.getElementById("phoneInput") as HTMLInputElement;
    const phoneNumber = phoneInput?.value ? Number(phoneInput.value) : null;

    if (phoneNumber === phoneCode) {
      console.log("approved", phoneCode, phoneNumber)
      return true
    }
    else {
      console.log(phoneCode, phoneNumber)
      return false
    }
  }

  // Client-side code
  const handleSubmit = async (to: string, message: string) => {
    await fetch("/api/email", {
      method: "POST",
      headers: {
      "Content-Type": "application/json", // Set the content type to application/json
    },
      body: JSON.stringify({ to, message })
    })
  }

  function emailGeneration() {
    emailCode = getRandomInt(100000,999999)
    console.log(emailCode)

    //`${document.getElementById("userEmail").value}`

    handleSubmit("romahapatra@gmail.com", `${emailCode}`);
  }

  function emailVerification() {
    const emailInput = document.getElementById("emailInput") as HTMLInputElement;
    const email = emailInput?.value ? Number(emailInput.value) : null;

    if (email === emailCode) {
      console.log("approved", emailCode, email)
      window.location.href = "/"
    }
    else {
      console.log(emailCode, email)
    }
  }

  return (
    <main className="font-poppins bg-gradient-to-b from-[#030c17] via-[#030c17] to-[#1C497C]">
      <div>
        <div className="h-screen md:flex font-poppins">
          <div className="relative overflow-hidden sm:hidden md:flex lg:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
            <div className="mt-12 text-center px-4">
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
          <div className="flex md:w-[50%] sm:w-full h-screen justify-center py-10 items-center">
            <form className="bg-gray-300 rounded-xl lg:w-[69%] md:w-[82%] sm:w-[69%] w-[69%] shadow-gray-800 shadow-lg">
              {/* <div className="w-full text-center">
                <h1 className="text-gray-700 font-bold text-[2.1rem] mb-1 mt-12">Welcome Back</h1>
                <p className="text-xl font-normal text-gray-800 mb-7">Please enter your credentials</p>
              </div> */}
              <div className="w-full text-center">
                 <TypeAnimation
                  sequence={[
                    "Welcome to Quix!"
                  ]}
                  wrapper="h1"
                  speed={10}
                  className="text-gray-700 font-bold text-[2.1rem] mb-2 mt-12">
                </TypeAnimation>
                {/* <h1 className="text-gray-700 font-bold text-4xl mb-1 mt-12">Create an account</h1> */}
                <p className="text-xl font-normal text-gray-800 mb-7">Create a free account</p>
              </div>
                {/* {!isPhase2 && (
                  <div className="flex mt-4 gap-x-2 w-[80%] ml-[10%]">
                    <button
                      onClick={GoogleOAuth}
                      type="button"
                      className="flex items-center justify-center w-full p-2 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                    >
                      <Image src="/google.png" alt="google" width={20} height={20} /> */}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                      </svg> */}
                      {/* <p className="ml-3">Sign Up with Google</p>
                    </button> */}
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
                  {/* </div> */}
                {/* )} */}
                {/* {!isPhase2 && (
                  <div className="relative flex items-center justify-center w-[80%] ml-[10%] my-6 border border-t border-gray-700">
                    <div className="absolute px-3 text-gray-800 bg-gray-300">Or</div>
                  </div>
                )} */}
                {!isPhase2 && (
                  <label className="ml-[10%] font-semibold text-lg text-gray-700">Email</label>
                )}
                {!isPhase2 && (
                  <div className="flex items-center border-2 py-3 rounded-lg mb-4 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                    <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id="userEmail" placeholder="Email" />
                  </div>
                )}
                {!isPhase2 && (
                  <label className="ml-[10%] font-semibold text-lg text-gray-700">Username</label>
                )}
                {!isPhase2 && (
                  <div className="flex items-center border-2 py-3 rounded-lg mb-4 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id=""
                      placeholder="Username" />
                  </div>
                )}
                {isPhase2 && !isPhase3 && (
                  <label className="ml-[10%] font-semibold text-lg text-gray-700">Password</label>
                )}
                {isPhase2 && !isPhase3 && (
                  <div className="flex items-center border-2 py-3 rounded-lg mb-2 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {isPasswordVisible ? (
                      <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="password" name="" id=""
                        placeholder="Password" />
                    ) : (
                      <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id=""
                        placeholder="Password" />
                    )}
                    <Image className="mr-4 hover:cursor-pointer" src={isPasswordVisible ? '/eye_off.png' : '/eye.png'} alt="eye" id="eye" width={25} height={25} onClick={passwordEye} />
                  </div>
                )}
                {isPhase2 && !isPhase3 && (
                  <div className="w-full flex flex-wrap justify-between items-center mt-1">
                    <div className="flex items-center mb-4 ml-[10%] md:w-[80%] md:justify-center lg:w-auto lg:justify-start sm:w-[80%] sm:justify-center w-[80%] justify-center">
                      {/* <input type="checkbox" className="mr-1 text-link font-poppins bg-gray-100 border-gray-300 rounded-full"></input> */}
                      <p className="text-gray-800 text-xs">Must be at least 8 characters.</p>
                    </div>
                    {/* <a className="underline text-center text-link hover:text-link_hover cursor-pointer text-sm transition-colors duration-200 mr-[10%] md:w-[80%] md:justify-center lg:w-auto lg:justify-start sm:w-[80%] sm:justify-center w-[80%] ml-[10%] mb-0 sm:ml-[10%] md:ml-[10%] lg:ml-0 lg:mb-2 md:mb-0 sm:mb-0 mt-[-0.5rem] lg:mt-0 md:mt-[-0.5rem] sm:[-0.5rem]" href="/reset">Forgot Password?</a> */}
                  </div>
                )}
                {isPhase2 && !isPhase3 && (
                  <label className="ml-[10%] font-semibold text-lg text-gray-700">Retype Password</label>
                )}
                {isPhase2 && !isPhase3 && (
                  <div className="flex items-center border-2 py-3 rounded-lg mb-2 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {isPasswordVisible2 ? (
                      <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="password" name="" id=""
                        placeholder="Retype Password"
                        onPaste={(e) => e.preventDefault()} />
                    ) : (
                      <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id=""
                        placeholder="Retype Password"
                        onPaste={(e) => e.preventDefault()} />
                    )}
                    <Image className="mr-4 hover:cursor-pointer" src={isPasswordVisible2 ? '/eye_off.png' : '/eye.png'} alt="eye" id="eye" width={25} height={25} onClick={passwordEye2} />
                  </div>
                )}
                {isPhase3 && !isPhase4 && (
                  <label className="ml-[10%] font-semibold text-lg text-gray-700">Phone Number</label>
                )}
                {isPhase3 && !isPhase4 && (
                  <div className="items-center mb-4">
                    <div className="flex items-center border-2 py-3 rounded-lg mb-5 mt-1 border-gray-800 w-[80%] ml-[10%]">
                      <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="tel" name="" id=""
                        placeholder="Phone Number" />
                    </div>
                    <div className="flex justify-center">
                      <a className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 px-3 py-2 rounded-lg text-gray-200 font-semibold cursor-pointer text-center text-lg" onClick={phoneGeneration}>Send Code</a>
                    </div>
                  </div>
                )}
                {isPhase3 && !isPhase4 && (
                  <label className="ml-[10%] font-semibold text-lg text-gray-700">Phone Number Verification</label>
                )}
                {isPhase3 && !isPhase4 && (
                  <div className="flex items-center border-2 py-3 rounded-lg mb-2 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="number" name="" id="phoneInput"
                      placeholder="Verification Code"
                      onPaste={(e) => e.preventDefault()} />
                   </div>
                )}
                {isPhase4 && (
                  <label className="ml-[10%] font-semibold text-lg text-gray-700">Email Verification</label>
                )}
                {isPhase4 && (
                  <div className="items-center mb-4">
                    <div className="flex items-center border-2 py-3 rounded-lg mb-5 mt-1 border-gray-800 w-[80%] ml-[10%]">
                      <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                      </svg>
                      <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id="emailInput"
                        placeholder="Verification Code" />
                    </div>
                    <div className="flex justify-center">
                      <a className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 px-3 py-2 rounded-lg text-gray-200 font-semibold cursor-pointer text-center text-lg" onClick={emailGeneration}>Send Code</a>
                    </div>
                  </div>
                )}
                {/* {isPhase2 && (
                  <label className="ml-[10%] font-semibold text-lg text-gray-700">Phone Number</label>
                )}
                {isPhase2 && (
                  <div className="flex items-center border-2 py-3 rounded-lg mb-2 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="tel" pattern="\+\d{1,3} \(\d{3}\) \d{3}-\d{3}-\d{4}" name="" id=""
                      placeholder="Phone Number" />
                  </div>
                )} */}
              <p className="text-gray-800 text-[0.825rem] mb-2 mt-4 text-center px-[10%]">By signing up, you accept our <a className="text-link hover:text-link_hover transition-colors duration-200 underline font-semibold" href="/termsofservice">terms and conditions</a> and agree to our <a className="text-link hover:text-link_hover transition-colors duration-200 underline font-semibold" href="/privacypolicy">privacy policy</a>.</p>
              {/* <p className="text-sm text-center mb-1">By creating an account, you accept our <a className="text-link hover:text-link_hover transition-colors duration-200" href="/termsofservice">terms and conditions</a></p> */}
              {!isPhase2 && (
                <a type="submit" className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" onClick={phase2}>Continue</a>
              )}
              {isPhase2 && !isPhase3 && (
                <a type="submit" className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" onClick={phase3}>Continue</a>
              )}
              {isPhase3 && !isPhase4 && (
                <a type="submit" className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" onClick={phase4}>Continue</a>
              )}
              {isPhase4 && (
                <a type="submit" className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" onClick={emailVerification}>Sign Up</a>
              )}
              {/* <div className="w-full flex justify-center items-center mt-3">
                <div className="border-b-2 border-gray-800 w-[40%] mr-2"></div>
                <p className="text-gray-800 w-[6%]">Or</p>
                <div className="border-b-2 border-gray-800 w-[40%] ml-2"></div>
              </div> */}
              <div className="w-full flex text-center justify-center mt-4">
                <p className="text-gray-800 sm:text-sm md:text-sm lg:text-base text-sm mr-1">Already have an account?</p>
                <a className="text-link hover:text-link_hover cursor-pointer sm:text-sm md:text-sm lg:text-base text-sm mb-12 transition-colors duration-200" href="/signin">Sign in</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;