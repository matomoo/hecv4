SELECT
      t1.no_reg,
      t1.no_rkm_medis, 
      t3.nm_pasien,
      t1.stts,
      t2.kd_dokter,
      t4.nm_dokter,
      t1.no_rawat,
      IFNULL(t.numPeriksaPoli1, 0) as numPeriksaPoli
    FROM
      reg_periksa t1
      INNER JOIN
      penilaian_medis_ralan_mata t2
      ON 
        t1.no_rawat = t2.no_rawat
      INNER JOIN
      pasien t3
      ON 
        t1.no_rkm_medis = t3.no_rkm_medis
      INNER JOIN
      dokter t4
      ON 
        t2.kd_dokter = t4.kd_dokter
      LEFT JOIN
        (SELECT no_rkm_medis, CONVERT(COUNT(no_rkm_medis),UNSIGNED) AS numPeriksaPoli1
        FROM tblx_antrian_poli
        GROUP BY no_rkm_medis) t on
        t1.no_rkm_medis = t.no_rkm_medis
    WHERE
      t1.stts = 'Berkas Diterima' and
      t1.tgl_registrasi=? order by t2.tanggal;