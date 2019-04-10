import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import MainLayout from '../layouts/MainLayout';
import { PageHeader, BackBar, TransitionContainer } from '../components';

export default function TrailTransitions() {
  const [toggleState, update] = useState({ trail: false });

  function toggle(transitionName) {
    update({ [transitionName]: !toggleState[transitionName] });
  }

  return (
    <MainLayout pageTitle="React Spring: Animation Testbed - Trail">
      <PageHeader title="Trail" />

      <BackBar />

      <TransitionContainer
        title="Trail list of boxes"
        btnClickFn={toggle}
        transitionName="trail"
        toggleState={toggleState.trail}
        noMinHeight
      >
        <div>Test</div>
      </TransitionContainer>
    </MainLayout>
  );
}
