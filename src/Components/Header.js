import React from 'react';
import './Header.css'
import Pin from '../Assets/push_pin-24px.svg';

const Header = (props) => {

    const PinClickHandler = (el) =>{
        props.clicked(el);
    };

    const selectChangeHandler = (event,el,index) =>{
        props.selected(event,el,index);
    };

    const headerSelect = props.HeaderElements.map((el,index) => {
        let classProp = {
            height: '48px',
            width:'174px',
            borderBottom: '1px solid #acabab',
            backgroundColor: "#FFFFF",
            textTransform: 'uppercase',
            fontSize: "12px",
            fontStyle: 'bold',
            fontWeight: '550',
        }
        let pinStyle = {
            transform : 'rotate(-45deg)',
            transition: 'all 1.5s',
            display: 'inline-block',
            width: '24',
            backgroundColor: "#FFFFF",
        }

        if(props.FixedState[el]){
            classProp = {
                height: '48px',
                width:'174px',
                border: '1px solid black',  
                backgroundColor: "#FFFFF",
                textTransform: 'uppercase',
                fontSize: "12px",
                fontStyle: 'bold',
                fontWeight: '700',
                left: (index*200)+18,
                position: 'sticky',
                zIndex: '100',
            }
            pinStyle = {
            transform : 'rotate(0deg)',
            transition: 'all 1.5s',
            left: index*200,
            position: 'sticky',
            zIndex: '100',
            backgroundColor: "#FFFFF",
        }
        }

        return(
                <div className = 'SelectBlock' key  = {el}>
                    <img src = {Pin} style = {pinStyle} alt = 'Pin' onClick = {() => PinClickHandler(el)}></img>
                    <select style = {classProp} value = {el} onChange = {(event) => selectChangeHandler(event,el,index)} >
                        {props.HeaderElements.map(ele => {
                                return(<option value = {ele}  key = {ele} >{ele}</option>);
                            }  
                         )}
                    </select>
                </div>
        )
            
    })
    return(
        <div>
            {headerSelect}
        </div>
    );
}

export default Header;