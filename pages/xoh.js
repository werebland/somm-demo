import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic'
import Head from 'next/head'

import DemoBanner from '../components/DemoBanner'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

const SommWidget = dynamic(() => import('../components/SommWidget'), {
  ssr: false
})

const DemoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const IFrameWrapper = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  z-index: 1;
  overflow: hidden;

  & iframe {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
`;

export default () =>
  <DemoWrapper>
    <GlobalStyle />
    <Head>
      <title>The Exchange on Hollis | Somm Demo</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Head>
    <DemoBanner />
    <IFrameWrapper>
      <iframe src="https://xoh.ca" frameBorder="0"></iframe>
    </IFrameWrapper>
    <SommWidget username="xoh" icon="rounded" iconColor="#be713c" backgroundColor="#fff" position="right" message="Check out our menu 👇"/>
  </DemoWrapper>
