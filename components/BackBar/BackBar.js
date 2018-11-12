import React from 'react';
import { Link } from 'next-prefixed';
import './BackBar.scss';

export function BackBar() {
  return (
    <nav className="backbar">
      <Link href="/index">
        <a>&laquo; Back</a>
      </Link>
    </nav>
  )
}
