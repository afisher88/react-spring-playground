import React, { Component } from 'react';
import Link from 'next/link';

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>React Spring - Animation Testbed</h1>
        <ol>
          <li>
            <Link href="/mount-unmount">
              <a>Mount / Unmount transition</a>
            </Link>
          </li>
        </ol>
      </main>
    )
  }
}
