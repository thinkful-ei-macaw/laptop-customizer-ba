import React from 'react'
import Feature from './Feature'

class Features extends React.Component {

    render() {
        
        return (
           <div>
                <Feature features={this.props.features} state={this.props.state} Currency={this.props.Currency} handleUpdate={this.props.handleUpdate}/>
            </div>
                );
    }
}

export default Features

