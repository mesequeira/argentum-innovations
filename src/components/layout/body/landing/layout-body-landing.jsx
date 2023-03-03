import React from 'react'
import { Image, Container } from 'react-bootstrap'
import './layout-body-lading-styles.css'

const Landing = () => {
  return (
    <Container className='d-grid align-items-center justify-content-between w-50 body-container'>
      <div className="text-center m-auto">
        <div className="circle-blue circle-blue-first"></div>
        <p className="fw-bold title-size">Haz realidad el negocio prueba3</p>
        <p className="fw-bold title-size"> de tus sueños</p>
        <p className="text-muted text-center mt-4 w-75 m-auto">Con nosotros los objetivos de tu emprendimiento se cumplirán. Te brindamos seguridad, profesionalismo y toda la ayuda para lograrlo.</p>
        <div className="circle-blue circle-blue-second"></div>
        <div className="semi-circle"></div>
      </div>
      <button className="btn btn-saber-mas m-auto mt-4 mb-4">Saber más</button>
      <div className="image-container">
        <div className="d-flex circle-container-margin mb-2">
          <div className="circle blues"></div>
          <div className="circle blues"></div>
          <div className="circle blues"></div>
          <div className="circle blues"></div>
          <div className="circle blues"></div>
          <div className="circle blues"></div>
        </div>
        <Image className="m-auto d-flex justify-content-center" src="src/assets/img/people-desk.png" alt="People in desk" />

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
  )
}

export default Landing
