import './layout-body-services-styles.css'
import { Container, Image } from 'react-bootstrap'

const Services = () => {
    return (
        <Container className='d-flex services-container'>
            <div className='w-50'>
                <p className='our-service'>Nuestros servicio</p>
                <p className='our-service-title mt-3'>Eficiencia y</p>
                <p className='our-service-title'>profesionalismo</p>
                <p className='text-muted w-75 mt-4'>Analizamos y consideramos el contexto de cada organización para brindar un servicio acorde a sus necesidades. </p>
                <p className='text-muted w-75 mt-2'>Poseemos gran capacidad y experiencia en diferentes tecnologías que nos permiten seleccionar la mejor alternativa de solución.</p>
                <p className='text-muted w-75 mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore ex perspiciatis debitis nemo atque itaque distinctio dolor quae</p>
                <div className='d-flex align-items-center justify-content-end w-75'>
                    <p className='read-more me-2'>Leer más </p>
                    <Image style={{ width: '20px' }} src='src/assets/img/arrow-right.png' />
                </div>
            </div>

            <div className='d-grid w-50'>
                <div className='d-flex justify-content-between'>
                    <div className='box-service' >
                        <Image roundedCircle src='src/assets/img/monitor.png' className='w-25 mt-3' />
                        <p className='m-auto mt-4 fw-bold fs-5 text-center'>Desarrollo de Software</p>
                    </div>

                    <div className='box-service'>
                        <Image roundedCircle src='src/assets/img/settings.png' className='w-25 mt-3' />
                        <p className='m-auto mt-4 fw-bold fs-5 text-center'>Integración de</p>
                        <p className='m-auto fw-bold fs-5 text-center'> APIs</p>
                    </div>
                </div>

                <div className='d-flex justify-content-between'>
                    <div className='box-service' >
                        <Image roundedCircle src='src/assets/img/design.png' className='w-25 mt-3' />
                        <p className='m-auto mt-4 fw-bold fs-5 text-center'>Diseño</p>
                    </div>

                    <div className='box-service'>
                        <Image roundedCircle src='src/assets/img/marketing.png' className='w-25 mt-3' />
                        <p className='m-auto mt-4 fw-bold fs-5 text-center'>Publicidad</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services