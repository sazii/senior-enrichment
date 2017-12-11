import React,{Component} from "react";
import axios from 'axios';
import {Link} from "react-router-dom"


export default class Campuses extends Component {
    constructor(){
        super();
        this.state= {
            students:[],
            inputValue:""
        } 
        this.handleChange=this.handleChange.bind(this);
    }
    
    componentDidMount(){
        axios.get("/api/students")
        .then(res => res.data)
        .then(students => this.setState({students}))
        .catch(err => console.log(err))
    }
    
    handleChange(e){
      this.setState({inputValue:e.target.value});
    }
    
    render(){
    
      const students = this.state.students;
      const filteredStudents=students.filter(student => student.name.match(this.state.inputValue))
        return (
      <div>
        <h3>Students</h3>
        <form className="form-group" style={{marginTop: '20px'}}>
          <input
            className="form-control"
            placeholder="Enter student name" 
            onChange={this.handleChange}
          />
       </form>
         <div className="list-group">
          {
            filteredStudents.map(student => {
              return (
                <div className="list-group-item" key={student.id}>
                  <Link to={`/students/${student.id}`}>{ student.name }</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
        
    }
}
