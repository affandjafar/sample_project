import {
  HomeOutlined,
  SettingOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Layout, Menu, theme, Button } from "antd";
import { useState } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import Logo from "../assets/logoaia.png";
import { useNavigate } from "react-router-dom";
import ConfigProvider from "antd/es/config-provider";

const { Text } = Typography;

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Settings", "2", <SettingOutlined />),
];
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        trigger={null}
        style={{ backgroundColor: "#DB0026" }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div>
          <img
            src={Logo}
            alt=""
            style={{
              height: 50,
              width: 184,
              objectFit: "contain",
              margin: 10,
              marginTop: 5,
              marginLeft: 0,
              marginBottom: 40,
            }}
          />
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "black",
              controlItemBgActive: "white",
            },
          }}
        >
          <Menu
            style={{ backgroundColor: "#DB0026", color: "white" }}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </ConfigProvider>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            display: "flex",
            width: "100%",
            padding: 0,
            justifyContent: "space-between",
            alignItems: "center",
            background: colorBgContainer,
            backgroundColor: "#DB0026",
          }}
        >
          <div />
          <div
            style={{
              width: "33%",
              display: "flex",
              justifyContent: "end",
              paddingRight: "20px",
            }}
          >
            <ConfigProvider
              theme={{
                token: {
                  colorBgContainer: "#DB0026",
                  colorBorder: "#DB0026",
                  colorText: "white",
                  colorPrimary: "black",
                  colorBgTextHover: "white",
                },
              }}
            >
              <Button>
                <ExportOutlined />
                Sign Out
              </Button>
            </ConfigProvider>
          </div>
        </Header>
        <Content
          style={{
            margin: "16px 16px",
          }}
        >
          <div
            style={{
              margin: 16,
              padding: 24,
              minHeight: 490,
              background: colorBgContainer,
            }}
          ></div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Copyright © 2023, AIA Group Limited and its subsidiaries. All rights
          reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
