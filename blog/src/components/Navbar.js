import React from 'react'
import {NavLink} from 'react-router-dom'
import {
  Container,
  // Dropdown,
  Menu,
} from 'semantic-ui-react'

const Navbar = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          React Markdown Blog
        </Menu.Item>
        <NavLink to='/posts'><Menu.Item as='li'>Posts</Menu.Item></NavLink>
        <NavLink to='/posts/create'><Menu.Item as='li'>Create a Post</Menu.Item></NavLink>
      </Container>
    </Menu>
  </div>
)

export default Navbar