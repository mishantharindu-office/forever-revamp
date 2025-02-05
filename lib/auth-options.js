import { NextAuthOptions, User } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/auth/signin",
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await res.json();

        if (res.ok && data.code === 200 && data.data) {
          const user = {
            name: data.data.name,
            email: data.data.email,
            userId: data.data.userId, // Adding userId from response
            image: data.data?.image,
            accessToken: data.data.token,
            refreshToken: data.data.refreshToken,
          };
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google" || account.provider === "facebook") {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL +
            `/auth/provider/signup?provider=${account.provider}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              image: user?.image,
              provider: account.provider.toUpperCase(),
            }),
          }
        );
        const data = await res.json();
        if (res.ok && data.code === 201 && data.data) {
          user.userId = data.data.userId; // Add userId from response
          user.accessToken = data.data.token;
          user.refreshToken = data.data.refreshToken;
          return true; // Continue sign-in
        }
        return false; // Reject sign-in on error
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.userId = user.userId; // Add userId to token
        token.email = user.email;
        token.image = user.image;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        userId: token.userId, // Add userId to the session object
        image: token.image,
        email: token.email,
        name: token.name,
      };
      return session;
    },
  },
  events: {
    async signOut({ token }) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.accessToken}`,
          },
          body: JSON.stringify({
            email: token.email,
          }),
        }
      );

      if (!res.ok) {
        console.error("Logout failed:", await res.json());
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
