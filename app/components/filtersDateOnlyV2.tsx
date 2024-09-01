"use client";
import { Button, DatePicker, Form, Modal, Tag } from "antd";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { usePathname, useRouter } from "next/navigation";
import React from "react";


function FiltersDateOnlyV2({ searchParams }: { searchParams: any }) {

  dayjs.locale("id");
  dayjs.extend(utc)
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Makassar");

  const [showFiltersModal, setShowFiltersModal] = React.useState(false);
  const [tempSearchParam, setTempSearchParam] = React.useState<any>({})

  const router = useRouter();
  const pathname = usePathname();

  if (Object.keys(searchParams).length === 0) {
    searchParams = {
      tgl_registrasi: dayjs().subtract(0, 'day'),
    }
  }

  const onFinish = (values: any) => {
    const formattedData: any = {};
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        formattedData[key] = values[key];
        if (key === 'tgl_registrasi') {
          formattedData[key] = dayjs(values[key]).format('YYYY-MM-DD').toString();
        }
      }
    });

    const queryString = new URLSearchParams(formattedData).toString();
    // console.log(queryString)
    router.push(`${pathname}?${queryString}`);

    // console.log(searchParams)

    // console.log(searchParams)
    setShowFiltersModal(false);
  };

  // console.log(Object.keys(searchParams.tgl_registrasi).length)


  return (
    <>
      <div className="flex justify-between p-5 border rounded-sm border-solid border-gray-300 mb-5 items-center mt-5">
        <div>
          {Object.keys(searchParams).length === 0 ? (
            <span className="text-gray-500 text-sm">No filters applied</span>
          ) : (
            <div className="flex flex-wrap gap-5">
              {Object.keys(searchParams).map((key) => {

                return (
                  <div className="capitalize flex flex-col gap-1" key={key}>
                    <span className="text-gray-500 text-sm">{key}</span>
                    <Tag
                      onClose={() => {

                        // remove the tag from the searchParams
                        const newSearchParams = { ...searchParams };
                        delete newSearchParams[key];

                        // construct query string
                        const queryString = new URLSearchParams(
                          newSearchParams
                        ).toString();

                        router.push(`${pathname}?${queryString}`);
                      }}
                      closable
                      closeIcon
                      className="flex items-center gap-1 border border-solid border-primary"
                    >
                      <div className="span text-primary text-sm ">
                        {key === 'tgl_registrasi' ? dayjs(searchParams[key]).format("YYYY-MM-DD") : searchParams[key]}
                      </div>
                    </Tag>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex gap-5">
          <Button className="invisible"
            onClick={() => {
              setShowFiltersModal(true);
            }}
          >
            Clear
          </Button>
          <Button
            type="primary"
            onClick={() => {
              searchParams.tgl_registrasi = ''
              setShowFiltersModal(true);
            }}
          >
            Show Filters
          </Button>
        </div>
      </div>

      {showFiltersModal && (
        <Modal
          title={
            <h1 className="text-xl font-semibold text-primary text-center uppercase">
              Apply Filters
            </h1>
          }
          open={showFiltersModal}
          footer={null}
          onCancel={() => {
            setShowFiltersModal(false);
          }}
          centered
          width={800}
        >
          <Form
            onFinish={onFinish}
            layout="vertical"
            initialValues={searchParams}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <Form.Item className="" label="Tanggal Registrasi" name="tgl_registrasi">
                <DatePicker className="w-full" format={'DD-MM-YYYY'}
                />
              </Form.Item>

            </div>

            <div className="mt-7 flex justify-end gap-5">
              <Button
                onClick={() => {
                  searchParams = tempSearchParam
                  setShowFiltersModal(false);
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default FiltersDateOnlyV2;
