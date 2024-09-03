import { Card, Space, Divider, Button, Flex } from 'antd';
import AppUserWelcomeCard from './(main)/appUser/page';


export default async function Home() {
  return (
    <div>
      <AppUserWelcomeCard />
      <div>
        <Divider>Menu Rawat Jalan</Divider>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <Space direction="vertical" size="middle">
            <Card title="Registrasi Periksa" size="small"
            >
              <Space size="middle" >
                <div>Menu untuk cetak Resume Pasien, Kwitansi Layanan</div>
                <Button className="hover:bg-white" type="text" htmlType="submit" href="/ralan/registrasi"
                  icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
                >
                </Button>
              </Space>
            </Card>
          </Space>
          <Space direction="vertical" size="middle">
            <Card title="Laporan Operasi" size="small"
            >
              <Space size="middle" >
                <div>Menu untuk cetak Laporan Operasi</div>
                <Button className="hover:bg-white" type="text" htmlType="submit" href="/ralan/laporanOperasi"
                  icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
                >
                </Button>
              </Space>
            </Card>
          </Space>
          <Space direction="vertical" size="middle">
            <Card title="Laporan Rujuk Keluar" size="small"
            >
              <Space size="middle" >
                <div>Menu untuk cetak Surat Rujuk Keluar</div>
                <Button className="hover:bg-white" type="text" htmlType="submit" href="/ralan/rujuk-keluar"
                  icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
                >
                </Button>
              </Space>
            </Card>
          </Space>
        </div>

        <Divider>Task ID</Divider>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Space direction="vertical" size="middle">
            <Card title="Daftar Task ID" size="small"
            >
              <Space size="middle" >
                <div>Menu untuk monitoring task id v2</div>
                <Button className="hover:bg-white" type="text" htmlType="submit" href="/mjkn/taskIdv2"
                  icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
                >
                </Button>
              </Space>
            </Card>
          </Space>
          <Space direction="vertical" size="middle">
            <Card title="User Journey Registrasi" size="small">
              <Space size="middle" >
                <div>Menu untuk cek user journey registrasi</div>
                <Button className="hover:bg-white" type="text" htmlType="submit" href="/mjkn/userJourney/registrasi"
                  icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
                >
                </Button>
              </Space>
            </Card>
            <Card title="User Journey Visus" size="small">
              <Space size="middle" >
                <div>Menu untuk cek user journey visus</div>
                <Button className="hover:bg-white" type="text" htmlType="submit" href="/mjkn/userJourney/visus"
                  icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
                >
                </Button>
              </Space>
            </Card>
          </Space>
        </div>

        <Divider>Administrasi</Divider>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Space direction="vertical" size="middle">
            <Card title="Daftar Petugas" size="small"
            >
              <Space size="middle" >
                <div>Menu untuk upload foto petugas</div>
                <Button className="hover:bg-white" type="text" htmlType="submit" href="/manajemenv2/petugas"
                  icon={<i className="ri-arrow-right-circle-line text-3xl"></i>}
                >
                </Button>
              </Space>
            </Card>
          </Space>
        </div>
      </div>
    </div>
  );
}
