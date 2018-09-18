import React, { Component } from 'react';

class Search extends Component {
    state = {
        locations: []

    }

    filterFunction() {
        const filterButton = {}
        filterButton.onclick()
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
                        <button type="submit">Filter</button>

                    </div>
                </div>
            </div>
        )
    }

}



export default Search