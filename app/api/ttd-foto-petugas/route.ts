import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  // TODO: validasi value form yg di terima

  const { nip } = body;

  const newData = await db.tblx_ttd_petugas.create({
    data: body,
  });

  return NextResponse.json(newData, { status: 201 });
}
