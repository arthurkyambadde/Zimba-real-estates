import React from "react";
import styled from "styled-components";
import Exterior from "../assets/Images/ExteriorImage.jpg";
import Interior from "../assets/Images/InteriorImage.jpg";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 200px;
  background: #eeedde;
  height: 1500px;
`;

const HeadingContainer = styled.div`
  margin-bottom: 70px;
`;

const SectionTag = styled.p`
  font-weight: 500;
  color: #ff7527;
  font-size: 24px;
`;

const SectionHeading = styled.h2`
  font-weight: 600;
  font-size: 56px;
  color: #203239;
  width: 700px;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageCOntainer = styled.div`
  width: 50%;
  height: 1000px;

  position: relative;
`;

const HouseImage2 = styled.img`
  height: 800px;
  width: 600px;
  border-radius: 16px;
  position: absolute;
  bottom: 80px;
  right: 250px;
`;
const HouseImage1 = styled.img`
  height: 800px;
  width: 600px;
  border-radius: 16px;
  position: absolute;
  left: 250px;
  top: 50px;
  z-index: 2;
`;

const ChoiceDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionMinorheading = styled.h2`
  font-weight: 600;
  font-size: 56px;
  color: #203239;
  width: 900px;
`;

const SectionPara = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #203239;
  width: 1000px;
  margin-bottom: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 41px;
  gap: 50px;
`;

const PrimaryButton = styled.div`
  width: 250px;
  height: 80px;
  font-weight: 700;
  font-size: 24px;
  border: 5px solid #203239;
  border-radius: 15px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondaryButton = styled.div`
  width: 250px;
  height: 80px;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
  background: #203239;
  border-radius: 10px;
  border-radius: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ConsumerChoice() {
  return (
    <SectionContainer>
      <HeadingContainer>
        <SectionTag>Consumer choice</SectionTag>
        <SectionHeading>Favorite Resident</SectionHeading>
      </HeadingContainer>
      <ChoiceContainer>
        <ImageCOntainer>
          <HouseImage1 src={Interior} />
          <HouseImage2 src={Exterior} />
        </ImageCOntainer>
        <ChoiceDetails>
          <SectionMinorheading>
            Building designed by Reliable Architecture
          </SectionMinorheading>
          <SectionPara>
            Without a doubt, the properties provided on our website are the
            result of professional collaboration with well-known Architects and
            trusted Developers.
          </SectionPara>
          <ButtonContainer>
            <PrimaryButton>Contact us</PrimaryButton>
            <SecondaryButton>Explore more</SecondaryButton>
          </ButtonContainer>
        </ChoiceDetails>
      </ChoiceContainer>
    </SectionContainer>
  );
}

export default ConsumerChoice;
