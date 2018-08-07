import React, { Component } from 'react'

class Message extends Component {

    render() {
        const array = ['Landon', 'Cliff', 'Calvin', 'Armin'];

        return (
            <div>
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
            </div>
        );
    }
    
}

export default Message