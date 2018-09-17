import React, { Component } from 'react';

class Navigation extends Component {

    state = {

    }

    render(){
        const navigationStyle = {
            width: '100%',
            height: '100%',
            float: 'left',
            border: 'solid 1px black',
            listStyleType: 'none'
        }
        return (
            <div>
                <div className="navigation-bar" style = {{navigationStyle}}>
                    <ul style={{listStyleType: 'none'}}>
                        <li> Thai Dishes </li>
                        <li> American Flatbread </li>
                        <li> Sweetwaters </li>
                        <li> Ri Ra's </li>
                        <li> Sherpa Kitchen </li>
                    </ul>
                </div>
            </div>
        )
    }

}


export default Navigation