import dynamic from 'next/dynamic';

// Dynamically import the client-side component
const ClientComponent = dynamic(() => import('./view'), { ssr: false });

export const generateStaticParams = async () => {
  // Define known paths for nomor_nota_jual
  const paths = [
    { nomor_nota_jual: ['nota1'] }, // Single value in an array
    { nomor_nota_jual: ['nota2'] },
    { nomor_nota_jual: ['nota3', 'detail'] }, // Example of multiple segments
  ];

  return paths;
};


const Page = ({ params }: { params: { nomor_nota_jual: string[] } }) => {
  return (
    <div>
      <h1>Nomor Nota Jual: {params.nomor_nota_jual.join(' / ')}</h1>
    </div>
  );
};

export default Page;