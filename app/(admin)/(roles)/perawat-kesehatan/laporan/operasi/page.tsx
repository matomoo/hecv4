import FiltersDateOnly from "@/app/components/filtersDateOnly";
import FetchDataServer from "./_server";

function RegistrasiPeriksa({ searchParams }: { searchParams: any }) {


  return (
    <div>
      <div className="flex-col">
        <div className="text-xl font-semibold">Laporan Operasi</div>
      </div>
      <FiltersDateOnly searchParams={searchParams} />
      {Object.keys(searchParams).length === 0 ? 'Pilih tanggal' :
        <FetchDataServer searchParams={searchParams} />
      }
    </div>
  );
}

export default RegistrasiPeriksa;
