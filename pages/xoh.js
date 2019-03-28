import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic'
import Head from 'next/head'
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
  heght: 100%;
  overflow: hidden;
  position: relative;
`;

const DemoBanner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 64px;
  background: #1f1f1f;
  padding: 0 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: bold;

  & a {
    display: inline-flex;
    height: 48px;
    background: #f94343;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    margin-left: 8px;
  }
`;

const IFrameWrapper = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;

  & iframe {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
`;

const XOHDemo = ({}) => (
  <DemoWrapper>
    <GlobalStyle />
    <Head>
      <title>The Exchange on Hollis | Somm Demo</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Head>
    <DemoBanner>
      This is a custom demo of Somm.
      <div>
        Like what you see?
        <a href="mailto: chris@somm.ca">Send Chris an email</a>
      </div>
    </DemoBanner>
    <IFrameWrapper>
      <iframe src="https://xoh.ca" frameBorder="0"></iframe>
    </IFrameWrapper>
    <SommWidget username="xoh" icon="rounded" iconColor="#be713c" backgroundColor="#fff" position="right" message="Check out our menu 👇"/>
  </DemoWrapper>
);

export default XOHDemo;
