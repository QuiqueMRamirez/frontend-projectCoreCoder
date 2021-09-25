import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavMenu = () => {
    return (
        <>
            <Navbar bg="light" expand="md" style={{width: '100%'}}>
                <Container>
                    <Navbar.Brand href="#home">Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="banks">Bank Menu</Nav.Link>
                        <Nav.Link href="addexpincome">Expenses/Income</Nav.Link>
                        <Nav.Link href="transactions">Transactions</Nav.Link>
                        <Nav.Link href="register">History Transactions</Nav.Link>
                        <Nav.Link href="register">Dashboard</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavMenu