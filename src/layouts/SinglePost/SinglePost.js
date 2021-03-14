import React, { Component } from 'react'
import Single from '../../components/Single/Single'
import NavBar from '../../components/NavBar/NavBar'
export default class SinglePost extends Component {

    render() {
        return (
            <>
            <NavBar/>
            <Single id={this.props.match.params.id}/>
                
            
            </>
        )
    }
}
