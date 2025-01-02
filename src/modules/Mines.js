// Essentials
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Modules
import resourcesDictionary from "./ResourcesDictionary";
import Ore from "./Ore";

class Mines extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeOres: []
        }

        this.createOre(10);
    }

    createOre(quantity) {
        let i;
        let luck;
        let ore;

        for (i=0;i<quantity;i++) {
          luck  = Math.floor(Math.random() * 100) + 1;
          if (luck > 100) {
            luck = 100;
          }
          
          ore = resourcesDictionary.findOreByRarity(luck);

          this.state.activeOres.push({ 
            name:       ore.name, 
            hardness:   ore.hardness, 
            img:        ore.img, 
          })
       }
    }

    handleClick = (index) => {
        const updatedOres = this.state.activeOres;
        updatedOres[index].hardness -= 1;
        
        if ( updatedOres[index].hardness <= 0 ) {
            updatedOres.splice(index, 1);
        }

        this.setState( {activeOres:updatedOres} );
        
    }

    render() {
        return (
          <div id="contentZone">
            {this.state.activeOres.map((ore, index) => (
              <Ore
                key         = {uuidv4()}
                index       = {index}
                name        = {ore.name}
                hardness    = {ore.hardness}
                img         = {ore.img}
                handleClick = {this.handleClick}
              />
            ))}
          </div>
        );
      }
}

export default Mines;