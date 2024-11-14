
export interface SchemaAntrianAdmisi {
  tgl_registrasi: string;
  no_rawat: string;
  no_rkm_medis: string;
  nm_pasien: string;
}
export interface Schema_GetTaskId {
  kodebooking: string;
  taskid: string;
  taskname: string;
  waktu: string;
  wakturs: string;
}

export interface Schema_GetTblWaktuOperasi {
  no_rawat: string
  tgl_operasi_masuk: string
  jam_operasi_masuk: string
  no_rkm_medis: string
  nm_pasien: string
  alamat: string
}
export interface Schema_GetDetailPenjualanObat {
  nota_jual: string
  tgl_jual: string
  nip: string
  no_rkm_medis: string
  nm_pasien: string
  keterangan: string
  jns_jual: string
  ongkir: string
  ppn: string
  status: string
  kd_bangsal: string
  kd_rek: string
  nama_bayar: string
  kode_brng: string
  kode_sat: string
  h_jual: string
  h_beli: string
  jumlah: string
  subtotal: string
  dis: string
  bsr_dis: string
  tambahan: string
  embalase: string
  tuslah: string
  aturan_pakai: string
  total: string
  no_batch: string
  no_faktur: string
  nama_brng: string
  alamat: string
  nama: string
}

export interface Schema_GetPenjualanObat {
  nota_jual: string
  tgl_jual: string
  nip: string
  no_rkm_medis: string
  nm_pasien: string
  keterangan: string
  jns_jual: string
  ongkir: string
  ppn: string
  status: string
  kd_bangsal: string
  kd_rek: string
  nama_bayar: string
}

export interface Schema_GetAllPetugas {
  nip: string
  nama: string
  nm_jbtn: string
}

export interface Schema_GetAppUser {
  clerkUserId: string
  createdAt: string
  email: string
  isActive: string
  isAdmin: string
  kd_jbtn: string
  nama: string
  nip: string
  nm_jbtn: string
  profilePic: string
  updatedAt: string
  username: string
  id: string
}

export interface Schema_GetAllRegistrasiPeriksaForTaskid {
  no_rawat: string;
  no_rkm_medis: string;
  nm_pasien: string;
  nobooking: string;
  no_sep: string;
  tgl_registrasi: string;
  jam_reg: string;
}

export interface Schema_getByNoRawatForTaskid_ResepObat {
  no_rawat: string;
  no_resep: string;
}

export interface SchemaAntrianVisus {
  no_rawat: string;
  no_rkm_medis: string;
  nm_pasien: string;
}

export interface SchemaAntrianPoli {
  no_reg: string;
  no_rkm_medis: string;
  nm_pasien: string;
  stts: string;
  kd_dokter: string;
  kd_poli: string;
  nm_dokter: string;
  no_rawat: string;
  numPeriksaPoli: number;
  alamat: string;
}
export interface SchemaDaftarOperasi {
  tgl_operasi: string;
  no_rawat: string;
  no_rkm_medis: string;
  nm_pasien: string;
}
export interface SchemaFormUpdateLaporanOperasi {
  tanggalidx: string;
  tanggal: string;
  selesaioperasi: string;
  no_rawat: string;
}

export interface SchemaDataLaporanOperasi {
  no_rawat: string;
  tgl_operasi: string;
  jenis_anasthesi: string;
  kategori: string;
  operator1: string;
  operator2: string;
  operator3: string;
  asisten_operator1: string;
  asisten_operator2: string;
  asisten_operator3: string;
  instrumen: string;
  dokter_anak: string;
  perawaat_resusitas: string;
  dokter_anestesi: string;
  asisten_anestesi: string;
  asisten_anestesi2: string;
  bidan: string;
  bidan2: string;
  bidan3: string;
  perawat_luar: string;
  omloop: string;
  omloop2: string;
  omloop3: string;
  omloop4: string;
  omloop5: string;
  dokter_pjanak: string;
  dokter_umum: string;
  kode_paket: string;
  biayaoperator1: string;
  biayaoperator2: string;
  biayaoperator3: string;
  biayaasisten_operator1: string;
  biayaasisten_operator2: string;
  biayaasisten_operator3: string;
  biayainstrumen: string;
  biayadokter_anak: string;
  biayaperawaat_resusitas: string;
  biayadokter_anestesi: string;
  biayaasisten_anestesi: string;
  biayaasisten_anestesi2: string;
  biayabidan: string;
  biayabidan2: string;
  biayabidan3: string;
  biayaperawat_luar: string;
  biayaalat: string;
  biayasewaok: string;
  akomodasi: string;
  bagian_rs: string;
  biaya_omloop: string;
  biaya_omloop2: string;
  biaya_omloop3: string;
  biaya_omloop4: string;
  biaya_omloop5: string;
  biayasarpras: string;
  biaya_dokter_pjanak: string;
  biaya_dokter_umum: string;
  status: string;
  no_reg: string;
  tgl_registrasi: string;
  jam_reg: string;
  kd_dokter: string;
  no_rkm_medis: string;
  kd_poli: string;
  p_jawab: string;
  almt_pj: string;
  hubunganpj: string;
  biaya_reg: string;
  stts: string;
  stts_daftar: string;
  status_lanjut: string;
  kd_pj: string;
  umurdaftar: string;
  sttsumur: string;
  status_bayar: string;
  status_poli: string;
  nm_pasien: string;
  no_ktp: string;
  jk: string;
  tmp_lahir: string;
  tgl_lahir: string;
  nm_ibu: string;
  alamat: string;
  gol_darah: string;
  pekerjaan: string;
  stts_nikah: string;
  agama: string;
  tgl_daftar: string;
  no_tlp: string;
  umur: string;
  pnd: string;
  keluarga: string;
  namakeluarga: string;
  no_peserta: string;
  kd_kel: string;
  kd_kec: string;
  kd_kab: string;
  pekerjaanpj: string;
  alamatpj: string;
  kelurahanpj: string;
  kecamatanpj: string;
  kabupatenpj: string;
  perusahaan_pasien: string;
  suku_bangsa: string;
  bahasa_pasien: string;
  cacat_fisik: string;
  email: string;
  nip: string;
  kd_prop: string;
  propinsipj: string;
  nm_dokter: string;
  gol_drh: string;
  almt_tgl: string;
  no_telp: string;
  kd_sps: string;
  alumni: string;
  no_ijn_praktek: string;
  tgl_perawatan: string;
  jam_rawat: string;
  suhu_tubuh: string;
  tensi: string;
  nadi: string;
  respirasi: string;
  tinggi: string;
  berat: string;
  spo2: string;
  gcs: string;
  kesadaran: string;
  keluhan: string;
  pemeriksaan: string;
  alergi: string;
  lingkar_perut: string;
  rtl: string;
  penilaian: string;
  instruksi: string;
  evaluasi: string;
  tanggal: string;
  diagnosa_preop: string;
  diagnosa_postop: string;
  jaringan_dieksekusi: string;
  selesaioperasi: string;
  permintaan_pa: string;
  laporan_operasi: string;
  nama: string;
  kd_jbtn: string;
  asisten_operator1_nama: string;
  omloop_nama: string;
  t3_nm_pasien: string;
  t3_jk: string;
  t3_tgl_lahir: string;
}
