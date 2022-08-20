import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/Images/HeroImage.jpg";

const HeroContainer = styled.div`
  background: #eeedde;
  height: 1400px;
  padding: 0 200px 60px 200px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const HeroSectionDetails = styled.div`
  padding-top: 62px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const HeroSectionHeading = styled.h1`
  font-weight: 600;
  font-size: 84px;
  color: #203239;
`;

const HeroSectionMainPara = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  color: rgba(32, 50, 57, 0.55);
  margin: 24px 0 56px 0;
`;

const HeroSectionImage = styled.img`
  width: 50%;
  border-radius: 4px;
  object-fit: cover;
`;

const HeroSectionInput = styled.input`
  width: 70%;
  height: 70px;
  background: #ffffff;
  border-radius: 15px;
  border: none;
  padding: 23px 56px;
  margin-bottom: 80px;
`;

const HeroSectionPerformances = styled.div`
  display: flex;
  flex-direction: row;
  gap: 72px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 149px;
  height: 144px;
`;
const DetailHeading = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 150%;
  color: #203239;
  display: flex;
  flex-direction: row;
`;

const PerformanceSign = styled.div`
  color: #ff7527;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroSectionDetails>
        <HeroSectionHeading>
          Find Family Homes According to Your Desires
        </HeroSectionHeading>
        <HeroSectionMainPara>
          Providing housing for your family with a choice of variants and a
          strategic location in your city in an easier way.
        </HeroSectionMainPara>
        <div>
          <HeroSectionInput
            type="text"
            placeholder="Search location, properties, residental group"
          />
          <button>Search</button>
        </div>
        <HeroSectionPerformances>
          <DetailContainer>
            <DetailHeading>
              200<PerformanceSign>+</PerformanceSign>
            </DetailHeading>
            <p>Residential group has joined</p>
          </DetailContainer>
          <DetailContainer>
            <DetailHeading>
              10<PerformanceSign>+</PerformanceSign>
            </DetailHeading>
            <p>Already experienced </p>
          </DetailContainer>
          <DetailContainer>
            <DetailHeading>
              999<PerformanceSign>+</PerformanceSign>
            </DetailHeading>
            <p>Properties available in various Cities</p>
          </DetailContainer>
        </HeroSectionPerformances>
      </HeroSectionDetails>

      <HeroSectionImage src={HeroImage} alt="A house"></HeroSectionImage>
    </HeroContainer>
  );
}

export default Hero;
