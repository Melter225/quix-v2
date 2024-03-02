import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authConfig: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session }) {
      if (trigger === 'update' && session?.name) {
        token.name = session.name;
      }
      return token;
    },
  },
  pages: {
    signIn: '/', //TODO: Create sign in page
    error: '/api/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
};