import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className="header">
            <h4 style={headingStyles} >{title}</h4>
            <div className="flex container-left">
                <input type="text" placeholder="Enter your mission" />
                <Button title='add' />
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Todo',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyles = {
    margin: '0 0 30px 0',
    fontSize: '1.4rem',
    color: 'var(--text)',
    textAlign: 'center',
}


// Class Based Component ================================================

// import React, { Component } from 'react'
// export class header extends Component {
//     render() {
//         return (
//             <header className="header">
//                 <h4>Class base components </h4>
//             </header>
//         )
//     }
// }

export default Header
