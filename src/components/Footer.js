import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import ContentfulLogo from './Logo/Contenful.svg';
import GatsbyLogo from './Logo/Gatsby.svg';

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => `url("${props.theme.backgroundImages.idstbackground}") repeat center center`}; 
  color: ${props => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <ResponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <span>
        <Text
          mb={2}
          pb={1}
          css={{
            textTransform: 'uppercase',
            borderBottom: 'white 3px solid',
            display: 'table',
          }}
        >
          IDST!
        </Text>
      </span>
      <Flex justifyContent="center" alignItems="center">
      </Flex>
    </Fade>
  </FooterContainer>
);

export default Footer;
