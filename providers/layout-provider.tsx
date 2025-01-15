"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Layout, theme } from 'antd';
import Image from "next/image";
import DynamicMenu from "@/constants/menu";

const { Content, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};


function LayoutProvider({ children }: { children: React.ReactNode }) {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up", 'antrianPoli', 'antrianAll', 'antrianAdmisi', 'antrianVisus', 'antrianAll2', 'antrianAll3'].includes(pathname.split("/")[1]);

  const getHeader = () => {
    if (isPublicRoute) return children;

    return (
      <Layout hasSider>
        <Sider style={siderStyle}>
          <div className="mx-12 py-2"><Image className="bg-slate-300 rounded-md p-2" width={100} height={60} src={'/images/logo_klinik.png'} alt={'-'} priority={true} /></div>
          <div><DynamicMenu /></div>
        </Sider>
        <Layout style={{ marginInlineStart: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
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
