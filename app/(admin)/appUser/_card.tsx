'use client'

import { Card, Space } from "antd";
import useAppUser from "../../hooks/useAppUser";
// import BtnConnectAkun from "./_btnConnectAkun";
import { AppUser } from "@prisma/client";
import BtnConnectAkun from "./_btnConnectAkun";

const AppUserWelcomeCard = ({ clerkId }: { clerkId: string }) => {

  const { data: appUser, isError, error, isLoading } = useAppUser(clerkId);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <Card>
      <Space direction="vertical" >
        <BtnConnectAkun user={appUser as AppUser} />
      </Space>
    </Card>
  );
};

export default AppUserWelcomeCard;
