"use server"

import { db } from "@/lib/db";


let resultQuery: any = []
export const HandlerQuerySearch = async (whereCondition: any) => {

  resultQuery = await db.reg_periksa.findMany({
    orderBy: {
      no_rawat: "asc"
    },
    where: JSON.parse(whereCondition),
    include: {
      pasien: {
        select: {
          nm_pasien: true,
        }
      },
      dokter: {
        select: {
          nm_dokter: true,
        }
      },
      referensi_mobilejkn_bpjs_taskid: {
        select: {
          taskid: true,
          waktu: true
        }
      },
      referensi_mobilejkn_bpjs: {
        select: {
          nobooking: true
        }
      },
      bridging_sep: {
        select: {
          no_sep: true
        }
      }

    }
  });
  // console.log(resultQuery)
  return resultQuery
}
