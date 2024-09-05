import { Card, Space, Divider, Button, Flex } from 'antd';
import AppUserWelcomeCard from './(main)/appUser/page';


export default async function Home() {
  return (
    <Space direction='vertical'>
      <AppUserWelcomeCard />
      <Card>
        <Space>
          <div>Menu Admin Antrian Poli</div>
          <Button className="hover:bg-white" type="text" htmlType="submit" href="/antrian/poli"
            icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
          >
          </Button>
        </Space>
      </Card>
    </Space>
  );
}
