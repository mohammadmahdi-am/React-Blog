import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'

export default class Single extends Component {
    constructor(props){
        super(props)
        this.state= {
            post:{title:"",body:""}

        }
      
    }

    async fetchData(id){
        let postData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        postData =  await postData.json()
        this.setState({post:postData})
        

    }
    componentDidMount(){
        
        let id = this.props.id
        
        this.fetchData(id)
        
        
        
    }
    
    render() {
        
        return (
            <>
            
            <div className="container">
                <div className="row">
                    <div>
                        <h1>{this.state.post.title}</h1>
                        <p>{this.state.post.body}</p>
                    </div>
                </div>


                
            </div>
            </>
        )
    }
}
