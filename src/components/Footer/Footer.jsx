import LogoVitxo from '../../assets/images/LogoVitxo.png'
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
        <div className="bg-dark-blue py-5">
            <div className="container">
                <div>
                    <NavLink to="/">
                        <img src={LogoVitxo} alt="Logo-Vitxo" />
                    </NavLink>
                </div>
                <div className="row pt-5 pb-4">
                    <div className="col-6 col-md-3 d-flex flex-column">
                        <h5 className="text-white mb-3">
                            Soporte
                        </h5>
                        <div className='d-flex flex-column text-white'>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="">
                                    Nosotros
                                </a>
                            </span>                         
                        </div>
                    </div>
                    <div className="col-6 col-md-3  d-flex flex-column">
                        <h5 className="text-white mb-3">
                            Recursos
                        </h5>
                        <div className='d-flex flex-column text-white'>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>                         
                        </div>
                    </div>
                    <div className="col-6 col-md-3  d-flex flex-column">
                        <h5 className="text-white mb-3">
                            Contácto
                        </h5>
                        <div className='d-flex flex-column text-white'>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>                         
                        </div>
                    </div>
                    <div className="col-6 col-md-3  d-flex flex-column">
                        <h5 className="text-white mb-3">
                            Conexiones
                        </h5>
                        <div className='d-flex flex-column text-white'>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>
                            <span className='mb-2'>
                                <a className='grey-medium-light text-decoration-none' href="/">
                                    Nosotros
                                </a>
                            </span>                         
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='grey-medium'/>
                </div>
                <div className="row ">
                    <div className="col-6 float-start ">
                        <p className="grey-medium text-start">
                            ©2024 Vitxo. Derechos reservados.
                        </p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <p className="text-white text-end ms-3">
                            <a className='grey-medium text-decoration-none' href="/">
                                Política 1
                            </a>
                        </p>
                        <p className="text-white text-end ms-3">
                            <a className='grey-medium text-decoration-none' href="/">
                                Política de privacidad
                            </a>
                        </p>
                        <p className="text-white text-end ms-3">
                            <a className='grey-medium text-decoration-none' href="/">
                                Seguridad
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
