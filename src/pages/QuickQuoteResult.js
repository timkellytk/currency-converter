import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import queryString from "query-string";
import PropTypes from "prop-types";
import QuickQuoteLayout from "../components/QuickQuoteLayout";
import Button from "../components/Button";
import formatNumber from "../utilities/formatNumber";
import { COLORS, SPACING } from "../theme/constants";

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SPACING.xl} ${SPACING.md};
`;

const SmallHeading = styled.p`
  font-size: 2em;
  font-weight: lighter;
  margin-bottom: ${SPACING.xs};
`;

const ExchangeRateHeading = styled.h3`
  color: ${COLORS.green};
  font-size: 4.5em;
  font-weight: lighter;
  margin-bottom: ${SPACING.md};
  margin-top: ${SPACING.sm};
`;

const CurrencyHeading = styled.h4`
  font-size: 2.8em;
  font-weight: lighter;
  margin-top: 0px;

  span {
    color: ${COLORS.primary};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 80px;
`;

const QuickQuoteResult = ({ location }) => {
  const params = queryString.parse(location.search);
  const fromCurrency = params.fromCurrency || "AUD";
  const toCurrency = params.toCurrency || "GBP";
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

  const Result = () => (
    <>
      <SmallHeading id="quote-success">OFX Customer Rate</SmallHeading>{" "}
      <ExchangeRateHeading id="customer-rate">{customerRate}</ExchangeRateHeading>
      <div>
        <SmallHeading>From</SmallHeading>
        <CurrencyHeading id="from-currency">
          {fromCurrency} <span>{fromCurrencyFormatted}</span>
        </CurrencyHeading>
        <SmallHeading>To</SmallHeading>
        <CurrencyHeading id="to-currency">
          {toCurrency} <span>{toCurrencyFormatted}</span>
        </CurrencyHeading>
      </div>
    </>
  );

  const Error = () => (
    <SmallHeading id="quote-error">
      Error: OFX Does Not Convert Money To {toCurrency}
    </SmallHeading>
  );

  return (
    <QuickQuoteLayout contentBgColour="#fbfbfb">
      <ResultContainer>
        {toCurrencyValue ? <Result /> : <Error />}

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
