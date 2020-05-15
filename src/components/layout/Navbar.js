import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {
    return (
        <div className='navbar' style={{ color: '#cfcfcf' }}>
            <h2>{title}</h2>
            <ul>
                {/* <li>
                    <a href='!#'>Home</a>
                </li>
                <li>
                    <a href='!#'>About</a>
                </li> */}
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
