import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import ImageTriangle from '../components/ImageTriangle';
import markdownRenderer from '../components/MarkdownRenderer';
import Logo from '../components/Logo/Portfolio.svg';


const Background = () => (
  <div>



  </div>

);

const ProfilePicture = styled(Image)`
  border-radius: 0;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const { aboutMe, profile } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box
              width={[1, 1, 2 / 6]}
              css={{ maxWidth: '300px', margin: 'auto' }}
            >
              
            </Box>
            <Box width={[1, 1, 5 / 6]} px={[1, 2, 4]}>
            <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
