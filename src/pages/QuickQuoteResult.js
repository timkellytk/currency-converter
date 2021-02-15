import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import QuickQuoteLayout from '../components/QuickQuoteLayout';
import Button from '../components/Button';
import formatNumber from '../utilities/formatNumber';

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

const QuickQuoteResult = ({ location }) => {
  const params = queryString.parse(location.search);
  const fromCurrency = params.fromCurrency || 'AUD';
  const toCurrency = params.toCurrency || 'GBP';
  const currencyValue = parseInt(params.currencyValue, 10) || 0;
  const [customerRate, setCustomerRate] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${currencyValue}?format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.customerRate !== customerRate) {
          setCustomerRate(data.CustomerRate);
        }
      });
  }, [customerRate, fromCurrency, toCurrency, currencyValue]);

  const fromCurrencyFormatted = formatNumber(currencyValue.toFixed(2));
  const toCurrencyValue = currencyValue * customerRate;
  const toCurrencyFormatted = formatNumber(toCurrencyValue.toFixed(2));

  console.log(params);

  return (
    <QuickQuoteLayout contentBgColour="#fbfbfb">
      <ResultContainer>
        <SmallHeading>OFX Customer Rate</SmallHeading>
        <ExchangeRateHeading>{customerRate}</ExchangeRateHeading>
        <div>
          <SmallHeading>From</SmallHeading>
          <CurrencyHeading>
            {fromCurrency} <span>{fromCurrencyFormatted}</span>
          </CurrencyHeading>
          <SmallHeading>To</SmallHeading>
          <CurrencyHeading>
            {toCurrency} <span>{toCurrencyFormatted}</span>
          </CurrencyHeading>
        </div>
        <ButtonContainer>
          <Button as={Link} to="/">
            Start New Quote
          </Button>
        </ButtonContainer>
      </ResultContainer>
    </QuickQuoteLayout>
  );
};

QuickQuoteResult.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default withRouter(QuickQuoteResult);
