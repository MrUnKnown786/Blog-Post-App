import React from 'react'
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <>

      <Navbar variant="dark" style={{ backgroundColor: '#46D7AC' }}>
        <>
          <Navbar.Brand >
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <b>Blog Post Application</b>
            </Link>

          </Navbar.Brand>

          <Button type='button' bg="light" variant="light" style={{marginLeft: '72%'}}>

            <Link to="/add-blog" style={{ textDecoration: 'none' }}>
              New Post
            </Link>
          </Button>
        </>
      </Navbar>
      <br />
    </>

  )
}

export default Header;




