import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
  { params }: { params: { id: string } }) {
  try {
    const clerkUser = await currentUser();
    let databaseUser = null;
    databaseUser = await db.appUser.findUnique({
      where: {
        clerkUserId: clerkUser?.id,
      },
    });
    if (databaseUser) {
      return NextResponse.json({
        data: databaseUser,
      })
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
    return NextResponse.json({
      data: result,
    })
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      data: error.message,
    })
  }


}