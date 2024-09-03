import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  // TODO: validasi value form yg di terima

  const { clerkUserId } = body;
  // console.log(body)

  const getData = await db.appUser.findUnique({
    where: { clerkUserId: clerkUserId },
  });

  return NextResponse.json({
    data: getData,
  })
}


export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  // TODO: validasi value form yg di terima

  const { clerkUserId, nip } = body;
  // console.log(body)

  const updatedData = await db.appUser.update({
    where: { clerkUserId: clerkUserId },
    data: {
      nip: nip,
    },
  });

  return NextResponse.json({});
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  // const body = await request.json();
  // TODO: validasi value form yg di terima
  // console.log(request);
  // console.log(params);
  // const { nip } = body;

  await db.appUser.update({
    where: { clerkUserId: params.id[0] },
    data: {
      nip: null,
    },
  });

  return NextResponse.json({});
}
