import React, {Component} from "react";
import axios from "axios";
import Promise from "bluebird";
import {Link} from "react-router-dom"


export default class Campus extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCampus : {}
        }
    }
    
    componentDidMount(){
        const id= this.props.match.params.id;
        const paths = [`/api/campuses/${id}`,`/api/campuses/${id}/students`];
        Promise.map (paths,path => axios.get(path))
        .map(res => res.data)
        .spread((campus,students) => {
            console.log(students);
            campus.students = students;
            this.setState({selectedCampus:campus});
        });
    };
    
    
    render(){
        const campus= this.state.selectedCampus;
        const students = campus.students;
        console.log(campus.students);
        return (
            <div className="campus">
             <div>
               <h3>{ campus.name }</h3>
                <img src={ campus.imageUrl } className="img-thumbnail" />
            </div>
            <div className="thumbnail">
                <h5>
                    <span>Description</span>
                  </h5>
                  <small>{ campus.description}</small>
            </div>
            <div className="list-group">
          {
            students && students.map(student => {
              return (
                <div className="list-group-item" key={student.id}>
                  <Link to={`/students/${student.id}`}>{ student.name }</Link>
                </div>
              );
            })
          }
        </div>
        <section>
          <h4 className="text-muted"></h4>
          <h4>
             <Link className="btn btn-primary btn-block" to={`/editCampus/${campus.id}`}>
               <span className="glyphicon glyphicon-plus"></span> edıt
             </Link>
          </h4>
          </section>
          <section>
          <h4 className="text-muted"></h4>
          <h4>
             <Link className="btn btn-primary btn-block" to={`/deleteCampus/${campus.id}`}>
               <span className="glyphicon glyphicon-plus"></span> delete
             </Link>
          </h4>
          </section>
           </div>
    )
    }
}