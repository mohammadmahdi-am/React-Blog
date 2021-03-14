import React, { Component } from 'react'

export default class EditPostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.postinfo.id,
            title : "",
            body : ""
        }
    }
    editPost = (title,body,id,e) => {
        this.props.editPost(title,body,id,e)
        

    }
    componentDidMount(){
        this.setState({...this.state,title:this.props.postinfo.postTitle,body:this.props.postinfo.postBody})
    }
    render() {
        return (
            <div>
                <form action="" className="d-flex flex-column" onSubmit={(e)=>{this.editPost(this.state.title,this.state.body,this.state.id,e)}}>
                    <label htmlFor="">Title : </label>
                    <input type="text"  value={this.state.title} onChange={(e)=>this.setState({...this.state,title:e.target.value})} />

                    <label htmlFor="">Body : </label>
                    <textarea name=""  id="" cols="30" rows="10" value={this.state.body} onChange={(e)=>this.setState({...this.state,body:e.target.value})} ></textarea>
                    <br/>
                    <input type="submit" className="btn btn-success"/>
                </form>
                
            </div>
        )
    }
}
