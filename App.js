import React from 'react';
import Nav1 from "./Nav";
import Button1 from "./Button";
import List1 from"./List";
class appfunction extends React.Component{
    state ={ 
        list:[]
    };
    additem=(itemonebyone)=>{
        this.setState({
            list:[...this.state.list,itemonebyone]
        })
    }
    deleteitem=deleteitem1=>{
        this.setState({
            list:this.state.list.filter(i=>i!==deleteitem1)
        })
    }
    render(){
        return(<div style={{background:"lightgrey",margin:"30px",padding:"10px"}}>
        <Nav1/><Button1 additem={this.additem}/><List1 items={this.state.list} deleteitem={this.deleteitem}/>
        </div>);
        }
}
export default appfunction;
