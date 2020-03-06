import React, { Component } from 'react';
import Summary from './Components/Cart';
import Header from './Components/Header'
import Features from './Components/Features'
import Customize from './Components/Customize'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes


import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values

class App extends Component {
  static defaultProps = {
    state: [],
    Currency: {}
    
  }
  
  Currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    
  

    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <form className="main__form">
            <Customize />
            <Features state={this.state} features={this.props.features} Currency={this.Currency} handleUpdate={this.updateFeature} />
          </form>
          
            <Summary  
              state={this.state}
              Currency={ this.Currency }
            />
            
          
        </main>
      </div>
    );
  }
}

export default App;
