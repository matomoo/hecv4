"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { Layout, Menu, theme } from 'antd';
import Image from "next/image";
import DynamicMenu from "@/constants/menu";
import { GetCurrentUserFromMongoDB } from "@/app/hooks/use_upsertNewUser";
import { AppUser } from "@prisma/client";

const { Header, Content, Sider } = Layout;

function LayoutProvider({ children }: { children: React.ReactNode }) {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up", 'antrianPoli', 'antrianAll', 'antrianAdmisi', 'antrianVisus', 'antrianAll2'].includes(pathname.split("/")[1]);


  const verticalMenu = [
    {
      key: '1',
      icon: <div className="py-5 rounded-sm flex items-center">
        <UserButton signInUrl="/sign-in" />
      </div>,
    },


  ];

  const getHeader = () => {
    if (isPublicRoute) return children;

    return (
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Image className="bg-slate-300 rounded-md p-1" width={90} height={50} src={'/images/logo_klinik.png'} alt={'-'} priority={true} />
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
            <DynamicMenu />
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
