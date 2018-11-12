import React from 'react';
import { animated, config, Transition } from 'react-spring';

const openConfigEnter = { transform: 'translate3d(0,0,0)' };
const openConfigLeave = { transform: 'translate3d(100%,0,0)' };
const updateConfigEnter = [{ opacity: 0, transform: 'translate3d(0,0,0)' },{ opacity: 1, transform: 'translate3d(0,0,0)' }];
const updateConfigLeave = [{ opacity: 0, transform: 'translate3d(0,0,0)' }];

export default function Sidepane({ activeRowIndex, tableData, hasUpdated }) {
  let enter = updateConfigEnter;
  let leave = updateConfigLeave;

  if (!hasUpdated) {
    enter = openConfigEnter;
    leave = openConfigLeave;
  }

  return (
    <Transition
      native
      items={activeRowIndex}
      from={leave}
      enter={enter}
      leave={leave}
      config={config.slow}
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
