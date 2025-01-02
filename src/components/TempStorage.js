// Essentials
import React from 'react';

class TempStorage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    appendData(data) {
        newData = this.state.data
        newData.append(data);
        this.setState( {data: newData} );
    }
}