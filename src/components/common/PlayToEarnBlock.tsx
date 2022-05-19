import React from "react";
import styled from "styled-components";
import Button from "../button/Button";

import background from "../../../public/images/backgrounds/bg_1.png";
import logo from "../../../public/images/icons/medawars_logo.png";
import phone from "../../../public/images/misc/phone.png";
import appleButton from "../../../public/images/buttons/appstore.png";
import googleButton from "../../../public/images/buttons/google_play.png";

const Container = styled.main`
  background-image: url(${background.src});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Content = styled.section`
  max-width: 800px;
  margin: 0 auto;
  color: white;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 60px;
    width: 50%;
    text-align: center;
    font-weight: 400;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 26px;
    }
  }
`;

const LogoWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  margin-bottom: 40px;

  img {
    width: 120px;
    height: 100%;
  }
`;

const PhoneWrapper = styled.figure`
  width: 80%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const DownloadWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 30px;
    color: #f3b809;
  }

  @media only screen and (max-width: 800px) {
    p {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 400px) {
    margin-top: 40px;

    p {
      font-size: 20px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;

  img {
    height: 50px;
    width: 160px;
    cursor: pointer;
    margin: 0 10px;
  }

  @media only screen and (max-width: 360px) {
    flex-direction: column;

    img {
      margin: 5px;
    }
  }
`;

const PlayToEarnBlock = () => {
  return (
    <Container>
      <Content>
        <LogoWrapper>
          <img src={logo.src} alt="medawars-logo" />
        </LogoWrapper>
        <h1>Play-to-earn mobile strategy game</h1>
        <PhoneWrapper>
          <img src={phone.src} alt="phone" />
        </PhoneWrapper>
        <Button icon>Learn more</Button>
        <DownloadWrapper>
          <p>Coming soon</p>
          <Buttons>
            <img src={googleButton.src} alt="google-button" />
            <img src={appleButton.src} alt="apple-button" />
          </Buttons>
        </DownloadWrapper>
      </Content>
    </Container>
  );
};

export default PlayToEarnBlock;
