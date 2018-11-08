import React from 'react';
import './ControlContainer.scss';

export function ControlContainer({ children }) {
  return (
    <div className="control-container">
      {children}
    </div>
  )
}
