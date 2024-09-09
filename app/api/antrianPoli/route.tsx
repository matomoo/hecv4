import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { getAntrianPoli } from '@prisma/client/sql'


//#region - dayjs setting
dayjs.locale("id");
dayjs.extend(utc)
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Makassar");
//#endregion

export async function GET(
  request: NextRequest,
  { params }: { params: { kodedokter: string } }
) {

  // TODO: validasi user
  // const session = await GetCurrentAppUserFromDatabase();
  // if (!session) return NextResponse.json({}, { status: 401 });

  // const body = await request.json();
  // TODO: validasi value form yg di terima

  // const { nip } = body;
  try {

    const paramDay = dayjs.utc().format('YYYY-MM-DD')
    const getAll = await db.$queryRawTyped(getAntrianPoli(paramDay))
    return NextResponse.json({ data: getAll });
  } catch (error) {
    return NextResponse.json({ data: 'Error fetching' });
  }

}
