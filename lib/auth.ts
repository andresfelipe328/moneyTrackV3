import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import type { NextAuthOptions, Session } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");
        if (!user) throw new Error("Wrong Email");
        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );
        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
    }: 
    {
      session: Session;
      token: JWT;
    }) {
      const userID = token.sub;
      const hashedUserID = await bcrypt.hash(userID!, 10);
      const newSession = {
        ...session,
        userID: hashedUserID
      };

      return newSession;
    },
  },
  session: {
    strategy: "jwt",
  },
};
