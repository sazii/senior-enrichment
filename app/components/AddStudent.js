import React, {Component} from "react";
import axios from "axios";

export default class AddStudent extends Component {
    constructor(){
        super();
        this.state = {
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
       axios.get(`/api/campuses/${campusName}`)
       .then(res =>res.data)
       .then(campus => {
           console.log(campus);
           axios.post("/api/students",{firstName,lastName,email,gpa,campusId:campus.id})
          .then(res =>res.data)
          .then(newStudent => console.log(newStudent.campusId))
       })
        .catch(err => console.log(err))
        this.setState({firstName:""});
        this.setState({lastName:""});
        this.setState({email:""});
        this.setState({gpa:""});
        this.setState({campusName:""});
    }
    
    
    render(){
        return(
<div className="well">
  <form className="form-horizontal" onSubmit={this.handleSubmit}>
    <fieldset>
      <legend>New Student</legend>
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
          <button type="submit" className="btn btn-success">Add</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
            )
    }
}

