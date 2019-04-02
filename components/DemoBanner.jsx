import React from 'react';
import styled from 'styled-components';

const DemoBannerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 8;
  height: 64px;
  background: rgba(31, 31, 31, 0.8);
  padding: 0 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: bold;

  @media all and (max-width: 940px) {
    padding: 0 16px;
  }

  @media all and (max-width: 640px) {
    height: 96px;

    & div {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-between;
    }

    & a {
      margin-right: 0;
    }
  }

  & a {
    display: inline-flex;
    height: 48px;
    background: #f94343;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    margin-left: 8px;
  }
`;

const DemoBanner = ({}) => (
  <DemoBannerContainer>
    This is a custom demo of Somm.
    <div>
      Like what you see?
      <a href="mailto: chris@somm.ca">Send Chris an email</a>
    </div>
  </DemoBannerContainer>
);

export default DemoBanner;
