import './layout-body-work-with-us-styles.css'
import React from 'react'
import { Image } from 'react-bootstrap'
import groupPeole from '../../../../assets/img/people-group.png'

const WorkWithUs = () => {
    return (
        <section id='work-with-us'>
            <div className='container work-with-us-container align-items-center mb-5'>
            <div>
                <p className='fw-bold work-with-us-title'>Interesado en</p>
                <p className='fw-bold work-with-us-title'>Trabajar con</p>
                <p className='fw-bold work-with-us-title'>Nosotros?</p>
                <p className='text-muted fs-5'>Te ayudamos a cumplir los objetivos </p>
                <p className='text-muted fs-5'>de tu empresa</p>
                <a href="mailto:info@argentuminnovations.com" className="btn btn-comenzar">Contacto</a>
            </div>
            <Image src={groupPeole} />
        </div>
        </section>
    )
}

export default WorkWithUs
