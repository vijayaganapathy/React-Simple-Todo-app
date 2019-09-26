import React from 'react';     


class listfunction extends React.Component{
    complete=e=>{
        e.target.style.textDecoration="line-through"
    }
    render(){
        return(
        <div>
           <ul className="list-group">
               {
                   this.props.items.map(i=>{
                   return(
                       <li className="list-group-item" key={i}><span onClick={this.complete}>{i}</span>
                       <span className="float-right btn btn-primary btn-lg" onClick={this.props.deleteitem.bind(this,i)}>Delete</span></li>
                   );
               })}
             </ul>
        </div>                    
        );
    }
}
export default listfunction


