import React from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react';

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label htmlFor="first-name">
        First Name
        <input placeholder="First Name" id="first-name" />
      </label>
    </Form.Field>
    <Form.Field>
      <label htmlFor="last-name">
        Last Name
        <input placeholder="Last Name" id="last-name" />
      </label>
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default FormExampleForm;
