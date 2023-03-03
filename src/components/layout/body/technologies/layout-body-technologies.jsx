import './layout-body-technologies-styles.css'
import { Image } from 'react-bootstrap'

const Technologies = () => {
    return (
        <div className='container d-grid mt-5'>
            <p className='m-auto technologies mb-3'>Tecnologías con las que trabajamos</p>
            <p className='m-auto technologies-title'>Seguimos las tendencias</p>
            <p className='m-auto technologies-title mb-4'>del mercado</p>
            <div className='d-grid'>
                <div className='d-flex justify-content-between w-100 m-auto align-items-end mt-5 mb-3'>
                    <Image src='src/assets/img/techs/bootstrap.png' />
                    <Image src='src/assets/img/techs/docker.png' />
                    <Image src='src/assets/img/techs/java.png' />
                    <Image src='src/assets/img/techs/material-design.png' />
                </div>

                <div className='d-flex justify-content-around w-100 m-auto align-items-end mt-5 mb-3'>
                    <Image src='src/assets/img/techs/microsoft-net.png' />
                    <Image src='src/assets/img/techs/my-sql.png' />
                    <Image src='src/assets/img/techs/oracle.png' />
                    <Image src='src/assets/img/techs/react.png' />
                </div>

                <div className='d-flex justify-content-around w-100 m-auto align-items-end mt-5'>
                    <Image src='src/assets/img/techs/spring.png' />
                    <Image src='src/assets/img/techs/sql-server.png' />
                </div>
            </div>
        </div>
    )
}

export default Technologies

