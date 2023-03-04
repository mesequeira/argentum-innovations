import { Image } from 'react-bootstrap'
import './layout-body-about-us-styles.css'
import peopleDesk2 from '../../../../assets/img/people-desk-2.png'

const AboutUs = () => {
  return (
    <section id='about-us'>
      <div className='w-75 d-grid justify-content-center m-auto align-items-center'>
        <p className='m-auto about-us mb-2'>Sobre nosotros</p>
        <p className='m-auto our-team mb-5'>Nuestro equipo</p>

        <div className='our-team-container'>
          <Image src={peopleDesk2} />
          <div className='our-team-text'>
            <p>Tenemos una amplia gama de profesionales capaces de cubrir las diversas etapas por la que puede atravesar un desarrollo. Se destaca nuestro entendimiento del negocio de nuestros clientes, con el objetivo de construir la aplicación más eficiente a medida. </p>
            <p className='mt-5'>Nuestra metodología nos permite asegurar el éxito de los proyectos, cumplimiento con los objetivos acordados, manteniendo los plazos definidos y alcanzando la calidad esperada.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

