import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
  <div className="container-fluid"  >
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link to="/" className="nav-link"  aria-current="page">Home</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link"  to="/about">{props.about}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.button}</label>
</div>
    </div>
  </div>
</div>

  )
}


Navbar.prototype ={
  title: String ,
  about:String
}