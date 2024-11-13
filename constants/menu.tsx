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
