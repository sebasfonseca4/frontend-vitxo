import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconGoogle from '../../assets/icons/google.svg';
import IconFacebook from '../../assets/icons/facebook.svg';
import IconInstagram from '../../assets/icons/Instagram_light.svg';
import IconApple from '../../assets/icons/Apple_light.svg'

export const CreateAccountForm = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="container bg-grey-medium my-5 rounded-4 pb-3">
          <div className="col-12 col-md-5 mx-auto py-5">
            <h1 className="fs-3 fw-bold text-dark-blue text-center mb-3">
              Crea tu cuenta
            </h1>
            <div>
              <form action="">
                <div className="d-flex flex-column">
                  <label htmlFor="">Correo electronico</label> 
                  <div className='bg-white rounded-4 d-flex align-items-center justify-content-between px-2 py-3 mt-2 mb-3'>
                    <input className="w-100 border-0 bg-transparent grey-medium focus-none" type="email" name="" id="" />  
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className='bg-white rounded-4 d-flex align-items-center justify-content-between px-2 py-3'>
                      <input className="w-100 border-0 bg-transparent grey-medium focus-none" type="password" name="" id="" placeholder="Contraseña"/>
                      <span>
                        <RemoveRedEyeIcon className='grey-medium'/>
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div  className='bg-white rounded-4 d-flex align-items-center justify-content-between px-2 py-3'>
                      <input className="w-100 border-0 bg-transparent grey-medium focus-none" type="password" name="" id="" placeholder="Confirmar"/>
                      <span>
                        <RemoveRedEyeIcon className='grey-medium'/>
                      </span>
                    </div>
                  </div>
                </div>    
              </form>
              <p className='text-center grey-medium mt-3'>
                La contraseña debe tener mínimo: 8 caracteres, un número y una letra mayúscula.
              </p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <span className='d-flex justify-content-center align-items-center bg-white w-100 mb-3 rounded-4 py-3'>
                    <img className='img-icon-form me-2' src={IconGoogle} alt="IconGoogle" />
                    Continuar con Google
                  </span>
                </div>
                <div className="col-12 col-md-6">
                  <span className='d-flex justify-content-center align-items-center bg-white w-100 mb-3 rounded-4 py-3'>
                    <img className='img-icon-form me-2' src={IconFacebook} alt="IconFacebook" />
                    Continuar con Facebook
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <span className='d-flex justify-content-center align-items-center bg-white w-100 mb-3 rounded-4 py-3'>
                    <img className='img-icon-form me-2' src={IconInstagram} alt="IconInstagram" />
                    Continuar con Instagram
                  </span>
                </div>
                <div className="col-12 col-md-6">
                  <span className='d-flex justify-content-center align-items-center bg-white w-100 mb-3 rounded-4 py-3'>
                    <img className='img-icon-form me-2' src={IconApple} alt="IconApple" />
                    Continuar con Apple
                  </span>
                </div>
              </div>
              <button className='w-100 border-0 mt-4 text-white button-blue'>
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

