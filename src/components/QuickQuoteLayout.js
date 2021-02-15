import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  margin: 5% 7.5%;
  display: flex;
  justify-content: center;
`;

const QuickQuoteContainer = styled.div`
  width: 100%;
  max-width: 900px;
`;

const ContentContainer = styled.div`
  border: lightgray 1px solid;
  border-radius: 2px;
  background-color: ${(props) => props.contentBgColour};
`;

const StyledHeading = styled.h1`
  font-size: 3em;
  font-weight: 400;
`;

const BlueDivider = styled.div`
  background-color: #5ec7ff;
  height: 1px;
  width: 100%;
  margin-bottom: 20px;
`;

const QuickQuoteLayout = ({ children, contentBgColour }) => (
  <StyledContainer>
    <QuickQuoteContainer>
      <StyledHeading>Quick Quote</StyledHeading>
      <BlueDivider />
      <ContentContainer contentBgColour={contentBgColour}>
        {children}
      </ContentContainer>
    </QuickQuoteContainer>
  </StyledContainer>
);

QuickQuoteLayout.propTypes = {
  children: PropTypes.node.isRequired,
  contentBgColour: PropTypes.string,
};

QuickQuoteLayout.defaultProps = {
  contentBgColour: null,
};

export default QuickQuoteLayout;
