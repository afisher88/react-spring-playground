import React from 'react';
import './PageHeader.scss';

export function PageHeader({ title, children }) {
  return (
    <header className="page-header">
      {title && <h1>{title}</h1>}
      {children}
    </header>
  )
}
