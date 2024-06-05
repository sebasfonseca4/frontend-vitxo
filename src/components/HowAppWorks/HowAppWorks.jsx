import { useState } from 'react'

import IconRegister from '../../assets/icons/iconRegister.svg'
import IconRegisterActive from '../../assets/icons/iconRegisterActive.svg'

import IconCompletedEvent from '../../assets/icons/iconCompletedEvent.svg'
import IconCompletedEventActive from '../../assets/icons/iconCompletedEventActive.svg'


import IconActiveLottery from '../../assets/icons/iconActiveLottery.svg'
import IconActiveLotteryActive from '../../assets/icons/iconActiveLotteryActive.svg'

import IconDashboard from '../../assets/icons/iconDashboard.svg'
import IconDashboardActive from '../../assets/icons/iconDashboardActive.svg'

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
                    <div className="col-12 col-md-6 mb-5 mb-md-0">
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui blanditiis. Ex quia est cupiditate dolorem! Inventore laboriosam alias sapiente ipsam exercitationem est commodi, nihil quia officiis excepturi! Odit, obcaecati.
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
                                    Completa tu evento
                                </span>
                            </div>
                            <p className='mt-2 text-fs-large'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui blanditiis. Ex quia est cupiditate dolorem! Inventore laboriosam alias sapiente ipsam exercitationem est commodi, nihil quia officiis excepturi! Odit, obcaecati.
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
                                    Activa el sorteo
                                </span>
                            </div>
                            <p className='mt-2 text-fs-large'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui blanditiis. Ex quia est cupiditate dolorem! Inventore laboriosam alias sapiente ipsam exercitationem est commodi, nihil quia officiis excepturi! Odit, obcaecati.
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
                                    Maneja tu dashboard de ganacias
                                </span>
                            </div>
                            <p className='mt-2 text-fs-large'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui blanditiis. Ex quia est cupiditate dolorem! Inventore laboriosam alias sapiente ipsam exercitationem est commodi, nihil quia officiis excepturi! Odit, obcaecati.
                            </p>
                        </div>
                        <button className='button-red mt-3'>
                            Comienza ahora
                        </button>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="rounded w-100 h-100">
                            <video
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
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
