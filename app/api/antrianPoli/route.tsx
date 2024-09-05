import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export async function GET(
  request: NextRequest,
  { params }: { params: { kodedokter: string } }
) {
  //#region - dayjs setting
  dayjs.locale("id");
  dayjs.extend(utc)
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Makassar");
  //#endregion

  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  // const body = await request.json();
  // TODO: validasi value form yg di terima

  // const { nip } = body;

  const getAll = await db.$queryRaw`
    SELECT
      reg_periksa.no_reg,
      reg_periksa.no_rkm_medis, 
      pasien.nm_pasien,
      reg_periksa.stts,
      penilaian_medis_ralan_mata.kd_dokter,
      kd_poli,
      dokter.nm_dokter,
      reg_periksa.no_rawat,
      'Menunggu' as 'status'
    FROM
      reg_periksa
      INNER JOIN
      penilaian_medis_ralan_mata
      ON 
        reg_periksa.no_rawat = penilaian_medis_ralan_mata.no_rawat
      INNER JOIN
      pasien
      ON 
        reg_periksa.no_rkm_medis = pasien.no_rkm_medis
      INNER JOIN
      dokter
      ON 
        penilaian_medis_ralan_mata.kd_dokter = dokter.kd_dokter
    WHERE
      reg_periksa.stts = 'Berkas Diterima' and
      reg_periksa.tgl_registrasi=${dayjs.utc().format('YYYY-MM-DD')} order by penilaian_medis_ralan_mata.tanggal;
    `;

  return NextResponse.json({ data: getAll });
}
