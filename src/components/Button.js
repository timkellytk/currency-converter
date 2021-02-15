import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { COLORS } from '../theme/constants';

const StyledButton = styled(Button)`
  &&&&& {
    padding: 20px 90px;
    border-radius: 40px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: lighter;
    background-color: ${COLORS.primary};
    color: white;

    @media (max-width: 600px) {
      padding: 20px 50px;
      font-size: 16px;
    }
  }
`;

export default StyledButton;
