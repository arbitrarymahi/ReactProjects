import React from 'react'
import PropTypes from 'prop-types' 

export default function Navbar(propss) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {propss.title} {propss.about}
          </a>
        </div>
      </nav>
  )
}

// Navbar.defaultProps = {
//     title : 'usutlsdnf'
// }

Navbar.prototype = {
    title: PropTypes.string
}