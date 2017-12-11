import React, { Component } from 'react';
import { Route, Switch, Redirect,HashRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Campuses from "./Campuses";
import Campus from "./Campus";
import AddCampus from "./AddCampus";
import Students from "./Students";
import Student from "./Student";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import DeleteStudent from "./DeleteStudent";
import DeleteCampus from "./DeleteCampus";
import EditCampus from "./EditCampus";


export default class Main extends Component {

  render () {
    return (
      <Router>
      <div id="root" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar/>
        </div>
        <div className="col-xs-10">
           <Route exact path="/campuses" component={Campuses} />
           <Route path="/campuses/:id" component={Campus} />
           <Route exact path="/addCampus" component={AddCampus} />
           <Route exact path="/editCampus/:id" component={EditCampus} />
           <Route exact path="/deleteCampus/:id" component={DeleteCampus} />
           <Route exact path="/students" component={Students} />
           <Route path="/students/:id" component={Student} />
           <Route exact path="/addStudent" component={AddStudent} />
           <Route exact path="/editStudent/:id" component={EditStudent} />
           <Route exact path="/deleteStudent/:id" component={DeleteStudent} />
        </div>
      </div>
      </Router>
    );
  }
}

/*return (<div id="main" className="container-fluid">
        <Sidebar deselectAlbum={this.deselectAlbum}/> 
        <div className="col-xs-10">
        {
        this.state.selectedAlbum.id 
        ?<SingleAlbum album={this.state.selectedAlbum}/>:
         <AllAlbums selectAlbum={this.selectAlbum} {...this.state} />
        }
        </div>
        <Footer/>
        </div>);
  }*/