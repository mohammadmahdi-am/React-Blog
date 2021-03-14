import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PostsContainer from '../../container/PostsContainer/PostsContainer'

export default class Blog extends Component {
    render() {
        return (
            <>
            <NavBar/>
            <div className="container">
            <PostsContainer/>         
            </div>

            </>

        )
    }
}
