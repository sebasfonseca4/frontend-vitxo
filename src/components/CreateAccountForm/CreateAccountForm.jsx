import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconGoogle from '../../assets/icons/google.svg';
import IconFacebook from '../../assets/icons/facebook.svg';
import IconInstagram from '../../assets/icons/Instagram_light.svg';
import IconApple from '../../assets/icons/Apple_light.svg';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'

export const CreateAccountForm = () => {

  const [visibiltyPass, setVisibiltyPass] = useState(true);
  const [visibiltyPassSecond, setVisibiltyPassSecond] = useState(true);
  const navigate = useNavigate();

  const showPasswordFirst = () => setVisibiltyPass(!visibiltyPass);
  
  const showPasswordSecond = () => setVisibiltyPassSecond(!visibiltyPassSecond);

  const handleSubmitCreateAccount = (values) => {
    console.log(values);
    navigate('/create-account');
  }

  const validationSchema = Yup.object({
    email: Yup.string()
    .email("Correo electronico invalido")
    .required('Requerido'),
    password: Yup.string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(/.*\d.*/, 'La contraseña debe contener al menos un número')
      .matches(/.*[A-Z].*/, 'La contraseña debe contener al menos una letra mayúscula')
      .required('Requerido'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Requerido'),
  })

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="container mb-5 rounded-4 pb-3">
        <div className="col-12 mx-auto pt-3 ">
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={handleSubmitCreateAccount}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <div className="d-flex flex-column text-start">
                  <label htmlFor="email">Correo electrónico</label>
                  <div className="bg-white rounded-4 d-flex align-items-center justify-content-between px-2 py-3 mt-2 mb-3">
                    <Field className="w-100 border-0 bg-transparent grey-medium focus-none" type="email" name="email" />
                  </div>
                  <ErrorMessage name="email" component="div" className="alert alert-danger"/>
                </div>
                <div className="row mt-1">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="bg-white rounded-4 d-flex align-items-center justify-content-between px-2 py-3">
                      <Field id="password-first" className="w-100 border-0 bg-transparent grey-medium focus-none" type={visibiltyPass ? 'password' : 'text'} name="password" placeholder="Contraseña"/>
                      <span className="cursor-pointer" onClick={showPasswordFirst}>
                        {visibiltyPass ? <RemoveRedEyeIcon className="grey-medium"/> : <VisibilityOffIcon className="grey-medium"/>}
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="bg-white rounded-4 d-flex align-items-center justify-content-between px-2 py-3">
                      <Field id="password-second" className="w-100 border-0 bg-transparent grey-medium focus-none" type={visibiltyPassSecond ? 'password' : 'text'} name="confirmPassword" placeholder="Confirmar"/>
                      <span className="cursor-pointer" onClick={showPasswordSecond}>
                        {visibiltyPassSecond ? <RemoveRedEyeIcon className="grey-medium"/> : <VisibilityOffIcon className="grey-medium"/>}
                      </span>
                    </div>
                  </div>
                  <ErrorMessage name="password" component="div" className="alert alert-danger mt-2"/>
                  <ErrorMessage name="confirmPassword" component="div" className="alert alert-danger"/>
                </div>
                <p className="text-center text-dark mt-3">
                  La contraseña debe tener mínimo: 8 caracteres, un número y una letra mayúscula.
                </p>
                <div className='line-100 mb-4 position-relative'>
                <span className='position-absolute top-50 start-50 translate-middle bg-green-light px-2'>
                  o
                </span>
              </div>
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
              <div className="row d-none">
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
                <button type="submit" className="w-100 border-0 mt-4 text-white button-blue">Crear cuenta</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};