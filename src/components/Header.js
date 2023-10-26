import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Your Shop Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                            <Nav.Link href="/login"><i className='fas fa-user'></i>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header