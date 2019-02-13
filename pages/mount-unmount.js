import React, { PureComponent } from 'react';
import { animated, Transition } from 'react-spring/renderprops.cjs';
import MainLayout from '../layouts/MainLayout';
import {
  TheBox,
  PageHeader,
  BackBar,
  TransitionContainer
} from '../components';

export default class MountUnmount extends PureComponent {
  constructor() {
    super();

    this.state = {
      multistage: false,
      fade: false,
      slide: false
    };
  }

  toggle = transitionName => {
    this.setState({
      [transitionName]: !this.state[transitionName]
    });
  };

  render() {
    return (
      <MainLayout pageTitle="React Spring: Animation Testbed - Mount / Unmount">
        <PageHeader title="Mount / Unmount" />

        <BackBar />

        <TransitionContainer
          title="Multistage the box"
          btnClickFn={this.toggle}
          transitionName="multistage"
          toggleState={this.state.multistage}
          noMinHeight
        >
          <Transition
            native
            items={this.state.multistage}
            from={{ opacity: 0, height: 0 }}
            enter={[{ height: 'auto' }, { opacity: 1 }]}
            leave={[{ opacity: 0 }, { height: 0 }]}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <TheBox props={props} />
                </animated.div>
              ))
            }
          </Transition>
        </TransitionContainer>

        <TransitionContainer
          title="Fade the box"
          btnClickFn={this.toggle}
          transitionName="fade"
          toggleState={this.state.fade}
        >
          <Transition
            native
            items={this.state.fade}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <TheBox props={props} />
                </animated.div>
              ))
            }
          </Transition>
        </TransitionContainer>

        <TransitionContainer
          title="Slide the box"
          btnClickFn={this.toggle}
          transitionName="slide"
          toggleState={this.state.slide}
        >
          <Transition
            native
            items={this.state.slide}
            from={{ transform: 'translate3d(-100%,0,0)' }}
            enter={{ transform: 'translate3d(0,0,0)' }}
            leave={{ transform: 'translate3d(-500%,0,0)' }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <TheBox props={props} />
                </animated.div>
              ))
            }
          </Transition>
        </TransitionContainer>
      </MainLayout>
    );
  }
}
