import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Events from '../sections/Events';
import Writing from '../sections/Writing';
import Artworks from '../sections/Artworks';

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Projects />
    <Events />
    <Writing />
    <Artworks />
  </Layout>
);

export default IndexPage;
