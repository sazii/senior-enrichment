import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Student extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedStudent : {},
            campus : {}
        }
    }
    
    componentDidMount(){
        
        const id=this.props.match.params.id;
        axios.get(`/api/students/${id}`)
        .then(res => res.data)
        .then(student => {
            this.setState({selectedStudent:student});
            axios.get(`/api/campuses/${student.campusId}`)
            .then(res => res.data)
            .then(campus => this.setState({campus}))
            })
        .catch(err => console.log(err))
    };
    
    
   

    
    render(){
        console.log(this.props.match.params)
        const student= this.state.selectedStudent;
        const campus= this.state.campus; 
        return (
        <div >
             <div>
               <h3>{ student.name }</h3>
            </div>
            <div className="thumbnail">
              <h5>
                 <span>mail: { student.email }</span>
              </h5>
               <h5>
                 <span>gpa: { student.gpa }</span>
               </h5>
               <Link  to={`/campuses/${campus.id}`} >
                <h5>
                  <span>Campus: { campus.name }</span>
                </h5>
              </Link>
            </div>
           <section>
          <h4 className="text-muted"></h4>
          <h4>
             <Link className="btn btn-primary btn-block" to={`/editStudent/${student.id}`}>
               <span className="glyphicon glyphicon-plus"></span> edıt
             </Link>
          </h4>
          </section>
          <section>
          <h4 className="text-muted"></h4>
          <h4>
             <Link className="btn btn-primary btn-block" to={`/deleteStudent/${student.id}`}>
               <span className="glyphicon glyphicon-plus"></span> delete
             </Link>
          </h4>
          </section>
          </div>
    )
    }
}