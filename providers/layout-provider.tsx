"use client";
import Loader from "@/app/components/loader";
import { UserButton, useUser } from "@clerk/nextjs";
import { AppUser } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Image from "next/image";

const { Header, Content, Sider } = Layout;


function LayoutProvider({ children }: { children: React.ReactNode }) {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up", 'antrianPoli', 'antrianAll', 'antrianAdmisi', 'antrianVisus'].includes(pathname.split("/")[1]);

  const { user } = useUser();
  const role = user?.publicMetadata.role;
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
      key: '2',
      label: <a href={`${urlBase}`} target="_self" rel="noopener noreferrer">Home</a>,
    },
    {
      key: '3',
      label: <div>Asisten Apoteker</div>,
      children: [
        {
          key: '3a',
          label: <a href={`${urlBase}/penjualan`} target="_self" rel="noopener noreferrer">Penjualan Obat</a>,

        },
        {
          key: '3b',
          label: <a href={`${urlBase}/konek-akun`} target="_self" rel="noopener noreferrer">Konek Akun</a>,
        },
      ],
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
            defaultSelectedKeys={['2']}
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
