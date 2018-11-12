import React, { PureComponent } from 'react';
import tableData from './TableData';
import Sidepane from './Sidepane';
import './Sidepane.scss';

export class TableWithSidepane extends PureComponent {
  constructor() {
    super();

    this.state = {
      activeRowIndex: null,
      btnClicked: false
    }
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  setActiveRowIndex = (rowIndex) => {
    this.setState({
      activeRowIndex: rowIndex
    }, () => {
      if (!this.state.btnClicked) {
        this.setState({
          btnClicked: true
        })
      }
    })
  }

  render() {
    const { activeRowIndex, btnClicked } = this.state;

    return (
      <section className="table-with-sidepane">
        <div className="table-with-sidepane__main">
          <table className="u-full-width">
            <thead>
              <tr>
                {tableData.map((row, i) => {
                  return (
                    <th key={`table-heading-${i}`}>{this.capitalize(Object.keys(row)[i])}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => {
                return (
                  <tr key={`table-row-${i}`}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td><button type="button" onClick={this.setActiveRowIndex.bind(this, i)}>Show more info for {row.name}</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <Sidepane activeRowIndex={activeRowIndex} tableData={tableData} hasUpdated={btnClicked} />
      </section>
    )
  }
}

