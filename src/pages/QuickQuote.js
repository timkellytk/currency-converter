import React from 'react';
import styled from 'styled-components';
import { Form, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import countryCodes from '../data/countryCodes.json';
import countryOptions from '../data/currenciesData';
import QuickQuoteLayout from '../components/QuickQuoteLayout';
import Button from '../components/Button';

const FormSection = styled.div`
  padding: 25px;
  background-color: ${(props) => props.bgColour};
`;

const FormDivider = styled.div`
  height: 1px;
  background-color: lightgray;
`;

const TwoInputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5em;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: 20px;
  }
`;

const StyledFormField = styled(Form.Field)`
  &&&&& {
    label {
      margin-bottom: 10px;
      font-weight: 400;
    }
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const TelephoneContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PhoneDropdown = styled(Dropdown)`
  &&& {
    background-color: #f9f9f9;
  }
`;

const StyledPhoneDropdown = styled(PhoneDropdown)`
  &&&& {
    min-width: 100px;
  }
`;

const QuickQuote = ({
  firstName,
  lastName,
  email,
  countryCode,
  phone,
  fromCurrency,
  toCurrency,
  currencyValue,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handleCountryCodeChange,
  handlePhoneChange,
  handleFromCurrencyChange,
  handleToCurrencyChange,
  handleCurrencyValueChange,
  handleSubmit,
}) => (
  <QuickQuoteLayout>
    <Form size="big" onSubmit={handleSubmit}>
      <FormSection>
        <TwoInputGrid>
          <StyledFormField required>
            <label htmlFor="first-name">First Name</label>
            <input
              placeholder="First Name"
              type="text"
              id="first-name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </StyledFormField>
          <StyledFormField required>
            <label htmlFor="last-name">Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              id="last-name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </StyledFormField>
        </TwoInputGrid>
        <StyledFormField>
          <Form.Input
            label="Email"
            placeholder="joe@schmoe.com"
            value={email}
            onChange={handleEmailChange}
          />
        </StyledFormField>
        <StyledFormField>
          <label htmlFor="mobile">Telephone / Mobile</label>
          <TelephoneContainer>
            <StyledPhoneDropdown
              value={countryCode}
              onChange={handleCountryCodeChange}
              search
              selection
              options={countryCodes}
            />
            <input
              placeholder="420 316 322"
              type="tel"
              id="mobile"
              value={phone}
              onChange={handlePhoneChange}
            />
          </TelephoneContainer>
        </StyledFormField>
      </FormSection>
      <FormDivider />
      <FormSection bgColour="#f9f9f9">
        <TwoInputGrid>
          <StyledFormField required>
            <label htmlFor="from-currency">From Currency</label>
            <Dropdown
              fluid
              search
              selection
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              options={countryOptions}
            />
          </StyledFormField>
          <StyledFormField required>
            <label htmlFor="to-currency">To Currency</label>
            <Dropdown
              fluid
              search
              selection
              value={toCurrency}
              onChange={handleToCurrencyChange}
              options={countryOptions}
            />
          </StyledFormField>
        </TwoInputGrid>
        <TwoInputGrid>
          <StyledFormField required>
            <label htmlFor="amount">Amount</label>
            <input
              value={currencyValue}
              onChange={handleCurrencyValueChange}
              id="amount"
              type="number"
            />
          </StyledFormField>
        </TwoInputGrid>
        <SubmitContainer>
          <Button type="submit">Get Quote</Button>
        </SubmitContainer>
      </FormSection>
    </Form>
  </QuickQuoteLayout>
);

QuickQuote.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  currencyValue: PropTypes.number.isRequired,
  handleFirstNameChange: PropTypes.func.isRequired,
  handleLastNameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handleCountryCodeChange: PropTypes.func.isRequired,
  handlePhoneChange: PropTypes.func.isRequired,
  handleFromCurrencyChange: PropTypes.func.isRequired,
  handleToCurrencyChange: PropTypes.func.isRequired,
  handleCurrencyValueChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default QuickQuote;
