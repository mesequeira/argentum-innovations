import React from 'react'
import './layout-footer-styles.css'
import Image from 'react-bootstrap/Image'
import email from '../../../../assets/img/social-media/email.png'
import fb from '../../../../assets/img/social-media/fb.png'
import ig from '../../../../assets/img/social-media/ig.png'
import lkn from '../../../../assets/img/social-media/lkn.png'

const Footer = () => {
  return (
    <div className='footer-container p-4'>
      <div className='d-flex m-auto justify-content-center mb-2'>
        <div className='me-5 ms-5 mt-5'>
          <p className='text-white fw-bold fs-5'>Company</p>
          <div className='d-grid'>
            <a href='#presentation' className='text-decoration-none text-white fw-light mt-2'>Inicio</a>
            <a href='#about-us' className='text-decoration-none text-white fw-light mt-2'>Nosotros</a>
            <a href='#services' className='text-decoration-none text-white fw-light mt-2'>Servicios</a>
            <a href='#technologies' className='text-decoration-none text-white fw-light mt-2'>Tecnologías</a>
            <a href='#work-with-us' className='text-decoration-none text-white fw-light mt-2'>Contacto</a>
          </div>
        </div>

        <div className='me-5 ms-5 mt-5'>
          <p className='text-white fw-bold fs-5'>Contacto</p>
          <div>
            <p className='text-white fw-light mt-2'>(+54) 01123852602</p>
            <a href="mailto:info@argentuminnovations.com" className='text-decoration-none text-white fw-light mt-2'>info@argentuminnovations.com</a>
          </div>
        </div>

        <div className='me-5 ms-5 mt-5'>
          <p className='text-white fw-bold fs-5'>Ubicación</p>
          <div>
            <p className='text-white fw-light mt-2'>Argentina, Buenos Aires.</p>
            <p className='text-white fw-light mt-2'>Bernal, Belgrano.</p>
          </div>
        </div>
      </div>

      <div className='m-auto justify-content-center align-items-center d-flex mt-5'>
        <div className='row d-flex justify-content-center align-items-center border-bottom w-25'>
          <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
            <div className='mx-auto mb-15 mw-270 d-flex justify-content-center align-items-center radius10 block'>
              <Image src={email} />
            </div>
          </div>

          <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
            <div className='mx-auto mb-15 mw-270 d-flex justify-content-center align-items-center radius10 block'>
              <Image src={fb} />
            </div>
          </div>

          <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
            <div className='mx-auto mb-15 mw-270 d-flex justify-content-center align-items-center radius10 block'>
              <Image src={ig} style={{height: '50px', width: '50px', marginTop: '6px'}}/>
            </div>
          </div>

          <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
            <div className='mx-auto mb-15 mw-270 d-flex justify-content-center align-items-center radius10 block'>
              <Image src={lkn} />
            </div>
          </div>
        </div>

      </div>
      <p className='mt-2 text-muted text-center'>Copyright @ {new Date().getFullYear()} Argentum Innovations. Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer
