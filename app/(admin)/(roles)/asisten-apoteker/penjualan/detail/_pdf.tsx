import { Schema_GetDetailPenjualanObat } from "@/app/schema/antrianPoliSchema";
import {
  Document,
  Font,
  Image,
  Line,
  Page,
  StyleSheet,
  Svg,
  Text,
  View
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import "dayjs/locale/id";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

interface IPage {
  resultLaporanOperasi: Schema_GetDetailPenjualanObat[]
}


export const LaporanOperasiPdf = ({ resultLaporanOperasi }: IPage) => {

  console.log(resultLaporanOperasi)

  //#region - dayjs setting
  dayjs.locale("id");
  dayjs.extend(utc)
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Makassar");
  //#endregion


  return (
    <Document>
      <Page size="A5" style={styles.page}>

        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Image src={'/images/logo_klinik.png'} style={styles.logoKlinik} />
          <View style={{ flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
            <Text style={styles.typoH1}>Klinik Mata Hasanuddin</Text>
            <Text style={styles.typoH3} >Jl. Sultan Hasanuddin No. 127, Gowa, Sulawesi Selatan</Text>
            <Text style={styles.typoH3}>Hp: 0411-898-7988</Text>
            <Text style={styles.typoH3}>E-mail : admin@klinikmatahasanuddin.com</Text>
          </View>
        </View>
        <Svg height="3" width="400">
          <Line x1="0" y1="0" x2="500" y2="0" strokeWidth={2} stroke="rgb(0,0,0)" />
        </Svg>
        <Svg height="2" width="400">
          <Line x1="0" y1="0" x2="500" y2="0" strokeWidth={1} stroke="rgb(0,0,0)" />
        </Svg>

        <View style={{ flexDirection: 'row', paddingVertical: 4 }}>
          <View style={{ flexDirection: 'row', gap: 4, flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.typoH2}>Nomor RM</Text>
              <Text style={styles.typoH2}>Nama Pasien</Text>
              <Text style={styles.typoH2}>Alamat Pasien</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.typoH2Content}>: {resultLaporanOperasi[0] && resultLaporanOperasi?.[0].no_rkm_medis}</Text>
              <Text style={styles.typoH2Content}>: {resultLaporanOperasi[0] && resultLaporanOperasi?.[0].nm_pasien}</Text>
              <Text style={styles.typoH2Content}>: {resultLaporanOperasi[0] && resultLaporanOperasi?.[0].alamat}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 4, flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.typoH2}>No. Nota</Text>
              <Text style={styles.typoH2}>Tanggal</Text>
              <Text style={styles.typoH2}>Petugas</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.typoH2Content}>: {resultLaporanOperasi[0] && resultLaporanOperasi?.[0].nota_jual}</Text>
              <Text style={styles.typoH2Content}>: {resultLaporanOperasi[0] && resultLaporanOperasi?.[0].tgl_jual}</Text>
              <Text style={styles.typoH2Content}>: {resultLaporanOperasi[0] && resultLaporanOperasi?.[0].nama}</Text>
            </View>
          </View>
        </View>

        {/* header table */}
        <View style={{ alignItems: 'flex-start', flexDirection: 'column', marginTop: 16, borderRightWidth: 1, borderBottomWidth: 1 }} >
          <View style={{ flexDirection: 'row', backgroundColor: '#DDDDDD' }}>
            <View style={[styles.cellBorderLeftTop, { width: '5%' }]}>
              <Text style={[styles.typoH8, { textAlign: "center" }]}>No.</Text>
            </View>
            <View style={[styles.cellBorderLeftTop, { width: '26%' }]}>
              <Text style={[styles.typoH8, { textAlign: "center" }]}>Produk</Text>
            </View>
            <View style={[styles.cellBorderLeftTop, { width: '20%' }]}>
              <Text style={[styles.typoH8, { textAlign: "center" }]}>Deskripsi</Text>
            </View>
            <View style={[styles.cellBorderLeftTop, { width: '10%' }]}>
              <Text style={[styles.typoH8, { textAlign: "center" }]}>Kuantitas</Text>
            </View>
            <View style={[styles.cellBorderLeftTop, { width: '8%' }]}>
              <Text style={[styles.typoH8, { textAlign: "center" }]}>Satuan</Text>
            </View>
            <View style={[styles.cellBorderLeftTop, { width: '15%' }]}>
              <Text style={[styles.typoH8, { textAlign: "center" }]}>Harga Satuan</Text>
            </View>
            <View style={[styles.cellBorderLeftTop, { width: '16%' }]}>
              <Text style={[styles.typoH8, { textAlign: "center" }]}>Jumlah</Text>
            </View>
          </View>
          {resultLaporanOperasi.map((elm1: Schema_GetDetailPenjualanObat, index) =>
            <View style={{ flexDirection: 'row' }} key={index}>
              <View style={[styles.cellBorderLeftTop, { width: '5%' }]}>
                <Text style={[styles.typoH8, { textAlign: "center" }]}>{index + 1}</Text>
              </View>
              <View style={[styles.cellBorderLeftTop, { width: '26%' }]}>
                <Text style={[styles.typoH8, { textAlign: "center" }]}>{elm1.nama_brng}</Text>
              </View>
              <View style={[styles.cellBorderLeftTop, { width: '20%' }]}>
                <Text style={[styles.typoH8, { textAlign: "center" }]}>{elm1.aturan_pakai}</Text>
              </View>
              <View style={[styles.cellBorderLeftTop, { width: '10%' }]}>
                <Text style={[styles.typoH8, { textAlign: "center" }]}>{elm1.jumlah}</Text>
              </View>
              <View style={[styles.cellBorderLeftTop, { width: '8%' }]}>
                <Text style={[styles.typoH8, { textAlign: "center" }]}>{elm1.kode_sat}</Text>
              </View>
              <View style={[styles.cellBorderLeftTop, { width: '15%' }]}>
                <Text style={[styles.typoH8, { textAlign: "right" }]}>Rp. {(parseInt(elm1.total) / parseInt(elm1.jumlah)).toLocaleString()},-</Text>
              </View>
              <View style={[styles.cellBorderLeftTop, { width: '16%' }]}>
                <Text style={[styles.typoH8, { textAlign: "right" }]}>Rp. {parseInt(elm1.total).toLocaleString()},-</Text>
              </View>
            </View>
          )}
        </View>

        <View style={{ alignItems: 'flex-start', flexDirection: 'column', marginTop: 8 }} >
          <View style={{ flexDirection: 'row' }}>
            <View style={[{ width: '60%' }]}>
            </View>
            <View style={[{ width: '20%' }]}>
              <Text style={[styles.typoH2, { textAlign: "left" }]}>Subtotal</Text>
              <Text style={[styles.typoH2, { textAlign: "left" }]}>PPN 11%</Text>
              <Text style={[styles.typoH2Content, { textAlign: "left", marginTop: 4 }]}>Total Bayar</Text>
            </View>
            <View style={[{ width: '20%' }]}>
              <Text style={[styles.typoH2Content, { textAlign: "right", marginRight: 2 }]}>Rp. {resultLaporanOperasi.reduce((sum, elm) => sum + parseInt(elm.total), 0).toLocaleString()},-</Text>
              <Text style={[styles.typoH2Content, { textAlign: "right", marginRight: 2 }]}>Rp. {(resultLaporanOperasi.reduce((sum, elm) => sum + parseInt(elm.total), 0) * 0.11).toLocaleString()},-</Text>
              <Text style={[styles.typoH2Content, { textAlign: "right", marginRight: 2, marginTop: 4 }]}>Rp. {resultLaporanOperasi.reduce((sum, elm) => sum + parseInt(elm.total), 0).toLocaleString()},-</Text>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  );
};

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
  ]
});


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 8,
  },
  cellBorderLeftTop: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    padding: 2,
  },
  cellBorderRightBottom: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  typoH8: {
    fontSize: 8
  },
  logoKlinik: {
    width: 90,
    height: 50,
  },
  logoBarcode: {
    width: 125,
    height: 50,
  },
  typoH1: {
    fontSize: 16
  },
  typoH2: {
    fontFamily: "Open Sans",
    fontSize: 9
  },
  typoH2Content: {
    fontFamily: "Open Sans",
    fontSize: 9,
    fontWeight: 600
  },
  typoH3: {
    fontSize: 8
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
