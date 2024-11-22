import FiltersDateOnly from "@/app/components/filtersDateOnly";
import FetchDataServer from "./_server";

function Page_DaftarRegistrasi({ searchParams }: { searchParams: any }) {


  return (
    <div>
      <div className="flex-col">
        <div className="text-xl font-semibold">Daftar Registrasi</div>
      </div>
      <FiltersDateOnly searchParams={searchParams} />
      {Object.keys(searchParams).length === 0 ? 'Pilih tanggal' :
        <FetchDataServer searchParams={searchParams} />
      }
    </div>
  );
}

export default Page_DaftarRegistrasi;
