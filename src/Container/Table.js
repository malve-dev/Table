import React, {Component} from 'react';
import Column from './../Components/Columns';
import './Table.css'

class TableFeatured extends Component {
    state = {
                Employees : [
                    {
                    userId:"rirani",
                    jobTitleName:"Developer",
                    firstName:"Romin",
                    lastName:"Irani",
                    preferredFullName:"Romin Irani",
                    employeeCode:"E1",
                    region:"CA",
                    phoneNumber:"408-1234567",
                    emailAddress:"romin.k.irani@gmail.com"
                    },
                    {
                    userId:"nirani",
                    jobTitleName:"Developer",
                    firstName:"Neil",
                    lastName:"Irani",
                    preferredFullName:"Neil Irani",
                    employeeCode:"E2",
                    region:"CA",
                    phoneNumber:"408-1111111",
                    emailAddress:"neilrirani@gmail.com"
                    },
                    {
                    userId:"thanks",
                    jobTitleName:"Program Directory",
                    firstName:"Tom",
                    lastName:"Hanks",
                    preferredFullName:"Tom Hanks",
                    employeeCode:"E3",
                    region:"CA",
                    phoneNumber:"408-2222222",
                    emailAddress:"tomhanks@gmail.com"
                    },
                    {
                    userId:"malve",
                    jobTitleName:"Developer",
                    firstName:"Abinand",
                    lastName:"Malve",
                    preferredFullName:"Tom Hanks",
                    employeeCode:"E3",
                    region:"CA",
                    phoneNumber:"408-3222222",
                    emailAddress:"abinand.sagar@gmail.com"
                    },
                    {
                    userId:"sharmu",
                    jobTitleName:"Directory",
                    firstName:"Paridhi",
                    lastName:"Sharma",
                    preferredFullName:"Sri Devi",
                    employeeCode:"E4",
                    region:"LA",
                    phoneNumber:"408-4222222",
                    emailAddress:"tomhanks@gmail.com"
                    },
                    {
                    userId:"pillu",
                    jobTitleName:"Partner",
                    firstName:"pillu",
                    lastName:"Malve",
                    preferredFullName:"Tommy",
                    employeeCode:"E9",
                    region:"NY",
                    phoneNumber:"408-4222222",
                    emailAddress:"pillu@gmail.com"
                    },
                    {
                    userId:"nirani",
                    jobTitleName:"Developer",
                    firstName:"Neil",
                    lastName:"Irani",
                    preferredFullName:"Neil Irani",
                    employeeCode:"E2",
                    region:"CA",
                    phoneNumber:"408-1111111",
                    emailAddress:"neilrirani@gmail.com"
                    },
                    {
                    userId:"malve",
                    jobTitleName:"Developer",
                    firstName:"Abinand",
                    lastName:"Malve",
                    preferredFullName:"Tom Hanks",
                    employeeCode:"E3",
                    region:"CA",
                    phoneNumber:"408-3222222",
                    emailAddress:"abinand.sagar@gmail.com"
                    },
                    {
                    userId:"pillu",
                    jobTitleName:"Partner",
                    firstName:"pillu",
                    lastName:"Malve",
                    preferredFullName:"Tommy",
                    employeeCode:"E9",
                    region:"NY",
                    phoneNumber:"408-4222222",
                    emailAddress:"pillu@gmail.com"
                    }
                ],
                Fixed : {
                    userId :false,
                    jobTitleName :false,
                    firstName :false,
                    lastName :false,
                    preferredFullName :false,
                    employeeCode :false,
                    region :false,
                    phoneNumber :false,
                    emailAddress :false
                },
                ColumnOrder:[
                    "userId",
                    "jobTitleName",
                    "firstName",
                    "lastName",
                    "preferredFullName",
                    "employeeCode",
                    "region",
                    "phoneNumber",
                    "emailAddress"],
                Data : []
            }

    fixedHandler = (el) => {
       this.setState(prevState => {
            return {Fixed : {...prevState.Fixed,[el]:!prevState.Fixed[el]}}
       });
    } 

    selectHandler = (event,el,index) => {
        const newOrder = [...this.state.ColumnOrder]
        const oldItemIndex = this.state.ColumnOrder.findIndex(curr => curr === event.target.value)
        newOrder[index] = event.target.value;
        newOrder[oldItemIndex] = el;
        this.setState(prevState => {
             return {ColumnOrder : newOrder}
        });
     } 

    fetch = (index) => {
        let newData = []
        for(let i = 0; i<=index+6; i++){
        if(i < this.state.Employees.length){
            if(i<index-2){
                newData.push('')
            } else{
                newData.push(this.state.Employees[i]);
                }
            }
        }
        this.setState({Data : newData})
     }

    getData = (event) => {
        this.fetch(Math.floor((event.target.scrollTop)/50));
    }

    componentDidMount(){
        this.fetch(0);
    }

    render () {
        const RowLength = Object.keys(this.state.Employees).length;
        return(
           <div className = 'Table' onScroll = {this.getData}>
                <Column ColumnLength = {this.state.ColumnOrder.length} 
                RowLength = {RowLength}
                HeaderElements = {this.state.ColumnOrder} 
                fixedHandler = {(el) => this.fixedHandler(el)}
                FixedState = {this.state.Fixed}
                ColumnOrder = {this.state.ColumnOrder}
                data = {this.state.Data}
                selectHandler = {(event,el,index) => this.selectHandler(event,el,index)}
                />
           </div>     
        );
    }
}

export default TableFeatured;