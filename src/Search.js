import React, { Component } from 'react';

class Search extends Component {
    state = {
        locations: []

    }

    filterFunction() {
        // if(this.props.query == marker){
        //     let filterResult = this.state.locations.filter()
        // }
    }


    render(){
        const searchBarStyle = {
            width: '20%',
            height: '20%'
        }
        return (
            <div>
                <div className="search-bar">
                    <div className="input-filter">
                        <input type="text" placeholder="Filter..." name="filter"/>
                        <button type="submit" onClick={this.filterFunction()}>Filter</button>
                    </div>
                </div>
            </div>
        )
    }

}



export default Search