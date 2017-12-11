import React from 'react';
import {Link} from "react-router-dom"

const Sidebar = function() {
    return (
        <sidebar>
         <section>
            <h4 className="menu-item-active">
             <Link to="/campuses" replace > CAMPUSES</Link>
            </h4>
            <hr />
         </section>  
         <section>
            <h4 className="menu-item-active">
             <Link to="/students" replace> STUDENTS</Link>
            </h4>
            <hr />
         </section>  
        <section>
          <h4 className="text-muted"></h4>
          <h4>
             <Link className="btn btn-primary btn-block" to="/addCampus" replace >
               <span className="glyphicon glyphicon-plus"></span> CAMPUS
             </Link>
          </h4>
        </section>
        <section>
          <h4 className="text-muted"></h4>
          <h4>
             <Link className="btn btn-primary btn-block" to="/addStudent" replace >
               <span className="glyphicon glyphicon-plus"></span> STUDENT
             </Link>
          </h4>
        </section>
        </sidebar>
        
        );
    
}



export default Sidebar;


/*const Sidebar = () => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to = "/albums">ALBUMS</Link>
        </h4>
        <h4 className="menu-item active">
         <Link to = "/artists">ARTISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;*/
