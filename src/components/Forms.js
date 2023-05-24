import React, { Component } from "react";

const url='http://localhost:8900/products'
class Forms extends Component {
  constructor(){
    super()
    this.state = {
        title:'',
        price:''
    }
    
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangePrice = this.handleChangePrice.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChangeTitle(event){
     this.setState({title:event.target.value})
  }
  handleChangePrice(event){
    this.setState({price:event.target.value})
  }
  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
    var id = Math.floor(Math.random()*1000)
    var data = {
        id:id,
        title:this.state.title,
        price:this.state.price
    }
    fetch(url,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data) 
    })
    .then(console.log("data added"))
  }
  render() {
    return (
      <div className="container pt-5 mt-3 p-5 mb-4 bg-body-tertiary rounded-3">
        <h3>Forms</h3>
          <div className="form-group">
            <label for="title">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="title"
              id="title" value={this.state.title} onChange={this.handleChangeTitle}
            />
          </div>
          <div className="form-group mb-2">
            <label for="price">price</label>
            <input
              type="text"
              className="form-control"
              placeholder="price"
              id="price" value={this.state.price} onChange={this.handleChangePrice}
            />
          </div>
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>
            submit
          </button>
      </div>
    );
  }
}

export default Forms;
