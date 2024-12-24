
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {

      // check if exists
      const exists = await prisma.user.findUnique({
        where: {
          email: user.email!,
        }
      });

      // create if doesn't exist
      if (!exists) {
        await prisma.user.create({
          data: {
            email: user.email!,
            name: user.name!,
          }
        });
      }

      return true;
    },
    async jwt({ token, account, user, profile }) {      
      if (account && user) {
        const userExists = await prisma.user.findFirst({
          where: {
            id: profile?.id!,
          }
        });

        token.id = userExists?.id;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    }
  }
})