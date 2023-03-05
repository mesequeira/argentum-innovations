import React from 'react'
import './layout-footer-styles.css'
import Image from 'react-bootstrap/Image'
import email from '../../../../assets/img/social-media/email.png'
import fb from '../../../../assets/img/social-media/fb.png'
import ig from '../../../../assets/img/social-media/ig.png'
import lkn from '../../../../assets/img/social-media/lkn.png'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className='footer'>
      <div className='footer-container p-4'>
        <div className='container px-4'>
          <div className='row gx-5 justify-content-center m-auto'>
            <div className='col-md-4 p-3'>
              <p className='text-white fw-bold fs-5'>Company</p>
              <div className='d-grid'>
                <a href='#presentation' className='text-decoration-none text-white fw-light mt-2'>Inicio</a>
                <a href='#about-us' className='text-decoration-none text-white fw-light mt-2'>Nosotros</a>
                <a href='#services' className='text-decoration-none text-white fw-light mt-2'>Servicios</a>
                <a href='#technologies' className='text-decoration-none text-white fw-light mt-2'>Tecnologías</a>
                <a href='#work-with-us' className='text-decoration-none text-white fw-light mt-2'>Contacto</a>
              </div>
            </div>

            <div className='col-md-4 p-3'>
              <p className='text-white fw-bold fs-5'>Contacto</p>
              <div className='d-grid'>
                <p className='text-white fw-light mt-2'>(+54) 01123852602</p>
                <a href="mailto:info@argentuminnovations.com" className='text-decoration-none text-white fw-light mt-2'>info@argentuminnovations.com</a>
              </div>
            </div>

            <div className='col-md-4 p-3'>
              <p className='text-white fw-bold fs-5'>Ubicación</p>
              <div className='d-grid'>
                <p className='text-white fw-light mt-2'>Argentina, Buenos Aires.</p>
                <p className='text-white fw-light mt-2'>Bernal, Belgrano.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='container border-bottom mt-5' style={{maxWidth: '500px'}}>
          <div className='row gx-5 align-items-center'>
            <div className='col'>
              <div className='mx-auto mb-15 mw-270 d-flex justify-content-center align-items-center radius10 block'>
                <a href="mailto:info@argentuminnovations.com" target="_blank" className="text-decoration-none" id="">
                  <Image src={email} />
                </a>
              </div>
            </div>

            <div className='col'>
              <div className='mx-auto mb-15 mw-270 d-flex justify-content-center align-items-center radius10 block'>
                <a href="https://www.facebook.com"  target="_blank"className="text-decoration-none" id="">
                  <Image src={fb} />
                </a>
              </div>
            </div>

            <div className='col'>
              <div className='mx-auto mb-15 mw-270 d-flex justify-content-center align-items-center radius10 block'>
                <a href="https://www.instagram.com/argentuminnovations" target="_blank" rel="noopener noreferrer" className="text-decoration-none" id="">
                  <Image src={ig} style={{ height: '50px', width: '50px', marginTop: '6px' }} />
                </a>

              </div>
            </div>

            <div className='col'>
              <div className='mx-auto mb-15 mw-270 d-flex justify-content-center align-items-center radius10 block'>
                <a href="https://www.linkedin.com/in/marcos-sequeira-a73a271b3/" className="text-decoration-none" target="_blank" id="">
                  <Image src={lkn} />
                </a>

              </div>
            </div>
          </div>
        </div>
        <p className='mt-2 text-muted text-center'>Copyright @ {year} Argentum Innovations. Todos los derechos reservados.</p>
      </div>
    </section>
  )
}

export default Footer
