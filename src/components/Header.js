import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title,name}) => {
  return (
    <header>
        {name}
    </header>
  )
}
Header.defaultProps = {
  name : 'App'
}
Header.propTypes = {
    title : PropTypes.string
}
export default Header
