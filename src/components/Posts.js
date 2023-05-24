import React, { Component } from "react";
import PostView from "./PostView";

const url = 'http://localhost:8900/products'

class Posts extends Component{
    
    constructor(){
        super()
        this.state = 
        {
            topics: ''
        }
    }
    
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({topics:data})
        })
        console.log(this.state.topics)
    }
    render(){
        return(
            <div className="container pt-3 mt-5">
                <PostView topicsdata={this.state.topics}></PostView>
            </div>
        )
    }
}

export default Posts