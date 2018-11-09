import React, { PureComponent } from 'react';
import { PageHeader, BackBar, TableWithSidepane } from '../components';

export default class Update extends PureComponent {
  constructor() {
    super();

    this.state = {
      show: false
    }
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <main className="container">
        <PageHeader title="Update" />

        <BackBar />

        <TableWithSidepane />
      </main>
    )
  }
}
