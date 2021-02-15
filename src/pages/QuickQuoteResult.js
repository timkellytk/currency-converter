import React from 'react';
import styled from 'styled-components';
import QuickQuoteLayout from '../components/QuickQuoteLayout';
import Button from '../components/Button';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const SmallHeading = styled.p`
  font-size: 2em;
  font-weight: lighter;
  margin-bottom: 5px;
`;

const ExchangeRateHeading = styled.h3`
  color: #08b68a;
  font-size: 4.5em;
  font-weight: lighter;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const CurrencyHeading = styled.h4`
  font-size: 2.8em;
  font-weight: lighter;
  margin-top: 0px;

  span {
    color: #057db1;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
`;

const QuickQuoteResult = () => {
  console.log('loaded');
  return (
    <QuickQuoteLayout contentBgColour="#fbfbfb">
      <ResultContainer>
        <SmallHeading>OFX Customer Rate</SmallHeading>
        <ExchangeRateHeading>0.7618</ExchangeRateHeading>
        <div>
          <SmallHeading>From</SmallHeading>
          <CurrencyHeading>
            AUD <span>25,000.00</span>
          </CurrencyHeading>
          <SmallHeading>To</SmallHeading>
          <CurrencyHeading>
            USD <span>19,045.00</span>
          </CurrencyHeading>
        </div>
        <ButtonContainer>
          <Button>Start New Quote</Button>
        </ButtonContainer>
      </ResultContainer>
    </QuickQuoteLayout>
  );
};

export default QuickQuoteResult;
