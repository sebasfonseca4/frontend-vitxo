import { useState } from 'react'

import IconRegister from '../../assets/icons/iconRegister.svg'
import IconRegisterActive from '../../assets/icons/iconRegisterActive.svg'

import IconCompletedEvent from '../../assets/icons/iconCompletedEvent.svg'
import IconCompletedEventActive from '../../assets/icons/iconCompletedEventActive.svg'


import IconActiveLottery from '../../assets/icons/iconActiveLottery.svg'
import IconActiveLotteryActive from '../../assets/icons/iconActiveLotteryActive.svg'

import IconDashboard from '../../assets/icons/iconDashboard.svg'
import IconDashboardActive from '../../assets/icons/iconDashboardActive.svg'

import ImgVideo from '../../assets/images/video-como-funciona.png'

export const HowAppWorks = () => {

    const [activeIcon, setActiveIcon] = useState(null);
    console.log(activeIcon)

  return (
    <>
        <div className="container-fluid bg-grey-light py-4">
            <div className="container mb-4">
                <h2 className='fw-bolder text-title-principal text-dark-blue'>
                    ¿COMO FUNCIONA?
                </h2>
                <div className="row mt-4">
                    <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <div 
                            className='mt-3 mb-3 p-2 rounded-3 contenedor-step-works cursor-pointer'
                            onMouseEnter={() => setActiveIcon('register')}
                            onMouseLeave={() => setActiveIcon(null)}
                            >
                            <div className='d-flex align-items-center '>
                                <img className="me-3" src={activeIcon === "register" ? IconRegisterActive : IconRegister} alt="" />                                
                                <span className='fw-bold text-fs-extra-large'>
                                    Regístrate
                                </span>
                            </div>
                            <p className='mt-2 text-fs-large'>
                                Es este paso encontraras la opción de crear tu cuenta y diligenciar un formulario de datos que nos permitirán validar tu identidad y dar paso a la carga de documentos que se requieren para el estudio de la asignación de tu código de gestor.
                            </p>
                        </div>
                        <div 
                            className='mt-3 mb-3  p-2 rounded-3 contenedor-step-works cursor-pointer'
                            onMouseEnter={() => setActiveIcon('completedEvent')}
                            onMouseLeave={() => setActiveIcon(null)}
                            >
                            <div className='d-flex align-items-center '>
                                <img className="me-3" src={activeIcon === "completedEvent" ? IconCompletedEventActive : IconCompletedEvent} alt="" />                                
                                <span className='fw-bold text-fs-extra-large'>
                                    Crea tu evento
                                </span>
                            </div>
                            <p className='mt-2 text-fs-large'>
                                En esta opción podrás ingresar la información de tu evento y/o sorteo con los detalles que permiten visibilizar la mecánica, precios de boletas, imagen y categoría del producto, nombre del proveedor, loterías del sorteo o locación del evento.
                            </p>
                        </div>
                        <div 
                            className='mt-3 mb-3  p-2 rounded-3 contenedor-step-works cursor-pointer'
                            onMouseEnter={() => setActiveIcon('activeLottery')}
                            onMouseLeave={() => setActiveIcon(null)}
                            >
                            <div className='d-flex align-items-center '>
                                <img className="me-3" src={activeIcon === "activeLottery" ? IconDashboardActive : IconDashboard} alt="" />                                
                                <span className='fw-bold text-fs-extra-large'>
                                    Activa tu sorteo y/o evento
                                </span>
                            </div>
                            <p className='mt-2 text-fs-large'>
                                Te permite publicar el evento a través de una platilla personalizada para comunicarlo a través de redes sociales u otros canales de comunicación.
                            </p>
                        </div>
                        <div 
                            className='mt-3 mb-3 p-2 rounded-3 contenedor-step-works cursor-pointer'
                            onMouseEnter={() => setActiveIcon('dashboard')}
                            onMouseLeave={() => setActiveIcon(null)}
                            >
                            <div className='d-flex align-items-center '>
                                <img className="me-3" src={activeIcon === "dashboard" ? IconActiveLotteryActive : IconActiveLottery} alt="" />                                
                                <span className='fw-bold text-fs-extra-large'>
                                    Maneja tu dashboard de ganancias
                                </span>
                            </div>
                            <p className='mt-2 text-fs-large'>
                                En este dashboard podrás visualizar la información detallada de los eventos y/o sorteos como: Inversión del evento, Saldo total vendido, Total de boletas vendidas, Distribución de comisión por los participantes del evento y/o sorteo.
                            </p>
                        </div>
                        <button className='button-red mt-3'>
                            Comienza ahora
                        </button>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="rounded w-100 h-100">
                            <img className='rounded-4 w-100 h-100 object-fit-cover' src={ImgVideo} alt="Video como funciona" />
                            {/* <video
                                className='rounded-4 w-100 h-100 object-fit-cover'
                                controls
                                loop
                                muted
                                poster="https://assets.codepen.io/6093409/river.jpg"
                            >
                                <source
                                src="https://assets.codepen.io/6093409/river.mp4"
                                type="video/mp4"
                                />
                            </video> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
