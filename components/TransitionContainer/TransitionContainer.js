import React from 'react';
import './TransitionContainer.scss';

export function TransitionContainer({ title, children }) {
  return (
    <article className="transition-container">
      {title && <h2>{title}</h2>}
      <div className="transition-container__inner">
        {children}
      </div>
    </article>
  )
}
