import React, { PureComponent } from 'react';
// import { capitalize } from 'lodash-es';
import tableData from './TableData';
import { animated, Transition } from 'react-spring';
import './Sidepane.scss';

export class TableWithSidepane extends PureComponent {
  constructor() {
    super();

    this.state = {
      activeRowIndex: null
    }
  }

  setActiveRowIndex = (rowIndex) => {
    this.setState({
      activeRowIndex: rowIndex
    })
  }

  render() {
    const { activeRowIndex } = this.state;

    return (
      <>
        <table className="u-full-width">
          <thead>
            <tr>
              {tableData.map((row, i) => {
                return (
                  <th key={`table-heading-${i}`}>{Object.keys(row)[i]}</th>
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

        <Transition
          native
          items={activeRowIndex}
          from={{ opacity: 0 }}
          enter={[
            { opacity: 0 }, { opacity: 1 }]}
          leave={[{ opacity: 0 }]}>
          {activeRowIndex =>
            typeof activeRowIndex === 'number' && (props => (
              <animated.div className="sidepane-animation-container" style={props}>
                <article className="sidepane">
                  <h2>{tableData[activeRowIndex].name}</h2>
                  <p>{`${tableData[activeRowIndex].name} is a ${tableData[activeRowIndex].age} year old ${tableData[activeRowIndex].job} living in ${tableData[activeRowIndex].location}.`}</p>
                </article>
              </animated.div>)
            )
          }
        </Transition>
      </>
    )
  }
}

