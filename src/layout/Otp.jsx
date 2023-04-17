import { useState } from "react";
import OtpInput from "react-otp-input";
import { Card, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import styled from "styled-components";
import Logo from "../assets/logoaialogin.png";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handlesend = () =>{
    navigate("/home")
  }

  const IconLock = styled.div`
    display: flex;
    justify-content: center;
  `;

  const LockIcon = styled(LockOutlined)`
    font-size: 70px;
    color: #DB0026;
  `;

  const Description = styled(Paragraph)`
    color: #1d2d50;
    font-size: 12px;
    text-align: justify;
    align-items: center;
    margin-top: 20px;
  `;

  const ButtonOTP = styled(Button)`
    width: 100%;
    margin-top: 5%;
    background-color: #DB0026;
  `;

  return (
    <section className="ContainerOTP">
      <div className="containerOTPLogo">
        <img
          src={Logo}
          alt=""
          style={{
            width: "18%",
          }}
        />
      </div>
      <div className="ContainerOTPCard">
        <Card
          style={{ width: 300, marginTop: "40px" }}
          className="shadow-card-OTP"
        >
          <IconLock className="icon-lock">
            <LockIcon />
          </IconLock>
          <IconLock>
            <Description>Enter 6-digit code from your Email</Description>
          </IconLock>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            inputType="tel"
            inputStyle={{
              width: "10%",
              color: "#DB0026",
              padding: "12px",
            }}
            containerStyle={{
              marginTop: "5%",
            }}
            renderInput={(props) => <input {...props} />}
          />
           <ButtonOTP
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ backgroundColor: "#DB0026" }}
              onClick={handlesend}
            >
              Send
            </ButtonOTP>
        </Card>
      </div>
    </section>
  );
};

export default OTP;
