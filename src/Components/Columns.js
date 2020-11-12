import React from 'react';
import Rows from './Rows';
import './Columns.css';
import Header from './Header';

const Column = (props) => {
    const ColumnElement = [];
    ColumnElement.push(<Header 
                        HeaderElements = {props.HeaderElements}
                        key = '10000'
                        clicked = {(el) => props.fixedHandler(el) }
                        selected = {(event,el,index) => props.selectHandler(event,el,index) }
                        FixedState = {props.FixedState} />);

    for (let i = 0; i<props.ColumnLength;i++){
        let currentColumn = props.data.map(current => {
            return(current[props.ColumnOrder[i]]);
        })    
        ColumnElement.push(<Rows RowLength = {props.RowLength} 
                                key = {i} 
                                Fixed = {props.FixedState[props.ColumnOrder[i]]} 
                                data = {currentColumn} 
                                Index = {i}/>);
    }
    return (
        <div className = 'Columns' key = 'columns'>
            {ColumnElement}
        </div>
    );
}

export default Column;