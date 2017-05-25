import React from 'react';



export default (props) => {
    return (<div>
        <input type="text"
               placeholder="search for a city..."
               onChange={props.handleChange}
        />
    </div>
    );
    }
