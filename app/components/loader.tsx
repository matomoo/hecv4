"use client";
import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';


function Loader() {
  return (
    <div className="flex justify-center mt-20">
      <Spin indicator={<LoadingOutlined spin />} />
    </div>
  );
}

export default Loader;
