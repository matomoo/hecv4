"use client";
import { Card, Space, Divider, Button, Flex } from 'antd';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AppUserWelcomeCard from './(admin)/appUser/_card';


export default function Home() {

  // const { isLoaded, isSignedIn, user } = useUser();

  // const router = useRouter();

  // if (!user) {
  //   router.push(`/sign-in`);
  // }

  // useEffect(() => {

  //   const role = user?.publicMetadata.role;
  //   // console.log(user?.id);

  //   if (role) {
  //     router.push(`/${role}`);
  //   } else {
  //     router.push(`/konek-akun`);
  //   }
  // }, [user, router]);

  return (
    <Space direction='vertical'>
      {/* {!user ? <div>Loading...</div> : */}
      <div>
        Home
        {/* <AppUserWelcomeCard clerkId={user?.id} /> */}
      </div>
      {/* } */}
      {/* <Space direction="vertical" size="middle">
        <Card title="Laporan Operasi" size="small"
        >
          <Space size="middle" >
            <div>Menu untuk cetak Laporan Operasi</div>
            <Button className="hover:bg-white" type="text" htmlType="submit" href="/laporan/operasi"
              icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
            >
            </Button>
          </Space>
        </Card>
      </Space>
      <Space direction='vertical'>
        <Card>
          <Space>
            <div>Menu Admin Antrian Poli</div>
            <Button className="hover:bg-white" type="text" htmlType="submit" href="/antrian/poliAdmin"
              icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
            >
            </Button>
          </Space>
        </Card>
        <Card>
          <Space>
            <div>Menu Task Id</div>
            <Button className="hover:bg-white" type="text" htmlType="submit" href="/autoTaskid"
              icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
            >
            </Button>
          </Space>
        </Card>
      </Space>
      <Space>
        <Card>
          <Space>
            <div>Display Antrian All</div>
            <Button className="hover:bg-white" type="text" htmlType="submit" href="/antrianAll"
              icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
            >
            </Button>
          </Space>
        </Card>
        <Card>
          <Space>
            <div>Display Antrian Admisi</div>
            <Button className="hover:bg-white" type="text" htmlType="submit" href="/antrianAdmisi"
              icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
            >
            </Button>
          </Space>
        </Card>
        <Card>
          <Space>
            <div>Display Antrian Visus</div>
            <Button className="hover:bg-white" type="text" htmlType="submit" href="/antrianVisus"
              icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
            >
            </Button>
          </Space>
        </Card>

        <Card>
          <Space>
            <div>Display Antrian Poli 1</div>
            <Button className="hover:bg-white" type="text" htmlType="submit" href="/antrianPoli/1"
              icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
            >
            </Button>
          </Space>
        </Card>
        <Card>
          <Space>
            <div>Display Antrian Poli 2</div>
            <Button className="hover:bg-white" type="text" htmlType="submit" href="/antrianPoli/2"
              icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
            >
            </Button>
          </Space>
        </Card>
      </Space> */}
    </Space>
  );
}
