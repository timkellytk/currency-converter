import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyles';
import QuickQuote from './pages/QuickQuote';
import QuickQuoteResult from './pages/QuickQuoteResult';

function App() {
  /* Form State */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+61');
  const [phone, setPhone] = useState('');
  const [fromCurrency, setFromCurrency] = useState('AUD');
  const [toCurrency, setToCurrency] = useState('GBP');
  const [currencyValue, setCurrencyValue] = useState(25000);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleFromCurrencyChange = (e, { value }) => setFromCurrency(value);
  const handleToCurrencyChange = (e, { value }) => setToCurrency(value);
  const handleCurrencyValueChange = (event) => {
    setCurrencyValue(event.target.value);
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('pre fail console', history);
    history.push(
      `/result?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}&currencyValue=${currencyValue}`
    );
  };

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/result">
          <QuickQuoteResult />
        </Route>
        <Route path="/">
          <QuickQuote
            firstName={firstName}
            lastName={lastName}
            email={email}
            countryCode={countryCode}
            phone={phone}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencyValue={currencyValue}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleEmailChange={handleEmailChange}
            handleCountryCodeChange={handleCountryCodeChange}
            handlePhoneChange={handlePhoneChange}
            handleFromCurrencyChange={handleFromCurrencyChange}
            handleToCurrencyChange={handleToCurrencyChange}
            handleCurrencyValueChange={handleCurrencyValueChange}
            handleSubmit={handleSubmit}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
