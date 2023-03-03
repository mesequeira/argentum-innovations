import './layout-body-technologies-styles.css'
import { Image } from 'react-bootstrap'
import bootstrap from '../../../../assets/img/techs/bootstrap.png'
import docker from '../../../../assets/img/techs/docker.png'
import java from '../../../../assets/img/techs/java.png'
import materialDesign from '../../../../assets/img/techs/material-design.png'

import microsoftNet from '../../../../assets/img/techs/microsoft-net.png'
import mySql from '../../../../assets/img/techs/my-sql.png'
import oracle from '../../../../assets/img/techs/oracle.png'
import react from '../../../../assets/img/techs/react.png'

import spring from '../../../../assets/img/techs/spring.png'
import sqlServer from '../../../../assets/img/techs/sql-server.png'


const Technologies = () => {
    return (
        <div className='container d-grid mt-5'>
            <p className='m-auto technologies mb-3'>Tecnologías con las que trabajamos</p>
            <p className='m-auto technologies-title'>Seguimos las tendencias</p>
            <p className='m-auto technologies-title mb-4'>del mercado</p>
            <div className='d-grid'>
                <div className='d-flex justify-content-between w-100 m-auto align-items-end mt-5 mb-3'>
                    <Image src={bootstrap}/>
                    <Image src={docker}/>
                    <Image src={java}/>
                    <Image src={materialDesign} />
                </div>

                <div className='d-flex justify-content-around w-100 m-auto align-items-end mt-5 mb-3'>
                    <Image src={microsoftNet} />
                    <Image src={mySql} />
                    <Image src={oracle}/>
                    <Image src={react}/>
                </div>

                <div className='d-flex justify-content-around w-100 m-auto align-items-end mt-5'>
                    <Image src={spring}/>
                    <Image src={sqlServer} />
                </div>
            </div>
        </div>
    )
}

export default Technologies

