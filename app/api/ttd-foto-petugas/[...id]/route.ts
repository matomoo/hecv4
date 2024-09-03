import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  // TODO: validasi value form yg di terima

  const { nip } = body;

  const updatedIssue = await db.tblx_ttd_petugas.update({
    where: { nip: nip },
    data: {
      nip: body.nip,
      ttd_foto: body.ttd_foto,
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

  await db.tblx_ttd_petugas.delete({
    where: { nip: params.id[0] },
  });

  return NextResponse.json({});
}
