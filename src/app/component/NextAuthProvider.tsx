"use client"

import { SessionProvider } from "next-auth/react"
interface authProps {
    children:React.ReactNode;
}

export default function NextAuthProvider({children}:authProps) {
    return <SessionProvider>{children}</SessionProvider>
}