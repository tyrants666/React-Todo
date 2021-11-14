import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className="header">
            <h4 style={headingStyles} >{title}</h4>
            <Button />
            {/* <h4>{props.name}</h4> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'React Todo',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyles = {
    color: 'red',
    fontSize: '1.4rem',
    color: 'var(--grey)',
    textTransform: 'uppercase',
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
