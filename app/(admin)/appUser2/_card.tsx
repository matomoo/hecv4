'use client'

import { Card, Flex, Space } from "antd";
import useAppUser from "../../hooks/useAppUser";
// import BtnConnectAkun from "./_btnConnectAkun";
import { AppUser } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import BtnConnectAkun from "./_btnConnectAkun";

const AppUserWelcomeCard = ({ clerkId }: { clerkId: string }) => {

  const { data: appUser, isError, isLoading } = useAppUser(clerkId);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>error</p>;

  return (
    <Card>
      <Space direction="vertical" >

        <div>Hello, {appUser?.username}</div>
        <div>Link Akun : <BtnConnectAkun user={appUser as AppUser} /> </div>

      </Space>
    </Card>
  );
};

export default AppUserWelcomeCard;
