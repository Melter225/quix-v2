"use client"

import Image from "next/image";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { signOut, useSession } from "next-auth/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


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
                        <a href="/features" className="text-lg font-semibold leading-6 text-gray-200 hover:text-gray-300">Features</a>
                        <a href="/about" className="text-lg font-semibold leading-6 text-gray-200 hover:text-gray-300">About</a>
                        <a href="/billing" className="text-lg font-semibold leading-6 text-gray-200 hover:text-gray-300">Billing</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            className="relative rounded-full bg-navy p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-4">
                            <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-navy text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            if (item.name === "Sign out") {
                                                e.preventDefault()
                                                signOut()
                                                window.location.href = "/"
                                            }
                                        }}
                                        className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
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
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-navy p-2 text-gray-400 hover:bg-navy hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
                            <div className="text-base font-medium leading-none text-white">{session?.user?.name}</div>
                            <div className="text-sm font-medium leading-none text-gray-400">{session?.user?.email}</div>
                        </div>
                        <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                                    window.location.href = "/"
                                }
                            }}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
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

            <header className="bg-gray-200 shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-700">Dashboard</h1>
            </div>
            </header>
            <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
            </main>
        </div>
        
        <div className="max-w-4xl mx-auto px-10 py-4 rounded-lg">
            <div className="flex flex-col justify-center py-12 items-center mt-[2rem]">

            {/* <div className="flex justify-center items-center">
                <Image
                src="/repeat.png"
                width={70}
                height={70}
                alt="image empty states"></Image>
            </div> */}
            <svg className="w-20 h-20 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path vector-effect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" stroke-width="3.5" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
            </svg>
            <h1 className="text-gray-300 font-semibold text-3xl text-center mb-3 mt-2">No topics</h1>
            <p className="text-gray-200 opacity-90 text-center mb-8 text-xl">Get started by adding a new topic.</p>
            <div className="flex flex-col justify-center">
                <button className="flex items-center px-5 py-[0.625rem] rounded-xl bg-emerald-600 text-gray-200 hover:bg-emerald-700 duration-200 transition-colors font-semibold text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Topic
                </button>
            </div>
            </div>
        </div>
      </div>
    </main>
  )
}