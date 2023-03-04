import React from 'react'
import { Image, Container } from 'react-bootstrap'
import './layout-body-lading-styles.css'
import peopleDesk from '../../../../assets/img/people-desk.png'
import Fade from 'react-reveal/Fade'

const Landing = () => {
  return (
    <section id='presentation'>
      <Fade top distance='10%'>
        <Container className='d-grid align-items-center mt-5 justify-content-center m-auto body-container'>
          <div className="text-center m-auto">
            <div className="circle-blue circle-blue-first"></div>
            <Fade>
              <p className="fw-bold title-size">Haz realidad el negocio</p>
              <p className="fw-bold title-size"> de tus sueños</p>
              <p className="text-muted text-center mt-4 w-75 m-auto">Con nosotros los objetivos de tu emprendimiento se cumplirán. Te brindamos seguridad, profesionalismo y toda la ayuda para lograrlo.</p>
            </Fade>
            <div className="circle-blue circle-blue-second"></div>
            <div className="semi-circle"></div>
          </div>
          <Fade top>
            <a href='#work-with-us' className="btn btn-saber-mas m-auto mt-4 mb-5">Saber más</a>
          </Fade>
          <div className="image-container">
            <div className="d-flex circle-container-margin mb-2">
              <div className="circle blues"></div>
              <div className="circle blues"></div>
              <div className="circle blues"></div>
              <div className="circle blues"></div>
              <div className="circle blues"></div>
              <div className="circle blues"></div>
            </div>
            <Fade bottom>
              <Image className="m-auto d-flex justify-content-center" src={peopleDesk} alt="People in desk" />
            </Fade>

            <div className="circle-red"></div>

            <div className="d-flex circle-container-margin mt-2 mb-4">
              <div className="circle reds"></div>
              <div className="circle reds"></div>
              <div className="circle reds"></div>
              <div className="circle reds"></div>
              <div className="circle reds"></div>
              <div className="circle reds"></div>
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default Landing
