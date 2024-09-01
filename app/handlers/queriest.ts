"use server";

import { db } from "@/lib/db";

export const GetRegistrasiPeriksaByQuery = async (query: string) => {
  console.log("GetRegistrasiPeriksaByQuery > " + query);
  try {
    const queries = await db.reg_periksa.findMany({
      where: {
        tgl_registrasi: query,
      },
      orderBy: {
        no_rkm_medis: "asc",
      },
    });
    return {
      success: true,
      data: queries,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
