import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <React.Fragment>
        <Link to="/" className="navbar-brand">
            MySymbaloo
        </Link>
        <div className="collpase navbar-collapse">
            <div className="navbar-nav mr-auto">
                <div className="collpase navbar-collapse">
                    <Link to="/movies/list" className="nav-link">
                        List
                    </Link>
                </div>
                <div className="collpase navbar-collapse">
                    <Link to="/movies/create" className="nav-link">
                        Create
                    </Link>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Links
