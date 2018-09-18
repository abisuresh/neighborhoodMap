import React, { Component } from 'react';

class Navigation extends Component {

    state = {
        restArray: ["Thai Dishes", "American Flatbread", "Sweetwaters", "Ri Ra's", "Sherpa Kitchen"],
        query: ''
    }

    //function that filters the restaurants and markers displayed on the map
    filterFunction(query, index) {

        if(query==""){
            this.setState({restArray: this.state.restArray})
        }else if(query == this.state.restArray[0]){
            this.setState({restArray: []})
        }
        // if(this.props.query == marker){
        //     let filterResult = this.state.locations.filter()
        // }
    }

    render(){
        // const navigationStyle = {
        //     width: '100%',
        //     height: '100%',
        //     float: 'left',
        //     border: 'solid 1px black',
        //     // listStyleType: 'none'
        // }

        const {markerLocation} = [this.props]
        return (
            <div>
                <div className="search-bar">
                    <div className="input-filter">
                        <input type="text" placeholder="Filter..." name="filter"
                               value = {this.state.query.bind}
                               onChange={(event) => {this.filterFunction(event.target.value)} }
                        />
                        <button type="submit" onClick={this.filterFunction()}>Filter</button>
                    </div>
                </div>
                <div className="navigation-bar">
                    <ul role="list" aria-labelledby="places" style={{listStyleType: 'none'}}>
                        {this.state.restArray.map(newRestArray => (<li> {newRestArray} </li>))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation