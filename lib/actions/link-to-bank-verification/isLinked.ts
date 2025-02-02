"use server";

import { connectDB } from "@/lib/mongodb";
import { UserLink } from "@/models/User";
import { unstable_cache } from "next/cache";
// import bcrypt from "bcryptjs";

interface Request {
  userID: string | null | undefined;
}

export const isLinked = unstable_cache(
  async (values: Request) => {
    const { userID } = values;
    try {
      await connectDB();
      const userLink = await UserLink.findOne({
        _id: userID,
      });
      if (!userLink) {
        return {
          linked: false,
        };
      }
      return {
        linked: true,
      };
    } catch (e) {
      console.log(e);
    }
  },
  ["isLinked"],
  { revalidate: 1800 }
);
