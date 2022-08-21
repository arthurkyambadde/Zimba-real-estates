import React, { Component } from "react";
import styled from "styled-components";
import Choice1 from "../assets/Images/Choice1.svg";
import Choice2 from "../assets/Images/Choice2.svg";
import Choice3 from "../assets/Images/Choice3.svg";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 200px;
  background: #ffff;
  height: 1500px;
`;

const SectionTag = styled.p`
  font-weight: 500;
  color: #ff7527;
  font-size: 24px;
`;

const HeadingContainer = styled.div`
  margin-bottom: 70px;
`;

const SectionHeading = styled.h2`
  font-weight: 600;
  font-size: 56px;
  color: #203239;
  width: 700px;
`;

const SectionDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: center;
  align-items: center;
`;

const AuditoSectionCard = styled.div`
  height: 900px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
`;

const ChoiceImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 16px;
`;

const ChoiceHeading = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 150%;
  color: #203239;
  font-weight: 600;
`;

const ChoicePara = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #203239;
`;

class AuditorsChoice extends Component {
  render() {
    return (
      <SectionContainer>
        <HeadingContainer>
          <SectionTag>Auditor's Choice</SectionTag>
          <SectionHeading>Residents of Various Cities</SectionHeading>
        </HeadingContainer>
        <SectionDetailsContainer>
          <AuditoSectionCard>
            <ChoiceImg src={Choice1} alt="house choice 1" />

            <div>
              <ChoiceHeading>Magnolia Surabaya</ChoiceHeading>
              <ChoicePara>
                Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec.
                Jatiuwung, Tangerang City, Banten 15136
              </ChoicePara>
            </div>
          </AuditoSectionCard>
          <AuditoSectionCard>
            <ChoiceImg src={Choice2} alt="house choice 2" />
            <div>
              <ChoiceHeading>Pinang Residences</ChoiceHeading>
              <ChoicePara>
                Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, South
                Jakarta 12330
              </ChoicePara>
            </div>
          </AuditoSectionCard>
          <AuditoSectionCard>
            <ChoiceImg src={Choice3} alt="house choice 3" />

            <div>
              <ChoiceHeading>South Grove</ChoiceHeading>
              <ChoicePara>
                1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta
                Selatan, Daerah Khusus Ibukota Jakarta 12440
              </ChoicePara>
            </div>
          </AuditoSectionCard>
        </SectionDetailsContainer>
      </SectionContainer>
    );
  }
}

export default AuditorsChoice;
