import React from "react";
import styled from "styled-components";

import background from "../../../public/images/backgrounds/bg_2.png";
import cryptomedaLogo from "../../../public/images/icons/cryptomeda_logo_blurred.jpg";

const Container = styled.main`
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
`;

const Content = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 80px;
  color: #fff;
`;

const HeadingWrapper = styled.div`
  border-left: 10px solid #fff;
  padding-left: 20px;

  h1 {
    font-size: 68px;
  }

  h2 {
    font-size: 30px;
    color: #f3b809;
  }
`;

const TextWrapper = styled.article`
  display: flex;
  font-size: 26px;
  margin-top: 30px;
  width: 50%;

  div {
    margin-right: 20px;
  }
`;

const Footer = styled.footer`
  margin-top: 60px;
  padding-bottom: 40px;

  p {
    font-family: "Archivo", sans-serif;
  }
`;

const CompanyBlock = () => {
  return (
    <Container>
      <Content>
        <HeadingWrapper>
          <h1>Company</h1>
          <h2>Contact us</h2>
        </HeadingWrapper>
        <TextWrapper>
          <div>
            <p style={{ color: "#f3b809" }}>M.D.N Tech, FZE</p>
            <p>
              Al Shmookh Business Center, One UAQ, UAQ Free Trade Zone, UmmAI
              Quwain, U.A.E.
            </p>
          </div>
          <div>
            <p>LICENSE NO. 7813</p>
            <p>+971 58 228 3256</p>
            <p>info@medawars.tech</p>
          </div>
        </TextWrapper>
        <Footer>
          <p>All rights reserved 2022</p>
        </Footer>
      </Content>
    </Container>
  );
};

export default CompanyBlock;
