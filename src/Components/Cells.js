import React from 'react';
import './Cells.css'

const Cells = (props) => {
    return (
        <div className = 'Cell'>
            {props.data}
        </div>
    );
}

export default Cells;