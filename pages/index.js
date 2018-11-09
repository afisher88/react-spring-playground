import React, { Component } from 'react';
import Link from 'next/link';
import { PageHeader } from '../components';
import '../stylesheets/normalize.scss';
import '../stylesheets/skeleton.scss';
export default class App extends Component {
  render() {
    return (
      <main className="container">
        <PageHeader title="React Spring: Animation Testbed" />
        <nav>
          <ol>
            <li>
              <Link href="/mount-unmount">
                <a>Mount / Unmount transitions</a>
              </Link>
            </li>
            <li>
              <Link href="/update">
                <a>Update transitions</a>
              </Link>
            </li>
          </ol>
        </nav>
      </main>
    )
  }
}
