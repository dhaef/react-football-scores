import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({title}) => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'
            // style={{ marginBottom: '1rem' }}
            >
            <Link to='/' className="navbar-brand">{title}</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    {/* <Link className="nav-item nav-link" to='/'>Home</Link> */}
                    <Link className="nav-item nav-link" to='/scores'>Scores</Link>
                    <Link className="nav-item nav-link" to='/upcoming'>Upcoming</Link>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Football App Default'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
