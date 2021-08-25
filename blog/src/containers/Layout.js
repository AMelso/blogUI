import React from 'react'
import Navbar from "../components/Navbar"
import {Container} from 'semantic-ui-react'
// import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
    <Container text style={{ marginTop: '7em' }}>
      {children}
    </Container>
    {/* <Footer /> */}
    
    </>
  )
}

export default Layout;