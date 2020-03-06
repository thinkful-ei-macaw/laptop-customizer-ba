import React from 'react'
import Total from './Total'

class Summary extends React.Component {

  render() {
    console.log(this.props.state.selected);
    
    const items = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.Currency.format(selectedOption.cost)}
          </div>
        </div>
      );

    })


    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <div>
          { items }
        </div>
        <Total 
          state= {this.props.state}
          Currency= {this.props.Currency}
          />
      </section>
    )
  }
}
export default Summary