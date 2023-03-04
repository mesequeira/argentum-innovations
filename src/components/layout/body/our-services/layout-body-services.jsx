import './layout-body-services-styles.css'
import { Container, Image } from 'react-bootstrap'
import arrowRight from '../../../../assets/img/arrow-right.png'
import monitor from '../../../../assets/img/monitor.png'
import settings from '../../../../assets/img/settings.png'
import design from '../../../../assets/img/design.png'
import marketing from '../../../../assets/img/marketing.png'

const Services = () => {
    return (
        <section id='services'>
            <Container className='services-container'>
                <div className='services-text-container col-md-6 mb-5'>
                    <p className='our-service'>Nuestros servicio</p>
                    <p className='our-service-title mt-3'>Eficiencia y</p>
                    <p className='our-service-title'>profesionalismo</p>
                    <p className='text-muted services-text mt-4'>Analizamos y consideramos el contexto de cada organización para brindar un servicio acorde a sus necesidades. </p>
                    <p className='text-muted services-text mt-2'>Poseemos gran capacidad y experiencia en diferentes tecnologías que nos permiten seleccionar la mejor alternativa de solución.</p>
                    <p className='text-muted services-text mt-3'>Nuestro objetivo es siempre proporcionar soluciones de alta calidad que no solo cumplan con las expectativas de nuestros clientes, sino que también los ayuden a mejorar su presencia en línea y a aumentar su eficiencia y productividad.</p>
                </div>

                <div className='d-grid col-md-6'>
                    <div className='d-flex justify-content-between'>
                        <div className='box-service' >
                            <Image roundedCircle src={monitor} className='w-25 mt-3' />
                            <p className='m-auto mt-4 fw-bold fs-5 text-center'>Desarrollo de Software</p>
                        </div>

                        <div className='box-service'>
                            <Image roundedCircle src={settings} className='w-25 mt-3' />
                            <p className='m-auto mt-4 fw-bold fs-5 text-center'>Integración de</p>
                            <p className='m-auto fw-bold fs-5 text-center'> APIs</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <div className='box-service' >
                            <Image roundedCircle src={design} className='w-25 mt-3' />
                            <p className='m-auto mt-4 fw-bold fs-5 text-center'>Diseño</p>
                        </div>

                        <div className='box-service'>
                            <Image roundedCircle src={marketing} className='w-25 mt-3' />
                            <p className='m-auto mt-4 fw-bold fs-5 text-center'>Publicidad</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Services