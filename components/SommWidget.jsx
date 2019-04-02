import React, { Component } from 'react';
import PropTypes from 'prop-types';
import posed, {PoseGroup} from 'react-pose'
import styled, { keyframes } from 'styled-components';
import vhCheck from 'vh-check'
import mobile from 'is-mobile'
import Emoji from 'react-emoji-render';

const WidgetContainer = styled.div`
  position: fixed;
  ${props => props.position}: ${props => props.position == "left" ? '64px' : '16px'};
  bottom: 16px;
  z-index: 8;
`;

const PosedWidgetToggle = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  init: {
    scale: 0,
    opacity: 0,
  }
})

const WidgetToggle = styled(props => <PosedWidgetToggle {...props} />)`
  width: 48px;
  height: 48px;
  background: ${props => props.background};
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const WidgetFrame = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  init: {
    scale: 0,
    opacity: 0,
  }
})

const StyledWidgetFrame = styled(WidgetFrame)`
  width: calc(100vw - 32px);
  max-width: 360px;
  height: ${props => `calc(${props.viewportHeight}px - 32px - 64px)`};
  max-height: 600px;
  display: block;
  border: 0;
  appearance: none;
  background: #FFFFFF;
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  bottom: 64px;
  ${props => props.position}: ${props => props.position == "left" ? '-48px' : '0'};
  scale: 1;
  opacity: 1;
  transform-origin: bottom ${props => props.position};
`;

const WidgetToggleIcon = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  init: {
    scale: 0,
    opacity: 0,
  }
})

const StyledWidgetToggleIcon = styled(WidgetToggleIcon)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  scale: 1;
  opacity: 1;

  & svg {
    fill: ${props => props.iconColor};
    width: 32px;
    height: 32px;
  }
`;

const spinnerAnimation = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: ${mobile() ? 'scroll' : 'hidden'};
  border-radius: 8px;

  & iframe {
    border-radius: 8px;
  }
`;

const Spinner = styled.div`
  display: inline-flex;
  position: relative;
  width: 64px;
  height: 64px;

  & div {
    position: absolute;
    border: 4px solid ${props => props.color};
    opacity: 1;
    border-radius: 50%;
    animation: ${spinnerAnimation} 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite
  }

  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`

const PosedWidgetMessage = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
    delay: 1000,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  init: {
    scale: 0,
    opacity: 0,
  }
})

const WidgetMessage = styled((props) => <PosedWidgetMessage {...props} />)`
  width: auto;
  max-width: 224px;
  display: block;
  border: 0;
  appearance: none;
  background: #FFFFFF;
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  bottom: 64px;
  right: 0;
  scale: 1;
  opacity: 1;
  transform-origin: bottom right;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #1f1f1f;
  font-size: 1rem;
  white-space: pre;
`;

const WidgetToggleIconEmoji = styled.span`
  font-size: 1.75rem;
  line-height: 1.5rem;
  padding-top: 4px;
`;

class Widget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hasOpened: false,
      messageVisible: this.props.message ? true : false,
    }
  }

  handleToggle() {

  }

  render() {

    var test = vhCheck()
    console.log(test);
    console.log(mobile());

    return (
      <WidgetContainer position={this.props.position}>
        <PoseGroup animateOnMount preEnterPose="init">
          {this.state.messageVisible && !this.state.hasOpened &&
            <WidgetMessage key="1">
              {this.props.message}
            </WidgetMessage>
          }
        </PoseGroup>
        <PoseGroup>
          {this.state.open &&
            <StyledWidgetFrame key="0" viewportHeight={test.windowHeight} position={this.props.position}>
              <SpinnerWrapper>
                <iframe
                  style={{ zIndex: 8, position: 'absolute', top: 0, left: 0, background: 'transparent', display: 'block' }}
                  src={`https://app.somm.ca/${this.props.username}`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-top-navigation"
                  width="100%"
                  height="100%"
                  frameBorder="0">
                </iframe>
                <Spinner color={this.props.iconColor}>
                  <div></div>
                  <div></div>
                </Spinner>
              </SpinnerWrapper>

            </StyledWidgetFrame>
          }
        </PoseGroup>
        <PoseGroup animateOnMount preEnterPose="init">
          <WidgetToggle key="-1" background={this.props.backgroundColor} onClick={() => this.setState({ open: !this.state.open, hasOpened: true })}>
              {this.state.open
                ?
                  <StyledWidgetToggleIcon iconColor={this.props.iconColor}>
                    <svg fill={this.props.iconColor} width="18px" height="18px" viewBox="0 0 16 16" version="1.1">
                        <g id="Page-4" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Search" transform="translate(-46.000000, -45.000000)" fill={this.props.iconColor} fillRule="nonzero">
                                <g id="Group" transform="translate(32.000000, 32.000000)">
                                    <g id="Group-2" transform="translate(14.000000, 11.000000)">
                                        <polygon id="Shape" points="15.5555556 3.56666667 13.9888889 2 7.77777778 8.21111111 1.56666667 2 0 3.56666667 6.21111111 9.77777778 0 15.9888889 1.56666667 17.5555556 7.77777778 11.3444444 13.9888889 17.5555556 15.5555556 15.9888889 9.34444444 9.77777778"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                  </StyledWidgetToggleIcon>
                :
                  <StyledWidgetToggleIcon iconColor={this.props.iconColor}>
                    {this.props.icon === "rounded" &&
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z"/>
                        <path d="M8.1 13.34l2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L4.4 19.17c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 14.41l6.18 6.18c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 13l1.47-1.47z"/>
                      </svg>
                    }
                    {this.props.icon === "sharp" &&
                      <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z"/>
                        <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                      </svg>
                    }
                    {this.props.icon === "emoji" &&
                      <WidgetToggleIconEmoji><Emoji text="🍽"/></WidgetToggleIconEmoji>
                    }
                  </StyledWidgetToggleIcon>
              }
          </WidgetToggle>
        </PoseGroup>
      </WidgetContainer>
    );
  }

}

export default Widget;
