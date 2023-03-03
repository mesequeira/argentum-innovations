import './layout-body-work-with-us-styles.css'
import React from 'react'
import { Image } from 'react-bootstrap'

const WorkWithUs = () => {
    return (
        <div className='container d-flex justify-content-around align-items-center work-with-us mb-5'>
            <div>
                <p className='fw-bold work-with-us-title'>Interesado en</p>
                <p className='fw-bold work-with-us-title'>Trabajar con</p>
                <p className='fw-bold work-with-us-title'>Nosotros?</p>
                <p className='text-muted fs-5'>Te ayudamos a cumplir los objetivos </p>
                <p className='text-muted fs-5'>de tu empresa</p>
                <button className="btn btn-comenzar m-auto mt-4 mb-4">Comencemos</button>
            </div>
            <div>
                <Image src='src/assets/img/people-group.png'/>
            </div>
        </div>
    )
}

export default WorkWithUs
