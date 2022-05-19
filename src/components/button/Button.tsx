import React from "react";
import styled from "styled-components";

import cryptomeda_logo from "../../../public/images/icons/cryptomeda_logo.png";

const Container = styled.button<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "160px")};
  background-color: #f3b809;
  color: #000;
  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  border: none;
  padding: 17px 20px 13px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: boolean;
}

const Button = ({
  children,
  onClick,
  disabled,
  fullWidth,
  icon,
}: ButtonProps) => {
  return (
    <Container onClick={onClick} disabled={disabled} fullWidth={fullWidth}>
      {icon ? <img src={cryptomeda_logo.src} alt="sryptomeda-logo" /> : null}
      {children}
    </Container>
  );
};

export default Button;
