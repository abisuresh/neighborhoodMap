import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Navigation extends Component {

    constructor (props){
        super(props);
        this.removeFilter= this.removeFilter.bind(this)
        this.handleQueryChange= this.handleQueryChange.bind(this)
        this.filterFunction= this.filterFunction.bind(this)
        // this.listClicked. this.listClicked.bind(this)
        this.state = {
            activeIndex: 0
        }
    }

    state = {
        restArray: ["Thai Dishes", "American Flatbread", "Sweetwaters", "Ri Ra's", "Sherpa Kitchen"],
        query: '',
    }

    //function that filters the list view of the restaurants displayed on the navigation
    filterFunction(value) {
        let matchesFilters = value.name.toUpperCase().match(this.state.query.toUpperCase());
        if(matchesFilters == null){
            return false
        }else{
            return true
        }
    }

    removeFilter(){
        console.log(this.state.query)
        this.setState({query: ""})
    }

    handleQueryChange(event){
        this.setState({query: event.target.value})
    }



    render(){

        const {markerLocation} = [this.props]
        return (
            <div>
                {/*<div className="search-bar">*/}
                    {/*<div className="input-filter">*/}
                        {/*<input type="text" placeholder="Filter..." name="filter"*/}
                               {/*value = {this.state.query}*/}
                               {/*onChange= {this.handleQueryChange}*/}
                        {/*/>*/}
                        {/*/!*<button type="submit" onClick={this.removeFilter}>Show All</button>*!/*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="navigation-bar">
                    <ul role="list" aria-labelledby="places" style={{listStyleType: 'none'}}>
                        {this.props.restaurantDetails.filter(this.props.filterFunction).map(newRestArray => (<li tabindex={0}
                            // onClick={() => this.listClicked(0)}
                            // className={this.state.activeIndex !== 0 ? 'unclicked' : 'clicked'}
                            onClick={ this.props.listClicked }
                            key= {newRestArray.ID}> {newRestArray.name} </li>))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation