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
        <section id='technologies'>
            <div className='container d-grid mt-5'>
                <p className='m-auto technologies mb-3 text-center'>Tecnologías con las que trabajamos</p>
                <p className='m-auto technologies-title text-center'>Seguimos las tendencias</p>
                <p className='m-auto technologies-title text-center'>del mercado</p>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image className='img-fluid' src={bootstrap} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image className='img-fluid' src={docker} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image className='img-fluid' src={java} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image className='img-fluid' src={materialDesign} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image src={microsoftNet} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image src={mySql} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image src={oracle} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image src={react} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image src={spring} />
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-4 col-6'>
                        <div className='mx-auto mb-15 mw-270 h-120 d-flex justify-content-center align-items-center radius10 block'>
                            <Image src={sqlServer} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies

