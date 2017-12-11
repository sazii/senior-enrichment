import React, {Component} from "react";
import axios from "axios";

export default class EditCampus extends Component {
    constructor(){
        super();
        this.state = {
                name:"",
                imageUrl:"",
                description:""
        }
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeUrl=this.handleChangeUrl.bind(this);
        this.handleChangeDesc=this.handleChangeDesc.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/api/campuses/${id}`)
        .then(res => res.data)
        .then(campus => {
            console.log(campus);
             this.setState({name:campus.name})
            this.setState({imageUrl:campus.imageUrl}) 
            this.setState({description:campus.description})
            
        })
    }
    
    handleChangeName(e){
       this.setState({name : e.target.value}) 
    }
    handleChangeUrl(e){
       this.setState({url : e.target.value}) 
    }
    handleChangeDesc(e){
      
       this.setState({desc : e.target.value}) 
    }
    handleSubmit(e){
       e.preventDefault();
       const id=this.props.match.params.id
       const name=this.state.name;
       const imageUrl=this.state.url;
       const description=this.state.desc;
      axios.put(`/api/campuses/${id}`,{name:name,imageUrl:imageUrl,description:description})
      .then(res =>res.data)
      .then(newCampus => console.log(newCampus))
      .catch(err => console.log(err))
            
    }
    
    
    render(){
        return(
<div className="well">
  <form className="form-horizontal" onSubmit={this.handleSubmit}>
    <fieldset>
      <legend>Edit Campus</legend>
      <div className="form-group">
        <div className="col-xs-10">
          <input value={this.state.name} className="form-control" type="text" placeholder= "enter the name" onChange={this.handleChangeName}/>
        </div>
      </div>
       <div className="form-group">
        <div className="col-xs-10">
          <input value={this.state.url} className="form-control" type="text" placeholder= "enter URL for the image" onChange={this.handleChangeUrl}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10">
          <input value={this.state.desc} className="form-control" type="text" placeholder="describe the campus" onChange={this.handleChangeDesc}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" className="btn btn-success">Edit</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
            )
    }
}

