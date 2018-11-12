import React, { Component } from 'react';
import { Link } from 'next-prefixed';
import { PageHeader } from '../components';
import MainLayout from '../layouts/MainLayout';
export default class App extends Component {
  render() {
    return (
      <MainLayout>
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
      </MainLayout>
    )
  }
}
