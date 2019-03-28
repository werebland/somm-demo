import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

const Splash = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
  background-size: cover;
  background-position: center;
`;

const Paper = styled.div`
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 8px;
  display: inline-flex;
  flex-flow: column nowrap;
  padding: 16px;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: bold;
  color: #1f1f1f;

  & a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    background: #f94343;
    color: #fff;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 16px;
  }
`;

export default () =>
<Splash>
  <Head>
    <title>Custom demos | Somm</title>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />
  </Head>
  <GlobalStyle />
  <Paper>
    Somm is the personal assistant for your restaurant website's menu.
    <a href="mailto: chris@somm.ca">Request a custom demo</a>
  </Paper>
</Splash>
