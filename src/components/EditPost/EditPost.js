import React, { Component } from 'react'
import EditPostForm from '../EditPostForm/EditPostForm'
import './EditPost.css'
export default class EditPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            showEditForm : false

        }
    }
    toggleForm(e){
        e.preventDefault()
        this.setState({...this.state,showEditForm:!this.state.showEditForm})
    }
    render() {
        return (
            <>
            <a href="o" className="btn btn-danger" onClick={(e)=>{this.toggleForm(e)}}>
            Edit Post
            </a>
            <div className={this.state.showEditForm ? "edit-post-container" : "d-none"} >
                <div className="form-container p-2">
                    <span onClick={(e)=>{this.toggleForm(e)}} className="btn btn-danger">X</span>
                <EditPostForm editPost={this.props.editpost} postinfo={this.props.postinfo}/>
                </div>
            </div>

            </>
        )
    }
}
