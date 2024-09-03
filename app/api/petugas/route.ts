import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  // const body = await request.json();
  // TODO: validasi value form yg di terima

  // const { nip } = body;

  const getAll = await db.petugas.findMany({
    orderBy: {
      nama: "asc",
    },
  });

  return NextResponse.json({ data: getAll });
}
