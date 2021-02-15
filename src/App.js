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

  /* Form Error State */
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [currencyValueError, setCurrencyValueError] = useState(false);

  const validName = (name) => name.length > 0;
  const validCurrencyValue = (amount) => amount > 0;

  /* Form Handling */
  const handleFirstNameChange = (event) => {
    const newFirstName = event.target.value;

    setFirstName(newFirstName);
    if (validName(newFirstName)) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
  };
  const handleLastNameChange = (event) => {
    const newLastName = event.target.value;

    setLastName(newLastName);
    if (validName(newLastName)) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
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
    const newCurrencyValue = event.target.value;
    setCurrencyValue(newCurrencyValue);
    if (validCurrencyValue(newCurrencyValue)) {
      setCurrencyValueError(false);
    } else {
      setCurrencyValueError(true);
    }
  };

  /* Form Submit Handling */
  const isFormValid = () => {
    let validForm = true;
    if (!validName(firstName)) {
      setFirstNameError(true);
      validForm = false;
    }
    if (!validName(lastName)) {
      setLastNameError(true);
      validForm = false;
    }
    if (!validCurrencyValue(currencyValue)) {
      setCurrencyValueError(true);
      validForm = false;
    }
    return validForm;
  };

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      history.push(
        `/result?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}&currencyValue=${currencyValue}`
      );
    }
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
            firstNameError={firstNameError}
            lastName={lastName}
            lastNameError={lastNameError}
            email={email}
            countryCode={countryCode}
            phone={phone}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencyValue={currencyValue}
            currencyValueError={currencyValueError}
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
