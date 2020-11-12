import React from 'react';
import './Rows.css';
import Cells from './Cells';

const Rows = (props) => {
    const RowElement = [];
    for (let i = 0; i<props.RowLength;i++){
        RowElement.push(<Cells key = {i} data = {props.data[i]}/>); 
    }

    let classProp = {
        display: 'inline-block'
    }

    classProp = props.Fixed ? {display: 'inline-block',left: (props.Index*198),
                position: 'sticky',
                zIndex: '100'}:{display: 'inline-block'}

    return (
        <div style = {classProp}>
            {RowElement}
        </div>
    );
}

export default Rows;