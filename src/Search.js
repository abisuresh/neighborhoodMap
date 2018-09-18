import React, { Component } from 'react';

class Search extends Component {
    state = {

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

                    </div>
                </div>
            </div>
        )
    }

}



export default Search