import React from "react";
import styled from "styled-components";
import PhoneIcon from "../assets/Images/IconPhone.svg";
import EmailIcon from "../assets/Images/IconEmail.svg";
import Award1 from "../assets/Images/IconAward1.svg";
import Award2 from "../assets/Images/IconAward2.svg";
import FooterIcons from "../assets/Images/FooterIcon.svg";

const FooterSection = styled.div`
  height: 700px;
  background: #eeedde;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const FooterHeading = styled.h2`
  font-weight: 600;
  margin: 0;
  font-size: 56px;
  color: #203239;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 85%;
  padding: 150px 200px 100px 200px;
`;

const FooterCompartment1 = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 70px;
`;

const FooterCompartment2 = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  gap: 70px;
`;

const ContactUsCompartment = styled.div`
  border: 4px solid rgba(255, 117, 39, 0.5);
  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const ContactUsDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

const CallUs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const EmailUs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Footer = styled.div`
  background: #203239;
  height: 15%;
  color: #ffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
`;

const ContactName = styled.h4`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 1px;
  line-height: 24px;
  text-transform: capitalize;
  color: #203239;
`;

const Contact = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #203239;
  letter-spacing: 1px;
`;

const CallButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 41px;
  gap: 16px;
  width: 195px;
  height: 50px;
  border: none;
  background: rgba(255, 117, 39, 0.2);
  border-radius: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #ff7527;
`;

const EmailButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 41px;
  gap: 10px;
  border: none;
  width: 195px;
  height: 50px;
  background: rgba(255, 117, 39, 0.8);
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #ffff;
`;

const AwardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const Logo = styled.h4`
  color: #ffff;
  font-weight: 900;
  font-size: 36px;
  cursor: pointer;
  transform: scale(1.1);
`;

function PreFooter() {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterCompartment1>
          <FooterHeading>Contact us</FooterHeading>
          <ContactUsDetails>
            <ContactUsCompartment>
              <CallUs>
                <img src={PhoneIcon} alt="Phone Icon" />
                <div>
                  <ContactName>Call</ContactName>
                  <Contact>+6281232936700</Contact>
                </div>
              </CallUs>
              <CallButton>Call Now</CallButton>
            </ContactUsCompartment>
            <ContactUsCompartment>
              <EmailUs>
                <img src={EmailIcon} alt="email icon" />
                <div>
                  <ContactName>email</ContactName>
                  <Contact>omahindev2@gmail.com</Contact>
                </div>
              </EmailUs>
              <EmailButton>Email Now</EmailButton>
            </ContactUsCompartment>
          </ContactUsDetails>
        </FooterCompartment1>
        <FooterCompartment2>
          <FooterHeading>Awards</FooterHeading>
          <AwardsContainer>
            <img src={Award1} alt="award" />
            <img src={Award2} alt="award" />
          </AwardsContainer>
        </FooterCompartment2>
      </FooterContainer>
      <Footer>
        <Logo>Zimba</Logo>
        <img src={FooterIcons} alt="social media links" />
      </Footer>
    </FooterSection>
  );
}

export default PreFooter;
