"use client";
import React from "react";
import { ConfigProvider } from "antd";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1B4242",
            borderRadius: 4,
          },
          components: {
            Button: {
              controlHeight: 40,
              boxShadow: "none",
              colorPrimaryActive: "#1B4242",
              controlOutline: "none",
              colorBorder: "#1B4242",
            },
            Input: {
              controlHeight: 42,
              boxShadow: "none",
              activeShadow: "none",
            },
            Select: {
              controlHeight: 42,
              boxShadow: "none",
              controlOutline: "none",
            },
            InputNumber: {
              controlHeight: 42,
              boxShadow: "none",
              activeShadow: "none",
            },
            DatePicker: {
              controlHeight: 42,
              boxShadow: 'none',
            },
            Tabs: {
              controlHeight: 42,
            }
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
}

export default ThemeProvider;
