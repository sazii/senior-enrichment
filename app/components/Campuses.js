import React,{Component} from "react";
import axios from 'axios';
import {Link} from "react-router-dom"

export default class Campuses extends Component{
    constructor(){
        super();
        this.state= {
            campuses:[],
            inputValue:""
        } 
        this.handleChange=this.handleChange.bind(this);
    }
    
    componentDidMount(){
        axios.get("/api/campuses")
        .then(res => res.data)
        .then(campuses => this.setState({campuses}))
        .catch(err => console.log(err))
    }
    
    handleChange(e){
      this.setState({inputValue:e.target.value});
    }
    
    render(){
      
      const campuses = this.state.campuses;
      const filteredCampuses=campuses.filter(campus => campus.name.match(this.state.inputValue))
        return (
      <div>
        <h3>Campuses</h3>
        <form className="form-group" style={{marginTop: '20px'}}>
          <input
            className="form-control"
            placeholder="Enter university name" 
            onChange={this.handleChange}
          />
       </form>
        <div className="row">
        {
          filteredCampuses.length && filteredCampuses.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <Link className="thumbnail" to={`/campuses/${campus.id}`} >
                <img src={ campus.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
        
    }
}

/*return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.length && albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              <Link className="thumbnail" to={`/albums/${album.id}`} >
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );*/