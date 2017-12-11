import React, {Component} from "react";
import axios from "axios";

export default class EditStudent extends Component {
    constructor(){
        super();
        this.state = {
                id:"",
                firstName:"",
                lastName:"",
                email:"",
                gpa:"",
                campusName:""
        }
        this.handleChangeFirstName=this.handleChangeFirstName.bind(this);
        this.handleChangeLastName=this.handleChangeLastName.bind(this);
        this.handleChangeEmail=this.handleChangeEmail.bind(this);
        this.handleChangeGpa=this.handleChangeGpa.bind(this);
        this.handleChangeCampusName = this.handleChangeCampusName.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/api/students/${id}`)
        .then(res => res.data)
        .then(student => {
             this.setState({firstName:student.firstName})
            this.setState({lastName:student.lastName})
            this.setState({email:student.email})
            this.setState({gpa:student.gpa})
            this.setState({id:student.id})
             axios.get(`/api/campuses/${student.campusId}`)
             .then(res=>res.data)
             .then(campus =>  this.setState({campusName:campus.name}) )
            
        })
    }
    
    
    handleChangeFirstName(e){
       this.setState({firstName : e.target.value}) 
    }
    handleChangeLastName(e){
       this.setState({lastName : e.target.value}) 
    }
    handleChangeEmail(e) {
       this.setState({email : e.target.value}) 
    }
    handleChangeGpa(e) {
       this.setState({gpa : e.target.value}) 
    }
    handleChangeCampusName(e) {
       this.setState({campusName : e.target.value}) 
    }
    handleSubmit(e){
       e.preventDefault();
       const firstName=this.state.firstName;
       const lastName=this.state.lastName;
       const email=this.state.email;
       const gpa=this.state.gpa;
       const campusName=this.state.campusName;
       const id= this.state.id;
       axios.get(`/api/campuses/${campusName}`)
       .then(res =>res.data)
       .then(campus => {
           console.log(campus);
           axios.put(`/api/students/${id}`,{firstName,lastName,email,gpa,campusId:campus.id})
          .then(res =>res.data)
          .then(updatedStudent => console.log(updatedStudent))
       })
        .catch(err => console.log(err))
    }
    
    
    render(){
        console.log(this.props);
        return(
<div className="well">
  <form className="form-horizontal" onSubmit={this.handleSubmit}>
    <fieldset>
      <legend>Edit Student</legend>
      <div className="form-group">
        <div className="col-xs-10">
          <input value={this.state.firstName} className="form-control" type="text" placeholder= "enter first name" onChange={this.handleChangeFirstName}/>
        </div>
      </div>
       <div className="form-group">
        <div className="col-xs-10">
          <input value={this.state.lastName} className="form-control" type="text" placeholder= "enter last name" onChange={this.handleChangeLastName}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10">
          <input value={this.state.email} className="form-control" type="text" placeholder="enter the email" onChange={this.handleChangeEmail}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10">
          <input value={this.state.gpa} className="form-control" type="text" placeholder="enter gpa" onChange={this.handleChangeGpa}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10">
          <input value={this.state.campusName} className="form-control" type="text" placeholder="enter campus" onChange={this.handleChangeCampusName}/>
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

