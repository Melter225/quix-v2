"use client"

import Image from "next/image";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { signOut, useSession } from "next-auth/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useState } from 'react';


const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Billing', href: '/billing', current: false },
  { name: 'Features', href: '/features', current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '/' },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const userImage:any = session?.user?.image
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('Mode');
  const [isOpen2, setIsOpen2] = useState(false);
  const [open, setOpen] = useState(true);
  const [topic, setTopic] = useState('');

  const toggleDropdown = (newMode: string) => {
      setIsOpen(!isOpen);
      if (newMode != "Mode") {
        setMode(newMode);
      }
      console.log(mode)
  };

  const toggleDropdown2 = (newMode: string) => {
      setIsOpen2(!isOpen2);
  };
  

  console.log(JSON.stringify({ topic: topic }))

  const generateQuestions = async () => {
    //   try {
    //       const response = await fetch('/api/generation', {
    //           method: 'POST',
    //           headers: {
    //               'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({ topic: topic }),
    //       });

    //       if (response.ok) {
    //           const data = await response.json();
    //           console.log('Generated questions:', data);
    //       } else {
    //           console.error('Failed to generate questions');
    //       }
    //   } catch (error) {
    //       console.error('Error:', error);
    //   }
    try {
        const response = await fetch('/api/resources', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Generated resources:', data);
        } else {
            console.error('Failed to generate resources');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  const learn = async () => {
      try {
          const response = await fetch('/api/learn', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ topic: topic }),
          });

          if (response.ok) {
              const data = await response.json();
              console.log('Generated resources:', data);
          } else {
              console.error('Failed to generate resources');
          }
      } catch (error) {
          console.error('Error:', error);
      }
  };

  if (status === "unauthenticated") {
    return <p>You are not logged in</p>
  }

  return (
    <main className="font-poppins">
      <div>
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-navy py-[0.83rem]">
            {({ open }) => (
                <>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="-m-1.5 p-1.5">
                        <Image
                            width={96}
                            height={51}
                            src="/QuixLogo.png"
                            alt="Quix"
                        />
                        </div>
                        <div className="hidden md:block">
                        {/* <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div> */}
                        </div>
                    </div>
                    <div className="hidden md:flex md:gap-x-12 lg:flex lg:gap-x-12">
                        {/* <a href="/features" className="text-lg font-semibold leading-6 text-gray-200 hover:text-gray-300">Features</a>
                        <a href="/about" className="text-lg font-semibold leading-6 text-gray-200 hover:text-gray-300">About</a>
                        <a href="/billing" className="text-lg font-semibold leading-6 text-gray-200 hover:text-gray-300">Billing</a> */}
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            className="relative rounded-full bg-navy p-1 text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-700"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-4">
                            <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-navy text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <Image className="rounded-full" src={userImage} width={30} height={30} alt="" />
                            </Menu.Button>
                            </div>
                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-gray-800 ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            if (item.name === "Sign out") {
                                                e.preventDefault()
                                                signOut()
                                            }
                                        }}
                                        className={classNames(
                                        active ? 'bg-gray-300' : '',
                                        item.name !== "Sign out" ? 'border-b-2 border-gray-300' : '',
                                        'block px-4 py-2 text-sm text-gray-700 font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                    )}
                                </Menu.Item>
                                ))}
                            </Menu.Items>
                            </Transition>
                        </Menu>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-navy p-2 text-gray-300 hover:bg-navy hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-gray-200' : 'text-gray-300 hover:bg-gray-800 hover:text-gray-200',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                    <div className="border-t border-gray-300 w-[93%] ml-[3.5%]"></div>
                    <div className="pb-3 pt-4">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <Image className="rounded-full" src={userImage} width={30} height={30} alt="" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-semibold leading-none text-gray-200">{session?.user?.name}</div>
                            <div className="text-sm font-semibold leading-none text-gray-400">{session?.user?.email}</div>
                        </div>
                        <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-navy p-1 text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-700"
                        >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            onClick={(e) => {
                                if (item.name === "Sign out") {
                                    e.preventDefault()
                                    signOut()
                                }
                            }}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-200"
                        >
                            {item.name}
                        </Disclosure.Button>
                        ))}
                    </div>
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>

            {/* <header className="bg-gray-200 shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-700">Dashboard</h1>
                </div>
            </header> */}
            <main>
                <div className="relative">
                    <div className="hidden md:flex flex-col h-full w-full justify-start items-start">
                        <Disclosure>
                            <Disclosure.Button className="mt-2 relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-gray-200 h-8" onClick={() => setOpen(!open)}>
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6 text-red-700 bg-gray-300 rounded-md" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6 text-gray-700 bg-gray-300 rounded-md" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </Disclosure>
                    </div>
                    <div className="relative z-50 flex md:hidden flex-col h-full w-full justify-start items-start">
                        <Disclosure defaultOpen={!open}>
                            <Disclosure.Button className="mt-2 relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-gray-200 h-8" onClick={() => setOpen(!open)}>
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6 text-red-700 bg-gray-300 rounded-md" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6 text-gray-700 bg-gray-300 rounded-md" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </Disclosure>
                    </div>
                    <div className={`bg-gray-200 mr-[25svw] w-[25svw] h-[calc(100svh-5.67rem)] hidden md:${open ? 'flex' : 'hidden'} mt-[-2.5rem]`}>
                        <div className="flex flex-col h-full justify-end items-center px-4 w-full">
                        <div className="relative z-50 flex-col h-full w-full justify-start items-start">
                            <h1 className="text-center align-middle mt-2 text-xl font-bold tracking-tight text-gray-700">New Space</h1>
                        </div>
                        <button className="flex items-center justify-center px-2 py-[1rem] rounded-xl bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-200 font-semibold lg:text-lg sm:text-base w-full h-11 mb-3">
                            <span className="items-center">
                                <div className="flex h-full justify-center align-middle">
                                </div>
                                Upgrade Plan
                            </span>
                        </button>
                        {/* <button className="flex items-center justify-center px-2 py-[0.3rem] rounded-xl bg-emerald-600 text-gray-200 hover:bg-emerald-700 duration-200 transition-colors font-semibold lg:text-lg sm:text-base w-full h-9 mb-4">
                            <div className="flex h-full justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:hidden self-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <span className="hidden sm:flex items-center">
                                <div className="flex h-full justify-center align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 mr-[0.3rem] self-center">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                Topic
                            </span>
                        </button> */}
                        </div>
                        {/* <div className="w-full mt-3 px-4">
                            <button className="bg-gray-200 flex items-center justify-start px-2 py-[0.6rem] rounded-xl text-gray-600 hover:bg-gray-300 duration-200 transition-colors font-semibold lg:text-lg sm:text-base w-full mt-2" onClick={() => toggleDropdown2('Mode')}>
                                <Image className="ml-3 mr-4 rounded-full" src="/billing.png" alt="Profile Picture" width={30} height={30}></Image> 
                                User
                            </button>

                            <div
                                className={`relative z-50 ${isOpen2 ? 'block' : 'hidden'} bg-gray-200 divide-y divide-gray-300 rounded-lg shadow w-full ml-[0rem] mt-[-10.5rem] sm:mt-[-10.6rem] lg:mt-[-11.5rem]`}
                            >
                                <div className="py-2">
                                    <a href="#" className="block py-1 text-[0.6rem] sm:text-xs lg:text-sm text-center text-gray-900 hover:bg-gray-300" onClick={() => toggleDropdown2('Quiz')}>
                                        Billing
                                    </a>
                                </div>
                                <div className="py-2">
                                    <a href="#" className="block py-1 text-[0.6rem] sm:text-xs lg:text-sm text-center text-gray-900 hover:bg-gray-300" onClick={() => toggleDropdown2('Quiz')}>
                                        Settings
                                    </a>
                                </div>
                                <div className="py-2">
                                    <a href="#" className="block py-1 text-[0.6rem] sm:text-xs lg:text-sm text-center text-gray-900 hover:bg-gray-300" onClick={() => toggleDropdown2('Quiz')}>
                                        Log out
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className={`${open ? 'flex' : 'hidden'} relative z-40 bg-gray-200 mr-[25svw] w-[80svw] sm:w-[65svw] h-[calc(100svh-5.65rem)] md:hidden mt-[-2.5rem]`}>
                        <div className="flex flex-col h-full justify-end items-center px-4 w-full">
                        <div className="relative z-50 flex-col h-full w-full justify-start items-start">
                            <h1 className="text-center align-middle mt-2 text-xl font-bold tracking-tight text-gray-700">New Space</h1>
                        </div>
                        <button className="flex items-center justify-center px-2 py-[1rem] rounded-xl bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-200 font-semibold lg:text-lg sm:text-base w-full h-11 mb-3">
                            <span className="items-center">
                                <div className="flex h-full justify-center align-middle">
                                </div>
                                Upgrade Plan
                            </span>
                        </button>
                        {/* <button className="z-50 flex items-center justify-center px-2 py-[0.3rem] rounded-xl bg-emerald-600 text-gray-200 hover:bg-emerald-700 duration-200 transition-colors font-semibold lg:text-lg sm:text-base w-full h-9 mb-4">
                            <div className="flex h-full justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:hidden self-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <span className="hidden sm:flex items-center">
                                <div className="flex h-full justify-center align-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 mr-[0.3rem] self-center">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                                Topic
                            </span>
                        </button> */}
                        </div>
                    </div>
                    <div className={`${open ? 'absolute right-0 bottom-0 mt-[-15vh] pt-[0.7rem]' : 'fixed right-0 bottom-4 '} w-full ${open ? 'md:w-[75svw]' : 'md:w-full'} ml-[25svw] ${open ? 'pb-4' : ''} rounded-lg`}>
                        <div className="flex flex-col pt-2 mt-[2rem]">
                            <div className="flex justify-start items-start">
                                <button
                                    data-dropdown-toggle="dropdownDivider"
                                className="text-gray-200 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 lg:text-lg font-semibold rounded-xl px-5 py-2.5 text-center inline-flex items-center justify-center ml-[0.5rem] sm:ml-[1rem] w-[15%] sm:w-[12%] h-10 sm:text-base"
                                type="button"
                                onClick={() => toggleDropdown('Mode')}
                            >
                                {mode}
                                <svg
                                    className={`hidden lg:block w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            <div
                                className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-gray-200 divide-y divide-gray-400 rounded-lg shadow w-[15%] sm:w-[12%] ml-[-15svw] ${open ? 'sm:ml-[-9svw]' : 'sm:ml-[-12svw]'} mt-[-4.9rem] sm:mt-[-5.4rem] lg:mt-[-5.4rem]`}
                            >
                                <div className="py-2">
                                    <a href="#" className="block py-[0.2rem] text-xs sm:text-sm lg:text-md text-center text-gray-900 hover:bg-gray-300" onClick={() => toggleDropdown('Learn')}>
                                        Learn
                                    </a>
                                </div>
                                <div className="py-2">
                                    <a href="#" className="block py-[0.2rem] text-xs sm:text-sm lg:text-md text-center text-gray-900 hover:bg-gray-300" onClick={() => toggleDropdown('Quiz')}>
                                        Quiz
                                    </a>
                                </div>
                                {/* <ul className="py-2 text-[0.6rem] sm:text-xs lg:text-sm text-center text-gray-700" aria-labelledby="dropdownDividerButton">
                                    <li>
                                        <a href="#" className="block py-2 hover:bg-gray-300" onClick={() => toggleDropdown('Video')}>
                                            Video
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 hover:bg-gray-300" onClick={() => toggleDropdown('Document')}>
                                            Document
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <input
                                    type="text"
                                    id="first_name"
                                    className={`bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] sm:w-[67%] lg:w-[70%] p-2.5 mt-[-2.6rem] h-10`}
                                    placeholder="Topic"
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                />
                            </div>
                            {/* ml-[1.7svw] md:ml-[-0.25svw] lg:ml-[-0.25svw] */}
                            <div className="flex justify-end items-end">
                                <button className="flex items-center justify-center px-5 md:px-3 py-[0.625rem] md:py-[0.47rem] rounded-xl bg-emerald-600 text-gray-200 hover:bg-emerald-700 duration-200 transition-colors font-semibold lg:text-lg sm:text-base w-[15%] sm:w-[12%] mt-[-2.7rem] mr-[0.5rem] sm:mr-[1rem] h-10 cursor-pointer" onClick={topic ? (mode === 'Quiz' ? generateQuestions : learn) : undefined} disabled={!topic}>
                                    Enter
                                </button>
                            </div>
                            {/* ml-[45svw] sm:ml-[47svw] md:ml-[50svw] lg:ml-[53svw] mr-[-7rem] h-[5.5svh] */}
                        </div>
                    </div>
                </div>
            </main>
        </div>

        {/* <div className="h-screen bg-gray-200 w-[20%] ml-0 mt-0">
            <div className="bg-gray-300 rounded-lg">
                <p>Add a Topic</p>
            </div>
        </div> */}
      </div>
    </main>
  )
}