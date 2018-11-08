import React, { PureComponent } from 'react';
import { animated, Transition } from 'react-spring';
import { TheBox, PageHeader, BackBar, TransitionContainer, ControlContainer } from '../components';

export default class MountUnmount extends PureComponent {
  constructor() {
    super();

    this.state = {
      show: false
    }
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const { show } = this.state;

    return (
      <main className="container">
        <PageHeader title="Mount / Unmount" />

        <BackBar />

        <ControlContainer>
          <button className="button-primary" onClick={this.toggle}>{show ? 'Hide' : 'Release'} the box!</button>
        </ControlContainer>

        <TransitionContainer title="Multistage the box">
          <Transition
            native
            items={show}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 'auto' }}
            leave={{ opacity: 0, height: 0 }}>
            {show =>
              show && (props => <animated.div style={props}><TheBox props={props} /></animated.div>)
            }
          </Transition>
        </TransitionContainer>

        <TransitionContainer title="Fade the box">
          <Transition
            native
            items={show}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
            {show =>
              show && (props => <animated.div style={props}><TheBox props={props} /></animated.div>)
            }
          </Transition>
        </TransitionContainer>

        <TransitionContainer title="Slide the box">
          <Transition
            native
            items={show}
            from={{ transform: 'translate3d(-100%,0,0)' }}
            enter={{ transform: 'translate3d(0,0,0)' }}
            leave={{ transform: 'translate3d(-500%,0,0)' }}>
            {show =>
              show && (props => <animated.div style={props}><TheBox props={props} /></animated.div>)
            }
          </Transition>
        </TransitionContainer>
      </main>
    )
  }
}
