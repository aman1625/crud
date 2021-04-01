import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar shadow fixed-top navbar-expend-sm navbar-dark bg-primary">
             <div className="container">
             <Link to="/" className="navbar-brand">CRUD</Link>
             <div>
                 <Link to="/contacts/add" className = "btn btn-light ml-auto">Add</Link>
             </div>
             </div> 
          </nav>
        </div>
    )
}


export default Navbar;