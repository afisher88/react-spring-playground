import React from 'react';
import classnames from 'classnames';
import './TransitionContainer.scss';

const Btn = ({ transitionName, btnClickFn, toggleState }) => {
  function clickHandler() {
    btnClickFn(transitionName);
  }

  return <button type="button" className="button-primary" onClick={clickHandler}>{toggleState ? 'Hide' : 'Release'} the box!</button>
}

export function TransitionContainer({ title, children, noMinHeight, btnClickFn, transitionName, toggleState }) {
  return (
    <article className={classnames({
      'transition-container': true,
      'transition-container--no-min-height': noMinHeight
    })}>
      <header className="transition-container__header">
        {title && <h2 className="transition-container__heading">{title}</h2>}
        <Btn btnClickFn={btnClickFn} transitionName={transitionName} toggleState={toggleState} />
      </header>
      <div className="transition-container__inner">
        {children}
      </div>
    </article>
  )
}
