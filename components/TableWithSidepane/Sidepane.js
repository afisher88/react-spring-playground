import React, { Component } from 'react';
import { animated, Transition } from 'react-spring';
export default class Sidepane extends Component {
  constructor() {
    super();

    this.openConfigEnter = { transform: 'translate3d(0,0,0)', opacity: 1 };
    this.openConfigLeave = { transform: 'translate3d(100%,0,0)', opacity: 1 };
    this.updateConfigEnter = [{ opacity: 0 }, { opacity: 1 }];
    this.updateConfigLeave = [{ opacity: 0 }];
  }


  shouldComponentUpdate(nextProps) {
    const { activeRowIndex } = this.props;

    return activeRowIndex !== nextProps.activeRowIndex;
  }


  render() {
    const { activeRowIndex, tableData, hasUpdated } = this.props;

    let enter = this.updateConfigEnter;
    let leave = this.updateConfigLeave;

    if (!hasUpdated) {
      enter = this.openConfigEnter;
      leave = this.openConfigLeave;
    }

    return (
      <Transition
        native
        items={activeRowIndex}
        from={leave}
        enter={enter}
        leave={leave}
      >
        {activeRowIndex =>
          typeof activeRowIndex === 'number' && (props => (
            <animated.div className="sidepane-animation-container" style={props}>
              <article className="sidepane">
                <h2>{tableData[activeRowIndex].name}</h2>
                <p>{`${tableData[activeRowIndex].name} is a ${tableData[activeRowIndex].age} year old ${tableData[activeRowIndex].job} living in ${tableData[activeRowIndex].location}.`}</p>
              </article>
            </animated.div>)
          )
        }
      </Transition>
    )
  }
}