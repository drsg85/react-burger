import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils'

// Styles
import styles from './appHeaderLink.module.css'

export interface IAppHeaderLinkProps {
  to: string
  title: string
  Icon: FC<TIconProps>
}

export const AppHeaderLink: FC<IAppHeaderLinkProps> = ({ title, to, Icon }) => {
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
