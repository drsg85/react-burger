import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

// styles
import styles from './appHeaderLink.module.css'

export const AppHeaderLink = ({ title, to, Icon }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return `${
          styles.navLink
        } text text_type_main-default text_color_primary ml-2 ${
          isActive ? styles.active : 'text_color_inactive'
        }`
      }}
      to={to}
    >
      {({ isActive }) => {
        return (
          <>
            <Icon type={isActive ? 'primary' : 'secondary'} />
            {title}
          </>
        )
      }}
    </NavLink>
  )
}

AppHeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  Icon: React.Element,
}
