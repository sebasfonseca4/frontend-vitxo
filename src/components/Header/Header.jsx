import LogoVitxo from '../../assets/images/LogoVitxo.png'
import MediaQuery from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Header = () => {

    const handleGoRegister = () => {
        const registerForm = document.getElementById('register-form');
        if (registerForm) {
            registerForm.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleGoEvents = () => {
        const avaliableEvents = document.getElementById('avaliable-events');
        if (avaliableEvents) {
            avaliableEvents.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <>
        <MediaQuery minWidth={1224}>
            <div className="container-fluid bg-dark-blue pb-0 text-white">
                <div className="container">
                    {/* Header Top */}
                    <div className="row py-4 d-flex justify-content-between grey-medium">
                        <div className="col-12 text-end">
                            <span className='me-3 align-items-center'>
                                Español
                                <KeyboardArrowDownIcon className='ms-2'/>
                            </span>
                            <span className='me-3'>
                                Soporte
                            </span>
                            <ShoppingCartIcon/>
                        </div>
                    </div>
                    {/* Header Main */}
                    <div className="row pb-4 align-items-center">
                        <div className="col-7 align-items-center">
                            <div className="row d-flex align-items-center">
                                <div className="col-4">
                                    <NavLink to="/">
                                        <img src={LogoVitxo} alt="Logo-Vitxo" />
                                    </NavLink>
                                </div>
                                <div className="col-8">
                                    <ul className='d-flex list-unstyled align-items-center mb-0'>
                                        <li className='me-5'>
                                            <a className='text-decoration-none grey-medium-light ' href="/">Quienes somos</a>
                                        </li>
                                        <li className='me-5'>
                                            <a className='text-decoration-none grey-medium-light ' href="/">
                                                Servicios
                                                <KeyboardArrowDownIcon className='ms-2'/>
                                            </a>
                                        </li>
                                        <li className='me-5'>
                                            <button 
                                                className='text-decoration-none grey-medium-light bg-transparent border-0' onClick={handleGoEvents}
                                            >
                                                Eventos
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row d-flex align-items-center justify-content-end text-end">
                                <div className="col-5">
                                    <button className='button-red-underline' onClick={handleGoRegister}>
                                        Registrate
                                    </button>
                                </div>
                                <div className="col-4 float-end ">
                                    <NavLink to="/login" className='button-red text-decoration-none'>
                                        Iniciar sesión
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
        </MediaQuery>       
        <MediaQuery maxWidth={1224}>
            <div className="container-fluid bg-dark-blue pb-0 text-white pb-4">
                {/* Header Top */}
                <div className="container">
                    <div className="row py-4 d-flex justify-content-between grey-medium">
                        <div className="col-6">
                            <span className='me-3'>
                                Español
                            </span>
                            <span>
                                Soporte
                            </span>
                        </div>
                        <div className="col-6 text-end">
                            <span>
                                Blog
                            </span>
                        </div>
                    </div>
                </div>
                {/* Header Main */}
                <div className="row pb-4">
                    <div className="col-8">
                        <img src={LogoVitxo} alt="Logo-Vitxo" />
                    </div>
                    <div className="col-4 text-end">
                        <MenuIcon fontSize="large"/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center ">
                    <div className="col-6">
                        <button className='button-red-underline w-100' onClick={handleGoRegister}>
                            Registrate
                        </button>
                    </div>
                    <div className="col-6">
                        <button className='button-red w-100'>
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
        </MediaQuery>
    </>
  )
}
