import React from 'react'
import styled from 'styled-components'
import VerticalMenuNavLink from '../ui/nav/VerticalMenuNavLink'
import { getMenuItems } from '../../app/menu'
import { backgroundColors, fontColors } from '../../app/skin'

const renderMenuItems = (menuItems = []) => menuItems.map(group => (
  <section key={group.code}>
    <Links>
      <LinkHeader>{group.label}</LinkHeader>
      {group.items.map(item => (
        <VerticalMenuNavLink key={item.code} path={item.path}>{item.label}</VerticalMenuNavLink>
      ))}
    </Links>
  </section>
))

const VerticalMenu = () => {
  const menu = renderMenuItems(getMenuItems())
  return (
    <Menu>
      { menu }
    </Menu>
  )
}

const LinkHeader = styled.div`
  color: ${fontColors.secondary};
  text-transform: uppercase;
  font-size: 14px;
  margin: 10px 0px;
`

const Menu = styled.nav`
  padding: 50px 10px 10px 10px;
  width: 230px;
  height: 100%;
  /*  */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  /*  */
  background: ${backgroundColors.secondary};
`

const Links = styled.nav`
  margin-top: 10px;
  /*  */
  display: flex;
  flex-direction: column;
`

export default VerticalMenu
