import React, { Component } from 'react';
// components 
import Input from './Input'
import List from './List'

class fruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            //initalize the fruit list to the full list passed into props
            fruitsToDisplay: this.props.fruits,
            filterValue: ''

        };
    }
    handleFilterChange = (evt) => {
        evt.preventDefault();
        let filterValue = evt.target.value;
        // remove the fruits that dont contain filter value
        const filterFruitList = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase());
        })
        this.setState({ fruitsToDisplay: filteredFruitList, filterValue });
    }
    render() {
        // inside of input component, to access props, i will say props.value
       // inside of input component, to access props, i will say props.fruits

        return (
            <div>
                <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }

}

export default fruitContainer