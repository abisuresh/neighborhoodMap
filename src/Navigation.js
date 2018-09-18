import React, { Component } from 'react';

class Navigation extends Component {

    state = {
        restArray: ["Thai Dishes", "American Flatbread", "Sweetwaters", "Ri Ra's", "Sherpa Kitchen"]
    }

    filterFunction() {
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
        return (
            <div>
                <div className="navigation-bar">
                    <ul role="list" aria-labelledby="places" style={{listStyleType: 'none'}}>
                        {this.state.restArray.filter(this.filterFunction).map(newRestArray => (<li> {newRestArray} </li>))}
                    </ul>
                </div>
            </div>
        )
    }

}


export default Navigation