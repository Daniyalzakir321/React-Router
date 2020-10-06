import React from 'react';
// React Link
import {Link } from "react-router-dom";
import RR from '../rr.png'

class Footer extends React.Component{
render(){

    // By Using JS 
    let header = () => {
    this.props.history.push('/')
    }
    
    
    return ( 
       <div className="center">
       
        {/*Normal  */}
       <h1 className="footer">Footer</h1> 
       <Link to="/" className="text-danger"> Link to Header </Link>
        
        <br/> <br/>
        <img src={RR} />
        <br/><br/>

       {/* By Using JS */}
       <h1 className="footer">By JS</h1>
       <button onClick={header} className="btn btn-danger"> Link to Header By JS</button>

    
       </div>
    )
}}

export default Footer;