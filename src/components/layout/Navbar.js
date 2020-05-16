import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({title}) => {
    return (
        <div className='navbar' style={{ color: '#cfcfcf' }}>
            <h2>{title}</h2>
            <ul>
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/scores'>Scores</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/upcoming'>Upcoming</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Football App Default'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
