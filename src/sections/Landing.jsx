import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Label } from 'rebass';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="darkBlue"
      height={['35vh', '50vh']}
      width={['95vw', '20vw']}
    />

    <Triangle
      color="lightPurple"
      height={['38vh', '80vh']}
      width={['50vw', '5vw']}
    />

    <Triangle
      color="darkBlue"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="lightPurple"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            description
            openingtimes
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles, openingtimes, description } = data.contentfulAbout;

        return (
          <Fragment>
            <Heading
              textAlign="center"
              is="h1"
              color="primary"
              fontSize={[5, 6, 8]}
              mb={[3, 4, 5]}
            >
              {`We are ${name}!`}
            </Heading>
            <Heading
              textAlign="center"
              is="h1"
              color="primary"
              fontSize={[5, 6, 7]}
              mb={[3, 4, 5]}
            >
              {`${description}`}
            </Heading>

            <Heading
              textAlign="center"
              is="h2"
              color="primary"
              fontSize={[2, 3, 4]}
              mb={[3, 4, 5]}
            >
              {`${openingtimes}`}
            </Heading>

            <MouseIcon />
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
