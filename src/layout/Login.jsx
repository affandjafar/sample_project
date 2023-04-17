import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logoaialogin.png";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handlesubmit = () => {
    navigate("/otp");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "40px",
          width: "20%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={Logo}
            alt=""
            style={{
              width: "80%",
              marginBottom: 50,
            }}
          />
        </div>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <ConfigProvider
              theme={{
                token: {
                  Input: {
                    controlOutline: "rgba(219, 0, 38, 0.3)",
                    colorPrimaryHover: "#DB0026",
                  },
                },
              }}
            >
              <Input
                prefix={
                  <UserOutlined
                    className="site-form-item-icon"
                    style={{ color: "rgba(0,0,0,0.3)" }}
                  />
                }
                placeholder="Username"
              />
            </ConfigProvider>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <ConfigProvider
              theme={{
                token: {
                  Input: {
                    controlOutline: "rgba(219, 0, 38, 0.3)",
                    colorPrimaryHover: "#DB0026",
                  },
                },
              }}
            >
              <Input
                prefix={
                  <LockOutlined
                    className="site-form-item-icon"
                    style={{ color: "rgba(0,0,0,0.3)" }}
                  />
                }
                type="password"
                placeholder="Password"
              />
            </ConfigProvider>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" noStyle>
            <ConfigProvider
              theme={{
                components: {
                  Checkbox: {
                    colorPrimary: "#DB0026",
                    colorPrimaryBorder: "#DB0026",
                    colorPrimaryHover: "#DB0026",
                  },
                },
              }}
            >
              <Checkbox>Remember Me</Checkbox>
            </ConfigProvider>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{
                width: "100%",
                marginTop: 20,
                backgroundColor: "#DB0026",
              }}
              onClick={handlesubmit}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
