import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Dropdown } from 'semantic-ui-react';
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

const TwoFormInputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5em;
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

const QuickQuote = () => {
  const [fromCurrency, setFromCurrency] = useState('AUD');
  const [toCurrency, setToCurrency] = useState('GBP');

  const handleFromCurrencyChange = (e, { value }) => setFromCurrency(value);
  const handleToCurrencyChange = (e, { value }) => setToCurrency(value);

  const StyledPhoneDropdown = styled(PhoneDropdown)`
    &&&& {
      min-width: 100px;
    }
  `;

  return (
    <QuickQuoteLayout>
      <Form size="big">
        <FormSection>
          <TwoFormInputGrid>
            <StyledFormField required>
              <label htmlFor="first-name">First Name</label>
              <input placeholder="First Name" type="text" id="first-name" />
            </StyledFormField>
            <StyledFormField required>
              <label htmlFor="last-name">Last Name</label>
              <input placeholder="Last Name" type="text" id="last-name" />
            </StyledFormField>
          </TwoFormInputGrid>
          <StyledFormField>
            <Form.Input label="Email" placeholder="joe@schmoe.com" />
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="mobile">Telephone / Mobile</label>
            <TelephoneContainer>
              <StyledPhoneDropdown
                text="+61"
                search
                selection
                options={countryCodes}
              />
              <input placeholder="" type="tel" id="mobile" />
            </TelephoneContainer>
          </StyledFormField>
        </FormSection>
        <FormDivider />
        <FormSection bgColour="#f9f9f9">
          <TwoFormInputGrid>
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
          </TwoFormInputGrid>
          <TwoFormInputGrid>
            <StyledFormField required>
              <label htmlFor="amount">Amount</label>
              <input value="25,000.00" id="amount" type="text" />
            </StyledFormField>
          </TwoFormInputGrid>
          <SubmitContainer>
            <Button type="submit">Get Quote</Button>
          </SubmitContainer>
        </FormSection>
      </Form>
    </QuickQuoteLayout>
  );
};

export default QuickQuote;
