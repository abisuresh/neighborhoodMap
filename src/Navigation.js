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
                        <li> Portland, ME </li>
                        <li> Burlington, VT </li>
                        <li> Rome, Italy </li>
                        <li> Barcelona, Spain </li>
                        <li> San Diego, CA </li>
                    </ul>
                </div>
            </div>
        )
    }

}


export default Navigation