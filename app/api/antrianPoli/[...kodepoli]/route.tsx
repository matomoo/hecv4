import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
  request: NextRequest,
  { params }: { params: { kodepoli: string } }
) {
  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  // TODO: validasi value form yg di terima
  const getData = await db.tblx_antrian_poli.findUnique({
    where: { kd_poli: params.kodepoli[0] },
  });

  return NextResponse.json({ data: getData });
}



export async function PATCH(
  request: NextRequest,
  { params }: { params: { kodepoli: string } }
) {
  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  // TODO: validasi value form yg di terima

  const { no_rawat } = body;
  // console.log(body)

  const updatedData = await db.tblx_antrian_poli.update({
    where: { kd_poli: params.kodepoli[0] },
    data: {
      nm_dokter: body.nm_dokter,
      nm_pasien: body.nm_pasien,
      no_rkm_medis: body.no_rkm_medis,
      no_rawat: body.no_rawat,
      kd_dokter: body.kd_dokter
    },
  });

  const updatedDokter = await db.reg_periksa.update({
    where: { no_rawat: body.no_rawat },
    data: {
      kd_dokter: body.kd_dokter
    }
  })



  return NextResponse.json({ data: updatedData });
}