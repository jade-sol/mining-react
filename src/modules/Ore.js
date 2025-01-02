// Essentials
import React from 'react';

class Ore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:       props.name,
            hardness:   props.hardness,
            img:        props.img
        }
    }

    click = () => {
        this.props.handleClick(this.props.index);
    }

    render() {
        return (
            <div className="SceneObject">
                <h1 className="ObjectLabel">{this.state.hardness}</h1>
                <img src={this.state.img} onClick={this.click}></img>
            </div>
        );
    }
}

export default Ore;