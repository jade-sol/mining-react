// Essentials
import React, { Component } from "react";

// Modules
import Mines from "../modules/Mines";

class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pagina: <Mines />
        }
    }

    render() {
        return (
            <div>
                <div id="contentBackground"></div>
                {this.state.pagina}
            </div>
        )
    }
}

export default Body;