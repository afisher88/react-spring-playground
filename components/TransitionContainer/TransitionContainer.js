import React from 'react';
import classnames from 'classnames';
import './TransitionContainer.scss';

export function TransitionContainer({ title, children, noMinHeight }) {
  return (
    <article className={classnames({
      'transition-container': true,
      'transition-container--no-min-height': noMinHeight
    })}>
      {title && <h2>{title}</h2>}
      <div className="transition-container__inner">
        {children}
      </div>
    </article>
  )
}
