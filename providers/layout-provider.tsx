"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Image from "next/image";
import Link from "next/link";

const { Header, Content, Sider } = Layout;


function LayoutProvider({ children }: { children: React.ReactNode }) {

  const { user } = useUser();
  const router = useRouter();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up", 'antrianPoli', 'antrianAll', 'antrianAdmisi', 'antrianVisus'].includes(pathname.split("/")[1]);

  const userRole = user?.publicMetadata.role;
  const urlBase = `/${user?.publicMetadata.role}`

  const verticalMenu = [
    {
      key: '1',
      icon: <div className="py-5 rounded-sm flex items-center">
        <UserButton signInUrl="/sign-in" />
      </div>,
    },


  ];

  const items2: MenuProps['items'] = [
    {
      key: 'home',
      label: <a href={`${urlBase}`} target="_self" rel="noopener noreferrer">Home</a>,
    },
    ...(userRole === 'asisten-apoteker'
      ? [
        {
          key: 'asisten-apoteker-dashboard',
          label: <div>Dashboard</div>,
          children: [
            {
              key: '3a',
              label: <Link href={`${urlBase}/penjualan`}>Penjualan Obat</Link>,

            },
          ],
        },
      ]
      : []),
    {
      key: 'page-konek-akun',
      label: <a href={`${urlBase}/konek-akun`} target="_self" rel="noopener noreferrer">Konek Akun</a>,
    },
  ]

  const getHeader = () => {
    if (isPublicRoute) return children;

    return (
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Image className="bg-slate-300 rounded-md p-1" width={90} height={50} src={'/images/logo_klinik.png'} alt={'-'} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['asisten-apoteker-dashboard']}
            items={verticalMenu}
            style={{ display: 'flex', minWidth: 0, marginLeft: 'auto' }}
          />
        </Header>
        <Layout className="h-[calc(100vh-70px)]">
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              // defaultSelectedKeys={['3a']}
              defaultOpenKeys={['3']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: '24px 24px 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  };


  return (
    <div>
      {getHeader()}
    </div>

  );
}

export default LayoutProvider;
