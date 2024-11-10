'use client'

import { Card, Space } from "antd";
import useAppUser from "../../hooks/useAppUser";
import { AppUser, jabatan, petugas } from "@prisma/client";
import BtnConnectAkun from "./_btnConnectAkun";
import { Schema_GetAppUser } from "@/app/schema/antrianPoliSchema";

type userList = Schema_GetAppUser

const AppUserWelcomeCard = ({ clerkId }: { clerkId: string }) => {

  const { data: appUser, isError, error, isLoading } = useAppUser(clerkId);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  // console.log(appUser)
  return (
    <Card>
      <Space direction="vertical" >
        <BtnConnectAkun user={appUser as userList} />
      </Space>
    </Card>
  );
};

export default AppUserWelcomeCard;
