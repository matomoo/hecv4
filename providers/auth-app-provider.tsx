"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Image from "next/image";
import Loader from "@/app/components/loader";

const { Header, Content, Sider } = Layout;


function AuthAppProvider({ children }: { children: React.ReactNode }) {

  const { user } = useUser();
  const router = useRouter();


  if (!user) {
    router.push('/sign-in');
  }

  const getHeader = () => {
    return children;
  };


  return (
    <div>
      {getHeader()}
    </div>

  );
}

export default AuthAppProvider;
