import React from 'react'
import { Container } from 'react-bootstrap'
import './layout-header-styles.css'

const Header = () => {
    return (
        <Container className='d-flex align-items-center justify-content-between w-50 mt-3'>
            <p className='fw-bold color-primary nav-logo-size'>Argentum Innovations</p>
            <ul className='m-0 d-flex align-items-center list-unstyled '>
                <li className='fw-bold ms-4 me-4'><a className='nav-link color-primary text-decoration-none' href='#'>Inicio</a></li>
                <li className='fw-bold ms-4 me-4'><a className='nav-link color-primary text-decoration-none' href='#'>Nosotros</a></li>
                <li className='fw-bold ms-4 me-4'><a className='nav-link color-primary text-decoration-none' href='#'>Servicios</a></li>
                <li className='fw-bold ms-4 me-4'><a className='nav-link color-primary text-decoration-none' href='#'>Proyectos</a></li>
            </ul>
        </Container>
    )
}

export default Header

