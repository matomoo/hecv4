// app/api/update-metadata/route.ts
import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { publicMetadata } = await req.json();

    // Update the user's public metadata
    const aa = await clerkClient.users.updateUser(userId!, { publicMetadata });
    // console.log(aa);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating user metadata:", error);
    return NextResponse.json(
      { success: false, error: "error.message" },
      { status: 500 }
    );
  }
}
