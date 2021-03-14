import React, { Component } from "react";
import axios from "axios";
import AddPost from "../AddPost/AddPost";
import nextId from "react-id-generator";
import EditPost from "../EditPost/EditPost";
import {Link} from 'react-router-dom'
export default class Posts extends Component {
  constructor() {
    
    super();
    this.addpost = this.addpost.bind(this)
    this.state = {
      posts: [
        
      ],
    };

    this.editPost = this.editPost.bind(this)
  }

  removePost(id,e){
      e.preventDefault()
      let postsList = this.state.posts.filter((post)=>post.id !== id)
      this.setState({...this.state,posts:postsList})

  }
  addpost(title,body,e){
    e.preventDefault()
    let uniqueId = nextId()
    let newpost = {id:uniqueId,postTitle:title,postBody:body}
    newpost = [...this.state.posts,newpost]
    this.setState({...this.state,posts : newpost})


  }
  editPost(title,body,id,e){
    e.preventDefault()
    let list_of_posts = this.state.posts
    list_of_posts.map((item,index) => {
      if (item.id === id){
        item.postTitle = title
        item.postBody = body
        return item

      }else{
        return item
      }
    })
    let editedPosts = list_of_posts
    this.setState({...this.state,posts:editedPosts})

  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      let fetchedPosts = res.data;
      let resPosts = fetchedPosts.map((post) => {
        return { id: parseInt(post.id), postTitle: post.title, postBody: post.body };
      });
      this.setState({ ...this.state, posts: resPosts });
    });
  }
  render() {
    return (
      <>
      <AddPost addpost={this.addpost}/>
      <div className="row">
        {this.state.posts.length > 0 ?  this.state.posts.map((post, index) => {
          return (
            <div className="col-md-4    mb-3 " key={index}>
              <div className="card h-100 p-2">
                <h3 className="card-title ">
                  <span>{post.postTitle}</span>
                </h3>
                <p className="card-text h-100">{post.postBody}</p>
                <div className="d-flex justify-content-end">
                  
                    <EditPost editpost={this.editPost} postinfo={post}/>
                
                  <a href="o" className="btn btn-danger" onClick={(e)=>{this.removePost(post.id,e)}}>
                    Delete
                  </a>
                  <Link to={"/singlepost/"+post.id} className="btn btn-danger">Show More</Link>
                </div>
              </div>
            </div>
          );
        }) : <h1>There is no more post</h1>}
      </div>
      </>
    );
  }
}
