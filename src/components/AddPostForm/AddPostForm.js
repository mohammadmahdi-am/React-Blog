import React, { Component } from 'react'

export default class AddPostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : "",
            body : ""
        }
    }
    addPost = (title,body,e) => {
        this.props.addpost(title,body,e)
        this.setState({...this.state,title:"",body:""})

    }
    
        
    
    render() {

        return (
            <div>
                <form action="" className="d-flex flex-column" onSubmit={(e)=>{this.addPost(this.state.title,this.state.body,e)}}>
                    <label htmlFor="">Title : </label>
                    <input type="text" value={this.state.title} onChange={(e)=>this.setState({...this.state,title:e.target.value})}/>

                    <label htmlFor="">Body : </label>
                    <textarea name="" value={this.state.body} id="" cols="30" rows="10" onChange={(e)=>this.setState({...this.state,body:e.target.value})}></textarea>
                    <br/>
                    <input type="submit" className="btn btn-success"/>
                </form>
                
            </div>
        )
    }
}
