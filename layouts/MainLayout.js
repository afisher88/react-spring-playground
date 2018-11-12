import React from 'react';
import '../stylesheets/normalize.scss';
import '../stylesheets/skeleton.scss';

export default function MainLayout({ children }) {
  return (
    <main className="container">
      {children}
    </main>
  )
}
