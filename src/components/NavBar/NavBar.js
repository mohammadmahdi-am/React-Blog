import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary  " >
                <div className="container d-flex">
                <Link to="/" className="nav-link text-white" >Home</Link>
                <Link to="/blog" className="nav-link text-white" >Blog</Link>
                <Link to="/admin" className="nav-link text-white" >admin</Link>   
                <Link to="/contactus" className="nav-link text-white">Contact Us</Link>
                </div>
                
            </div>
        )
    }
}
