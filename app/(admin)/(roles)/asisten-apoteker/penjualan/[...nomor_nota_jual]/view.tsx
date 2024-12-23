'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const LaporanOperasiPdf = dynamic(() => import('../detail/pdf-viewer'), {
  ssr: false,
});

const View = ({ params }: { params: { nomor_nota_jual: string } }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div>
      <LaporanOperasiPdf params={params} />
    </div>
  );
};

export default View;