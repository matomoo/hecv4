import FiltersDateOnly from "@/app/components/filtersDateOnly";
import FetchDataServer from "./_server";
import FormUpsertWaktuMasukOperasi from "./_form";

function RegistrasiPeriksa({ searchParams }: { searchParams: any }) {


  return (
    <div>
      <div className="flex-col">
        <div className="text-xl font-semibold">Waktu Operasi</div>
      </div>
      <FormUpsertWaktuMasukOperasi resultWaktuOperasi={[]} mode="new" />
      <FetchDataServer searchParams={searchParams} />
    </div>
  );
}

export default RegistrasiPeriksa;
