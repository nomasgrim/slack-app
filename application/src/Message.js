import React, { Component, Fragment } from 'react'

class Message extends Component {

    render() {
        const array = ['Landon', 'Cliff', 'Calvin', 'Armin'];

        return (
            <Fragment>
                <ul className="Message">
                {
                    array.map((item, index) => 
                        <li 
                            key={`${index}-${item}`} 
                            value={`${index}-${item}`}
                        >
                            {item}
                        </li>
                    )
                }
                </ul>
                <h1>Cliff Hello</h1>
            </Fragment>
        );
    }
    
}

export default Message