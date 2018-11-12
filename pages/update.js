import React, { PureComponent } from 'react';
import MainLayout from '../layouts/MainLayout';
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
      <MainLayout>
        <PageHeader title="Update" />

        <BackBar />

        <TableWithSidepane />
      </MainLayout>
    )
  }
}
