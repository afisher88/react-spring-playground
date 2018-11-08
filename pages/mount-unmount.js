import React, { PureComponent } from 'react';
import { animated, Transition } from 'react-spring';
import '../stylesheets/pages/mount-unmount.scss';

const TheBox = () => {
  return <div className="the-box">THE BOX</div>
}

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
      <main>
        <h1>Mount / Unmount</h1>

        <button onClick={this.toggle}>{show ? 'Hide' : 'Release'} the box!</button>

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
      </main>
    )
  }
}
