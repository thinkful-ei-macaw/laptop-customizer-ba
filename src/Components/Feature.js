import React from 'react'
import slugify from 'slugify';



class Feature extends React.Component {
 
 render() {
    return (
    Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.state.selected[feature].name}
                    onChange={e => this.props.handleUpdate(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.Currency.format(item.cost)})
          </label>
            </div>
        );
    });

    return (
        <div>
            
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        </div>
    );
})
    )}
}

export default Feature