import React, { Component } from "react";
import styled from "styled-components";
import ReadMore from "./ReadMore";

const SectionContainer = styled.div`
  height: 650px;
  padding: 100px 200px;
`;

const CardHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SectionHeading = styled.h2`
  font-weight: 600;
  font-size: 56px;
  color: #203239;
  width: 700px;
`;

const SectionCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 200px;
  margin-top: 70px;
`;

const CardHeading = styled.h4`
  font-weight: 500;
  font-size: 28px;
  color: #203239;
  border-left: 8px solid #ff7527;
  padding: 20px 35px;
  border-radius: 8px;
`;

const CardPara = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #555;
  margin-bottom: 50px;
`;

const CardLabel = styled.span`
  font-weight: 500;
  font-size: 24px;

  color: #ff7527;
`;

const Container = styled.div`
  padding: 0 150px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
`;

class PurchaseStages extends Component {
  render() {
    return (
      <SectionContainer>
        <SectionHeading>Easy and Fast Property Purchase Stages</SectionHeading>

        <Container>
          <SectionCards>
            <CardContainer>
              <div>
                <CardHeadingContainer>
                  <CardHeading>Select Property</CardHeading>
                  <CardLabel>01</CardLabel>
                </CardHeadingContainer>
                <CardPara>
                  Find the desired property according to your criteria and your
                  family. You can read more about choosing a property wisely
                  here
                </CardPara>
              </div>
              <ReadMore />
            </CardContainer>
            <CardContainer>
              <div>
                <CardHeadingContainer>
                  <CardHeading>Process Booking</CardHeading>
                  <CardLabel>02</CardLabel>
                </CardHeadingContainer>
                <CardPara>
                  Payment in the form of a sum of money as a commitment to order
                  certain property units.
                </CardPara>
              </div>
              <ReadMore />
            </CardContainer>
            <CardContainer>
              <div>
                <CardHeadingContainer>
                  <CardHeading>Mortgage and Certification</CardHeading>
                  <CardLabel>03</CardLabel>
                </CardHeadingContainer>
                <CardPara>
                  Mortgage financing for home buyers with a financing scheme if
                  needed and continued with the HGB certification process.
                </CardPara>
              </div>
              <ReadMore />
            </CardContainer>
          </SectionCards>
        </Container>
      </SectionContainer>
    );
  }
}

export default PurchaseStages;
