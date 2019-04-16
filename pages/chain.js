import React, { useRef, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  TheBox,
  PageHeader,
  BackBar,
  TransitionContainer
} from '../components';
import { useSpring, useChain, animated } from 'react-spring';

export const animationConfig = { mass: 2, tension: 3500, friction: 250 };

export default function Chain() {
  const [toggle, setToggle] = useState(false);
  const animation1Ref = useRef();
  const animation1Props = useSpring({
    config: animationConfig,
    ref: animation1Ref,
    opacity: toggle ? 0 : 1,
    width: toggle ? 0 : 100
  });

  const animation2Ref = useRef();
  const animation2Props = useSpring({
    config: animationConfig,
    display: toggle ? 'none' : 'block',
    ref: animation2Ref
  });

  function handleToggle() {
    setToggle(!toggle);
  }

  // Chain animation order
  useChain([animation1Ref, animation2Ref]);

  return (
    <MainLayout pageTitle="React Spring: Animation Testbed - Chain animations">
      <PageHeader title="Chain animations" />

      <BackBar />

      <TransitionContainer
        title="Trail the box"
        btnClickFn={handleToggle}
        transitionName="multistage"
        toggleState={toggle}
        noMinHeight
      >
        <animated.div
          style={{
            ...animation1Props
            // width: animation1Props.width.interpolate(value => `${value}%`)
          }}
        >
          <TheBox />
        </animated.div>
        <animated.div style={{ ...animation2Props }}>
          <TheBox />
        </animated.div>
      </TransitionContainer>
    </MainLayout>
  );
}
