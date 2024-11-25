"use server";

import { db } from "@/lib/db";

export const HandlerDelete_tbl_waktu_operasi = async (value: any) => {
  try {
    const result = await db.tbl_waktu_operasi.delete({
      where: {
        no_rawat: value.value.no_rawat
      }
    })
    // console.log(result)
    return {
      data: [result],
    };
  } catch (error: any) {
    console.log(error);
    return {
      data: [],
    };
  }
};
