import React, { Component } from 'react'
import AddPostForm from '../AddPostForm/AddPostForm'
import './AddPost.css'
export default class AddPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            showAddForm : false
        }
    }
    toggleForm(e){
        e.preventDefault();
        this.setState({...this.state,showAddForm:!this.state.showAddForm})
    }


    
    render() {
        return (
            <>
            <div className="text-end mb-2">
                <a href="a" className="btn btn-success" onClick={(e)=>{this.toggleForm(e)}}>Add New Post</a>
                
            </div>

            <div className={this.state.showAddForm ? "add-post-container" : "d-none"} >
                <div className="form-container p-2">
                    <span onClick={(e)=>{this.toggleForm(e)}} className="btn btn-danger">X</span>
                <AddPostForm addpost={this.props.addpost}/>
                </div>
            </div>
            </>
        )
    }
}
