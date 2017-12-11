import React,{Component} from "react";
import axios from 'axios';

export default class DeleteCampus extends Component {
    
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    
    handleSubmit(e){
        const id=this.props.match.params.id
        axios.delete(`/api/campuses/${id}`)
        .then(res => res.data)
        .then(res => console.log("successfully deleted"))
    }
    
    render(){
        console.log(this.props)
        return(
    <div className="well">
  
      <div className="form-group">
        <div className="col-xs-10">
          <span  type="text"> 
          <h5>Are you sure about that you to delete? </h5> 
          </span>
        </div>
    </div>  
    <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Delete</button>
        </div>
      </div>
     </div>
  )    
    }
    
}