import ImgRegister from '../../assets/images/ImgRegister.png'
import { CreateAccountForm } from '../CreateAccountForm/CreateAccountForm'

export const RegisterUser = () => {
  return (
    <>
        <div className="container-fluid bg-green-light">
            <div className="row">
                <div className="col-12 col-md-4 container py-5 text-dark-blue my-auto text-center" id="register-form">
                    <h1 className='fw-bold pt-3 text-title-font'>
                        ¿Listo para iniciar tu sorteo?
                    </h1>
                    <p className='pt-2 fs-4 fw-semibold '>
                        Completa los datos y validaremos tu información
                    </p>
                    <p className='fs-5 lh-1'>
                        Ten en cuenta que tus datos escritos correctamente nos ayudará a validar más rápido tu información
                    </p>
                    {/* Formulario de registro */}
                    <CreateAccountForm/>
                </div>
                <div className="col-6 d-none d-md-block mx-0 px-0">
                    <div className="w-100 h-100 h-img-register">
                        <img className="object-fit-cover  w-100 h-100" src={ImgRegister} alt="Imagen registro" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
 