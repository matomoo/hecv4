"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const GetCurrentUserFromMongoDB = async () => {
  try {
    // check if user is already exists with clerk userid property
    const clerkUser = await currentUser();
    // console.log(clerkUser?.emailAddresses[0].emailAddress)

    let databaseUser = null;
    databaseUser = await db.appUser.findUnique({
      where: {
        email: clerkUser?.emailAddresses[0].emailAddress,
      },
    });
    if (databaseUser) {
      return {
        data: databaseUser,
      };
    }

    // if user doesn't exists, create new user
    let username = clerkUser?.username;
    if (!username) {
      username = clerkUser?.firstName + " " + clerkUser?.lastName;
    }

    username = username.replace("null", "");
    const newUser: any = {
      clerkUserId: clerkUser?.id,
      username,
      email: clerkUser?.emailAddresses[0].emailAddress,
      profilePic: clerkUser?.imageUrl,
    };
    const result = await db.appUser.create({
      data: newUser,
    });
    return {
      data: result,
    };
  } catch (error: any) {
    console.log(error);
    return {
      error: error.message,
    };
  }
};
