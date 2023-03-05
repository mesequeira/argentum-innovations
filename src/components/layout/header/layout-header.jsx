import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './layout-header-styles.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold color-primary nav-logo-size' href="#home">Argentum Innovations</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#presentation" className='nav-link color-primary text-decoration-none'>Inicio</Nav.Link>
                        <Nav.Link href="#about-us" className='nav-link color-primary text-decoration-none'>Nosotros</Nav.Link>
                        <Nav.Link href="#services" className='nav-link color-primary text-decoration-none'>Servicios</Nav.Link>
                        <Nav.Link href="#technologies" className='nav-link color-primary text-decoration-none'>Tecnologías</Nav.Link>
                        <Nav.Link href="#work-with-us" className='nav-link color-primary text-decoration-none'>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header

