// components/DynamicMenu.tsx
import { Menu } from 'antd';
import { useUser } from '@clerk/nextjs';
import { UserOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useUserRole } from '@/app/context/UserRoleContext';

const DynamicMenu = () => {
  const { role } = useUserRole();

  // Ambil role user dari Clerk metadata (misalnya, role disimpan di user.metadata.role)
  const userRole = role || 'roless';

  // Definisikan item menu untuk setiap role
  const SubMenuItems = [
    {
      key: 'home',
      // icon: <HomeOutlined />,
      label: <Link href={`/${userRole}`}>Home</Link>,
    },
    ...(userRole === 'asisten-apoteker'
      ? [
        {
          key: 'asisten-apoteker-dashboard',
          label: <div>Dashboard</div>,
          children: [
            {
              key: '3a',
              label: <Link href={`/${userRole}/penjualan`}>Penjualan Obat</Link>,

            },
          ],
        },
      ]
      : []),
    ...(userRole === 'perawat-kesehatan'
      ? [
        {
          key: 'perawat-kesehatan-dashboard',
          label: <div>Dashboard</div>,
          children: [
            {
              key: 'perawat-kesehatan-dashboard-1',
              label: <Link href={`/${userRole}/laporan/operasi`}>Laporan Operasi</Link>,
            },
            {
              key: 'perawat-kesehatan-dashboard-2',
              label: <Link href={`/${userRole}/laporan/operasi/waktu-operasi`}>Waktu Operasi</Link>,
            },
          ],
        },
      ]
      : []),
    ...(userRole === 'it'
      ? [
        {
          key: 'it-dashboard',
          label: <div>Dashboard</div>,
          children: [
            {
              key: 'it-dashboard-1',
              label: <Link href={`/${userRole}/user-journey`}>User Journey</Link>,
            },
          ],
        },
      ]
      : []),
    {
      key: 'page-konek-akun',
      label: <Link href={`/${userRole}/konek-akun`}>Konek Akun</Link>,
    },
  ];

  return (
    <Menu mode="inline" items={SubMenuItems} />
  );
};

export default DynamicMenu;
