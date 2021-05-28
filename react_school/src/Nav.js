import React, {Component} from "react"
import {Link} from 'react-router-dom'

function Nav(){
  return(
    <nav>
      <ul className="nav-links">
        <Link to="/students">
          <li>Students</li>
        </Link>

        <Link to="teachers">
          <li>Teachers</li>
        </Link>

        <Link to="subjects">
          <li>Subjects</li>
        </Link>

        <Link to="grades">
          <li>Grades</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;
