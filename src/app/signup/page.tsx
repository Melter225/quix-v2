"use client"

import Image from "next/image";
import { signIn } from 'next-auth/react';
import { useState } from 'react'
import { TypeAnimation } from "react-type-animation"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import {
  Input
} from "@/components/ui/input";


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
  retype_password: z.string(),
  phone: z.string()
    .optional(),
  verify_phone: z.string()
    .optional(),
  verify_email: z.string()
    .min(6, 
        {message: "Please enter a valid verification code"})
    .max(6,
        {message: "Please enter a valid verification code"})
    .refine((value) => /[0-9]/.test(value), 
    {message: "Please enter a valid verification code"}),
}).refine((value) => value.password === value.retype_password,
  {message: "Please enter a password with at least one uppercase character", path: ["retype_password"]}) 

const Signup = () => {
  const GoogleOAuth = async () => {
    await signIn('google', {callbackUrl:"/dashboard"}); // This triggers the authentication flow with Google
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(true);
  const [isPhase2, setIsPhase2] = useState(false)
  const [isPhase3, setIsPhase3] = useState(false)
  const [isPhase4, setIsPhase4] = useState(false)
  // const [email, setEmail] = useState("")
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [retypePassword, setRetypePassword] = useState("")
  // const [phone, setPhone] = useState("")
  // const [verifyPhone, setVerifyPhone] = useState("")
  // const [verifyEmail, setVerifyEmail] = useState("")

  // let phoneCode: string | number = "";
  let emailCode: string | number = "";

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      retype_password: "",
      phone: "",
      verify_phone: "",
      verify_email: ""
    }
    })

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
    if (form.getValues().email.length >= 1 &&  form.getValues().email.length <= 50 && form.getValues().username.length >= 1 &&  form.getValues().username.length <= 50) {
      setIsPhase2((prev) => true);
    }
  };

  const phase3 = () => {
    if (form.getValues().password.length >= 8 && form.getValues().password.length <= 50 && form.getValues().password && form.getValues().retype_password === form.getValues().password) {
      setIsPhase3((prev) => true);
    }
  };

  const phase4 = () => {
    setIsPhase4((prev) => true);
  };

  const [phoneCode, setPhoneCode] = useState("");

  function phoneGeneration() {
    const code = getRandomInt(100000, 999999);
    setPhoneCode(code.toString()); // Convert code to string and update state
    console.log(code);
    // Send text to phone
  }

  function phoneVerification() {
    const phoneInput = document.getElementById("verify_phone") as HTMLInputElement;
    const phoneNumber = phoneInput?.value ? phoneInput.value : null;

    console.log(phoneCode);

    if (phoneNumber === phoneCode) {
      console.log("approved", phoneCode, phoneNumber);
      return true;
    } else {
      console.log(phoneCode, phoneNumber);
      return false;
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
    const emailInput = document.getElementById("verify_email") as HTMLInputElement;
    const email = emailInput?.value ? Number(emailInput.value) : null;

    if (email === emailCode) {
      console.log("approved", emailCode, email)
      window.location.href = "/"
    }
    else {
      console.log(emailCode, email)
    }
  }

  async function onSignup() {
    const userData = form.getValues()
    console.log("user added", userData)

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: userData.email
      })
    })
  }

  // console.log(form.getValues())

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
            <Form {...form}>
              <form className="bg-gray-300 rounded-xl lg:w-[69%] md:w-[82%] sm:w-[69%] w-[69%] shadow-gray-800 shadow-lg" onSubmit={form.handleSubmit(onSignup)}>
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
                  {!isPhase2 && (
                    <label className="ml-[10%] font-semibold text-lg text-gray-700">Email</label>
                  )}
                  {!isPhase2 && (
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Email</FormLabel> */}
                            <FormControl>
                              <div className="flex items-center border-2 py-3 rounded-lg mb-4 mt-1 border-gray-800 w-[80%] ml-[10%]">
                                <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="4"></circle>
                                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                </svg>
                                <input placeholder="Email" id="email" className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" {...field} />
                              </div>
                            </FormControl>
                            {/* <FormDescription>This is your email.</FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  )}
                  {!isPhase2 && (
                    <label className="ml-[10%] font-semibold text-lg text-gray-700">Username</label>
                  )}
                  {!isPhase2 && (
                      <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Email</FormLabel> */}
                          <FormControl>
                            <div className="flex items-center border-2 py-3 rounded-lg mb-4 mt-1 border-gray-800 w-[80%] ml-[10%]">
                              <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                              </svg>
                              <input placeholder="Username" id="username" className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" {...field} />
                            </div>
                          </FormControl>
                          {/* <FormDescription>This is your email.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    // <div className="flex items-center border-2 py-3 rounded-lg mb-4 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    //   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" fill="none"
                    //     viewBox="0 0 24 24" stroke="currentColor">
                    //     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    //       d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    //   </svg>
                    //   <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id=""
                    //     placeholder="Username" />
                    // </div>
                  )}
                  {isPhase2 && !isPhase3 && (
                    <label className="ml-[10%] font-semibold text-lg text-gray-700">Password</label>
                  )}
                  {isPhase2 && !isPhase3 && (
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Email</FormLabel> */}
                            <FormControl>
                              <div className="flex items-center border-2 py-3 rounded-lg mb-3 mt-1 border-gray-800 w-[80%] ml-[10%]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd" />
                                </svg>
                                <input className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" type={isPasswordVisible ? 'text' : 'password' } id="password"
                                  placeholder="Password" {...field} />
                                <Image className="mr-4 hover:cursor-pointer" src={isPasswordVisible ? '/eye_off.png' : '/eye.png'} alt="eye" id="eye" width={25} height={25} onClick={passwordEye} />
                                {/* <input placeholder="Password" id="password" className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" {...field} /> */}
                              </div>
                            </FormControl>
                            {/* <FormDescription>This is your email.</FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                    />
                    // <div className="flex items-center border-2 py-3 rounded-lg mb-2 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    //   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" viewBox="0 0 20 20"
                    //     fill="currentColor">
                    //     <path fill-rule="evenodd"
                    //       d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    //       clip-rule="evenodd" />
                    //   </svg>
                    //   {isPasswordVisible ? (
                    //     <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="password" name="" id=""
                    //       placeholder="Password" />
                    //   ) : (
                    //     <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id=""
                    //       placeholder="Password" />
                    //   )}
                    //   <Image className="mr-4 hover:cursor-pointer" src={isPasswordVisible ? '/eye_off.png' : '/eye.png'} alt="eye" id="eye" width={25} height={25} onClick={passwordEye} />
                    // </div>
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
                      <FormField
                      control={form.control}
                      name="retype_password"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Email</FormLabel> */}
                          <FormControl>
                            <div className="flex items-center border-2 py-3 rounded-lg mb-3 mt-1 border-gray-800 w-[80%] ml-[10%]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                  clip-rule="evenodd" />
                              </svg>
                              <input className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" type={isPasswordVisible2 ? 'text' : 'password' } id="password"
                                placeholder="Retype Password" {...field} />
                              <Image className="mr-4 hover:cursor-pointer" src={isPasswordVisible2 ? '/eye_off.png' : '/eye.png'} alt="eye" id="eye" width={25} height={25} onClick={passwordEye2} />
                              {/* <input placeholder="Password" id="password" className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" {...field} /> */}
                            </div>
                          </FormControl>
                          {/* <FormDescription>This is your email.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                  />
                    // <div className="flex items-center border-2 py-3 rounded-lg mb-2 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    //   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 ml-5" viewBox="0 0 20 20"
                    //     fill="currentColor">
                    //     <path fill-rule="evenodd"
                    //       d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    //       clip-rule="evenodd" />
                    //   </svg>
                    //   {isPasswordVisible2 ? (
                    //     <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="password" name="" id=""
                    //       placeholder="Retype Password"
                    //       onPaste={(e) => e.preventDefault()} />
                    //   ) : (
                    //     <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id=""
                    //       placeholder="Retype Password"
                    //       onPaste={(e) => e.preventDefault()} />
                    //   )}
                    //   <Image className="mr-4 hover:cursor-pointer" src={isPasswordVisible2 ? '/eye_off.png' : '/eye.png'} alt="eye" id="eye" width={25} height={25} onClick={passwordEye2} />
                    // </div>
                  )}
                  {isPhase3 && !isPhase4 && (
                    <label className="ml-[10%] font-semibold text-lg text-gray-700">Phone Number (Optional)</label>
                  )}
                  {isPhase3 && !isPhase4 && (
                      <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Email</FormLabel> */}
                          <FormControl>
                            <div className="items-center mb-4">
                              <div className="flex items-center border-2 py-3 rounded-lg mb-4 mt-1 border-gray-800 w-[80%] ml-[10%]">
                                <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <input placeholder="Phone Number" id="phone" className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" {...field} />
                              </div>
                              <div className="flex justify-center">
                                <button className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 px-3 py-2 rounded-lg text-gray-200 font-semibold cursor-pointer text-center text-lg" onClick={phoneGeneration}>Send Code</button>
                              </div>
                            </div>
                          </FormControl>
                          {/* <FormDescription>This is your email.</FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    // <div className="items-center mb-4">
                    //   <div className="flex items-center border-2 py-3 rounded-lg mb-5 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    //     <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    //       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    //     </svg>
                    //     <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="tel" name="" id=""
                    //       placeholder="Phone Number" />
                    //   </div>
                    //   <div className="flex justify-center">
                    //     <a className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 px-3 py-2 rounded-lg text-gray-200 font-semibold cursor-pointer text-center text-lg" onClick={phoneGeneration}>Send Code</a>
                    //   </div>
                    // </div>
                  )}
                  {isPhase3 && !isPhase4 && (
                    <label className="ml-[10%] font-semibold text-lg text-gray-700">Phone Number Verification</label>
                  )}
                  {isPhase3 && !isPhase4 && (
                    <FormField
                    control={form.control}
                    name="verify_phone"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Email</FormLabel> */}
                        <FormControl>
                          <div className="flex items-center border-2 py-3 rounded-lg mb-4 mt-1 border-gray-800 w-[80%] ml-[10%]">
                            <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <input placeholder="Verification Code" onPaste={(e) => e.preventDefault()} id="verify_phone" type="number" className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" {...field} />
                          </div>
                        </FormControl>
                        {/* <FormDescription>This is your email.</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                    // <div className="flex items-center border-2 py-3 rounded-lg mb-2 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    //   <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    //     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    //   </svg>
                    //   <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="number" name="" id="phoneInput"
                    //     placeholder="Verification Code"
                    //     onPaste={(e) => e.preventDefault()} />
                    // </div>
                  )}
                  {isPhase4 && (
                    <label className="ml-[10%] font-semibold text-lg text-gray-700">Email Verification</label>
                  )}
                  {isPhase4 && (
                      <FormField
                        control={form.control}
                        name="verify_email"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Email</FormLabel> */}
                            <FormControl>
                              <div className="items-center mb-4">
                                <div className="flex items-center border-2 py-3 rounded-lg mb-5 mt-1 border-gray-800 w-[80%] ml-[10%]">
                                  <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                  </svg>
                                  <input placeholder="Verification Code" onPaste={(e) => e.preventDefault()} id="verify_email" type="number" className="pl-2 outline-none border-none ring-0 bg-gray-300 text-gray-800 w-[80%]" {...field} />
                                </div>
                                <div className="flex justify-center">
                                  <button className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 px-3 py-2 rounded-lg text-gray-200 font-semibold cursor-pointer text-center text-lg" onClick={emailGeneration}>Send Code</button>
                                </div>
                              </div>
                            </FormControl>
                            {/* <FormDescription>This is your email.</FormDescription> */}
                            {/* <FormMessage /> */}
                          </FormItem>
                        )}
                    />
                    // <div className="items-center mb-4">
                    //   <div className="flex items-center border-2 py-3 rounded-lg mb-5 mt-1 border-gray-800 w-[80%] ml-[10%]">
                    //     <svg className="h-5 w-5 text-gray-800 ml-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    //       <circle cx="12" cy="12" r="4"></circle>
                    //       <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    //     </svg>
                    //     <input className="pl-2 outline-none border-none bg-gray-300 text-gray-800 w-[80%]" type="text" name="" id="emailInput"
                    //       placeholder="Verification Code" />
                    //   </div>
                    //   <div className="flex justify-center">
                    //     <a className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 px-3 py-2 rounded-lg text-gray-200 font-semibold cursor-pointer text-center text-lg" onClick={emailGeneration}>Send Code</a>
                    //   </div>
                    // </div>
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
                  <button className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" onClick={phase2}>Continue</button>
                )}
                {isPhase2 && !isPhase3 && (
                  <button className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" onClick={phase3}>Continue</button>
                )}
                {isPhase3 && !isPhase4 && (
                  <button className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" onClick={phase4}>Continue</button>
                )}
                {isPhase4 && (
                  <button type="submit" className="w-[80%] ml-[10%] bg-emerald-600 hover:bg-emerald-700 transition duration-300 mt-4 py-2 rounded-xl text-gray-200 font-semibold mb-2 cursor-pointer text-center text-lg" onClick={onSignup}>Sign Up</button>
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
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;